export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { email, personality, personalityName } = req.body;

  if (!email || !personality || !personalityName) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  const AC_API_URL = 'https://back2ono.api-us1.com/api/3';
  const AC_API_KEY = '143034152e877600c496abc49aafa4797c15365af41cd7d9a71099a9b1e20189f8903ea1';
  const LIST_ID = '14'; // 金錢能量測驗

  try {
    // Step 1: Create or update contact
    const contactResponse = await fetch(`${AC_API_URL}/contact/sync`, {
      method: 'POST',
      headers: {
        'Api-Token': AC_API_KEY,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        contact: {
          email: email,
        }
      }),
    });

    if (!contactResponse.ok) {
      throw new Error('Failed to create/update contact');
    }

    const contactData = await contactResponse.json();
    const contactId = contactData.contact.id;

    // Step 2: Add contact to list
    await fetch(`${AC_API_URL}/contactLists`, {
      method: 'POST',
      headers: {
        'Api-Token': AC_API_KEY,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        contactList: {
          list: LIST_ID,
          contact: contactId,
          status: 1, // Active
        }
      }),
    });

    // Step 3: Create tag if it doesn't exist and add to contact
    // First, try to find existing tag
    const tagsResponse = await fetch(`${AC_API_URL}/tags?search=${encodeURIComponent(personalityName)}`, {
      method: 'GET',
      headers: {
        'Api-Token': AC_API_KEY,
      },
    });

    let tagId;
    if (tagsResponse.ok) {
      const tagsData = await tagsResponse.json();
      if (tagsData.tags && tagsData.tags.length > 0) {
        tagId = tagsData.tags[0].id;
      }
    }

    // If tag doesn't exist, create it
    if (!tagId) {
      const createTagResponse = await fetch(`${AC_API_URL}/tags`, {
        method: 'POST',
        headers: {
          'Api-Token': AC_API_KEY,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          tag: {
            tag: personalityName,
            tagType: 'contact',
          }
        }),
      });

      if (createTagResponse.ok) {
        const tagData = await createTagResponse.json();
        tagId = tagData.tag.id;
      }
    }

    // Add tag to contact
    if (tagId) {
      await fetch(`${AC_API_URL}/contactTags`, {
        method: 'POST',
        headers: {
          'Api-Token': AC_API_KEY,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          contactTag: {
            contact: contactId,
            tag: tagId,
          }
        }),
      });
    }

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error('ActiveCampaign API Error:', error);
    return res.status(500).json({ error: 'Failed to submit email' });
  }
}


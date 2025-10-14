import React, { useState } from 'react';
import { ChevronRight } from 'lucide-react';

export default function MoneyPersonalityQuiz() {
  const [currentScreen, setCurrentScreen] = useState('welcome');
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [result, setResult] = useState(null);
  const [isAnimating, setIsAnimating] = useState(false);
  const [email, setEmail] = useState('');
  const [showFullResult, setShowFullResult] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const questions = [
    {
      text: "朋友突然約你吃大餐",
      leftLabel: "先看錢包再說",
      rightLabel: "好啊馬上出發",
      dimension: "spender"
    },
    {
      text: "看到很喜歡但有點貴的東西",
      leftLabel: "先比價做功課",
      rightLabel: "喜歡就買了",
      dimension: "thoughtful"
    },
    {
      text: "發薪日到了",
      leftLabel: "立刻分配規劃",
      rightLabel: "隨緣慢慢花",
      dimension: "planner"
    },
    {
      text: "有人跟你借錢",
      leftLabel: "很難說不",
      rightLabel: "OK呀",
      dimension: "controller"
    },
    {
      text: "意外收到一筆錢",
      leftLabel: "存起來最安心",
      rightLabel: "立刻想要花錢",
      dimension: "spender"
    },
    {
      text: "帳單來了",
      leftLabel: "淡定處理",
      rightLabel: "開始焦慮",
      dimension: "controller"
    },
    {
      text: "逛街看到喜歡的在打折",
      leftLabel: "趕快把握機會",
      rightLabel: "不管有沒有打折都不會影響我",
      dimension: "spender"
    },
    {
      text: "朋友都在買名牌",
      leftLabel: "不會被影響",
      rightLabel: "也想跟著買",
      dimension: "thoughtful"
    },
    {
      text: "存款數字變少了",
      leftLabel: "船到橋頭自然直",
      rightLabel: "睡不著覺",
      dimension: "controller"
    },
    {
      text: "想到未來的財務",
      leftLabel: "早就規劃好了",
      rightLabel: "還沒想那麼遠",
      dimension: "planner"
    }
  ];

  const personalityTypes = {
    spender: {
      name: "金錢冒險家",
      emoji: "🌟",
      intro: "你是那種「錢就是要用來體驗人生」的人！喜歡嘗鮮、享受當下,覺得賺錢就是要花得開心。朋友說你很會享受生活,但有時候會擔心你的存款。對你來說,人生苦短,快樂最重要！",
      fullContent: `【ONO 被宇宙包養的人生 】要給你的提醒

活在當下是你的天賦。很多人以為理財就是要控制、要節制、要犧牲快樂,但這不是真相。

真正的豐盛腦,是能夠讓金錢有最大的發揮。不只是投資理財而已,而是每一筆錢都能真正滋養你、讓你成長,甚至為這個世界帶來貢獻。當你享受生活的時候,你的頻率是高的,這反而會吸引更多豐盛進來。

你要做的不是「改掉」愛花錢的習慣,而是：

• 覺察你花錢時的感受 - 是真心喜悅,還是填補空虛？
• 問自己：這筆錢是在滋養我,還是在消耗我？
• 信任金錢會回流 - 當你相信,宇宙就會回應

記住：被宇宙包養的人,不需要變成另一個人。你只需要調整頻率,讓金錢發揮最大價值,豐盛自然發生。`,
      courseName: "拆掉天花板工具箱",
      coursePrice: "NT$ 1,111",
      courseLink: "https://www.back2ono.com/offers/Gn3Uw2Rp/checkout"
    },
    thoughtful: {
      name: "金錢思考者",
      emoji: "🧠",
      intro: "你是那種「買東西前會先做功課」的人。喜歡研究CP值、比價、看評價,消費前會想清楚這筆錢值不值得花。雖然有時候想太多會錯過好機會,但至少你很少後悔亂買東西！",
      fullContent: `【ONO 被宇宙包養的人生 】要給你的提醒

理性思考是你的天賦。但有時候,過度分析會讓你錯過最好的時機。

真正的豐盛腦,是能夠讓金錢有最大的發揮。不只是找到 CP 值最高的選項,而是問：這個選擇能為我帶來什麼真正的成長？它能創造什麼價值？

瞭解金錢豐盛的創造方式,會有更多超越頭腦想像的可能性等著你接收。先收進來,再來評估整合,光是這樣,你的財富會立刻加碼很多很多喔。

你可以開始練習：

• 信任直覺,而不只是數據 - 有些最好的決定來自內在智慧
• 區分「划算」和「有價值」- 便宜不一定是最好的投資
• 允許自己「不完美」地行動 - 有時候 70 分的決定比 100 分的猶豫更有價值

記住：被宇宙包養的人,懂得在理性與直覺之間取得平衡。當你信任自己,豐盛會更容易流動。`,
      courseName: "金錢01：拿回你的宇宙印鈔機",
      coursePrice: "NT$ 3,520",
      courseLink: "https://www.back2ono.com/offers/Ky4sJuJz/checkout"
    },
    controller: {
      name: "金錢守護者",
      emoji: "🌊",
      intro: "你很在意財務安全感,習慣清楚掌握每一筆錢的流向。花錢時會謹慎評估,常常想著「要為未來做準備」。存款數字對你來說代表著安心,你傾向於把資源好好留著。",
      fullContent: `【ONO 被宇宙包養的人生 】要給你的提醒

財務安全感很重要,這是你在乎自己的表現。但真正的安全,不是來自「抓緊」,而是來自「流動」。

真正的豐盛腦,是能夠讓金錢有最大的發揮。源源不絕的豐盛來自於健康的流動,就像停滯不動的水最終會變成一灘腐敗的死水,但流動的水流不但可以保持潔淨,還能真正的源源不絕。

你要練習的是：

• 把「存錢」變成「投資自己」- 你的成長就是最好的保障
• 相信豐盛是流動的 - 當你願意讓錢流出去,它會以更大的形式回來
• 區分「真實的風險」和「想像的恐懼」- 很多擔心其實不會發生

記住：被宇宙包養的人,在流動中感到安全。當你放手,反而會得到更多。`,
      courseName: "金錢02：你可以即時創造",
      coursePrice: "NT$ 3,520",
      courseLink: "https://www.back2ono.com/offers/5kLWEL8D/checkout"
    },
    planner: {
      name: "金錢規劃師",
      emoji: "👑",
      intro: "你是那種「對未來有明確規劃」的人！知道自己想要什麼,也願意投資自己。你不是不花錢,而是會選擇花在「值得的地方」。對你來說,每一筆消費都是一種投資。",
      fullContent: `【ONO 被宇宙包養的人生 】要給你的提醒

你很棒！有目標、有計劃是你的天賦。你知道自己要什麼,也願意為此投資。

真正的豐盛腦,除了學習和掌握各種創造豐盛的技能之外,你還可以開始學習利用豐盛的意識和能量,加大豐盛槓桿的力量,更輕鬆的創造更多不可思議的一切。

你已經很會規劃了,現在可以練習：

• 在追求目標的同時,讓金錢流動起來 - 源源不絕的豐盛來自於健康的流動
• 先接收宇宙給你的可能性,再來評估整合 - 有時最好的機會超越原本的計畫
• 享受過程,而不只是結果 - 豐盛就在當下,不在未來

記住：被宇宙包養的人,有方向但不執著。當你結合計畫與流動,奇蹟會更容易發生。`,
      courseName: "宇宙印鈔機完整課程",
      coursePrice: "NT$ 36,800",
      courseLink: "https://www.back2ono.com/offers/2gzFJ3Jk/checkout"
    },
    balanced: {
      name: "金錢平衡者",
      emoji: "⚡",
      intro: "你在金錢上有點矛盾,有時候想花錢享受,有時候又感到壓力。可能對錢有些複雜的感受,但又不太確定該從哪裡開始調整。你知道自己想要改變,只是還在摸索最適合的方向。",
      fullContent: `【ONO 被宇宙包養的人生 】要給你的提醒

你正在摸索自己與金錢的關係,這份覺察本身就很珍貴。很多人一輩子都沒發現自己對錢的感受。

真正的豐盛腦,是能夠讓金錢有最大的發揮。不是要你變得很會賺錢或很會存錢,而是找到讓金錢滋養你、支持你的方式。

現在最適合你的是：

• 觀察自己的金錢模式 - 不批判,只是看見
• 問自己：我到底想要什麼樣的生活？金錢如何支持這個願景？
• 從小步驟開始 - 不需要一次改變全部,慢慢調整就好

記住：被宇宙包養的人,從接納自己開始。當你不再內耗,能量會開始流動,豐盛自然會來。`,
      courseName: "拆掉天花板工具箱",
      coursePrice: "NT$ 1,111",
      courseLink: "https://www.back2ono.com/offers/Gn3Uw2Rp/checkout"
    }
  };

  const calculatePersonality = () => {
    const scores = { spender: 0, thoughtful: 0, controller: 0, planner: 0, balanced: 0 };
    
    answers.forEach((answer, index) => {
      const dimension = questions[index].dimension;
      scores[dimension] += answer;
    });

    const values = Object.values(scores);
    const avg = values.reduce((a, b) => a + b, 0) / values.length;
    const variance = values.reduce((sum, val) => sum + Math.pow(val - avg, 2), 0) / values.length;
    const stdDev = Math.sqrt(variance);

    if (stdDev < 3) {
      return 'balanced';
    }

    const maxScore = Math.max(...values);
    const topPersonality = Object.keys(scores).find(key => scores[key] === maxScore);
    
    return topPersonality;
  };

  const handleAnswer = (value) => {
    setIsAnimating(true);
    const newAnswers = [...answers, value];
    setAnswers(newAnswers);

    setTimeout(() => {
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
      } else {
        const personality = calculatePersonality();
        setResult(personality);
        setCurrentScreen('result');
      }
      setIsAnimating(false);
    }, 300);
  };

  const handleEmailSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError('');

    try {
      const response = await fetch('/api/submit-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email,
          personality: result,
          personalityName: personalityTypes[result].name
        }),
      });

      if (!response.ok) {
        throw new Error('提交失敗，請稍後再試');
      }

      setShowFullResult(true);
    } catch (error) {
      setSubmitError('提交失敗，請檢查 email 格式或稍後再試');
    } finally {
      setIsSubmitting(false);
    }
  };

  const restart = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentScreen('welcome');
      setCurrentQuestion(0);
      setAnswers([]);
      setResult(null);
      setEmail('');
      setShowFullResult(false);
      setSubmitError('');
      setIsAnimating(false);
    }, 300);
  };

  const startQuiz = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentScreen('quiz');
      setIsAnimating(false);
    }, 300);
  };

  const ONOLogo = ({ size = "md" }) => {
    const sizes = {
      sm: { large: 40, small: 20, gap: 8 },
      md: { large: 60, small: 30, gap: 12 },
      lg: { large: 80, small: 40, gap: 16 }
    };
    const s = sizes[size];
    
    return (
      <div className="flex items-center" style={{ gap: `${s.gap}px` }}>
        <div 
          style={{ 
            width: `${s.large}px`, 
            height: `${s.large}px`,
            backgroundColor: '#ffe000',
            borderRadius: '50%'
          }}
        />
        <div className="relative">
          <div 
            style={{
              width: 0,
              height: 0,
              borderLeft: `${s.gap}px solid transparent`,
              borderRight: `${s.gap}px solid transparent`,
              borderBottom: `${s.gap * 1.5}px solid #000000`,
              transform: 'rotate(45deg)'
            }}
          />
        </div>
        <div 
          style={{ 
            width: `${s.small}px`, 
            height: `${s.small}px`,
            backgroundColor: '#808080',
            borderRadius: '50%'
          }}
        />
      </div>
    );
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4" style={{ backgroundColor: '#f5f5f5' }}>
      <div className="max-w-3xl w-full">
        <div className={`transition-all duration-500 transform ${isAnimating ? 'scale-95 opacity-0' : 'scale-100 opacity-100'}`}>
          {currentScreen === 'welcome' && (
            <div className="text-center space-y-8">
              <div className="flex justify-center mb-8">
                <ONOLogo size="lg" />
              </div>
              
              <h1 className="text-5xl md:text-6xl font-bold text-black mb-4 tracking-tight">
                你是哪種
                <span className="block" style={{ color: '#000000' }}>
                  金錢性格？
                </span>
              </h1>
              
              <p className="text-xl text-gray-700 max-w-md mx-auto leading-relaxed">
                10個生活情境小測驗<br/>找出你和錢錢的相處模式
              </p>
              
              <button
                onClick={startQuiz}
                className="group relative inline-flex items-center gap-3 px-10 py-5 rounded-full font-bold text-xl transition-all duration-300 hover:scale-105 shadow-xl hover:shadow-2xl"
                style={{ backgroundColor: '#ffe000', color: '#000000' }}
              >
                <span>開始測驗</span>
                <ChevronRight className="w-6 h-6 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          )}

          {currentScreen === 'quiz' && (
            <div className="space-y-8">
              <div className="flex items-center justify-between mb-8">
                <ONOLogo size="sm" />
                <span className="text-gray-500 text-base font-medium">
                  {currentQuestion + 1} / {questions.length}
                </span>
              </div>

              <div className="flex gap-2 mb-12">
                {questions.map((_, index) => (
                  <div
                    key={index}
                    className="flex-1 h-1.5 rounded-full transition-all duration-500"
                    style={{ 
                      backgroundColor: index <= currentQuestion ? '#ffe000' : '#e0e0e0' 
                    }}
                  />
                ))}
              </div>

              <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl">
                <h2 className="text-3xl md:text-4xl font-bold text-black mb-12 text-center leading-relaxed">
                  {questions[currentQuestion].text}
                </h2>
                
                <div className="space-y-8">
                  <div className="flex justify-between text-base md:text-lg text-gray-700 font-medium px-4">
                    <span className="text-left max-w-[40%]">{questions[currentQuestion].leftLabel}</span>
                    <span className="text-right max-w-[40%]">{questions[currentQuestion].rightLabel}</span>
                  </div>
                  
                  <div className="flex justify-between gap-4 px-2">
                    {[1, 2, 3, 4, 5].map((value) => (
                      <button
                        key={value}
                        onClick={() => handleAnswer(value)}
                        className="group relative flex-1 aspect-square max-w-[80px] rounded-full bg-white border-4 border-gray-300 hover:border-black transition-all duration-300 hover:scale-110 flex items-center justify-center shadow-md hover:shadow-xl"
                      >
                        <span className="text-xl font-bold text-gray-400 group-hover:text-black transition-colors">
                          {value}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {currentScreen === 'result' && result && (
            <div className="space-y-8">
              <div className="text-center bg-white rounded-3xl p-8 md:p-12 shadow-xl">
                <div className="text-8xl mb-6">
                  {personalityTypes[result].emoji}
                </div>
                
                <h2 className="text-4xl md:text-5xl font-bold text-black mb-8">
                  {personalityTypes[result].name}
                </h2>
                
                <div className="text-left max-w-2xl mx-auto">
                  <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-8">
                    {personalityTypes[result].intro}
                  </p>
                </div>

                {!showFullResult ? (
                  <form onSubmit={handleEmailSubmit} className="max-w-md mx-auto mt-8">
                    <div className="bg-gray-50 rounded-2xl p-6 md:p-8">
                      <h3 className="text-xl md:text-2xl font-bold text-black mb-4">
                        想看完整分析？
                      </h3>
                      <p className="text-gray-700 mb-6">
                        輸入你的 Email，立即查看專屬於你的金錢能量提醒
                      </p>
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="your@email.com"
                        required
                        className="w-full px-6 py-4 rounded-full border-2 border-gray-300 focus:border-black focus:outline-none text-lg mb-4"
                      />
                      {submitError && (
                        <p className="text-red-600 text-sm mb-4">{submitError}</p>
                      )}
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full px-10 py-5 rounded-full font-bold text-xl transition-all duration-300 hover:scale-105 shadow-xl hover:shadow-2xl disabled:opacity-50 disabled:cursor-not-allowed"
                        style={{ backgroundColor: '#ffe000', color: '#000000' }}
                      >
                        {isSubmitting ? '送出中...' : '查看完整分析'}
                      </button>
                    </div>
                  </form>
                ) : (
                  <div className="max-w-2xl mx-auto mt-8">
                    <div className="bg-gray-50 rounded-2xl p-6 md:p-8 text-left">
                      <div className="prose prose-lg max-w-none">
                        {personalityTypes[result].fullContent.split('\n').map((line, index) => (
                          <p key={index} className="text-gray-800 leading-relaxed mb-4">
                            {line}
                          </p>
                        ))}
                      </div>
                    </div>

                    <div className="bg-white rounded-2xl p-6 md:p-8 mt-6 border-2 border-gray-200">
                      <h3 className="text-2xl font-bold text-black mb-4">
                        🎓 為你推薦的課程
                      </h3>
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <div className="text-left">
                            <p className="text-xl font-bold text-black">{personalityTypes[result].courseName}</p>
                            <p className="text-lg text-gray-600 mt-1">{personalityTypes[result].coursePrice}</p>
                          </div>
                        </div>
                        <a
                          href={personalityTypes[result].courseLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-block w-full px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl text-center"
                          style={{ backgroundColor: '#ffe000', color: '#000000' }}
                        >
                          我想了解更多
                        </a>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <div className="text-center">
                <button
                  onClick={restart}
                  className="group relative inline-flex items-center gap-3 bg-white text-black px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-lg border-2 border-gray-300"
                >
                  <span>重新測驗</span>
                  <ChevronRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}


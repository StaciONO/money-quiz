import React, { useState } from 'react';
import { ChevronRight } from 'lucide-react';

export default function MoneyPersonalityQuiz() {
  const [currentScreen, setCurrentScreen] = useState('welcome');
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [result, setResult] = useState(null);
  const [isAnimating, setIsAnimating] = useState(false);

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
      traits: {
        good: [
          "超會活在當下,把每一天都過得精彩",
          "懂得享受生活,知道什麼讓自己開心",
          "社交高手,朋友聚會絕對不缺席",
          "樂觀開朗,相信船到橋頭自然直"
        ],
        watchout: [
          "月底容易吃土,然後發誓下個月要節制（但通常沒有）",
          "衝動購物是你的好朋友,理性思考是你的陌生人",
          "存款數字常常讓你嚇一跳"
        ]
      },
      course: {
        name: "拆掉天花板工具箱",
        price: "NT$ 1,111",
        duration: "5個能量調頻音檔",
        link: "https://growwithstaci.com/funnel/staci-umpm-v2/us1-for-umpm/",
        why: "你不需要複雜的理財知識或嚴格的預算表,你需要的是能隨時調整狀態的工具！這個工具箱讓你邊享受生活邊調頻,不用花時間上課,輕鬆打開豐盛能量。當你的能量對了,錢自然會流進來！",
        features: [
          "隨時隨地就能調整狀態",
          "清除對金錢的限制性思維",
          "提升豐盛吸引力",
          "繼續享受生活的同時也能豐盛"
        ]
      }
    },
    thoughtful: {
      name: "金錢思考者",
      emoji: "🧠",
      intro: "你是那種「買東西前會先做功課」的人。喜歡研究CP值、比價、看評價,消費前會想清楚這筆錢值不值得花。雖然有時候想太多會錯過好機會,但至少你很少後悔亂買東西！",
      traits: {
        good: [
          "理性消費,很少衝動購物後悔",
          "懂得做功課,總是買到CP值最高的",
          "對數字敏感,知道自己的財務狀況",
          "長期規劃能力強,有遠見"
        ],
        watchout: [
          "有時候想太多反而錯過機會",
          "容易陷入「分析癱瘓」,研究了一堆但沒行動",
          "可能會為了省小錢而失去大機會"
        ]
      },
      course: {
        name: "金錢01：拿回你的宇宙印鈔機",
        price: "NT$ 3,520",
        duration: "5堂線上課程",
        link: "https://growwithstaci.com/funnel/staci-umpm-v2/us1-for-umpm/",
        why: "你喜歡深入理解事物,而不只是表面的技巧。這堂課會系統性地告訴你金錢到底是什麼、從哪裡來,幫你建立完整的金錢觀念。當你真正理解了,你就不需要再糾結每一個消費決定！",
        features: [
          "金錢的真實面貌（不是你以為的那樣）",
          "為什麼有些人輕鬆就有錢",
          "如何建立富人思維系統",
          "讓豐盛自然發生的原理"
        ]
      }
    },
    controller: {
      name: "金錢守護者",
      emoji: "🌊",
      intro: "你很在意財務安全感,習慣清楚掌握每一筆錢的流向。花錢時會謹慎評估,常常想著「要為未來做準備」。存款數字對你來說代表著安心,你傾向於把資源好好留著。",
      traits: {
        good: [
          "財務紀律很強,懂得為未來儲蓄",
          "風險意識清楚,總是為可能狀況做準備",
          "消費很有原則,很有責任感",
          "存款數字穩定增長"
        ],
        watchout: [
          "有時候會過度謹慎,連該投資自己的錢也捨不得花",
          "可能會為了存錢而限制了生活的豐富度",
          "對財務變動比較敏感,容易感到不安",
          "習慣把資源留著,比較難放手讓金錢流動"
        ]
      },
      course: {
        name: "金錢02：你可以即時創造",
        price: "NT$ 3,520",
        duration: "5堂線上課程",
        link: "https://growwithstaci.com/funnel/staci-umpm-v2/us-2-for-yes/",
        why: "你最適合學習的是「在安全中流動」！這堂課專門處理對金錢的不安全感,教你如何在保有安全感的同時,也能看見更多可能性。當你學會讓金錢自然流動,你會發現它反而越來越豐盛！",
        features: [
          "如何在流動中依然感到踏實",
          "為什麼留著不一定更安全",
          "讓金錢像活水般自然流動",
          "創造源源不絕的秘密"
        ]
      }
    },
    planner: {
      name: "金錢規劃師",
      emoji: "👑",
      intro: "你是那種「對未來有明確規劃」的人！知道自己想要什麼,也願意投資自己。你不是不花錢,而是會選擇花在「值得的地方」。對你來說,每一筆消費都是一種投資。",
      traits: {
        good: [
          "目標明確,知道自己要什麼",
          "願意投資自己的成長",
          "看得到長遠,不只看眼前",
          "懂得區分「消費」和「投資」"
        ],
        watchout: [
          "有時候會想一次學完所有東西",
          "期待可能太高,容易失去耐心",
          "可能會忽略當下的享受"
        ]
      },
      course: {
        name: "宇宙印鈔機完整課程",
        price: "NT$ 36,800",
        duration: "10週完整課程",
        link: "https://growwithstaci.com/",
        why: "你準備好全面性的學習和轉化！這個10週完整課程會系統性地帶你從認識自己、到建立思維、到實際創造豐盛,一次把整個豐盛系統學透。最適合認真想要徹底改變的你！",
        features: [
          "從零到精通的完整系統",
          "10週深度轉化之旅",
          "順流創造豐盛的方法",
          "讓金錢成為你的好朋友"
        ]
      }
    },
    balanced: {
      name: "金錢平衡者",
      emoji: "⚡",
      intro: "你在金錢上有點矛盾,有時候想花錢享受,有時候又感到壓力。可能對錢有些複雜的感受,但又不太確定該從哪裡開始調整。你知道自己想要改變,只是還在摸索最適合的方向。",
      traits: {
        good: [
          "有覺察力,知道自己需要改變",
          "願意面對金錢議題",
          "對新方法保持開放",
          "想要找到適合自己的方式"
        ],
        watchout: [
          "對金錢容易感到不確定和壓力",
          "有時候會在不同想法之間擺盪",
          "可能沒時間上完整的課程"
        ]
      },
      course: {
        name: "拆掉天花板工具箱",
        price: "NT$ 1,111",
        duration: "5個能量調頻音檔",
        link: "https://growwithstaci.com/funnel/staci-umpm-v2/us1-for-umpm/",
        why: "你現在需要的不是更多知識,而是實際能幫你釋放壓力、調整狀態的工具！這個工具箱讓你隨時隨地都能調頻,不需要花大把時間上課,輕鬆就能轉化對金錢的各種感受。",
        features: [
          "隨時隨地就能調整狀態",
          "釋放對金錢的不確定感和壓力",
          "清除限制你的舊思維",
          "打開豐盛的能量"
        ]
      }
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

  const restart = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentScreen('welcome');
      setCurrentQuestion(0);
      setAnswers([]);
      setResult(null);
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
                  <p className="text-lg md:text-xl text-gray-800 leading-relaxed">
                    {personalityTypes[result].intro}
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold text-black mb-5">你的天賦</h3>
                    {personalityTypes[result].traits.good.map((trait, index) => (
                      <div key={index} className="py-3 text-gray-800 text-base md:text-lg border-b border-gray-100 last:border-0">
                        <span className="mr-3">✨</span>{trait}
                      </div>
                    ))}
                  </div>

                  <div className="pt-6">
                    <h3 className="text-2xl md:text-3xl font-bold text-black mb-5">小提醒</h3>
                    {personalityTypes[result].traits.watchout.map((trait, index) => (
                      <div key={index} className="py-3 text-gray-800 text-base md:text-lg border-b border-gray-100 last:border-0">
                        <span className="mr-3">💡</span>{trait}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl space-y-8">
                <div>
                  <div className="text-sm text-gray-500 mb-2 uppercase tracking-wide">為你推薦</div>
                  <h4 className="text-3xl md:text-4xl font-bold text-black mb-3">
                    {personalityTypes[result].course.name}
                  </h4>
                  <div className="flex items-baseline gap-3 mb-2">
                    <span className="text-2xl md:text-3xl font-bold" style={{ color: '#ffe000' }}>
                      {personalityTypes[result].course.price}
                    </span>
                    <span className="text-gray-600">
                      {personalityTypes[result].course.duration}
                    </span>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-2xl p-6 md:p-8">
                  <p className="text-gray-800 leading-relaxed text-lg md:text-xl">
                    {personalityTypes[result].course.why}
                  </p>
                </div>

                <div>
                  <h4 className="text-xl font-bold text-black mb-4">你會學到</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {personalityTypes[result].course.features.map((feature, index) => (
                      <div
                        key={index}
                        className="bg-gray-50 rounded-xl p-4 text-gray-800"
                      >
                        • {feature}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4">
                  <a
                    href={personalityTypes[result].course.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full text-center px-10 py-5 rounded-full font-bold text-xl transition-all duration-300 hover:scale-105 shadow-xl hover:shadow-2xl"
                    style={{ backgroundColor: '#ffe000', color: '#000000' }}
                  >
                    我想了解更多
                  </a>
                </div>
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


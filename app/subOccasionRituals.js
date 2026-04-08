// ═══════════════════════════════════════════════════════════════
// 불닭 서브 오케이션 리추얼 — 검색 데이터 기반 6개 오케이션
// ═══════════════════════════════════════════════════════════════
//
// 핵심 전략: Stress Ritual 7개 = "왜 먹는가" (감정적 이유)
// 서브 오케이션: 6개 = "언제/어디서/어떻게 먹는가" (상황적 이유)
//
// AI가 숏폼 아이디어 생성 시:
//   1순위 (2~3개): Stress Ritual에서 출발
//   2순위 (1~2개): 서브 오케이션에서 출발
//   조합: Stress × Sub도 가능 (예: Rage Release + Lazy Dinner = "열받은 날 5분 불닭")
// ═══════════════════════════════════════════════════════════════

export const buldakSubOccasionRituals = {

  // ── 1. 간편식사 — Lazy Dinner Ritual ──
  // 연 1,887,588회 | +1480% 폭발 성장 | 가장 큰 서브 오케이션
  lazyDinner: {
    name: "간편식사",
    nameEn: "Lazy Dinner",
    totalVolume: 1887588,
    growth: "+1480%",
    color: "#3B82F6",
    icon: "🍜",
    topKeywords: [
      { keyword: "lazy dinner ideas", volume: 14766, growth: "+402%" },
      { keyword: "quick dinner ideas", volume: 79500, growth: "안정" },
      { keyword: "cheap easy meals", volume: 8700, growth: "-18%" },
      { keyword: "buldak ramen recipe", volume: 5866, growth: "-33%" },
    ],
    rituals: [
      {
        position: "Lazy Night Fuel",
        usCopy: "Too tired to cook? 5 minutes.",
        emotion: "피곤함, 귀찮음, 허기",
        icon: "😴",
        hookExamples: [
          "Too tired to cook? 5 minutes.",
          "POV: You have zero energy but need to eat",
          "The laziest dinner that still hits",
          "When 'what's for dinner' is too much to think about",
        ],
        contentAngle: "소파에서 일어나기 싫은 장면 → 겨우 일어남 → 물 끓이기 → 5분 후 완성 → '이게 최선이야. 근데 최고야.'",
        buldakProduct: "Original / Cheese — 빠르고 확실하게",
      },
      {
        position: "Hackable Noodle Lab",
        usCopy: "Same noodle. Never the same twice.",
        emotion: "창의성, 실험, 재미",
        icon: "🧪",
        hookExamples: [
          "Same noodle. Never the same twice.",
          "Buldak hack #47: add cream cheese",
          "3 ingredients that change everything",
          "Rating my followers' Buldak hacks",
        ],
        contentAngle: "불닭 + 의외의 재료(크림치즈/계란/아보카도) 조합 → 반전 맛 리액션. 레시피 해킹은 저장 트리거 + 댓글 트리거 최강.",
        buldakProduct: "Carbonara / Original — 해킹 베이스",
      },
      {
        position: "Dorm Room Survival",
        usCopy: "Microwave + Buldak = dinner.",
        emotion: "생존, 자립, 유머",
        icon: "🎓",
        hookExamples: [
          "Microwave + Buldak = dinner.",
          "College dinner budget: $2",
          "My roommate thinks I'm a chef. I'm not.",
          "Dorm room cooking that actually slaps",
        ],
        contentAngle: "기숙사/자취방 미니멀 조리 환경 → 전자레인지 하나로 불닭 완성 → 룸메이트 리액션. 대학생 공감 콘텐츠.",
        buldakProduct: "Stew Type — 전자레인지 가능",
      },
    ],
  },

  // ── 2. 소셜/파티 — Social Burn Ritual ──
  // 연 1,514,784회 | super bowl, game day, party
  socialParty: {
    name: "소셜/파티",
    nameEn: "Social Burn",
    totalVolume: 1514784,
    growth: "+4%",
    color: "#8B5CF6",
    icon: "🎉",
    topKeywords: [
      { keyword: "super bowl food", volume: 96700, growth: "+12847%" },
      { keyword: "game day snacks", volume: 7466, growth: "+22%" },
      { keyword: "tailgate food", volume: 8700, growth: "-45%" },
      { keyword: "easy party snacks", volume: 3966, growth: "안정" },
    ],
    rituals: [
      {
        position: "Game Day Dare",
        usCopy: "Buldak sauce on your wings. I dare you.",
        emotion: "경쟁, 흥분, 도전",
        icon: "🏈",
        hookExamples: [
          "Buldak sauce on your wings. I dare you.",
          "Super Bowl snack that ends friendships",
          "My friends ranked Buldak spice levels live",
          "Game day but make it Korean",
        ],
        contentAngle: "경기 시청 중 → 불닭 소스를 다양한 음식에 적용(윙, 나초, 피자) → 친구들 리액션 → 매운맛 도전. 공유 트리거 최강.",
        buldakProduct: "Buldak Sauce — 만능 소스 포지셔닝",
        seasonPeak: "1~2월(Super Bowl), 9~1월(NFL Season)",
      },
      {
        position: "Spice Roulette Night",
        usCopy: "Pick a flavor. No backing out.",
        emotion: "재미, 긴장, 공유",
        icon: "🎰",
        hookExamples: [
          "Pick a flavor. No backing out.",
          "Buldak roulette with my friends",
          "Rating every Buldak flavor blindfolded",
          "The friend who can't handle spice vs 2x spicy",
        ],
        contentAngle: "친구 모임에서 불닭 맛 랜덤 선택 → 블라인드 테스트 → 리액션 바이럴. 참여형 콘텐츠 = 알고리즘 최강.",
        buldakProduct: "Variety Pack — 여러 맛 필요",
      },
    ],
  },

  // ── 3. 감정/위로 — Comfort Burn Ritual ──
  // 연 663,984회 | comfort food 50,166/mo
  comfortFood: {
    name: "감정/위로",
    nameEn: "Comfort Burn",
    totalVolume: 663984,
    growth: "-33%",
    color: "#F59E0B",
    icon: "🫂",
    topKeywords: [
      { keyword: "comfort food", volume: 50166, growth: "-33%" },
      { keyword: "comfort food recipes", volume: 18366, growth: "-18%" },
      { keyword: "healthy comfort food", volume: 2233, growth: "-20%" },
    ],
    rituals: [
      {
        position: "Anti-Comfort Comfort Food",
        usCopy: "Comfort food hits different when it burns.",
        emotion: "위로, 따뜻함, 반전",
        icon: "🔥",
        hookExamples: [
          "Comfort food hits different when it burns.",
          "Mac & cheese is comfort. Buldak is THERAPY.",
          "When you need comfort but also need to feel alive",
          "The comfort food that fights back",
        ],
        contentAngle: "일반 comfort food(맥앤치즈, 수프) 대비 불닭의 차별점: 위로 + 감각적 자극. 아이스크림은 달래주지만, 불닭은 깨워준다.",
        buldakProduct: "Cheese / Carbonara — 크리미+스파이시 = 위로+자극",
      },
      {
        position: "Rainy Day Ritual",
        usCopy: "Rain outside. Fire inside.",
        emotion: "아늑함, 비오는 날, 내향적 만족",
        icon: "🌧️",
        hookExamples: [
          "Rain outside. Fire inside.",
          "Rainy day + fire noodles + Netflix = perfect",
          "The sound of rain + the sound of slurping",
          "POV: It's raining and you have nowhere to be",
        ],
        contentAngle: "비 오는 창밖 → 담요 + 불닭 + 넷플릭스 → ASMR(빗소리+후루룩) → 만족 표정. 감성적이면서 리얼한 톤.",
        buldakProduct: "Stew Type — 국물이 있어야 비 오는 날 감성",
      },
    ],
  },

  // ── 4. 가성비 — Budget Burn Ritual ──
  // 연 522,000회 | cheap dinner 43,500/mo
  budgetMeals: {
    name: "가성비",
    nameEn: "Budget Burn",
    totalVolume: 522000,
    growth: "-18%",
    color: "#22C55E",
    icon: "💵",
    topKeywords: [
      { keyword: "cheap dinner ideas", volume: 43500, growth: "-18%" },
      { keyword: "budget meals", volume: 8200, growth: "-45%" },
      { keyword: "cheap easy meals", volume: 8700, growth: "-18%" },
    ],
    rituals: [
      {
        position: "$2 Dinner Club",
        usCopy: "Bank account: $3. Dinner: still fire.",
        emotion: "절약, 자부심, 유머",
        icon: "💰",
        hookExamples: [
          "Bank account: $3. Dinner: still fire.",
          "$2 dinner that tastes like $20",
          "Broke but eating like a king",
          "POV: Payday is 5 days away",
        ],
        contentAngle: "$2 가격을 강조 → 일반 외식 가격 비교 → 불닭 조리 → '이 가격에 이 맛?' 반전. 대학생/사회초년생 공감.",
        buldakProduct: "Original — 가장 저렴한 옵션",
      },
      {
        position: "Walmart Run Dinner",
        usCopy: "One Walmart trip. Five dinners.",
        emotion: "실용성, 계획, 똑똑한 소비",
        icon: "🛒",
        hookExamples: [
          "One Walmart trip. Five dinners.",
          "$10 Walmart haul = a week of Buldak",
          "How I eat for $2/day and still love it",
          "Grocery haul but make it spicy",
        ],
        contentAngle: "Walmart/Target 장바구니에 불닭 5팩 → $10 이하 → 일주일 저녁 해결 → meal prep 느낌. 구매 채널 직결.",
        buldakProduct: "5-Pack / Variety Pack — 벌크 구매",
        cta: "Walmart/Amazon 링크",
      },
    ],
  },

  // ── 5. 야식 — Late Night Burn Ritual ──
  // 연 443,592회 | late night food 33,100/mo
  lateNight: {
    name: "야식",
    nameEn: "Late Night Burn",
    totalVolume: 443592,
    growth: "-18%",
    color: "#6366F1",
    icon: "🌙",
    topKeywords: [
      { keyword: "late night food", volume: 33100, growth: "-18%" },
      { keyword: "late night snack", volume: 4733, growth: "안정" },
      { keyword: "late night snack ideas", volume: 2566, growth: "안정" },
      { keyword: "midnight snack ideas", volume: 1800, growth: "안정" },
      { keyword: "munchies food", volume: 920, growth: "안정" },
      { keyword: "drunk food", volume: 720, growth: "안정" },
    ],
    rituals: [
      {
        position: "Midnight Craving Cure",
        usCopy: "2AM. Fridge open. You know what to do.",
        emotion: "갈망, 충동, 야행성",
        icon: "🕐",
        hookExamples: [
          "2AM. Fridge open. You know what to do.",
          "The 2AM snack that ruins your sleep but saves your soul",
          "POV: You can't sleep and the Buldak is calling",
          "Night owl dinner at midnight",
        ],
        contentAngle: "새벽 어두운 부엌 → 냉장고 불빛 → 불닭 끓이기 → 어둠 속 먹방 ASMR → '이래서 못 끊어'. 야행성 소비자 공감.",
        buldakProduct: "Original / Carbonara — 야식은 강하거나 부드럽거나",
      },
      {
        position: "After Party Fuel",
        usCopy: "Party's over. The real party starts now.",
        emotion: "해방, 배고픔, 유머",
        icon: "🎊",
        hookExamples: [
          "Party's over. The real party starts now.",
          "Post-bar Buldak hits different",
          "Drunk cooking Buldak at 3AM (gone wrong)",
          "The best drunk food isn't pizza. It's fire noodles.",
        ],
        contentAngle: "파티/바 귀가 후 → 배고픔 → 불닭 끓이기(약간 어설프게) → 첫 한 입 리액션 → '이게 진짜 파티'. 21+ 타겟.",
        buldakProduct: "Cheese — 취한 상태에서는 치즈가 최고",
      },
    ],
  },

  // ── 6. 건강/기능 — Wellness Burn Ritual ──
  // 연 369,504회 | +43% 성장 | capsaicin benefits +50%
  healthWellness: {
    name: "건강/기능",
    nameEn: "Wellness Burn",
    totalVolume: 369504,
    growth: "+43%",
    color: "#14B8A6",
    icon: "💊",
    topKeywords: [
      { keyword: "capsaicin benefits", volume: 4800, growth: "+50%" },
      { keyword: "spicy food benefits", volume: 1600, growth: "안정" },
      { keyword: "spicy food when sick", volume: 960, growth: "+49%" },
    ],
    rituals: [
      {
        position: "Capsaicin Science",
        usCopy: "Spicy food releases endorphins. It's science.",
        emotion: "지적 호기심, 자기합리화, 과학",
        icon: "🧬",
        hookExamples: [
          "Spicy food releases endorphins. It's science.",
          "Your brain on capsaicin (it's actually good)",
          "The science behind why spicy food makes you happy",
          "Capsaicin: nature's antidepressant",
        ],
        contentAngle: "과학적 근거를 시각적으로 보여주기(뇌 그래픽, 엔도르핀 설명) → 불닭 먹기 → '과학적으로 검증된 기분 전환'. 정보형 콘텐츠 = 저장 트리거.",
        buldakProduct: "Original — 캡사이신 함량 최고",
      },
      {
        position: "Sick Day Remedy",
        usCopy: "Doctor said rest. I said Buldak.",
        emotion: "코막힘, 자가치료, 유머",
        icon: "🤧",
        hookExamples: [
          "Doctor said rest. I said Buldak.",
          "Buldak cleared my sinuses in 5 minutes",
          "When you're sick and need the nuclear option",
          "Spicy ramen > NyQuil (not medical advice)",
        ],
        contentAngle: "감기/코막힘 상태 → 불닭 먹기 → 코 뚫리는 리액션 → '이게 약이야'. 계절 콘텐츠(겨울+환절기). +49% 성장 키워드.",
        buldakProduct: "Stew Type — 국물이 따뜻하게",
        seasonPeak: "10~3월(감기 시즌)",
      },
      {
        position: "Metabolism Booster",
        usCopy: "Spicy food boosts metabolism. You're welcome.",
        emotion: "건강, 다이어트 합리화",
        icon: "🏃",
        hookExamples: [
          "Spicy food boosts metabolism. You're welcome.",
          "Eating Buldak for my health (and I mean it)",
          "The diet hack no one talks about: capsaicin",
          "Post-gym Buldak: protein? No. Endorphins? Yes.",
        ],
        contentAngle: "운동 후/건강 관심사 → 캡사이신 대사 촉진 팩트 → 불닭 먹기 → '건강을 위해 먹는 거야'. 자기합리화 유머.",
        buldakProduct: "Original — 캡사이신 최대",
      },
    ],
  },
};

// ═══ Claude Code에 전달할 UI 구조 ═══
// 현재: 6개 오케이션 버블 → 검색량만 표시
// 변경: 각 버블 클릭 시 → 해당 오케이션의 리추얼 카드 2~3개 펼침
//
// 구조:
// ┌─────────────────────────────────┐
// │  🍜 간편식사 연 1,887,588회      │ ← 버블 클릭
// │  +1480% 폭발 성장                │
// ├─────────────────────────────────┤
// │                                  │
// │  😴 Lazy Night Fuel              │ ← 리추얼 카드 1
// │  "Too tired to cook? 5 min."     │
// │  HOOK: POV: You have zero energy │
// │                                  │
// │  🧪 Hackable Noodle Lab          │ ← 리추얼 카드 2
// │  "Same noodle. Never the same."  │
// │  HOOK: Buldak hack #47           │
// │                                  │
// │  🎓 Dorm Room Survival           │ ← 리추얼 카드 3
// │  "Microwave + Buldak = dinner."  │
// │  HOOK: College dinner budget: $2 │
// │                                  │
// └─────────────────────────────────┘
//
// 각 리추얼 카드 표시: icon + position명 + usCopy + hookExamples[0] + buldakProduct
// Stress Ritual과 동일한 카드 형식이지만 색상으로 구분 (핵심=빨강계열, 서브=각 오케이션 컬러)

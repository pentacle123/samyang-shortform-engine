// ═══════════════════════════════════════════════════════════════
// MEP Concept Dev Platform — 하드코딩 데이터
// 삼양 MEP (구 맵탱) US Market 브랜드 컨셉 개발용
// ═══════════════════════════════════════════════════════════════
// 모든 검색량은 연간(Annual) 기준
// 데이터 소스: ListeningMind (gl=us)
// 수집일: 2026.04
// ═══════════════════════════════════════════════════════════════

// ── TAB 1: 제품 DNA ──

export const productDNA = {
  brandName: "MEP",
  previousName: "맵탱",
  company: "Samyang Foods",
  
  currentBrandStory: {
    concept: "Curated Kick Ramyeon for Foodies",
    tagline: "Spice Beyond Spicy, MEP.",
    valueProposition: "다층적 풍미로 감각적 경험을 제공하는 \"킥이 있는 맛잘알\" 라면 브랜드",
    target: "25-39세 Flavor Explorer",
    status: "데이터 미검증 — 미국 소비자 언어와의 일치 여부 불명",
  },

  kickSauceLineup: [
    { name: "Smoky Vibe", base: "Beef", flavor: "스모키 + 비프", color: "#8B4513" },
    { name: "Pepper Crush", base: "Chicken", flavor: "페퍼 + 치킨", color: "#DC143C" },
    { name: "Garlic Holic", base: "Seafood", flavor: "갈릭 + 시푸드", color: "#DAA520" },
  ],

  regularLineup: [
    { name: "Blackpepper Beef", type: "일반 라인업", flavor: "블랙페퍼 비프" },
  ],

  productStructure: "xxx 'Kick' + base = 다층적 풍미",
  kickSauceRole: "Final Touch(후첨)를 통해 다층적 풍미 제공 — Flavor Enhancer",

  caseStudies: [
    {
      brand: "Kinder's",
      strategy: "시그니처 플레이버 전개 + 제품 간 레이어링",
      relevance: "MEP의 Kick 소스 = Kinder's의 Buttery 계열과 유사한 시그니처 접근",
    },
    {
      brand: "Siete Foods",
      strategy: "Grain-Free 원료 + 칠리 품종 구분 + 카테고리 재규정",
      relevance: "MEP의 다양한 Kick 소스 종류 = Siete의 칠리 품종 정교함과 유사",
    },
    {
      brand: "Fly by Jing",
      strategy: "사천 풍미의 현대적 규격화 + 소스의 토핑화 + 카테고리 확장",
      relevance: "MEP의 Kick 소스 = Fly by Jing의 Chili Crisp와 유사한 Flavor Enhancer 포지션",
    },
  ],
};

// ── TAB 2: 소비자 언어 발견 — 7개 LAYER ──

export const consumerLanguageLayers = {

  // ━━ LAYER 1: 맛 피로 (Problem) ━━
  layer1_flavorFatigue: {
    title: "맛 피로",
    subtitle: "같은 맛에 지친 미국인",
    icon: "😩",
    color: "#EF4444",
    insight: "미국인은 매일 같은 저녁에 지쳐가고 있다. 'different' 'fun' 'unique' dinner ideas가 +24~50% 급성장. 새로운 맛 경험에 대한 갈증이 커지고 있다.",
    totalAnnualVolume: 10345480,
    keywords: [
      { keyword: "dinner ideas", annual: 9903000, growth: "+22%", note: "미국인의 가장 큰 고민" },
      { keyword: "different dinner ideas", annual: 35900, growth: "+50%", note: "★ 급성장 — '다른' 맛을 원함" },
      { keyword: "fun dinner ideas", annual: 82500, growth: "+50%", note: "★ 급성장 — '재미있는' 맛을 원함" },
      { keyword: "unique dinner ideas", annual: 37600, growth: "+24%", note: "★ 급성장" },
      { keyword: "new dinner ideas", annual: 52200, growth: "+22%", note: "새로운 저녁" },
      { keyword: "interesting dinner ideas", annual: 11000, growth: "+38%", note: "★ 급성장" },
      { keyword: "what should i eat", annual: 267200, growth: "+22%", note: "뭘 먹을지 모르겠다" },
      { keyword: "bland food", annual: 156000, growth: "안정", note: "맛없는 음식에 대한 인식" },
      { keyword: "flavor fatigue", annual: 10880, growth: "+13%", note: "맛 피로 — 직접적 표현" },
    ],
  },

  // ━━ LAYER 2: 맛 업그레이드 행동 (Action) ━━
  layer2_upgradeAction: {
    title: "맛 업그레이드 행동",
    subtitle: "라면을 해킹하는 150만명",
    icon: "🔧",
    color: "#F59E0B",
    insight: "매년 약 150만명이 '라면을 더 맛있게 만들 수 없을까?'를 검색. 이 사람들에게 MEP은 '해킹할 필요 없이, 이미 업그레이드된 라면'이라고 말할 수 있다.",
    totalAnnualVolume: 1469880,
    keywords: [
      { keyword: "ramen recipe", annual: 900000, growth: "안정", note: "압도적 1위 — 더 맛있게 만드는 방법" },
      { keyword: "ramen toppings", annual: 219600, growth: "안정", note: "토핑으로 업그레이드" },
      { keyword: "ramen hack", annual: 79100, growth: "안정", note: "라면 해킹 문화" },
      { keyword: "what to add to ramen", annual: 56800, growth: "안정", note: "'뭘 넣으면 맛있을까?'" },
      { keyword: "things to add to ramen", annual: 36400, growth: "안정", note: "추가 재료 탐색" },
      { keyword: "how to make ramen better", annual: 35900, growth: "안정", note: "'어떻게 더 맛있게?'" },
      { keyword: "ramen add ins", annual: 24200, growth: "안정", note: "라면 추가 재료" },
      { keyword: "upgrade instant ramen", annual: 18180, growth: "안정", note: "인스턴트 라면 업그레이드" },
      { keyword: "how to make instant ramen better", annual: 33200, growth: "안정", note: "인스턴트를 더 맛있게" },
      { keyword: "secret ingredient", annual: 63700, growth: "+22%", note: "'비밀 재료' = Kick 소스?" },
      { keyword: "food hack", annual: 122000, growth: "안정", note: "음식 해킹 전반" },
    ],
    searchJourney: [
      "what to add to ramen → spices to add → ramen seasoning → best instant ramen",
      "ramen hack → instant ramen hacks tiktok → how to make ramen better",
      "= '더 맛있게 만들려고 노력' → '결국 맛있는 라면을 사자'로 전환",
    ],
  },

  // ━━ LAYER 3: Flavor Enhancer 문화 (Trend) ━━
  layer3_flavorEnhancer: {
    title: "Flavor Enhancer 문화",
    subtitle: "소스 하나로 음식을 바꾸는 문화",
    icon: "🌶️",
    color: "#DC2626",
    insight: "미국에서 '소스/시즈닝으로 기본 음식의 맛을 바꾸는' 문화가 폭발 중. Chili Crisp, Hot Honey, Gochujang이 대표. MEP의 Kick 소스는 이 'Flavor Enhancer' 카테고리에 해당한다.",
    totalAnnualVolume: 96000000,
    keywords: [
      { keyword: "sriracha", annual: 21960000, growth: "+22%", note: "매운 소스의 대명사" },
      { keyword: "gochujang sauce", annual: 6936000, growth: "+22%", note: "★ 한국 소스의 미국 안착" },
      { keyword: "gochugaru", annual: 9102000, growth: "안정", note: "한국 고추가루" },
      { keyword: "hot honey", annual: 8370000, growth: "+22%", note: "★ Swicy 트렌드 상징 (Mike's)" },
      { keyword: "chili crisp", annual: 7602000, growth: "안정", note: "Fly by Jing이 만든 카테고리" },
      { keyword: "chili oil", annual: 7362000, growth: "+22%", note: "칠리 오일" },
      { keyword: "chipotle sauce", annual: 7524000, growth: "+22%", note: "치폴레 소스" },
      { keyword: "black garlic", annual: 6156000, growth: "안정", note: "블랙 갈릭 — 깊은 맛" },
      { keyword: "garlic butter", annual: 5978400, growth: "안정", note: "갈릭 버터" },
      { keyword: "msg seasoning", annual: 5026800, growth: "+22%", note: "★ MSG 재평가 트렌드" },
      { keyword: "chili garlic sauce", annual: 3225600, growth: "+49%", note: "★★ 폭발 성장! 칠리+갈릭 조합" },
      { keyword: "momofuku chili crunch", annual: 2811600, growth: "+22%", note: "프리미엄 칠리 크런치" },
      { keyword: "korean bbq sauce", annual: 3274800, growth: "+22%", note: "한국 BBQ 소스" },
      { keyword: "lao gan ma", annual: 3432000, growth: "+22%", note: "중국 칠리의 대중화" },
    ],
    keyInsight: "chili garlic sauce +49% = 미국에서 가장 빠르게 성장하는 맛 조합이 '칠리+갈릭'. MEP의 Garlic Holic Kick과 정확히 일치.",
  },

  // ━━ LAYER 4: 맛의 깊이를 찾는 언어 (Vocabulary) ━━
  layer4_flavorVocabulary: {
    title: "맛의 깊이를 찾는 언어",
    subtitle: "단순한 맛이 아닌 복잡한 맛을 원하는 소비자",
    icon: "🎯",
    color: "#8B5CF6",
    insight: "'flavor profile' +52% 급성장은 미국인이 '이 맛이 어떻게 구성되어 있는지'에 관심을 갖기 시작했다는 증거. '맛잘알'에 가장 가까운 미국 소비자 언어는 'flavor profile'이나 'bold flavor'.",
    totalAnnualVolume: 6405310,
    keywords: [
      { keyword: "savory food", annual: 1347600, growth: "안정", note: "감칠맛/짠맛 음식" },
      { keyword: "foodie culture", annual: 97700, growth: "+22%", note: "미식 문화" },
      { keyword: "taste test", annual: 1180800, growth: "안정", note: "맛 평가/비교 문화" },
      { keyword: "exotic food", annual: 87000, growth: "+22%", note: "이국적 음식 탐색" },
      { keyword: "flavorful", annual: 34000, growth: "안정", note: "풍미 있는" },
      { keyword: "flavor profile", annual: 26800, growth: "+52%", note: "★★ 급성장 — 맛 구성에 대한 관심" },
      { keyword: "foodie experience", annual: 13500, growth: "+309%", note: "★★★ 폭발 — 음식=경험" },
      { keyword: "heat seeker", annual: 13980, growth: "+23%", note: "매운맛 추구자" },
      { keyword: "spice tolerance", annual: 15300, growth: "+30%", note: "★ 매운맛 내성 관심 증가" },
      { keyword: "spice lover", annual: 4270, growth: "+21%", note: "양념 매니아" },
      { keyword: "bold flavor", annual: 2440, growth: "+23%", note: "대담한 맛" },
      { keyword: "food connoisseur", annual: 22700, growth: "안정", note: "미식가 — 가장 근접한 '맛잘알'" },
      { keyword: "new food to try", annual: 14540, growth: "+13%", note: "새로운 음식 시도" },
      { keyword: "must try food", annual: 6012, growth: "+50%", note: "★ 급성장 — 꼭 먹어봐야 할 음식" },
    ],
    languageMap: {
      koreanConcept: "맛잘알",
      closestUS: ["food connoisseur", "flavor profile", "bold flavor", "heat seeker"],
      notUsed: ["curated", "for foodies", "flavor explorer", "kick ramyeon"],
      note: "미국인은 'curated'나 'for foodies'라고 검색하지 않음. 'bold', 'deep', 'complex', 'layered' 같은 형용사를 씀.",
    },
  },

  // ━━ LAYER 5: K-Food 문화 자산 (Cultural Equity) ━━
  layer5_kfoodEquity: {
    title: "K-Food 문화 자산",
    subtitle: "\"Korean\"이라는 단어의 시장 가치",
    icon: "🇰🇷",
    color: "#3B82F6",
    insight: "'Korean food' 연 5,156만회 = 미국에서 이미 메가 카테고리. Gochujang/Gochugaru가 미국어로 안착. 하지만 'Korean ramen'은 Shin/Buldak이 점유 중이므로 MEP은 다른 방식으로 'Korean'을 써야 한다.",
    totalAnnualVolume: 500000000,
    keywords: [
      { keyword: "korean food", annual: 51564000, growth: "+22%", note: "★★★ 한국 음식 전체" },
      { keyword: "korean food near me", annual: 48168000, growth: "+22%", note: "한국 음식 — 매장 탐색" },
      { keyword: "tteokbokki", annual: 38208000, growth: "안정", note: "떡볶이 — 개별 메뉴 인지" },
      { keyword: "H Mart", annual: 279240000, growth: "안정", note: "한국 마트 — 유통 인프라" },
      { keyword: "korean fried chicken", annual: 26784000, growth: "안정", note: "한국 치킨" },
      { keyword: "gochujang sauce", annual: 6936000, growth: "+22%", note: "고추장 — 미국어화" },
      { keyword: "gochugaru", annual: 9102000, growth: "안정", note: "고추가루 — 미국어화" },
      { keyword: "kimchi recipe", annual: 11646000, growth: "안정", note: "김치 레시피" },
      { keyword: "korean street food", annual: 4059600, growth: "안정", note: "한국 길거리 음식" },
      { keyword: "korean snack", annual: 3415200, growth: "안정", note: "한국 스낵" },
      { keyword: "korean bbq sauce", annual: 3274800, growth: "+22%", note: "한국 BBQ 소스" },
      { keyword: "korean noodles", annual: 2448000, growth: "안정", note: "한국 면 — MEP 직접 카테고리" },
      { keyword: "korean recipe", annual: 1616400, growth: "+22%", note: "한국 레시피" },
      { keyword: "korean sauce", annual: 529200, growth: "안정", note: "한국 소스" },
    ],
    strategicImplication: {
      positive: "'Korean'은 미국에서 프리미엄/트렌디의 코드. 한국 양념(gochujang/gochugaru)에 대한 신뢰 이미 존재.",
      risk: "'Korean ramen'은 Shin Ramen(연 898만)과 Buldak(연 340만)이 점유 중.",
      direction: "MEP은 'Korean spice heritage'를 쓰되 'Korean ramen'과 직접 경쟁하지 않는 포지셔닝 필요.",
    },
  },

  // ━━ LAYER 6: 발견과 시도의 트리거 (Discovery) ━━
  layer6_discoveryTrigger: {
    title: "발견과 시도의 트리거",
    subtitle: "미국인이 새 음식을 발견하는 방법",
    icon: "📱",
    color: "#EC4899",
    insight: "'TikTok made me buy it' +50% 성장 = TikTok이 식품 발견의 1순위 채널. 컨셉 언어는 'TikTok에서 공유하고 싶은 문장'이어야 한다. 'Curated Kick Ramyeon for Foodies'는 TikTok에서 안 되지만, 'The ramen that already has the hack inside'는 된다.",
    totalAnnualVolume: 1327560,
    keywords: [
      { keyword: "best instant ramen", annual: 1612320, growth: "안정", note: "맛있는 라면 찾기 — 비교/검증" },
      { keyword: "taste test", annual: 1180800, growth: "안정", note: "맛 평가 문화 — 미국인은 비교해보고 판단" },
      { keyword: "viral food", annual: 39600, growth: "+20%", note: "바이럴 음식" },
      { keyword: "tiktok ramen", annual: 41640, growth: "안정", note: "틱톡 라면" },
      { keyword: "tiktok made me buy it", annual: 28560, growth: "+50%", note: "★ 급성장 — TikTok 발견 문화" },
      { keyword: "trending food", annual: 17280, growth: "+30%", note: "트렌딩 음식" },
      { keyword: "best ramen brands", annual: 267600, growth: "안정", note: "라면 브랜드 비교" },
      { keyword: "premium instant ramen", annual: 19992, growth: "+81%", note: "★★ 폭발 — 프리미엄 인스턴트 시장 열림" },
      { keyword: "best store bought ramen", annual: 14580, growth: "안정", note: "매장 판매 라면 비교" },
      { keyword: "must try food", annual: 6012, growth: "+50%", note: "★ 급성장" },
    ],
    tiktokImplication: "컨셉 언어의 테스트: '이걸 TikTok 캡션으로 쓸 수 있는가?' — YES면 좋은 컨셉, NO면 재고.",
  },

  // ━━ LAYER 7: 라면의 감정적 오케이션 (Moment) ━━
  layer7_emotionalOccasion: {
    title: "라면의 감정적 오케이션",
    subtitle: "이 라면은 '언제' 먹는 라면인가",
    icon: "🌙",
    color: "#6366F1",
    insight: "'midnight ramen' +81% 급성장, 'different dinner' +50%. MEP은 '매일 저녁의 새로운 선택지'가 될 수도 있고, '특별한 밤의 라면'이 될 수도 있다. 어떤 오케이션을 선택하느냐가 컨셉에 영향.",
    totalAnnualVolume: 10186896,
    keywords: [
      { keyword: "easy dinner ideas", annual: 42684000, growth: "+22%", note: "쉬운 저녁 아이디어" },
      { keyword: "quick dinner ideas", annual: 12672000, growth: "+22%", note: "빠른 저녁" },
      { keyword: "late night ramen", annual: 31560, growth: "안정", note: "늦은 밤 라면" },
      { keyword: "midnight ramen", annual: 11616, growth: "+81%", note: "★★ 폭발 — 자정 라면 오케이션" },
      { keyword: "spicy food challenge", annual: 3086400, growth: "안정", note: "매운 음식 도전" },
      { keyword: "different dinner ideas", annual: 35900, growth: "+50%", note: "★ 다른 저녁" },
      { keyword: "fun dinner ideas", annual: 82500, growth: "+50%", note: "★ 재미있는 저녁" },
      { keyword: "comfort ramen", annual: 0, growth: "N/A", note: "검색량 적지만 TikTok에서 거대한 맥락" },
    ],
    occasionOptions: [
      { name: "일상 저녁의 새 선택지", fit: "different/fun dinner ideas +50%와 일치", risk: "경쟁 많음" },
      { name: "특별한 밤의 라면", fit: "midnight ramen +81%와 일치", risk: "시장 작음" },
      { name: "맛 탐험의 시작", fit: "foodie experience +309%와 일치", risk: "추상적" },
    ],
  },
};

// ── TAB 4: 경쟁 포지셔닝 ──

export const competitorPositioning = {
  competitors: [
    { brand: "Shin Ramen", annual: 8988000, growth: "안정", ownedLanguage: ["spicy", "korean", "red", "classic"], position: "한국 매운 라면의 대명사" },
    { brand: "Maruchan", annual: 8346000, growth: "안정", ownedLanguage: ["cheap", "quick", "basic", "college"], position: "가성비 라면의 왕" },
    { brand: "Indomie", annual: 4404000, growth: "안정", ownedLanguage: ["flavor", "variety", "indonesian"], position: "맛 다양성" },
    { brand: "Nongshim", annual: 1741200, growth: "안정", ownedLanguage: ["premium", "korean", "shin black"], position: "프리미엄 한국 라면" },
    { brand: "Nissin", annual: 1479960, growth: "안정", ownedLanguage: ["original", "japanese", "cup noodle"], position: "인스턴트 라면의 원조" },
    { brand: "Samyang", annual: 844800, growth: "안정", ownedLanguage: ["spicy", "buldak", "fire", "challenge"], position: "매운맛 챌린지" },
    { brand: "Ottogi", annual: 100560, growth: "안정", ownedLanguage: ["jin ramen", "korean"], position: "아직 미약" },
  ],

  whiteSpaces: [
    { territory: "built-in flavor enhancer", status: "✅ 완전 공백", score: 95, note: "아무도 '소스가 이미 들어있는 라면'을 점유하지 않음" },
    { territory: "layered/complex spice", status: "✅ 완전 공백", score: 90, note: "Shin=spicy(단층), MEP=layered(다층)" },
    { territory: "craft/artisan instant", status: "✅ 거의 공백", score: 85, note: "craft ramen +24% 성장 중, 브랜드 연결 약함" },
    { territory: "the missing kick", status: "✅ 완전 공백", score: 90, note: "'kick'을 브랜드 아이덴티티로 쓰는 라면 없음" },
    { territory: "anti-boring ramen", status: "✅ 공백", score: 80, note: "'지루한 맛의 반대' 포지셔닝 없음" },
    { territory: "korean spice blend", status: "⚠️ 부분 공백", score: 70, note: "gochujang/gochugaru는 있지만 라면과 연결된 브랜드 없음" },
    { territory: "premium spicy", status: "⚠️ 부분 공백", score: 60, note: "Nongshim Shin Black이 일부 점유" },
    { territory: "just spicy", status: "❌ 점유됨", score: 20, note: "Shin Ramen + Buldak이 완전 점유" },
    { territory: "cheap/budget", status: "❌ 점유됨", score: 10, note: "Maruchan이 완전 점유" },
  ],
};

// ── TAB 5: AI 컨셉 생성 — 스코어링 시스템 ──

export const scoringSystem = {
  criteria: [
    {
      id: "search_evidence",
      name: "검색량 근거",
      nameEn: "Search Volume Evidence",
      description: "이 컨셉이 기반하는 검색 데이터의 규모",
      weight: 25,
      scoring: [
        { range: "연 100만회+", score: "90~100" },
        { range: "연 10만회+", score: "70~89" },
        { range: "연 1만회+", score: "50~69" },
        { range: "연 1만회 미만", score: "30~49" },
      ],
    },
    {
      id: "trend_alignment",
      name: "트렌드 정합성",
      nameEn: "Trend Alignment",
      description: "관련 검색어의 성장률과 컨셉 방향이 일치하는가",
      weight: 20,
      scoring: [
        { range: "핵심 키워드 +30%+", score: "90~100" },
        { range: "+10~29%", score: "70~89" },
        { range: "안정 (0%)", score: "50~69" },
        { range: "하락", score: "30~49" },
      ],
    },
    {
      id: "competitive_space",
      name: "경쟁 차별화",
      nameEn: "Competitive White Space",
      description: "이 포지셔닝을 점유한 브랜드가 없는가",
      weight: 25,
      scoring: [
        { range: "완전 빈 자리", score: "90~100" },
        { range: "부분적 빈 자리", score: "60~79" },
        { range: "일부 점유", score: "40~59" },
        { range: "이미 점유됨", score: "10~30" },
      ],
    },
    {
      id: "language_fit",
      name: "소비자 언어 자연스러움",
      nameEn: "Language Naturalness",
      description: "미국인이 실제로 쓰는 표현인가",
      weight: 15,
      scoring: [
        { range: "일상 회화 + TikTok 공유 가능", score: "90~100" },
        { range: "검색에서 쓰이는 표현", score: "70~89" },
        { range: "이해 가능하지만 자연스럽지 않음", score: "50~69" },
        { range: "마케팅 전문 용어", score: "20~40" },
      ],
    },
    {
      id: "scalability",
      name: "확장 가능성",
      nameEn: "Scalability",
      description: "TikTok/숏폼/소스 단독/타 제품으로 확장 가능한가",
      weight: 15,
      scoring: [
        { range: "다채널 + 제품 확장 가능", score: "90~100" },
        { range: "다채널 가능", score: "70~89" },
        { range: "일부 채널만", score: "50~69" },
        { range: "확장 어려움", score: "30~49" },
      ],
    },
  ],

  // AI가 참고할 컨셉 방향 시드 (Claude가 이를 기반으로 확장/변형)
  conceptSeeds: [
    {
      id: "missing_kick",
      direction: "The Missing Kick",
      insight: "150만명이 라면에 '뭔가를 더하려고' 검색. MEP의 Kick 소스가 그 '빠진 조각'.",
      consumerLanguage: ["hack", "missing", "add", "upgrade", "level up"],
      taglineExamples: [
        "Your ramen's been missing something. We found it.",
        "Stop hacking. Start kicking.",
        "The Kick your bowl's been waiting for.",
      ],
      dataEvidence: "ramen upgrade 행동 연 1,469,880회",
      whiteSpace: "built-in flavor enhancer — 점유 브랜드 없음",
    },
    {
      id: "spice_layers",
      direction: "Spice Has Layers",
      insight: "Shin=spicy(단층), Buldak=fire(단층). 미국인이 원하는 건 '더 매운 것'이 아니라 '더 깊은 맛'.",
      consumerLanguage: ["layers", "depth", "complex", "beyond", "profile"],
      taglineExamples: [
        "Spice has layers. Taste every one.",
        "Beyond heat. Into flavor.",
        "Three kicks. One bowl. Zero compromise.",
      ],
      dataEvidence: "chili garlic +49%, flavor profile +52%, 소스 시장 연 9,600만회",
      whiteSpace: "layered/complex spice — 점유 브랜드 없음",
    },
    {
      id: "anti_boring",
      direction: "Bored of Boring",
      insight: "'different' 'fun' 'unique' dinner ideas +24~50% 급성장. 미국인은 같은 맛에 지쳐있다.",
      consumerLanguage: ["boring", "same", "different", "new", "fun", "interesting"],
      taglineExamples: [
        "Bored of boring? Kick it.",
        "Same dinner. Different kick.",
        "Your taste buds called. They're bored.",
      ],
      dataEvidence: "different/fun dinner ideas +50% 성장, dinner ideas 연 990만회",
      whiteSpace: "anti-boring ramen — 포지셔닝 없음",
    },
    {
      id: "secret_ingredient",
      direction: "The Secret's Inside",
      insight: "'secret ingredient' 연 63,700회 +22%. 미국인은 '맛의 비밀'을 찾고 있다.",
      consumerLanguage: ["secret", "inside", "built-in", "already", "no need"],
      taglineExamples: [
        "The secret's already inside.",
        "What's the secret? It's the Kick.",
        "Everyone's looking for the secret ingredient. We packed it in.",
      ],
      dataEvidence: "secret ingredient 연 63,700회 +22%",
      whiteSpace: "secret ingredient 포지셔닝 — 라면에서 점유 브랜드 없음",
    },
    {
      id: "korean_kick",
      direction: "Korean Kick",
      insight: "Korean food 연 5,156만회 +22%. 한국 양념은 이미 미국에서 신뢰 받지만, 'Korean ramen'은 Shin이 점유.",
      consumerLanguage: ["Korean", "spice", "kick", "heritage", "craft"],
      taglineExamples: [
        "Korean spice. Perfected in a packet.",
        "From Korea, the Kick that changes everything.",
        "The kick Korea's been keeping secret.",
      ],
      dataEvidence: "korean food 연 5,156만회, gochujang 연 693만회",
      whiteSpace: "korean spice heritage in ramen — 부분 공백",
    },
  ],
};

// ── 검색 여정 데이터 (TAB 3용) ──

export const searchJourneys = {
  journey1_upgrade: {
    name: "업그레이드 여정",
    description: "기본 라면을 더 맛있게 만들려는 소비자",
    path: ["what to add to ramen", "spices to add to ramen", "ramen seasoning", "best instant ramen"],
    mepInsertionPoint: "여정의 끝 — '결국 맛있는 라면을 사자'에서 MEP이 답이 됨",
    annualVolume: 1469880,
  },
  journey2_brandComparison: {
    name: "브랜드 비교 여정",
    description: "뭐가 맛있는지 비교하는 소비자",
    path: ["best instant ramen", "best ramen brands", "best instant ramen reddit", "shin ramen vs ..."],
    mepInsertionPoint: "비교 대화에 MEP이 등장해야 함 — 'built-in kick sauce'가 차별화 포인트",
    annualVolume: 1612320,
  },
  journey3_flavorExploration: {
    name: "맛 탐색 여정",
    description: "새로운 맛을 찾는 소비자",
    path: ["ramen flavors", "best ramen flavor", "smoky / garlic / spicy"],
    mepInsertionPoint: "맛 키워드에서 MEP의 3가지 Kick(Smoky/Pepper/Garlic)이 삽입",
    annualVolume: 1234800,
  },
  journey4_premiumDiscovery: {
    name: "프리미엄 발견 여정",
    description: "더 좋은 라면에 돈을 쓸 의향이 있는 소비자",
    path: ["premium instant ramen", "gourmet instant ramen", "craft ramen", "→ 구매"],
    mepInsertionPoint: "프리미엄 인스턴트 시장 +81% 성장 = MEP의 핵심 타겟",
    annualVolume: 19992,
    growth: "+81%",
  },
  journey5_hackToProduct: {
    name: "해킹→제품화 여정",
    description: "직접 해킹하다가 '이미 해킹된 제품'을 발견",
    path: ["ramen hack", "instant ramen hacks tiktok", "how to make ramen better", "→ best store bought ramen"],
    mepInsertionPoint: "'해킹할 필요 없어. Kick 소스가 이미 들어있으니까'",
    annualVolume: 79100,
  },
};

// ═══════════════════════════════════════════════════════════════
// 불닭 STRESS RITUAL MAP — 핵심 전략 프레임워크
// ═══════════════════════════════════════════════════════════════
//
// 가설: "미국인은 언제 매운맛이 땡기는가?"가 아니라
//       "미국인은 언제 화가 나고 스트레스를 받는가?"
//
// 데이터 근거:
//   스트레스 상황 검색량: 연 4,128,000회 (음식 쪽 684,000회의 6배)
//   캡사이신→엔도르핀 검색: +50~57% 성장
//   핵심: 스트레스→음식 연결은 검색에 없다 = 숏폼으로만 만들 수 있는 기회
//
// 이 데이터는 buldak-confirmed-opportunities.js의 buldakOccasionMap에 병합.
// AI 프롬프트에서 stressRituals를 최우선으로 참조하여 숏폼 아이디어 생성.
// ═══════════════════════════════════════════════════════════════

export const buldakStressRitualMap = {

  // ★ 전략 프레임
  framework: {
    insight: "사람들은 스트레스를 받을 때 'stress relief food'를 검색하지 않는다. 'i hate my job'을 검색한다. 하지만 집에 와서 매운 거 먹으면서 푼다. 이 연결은 검색에 존재하지 않는다 — 숏폼 콘텐츠만이 이 연결을 만들 수 있다.",
    science: "캡사이신 → 통증 신호 → 뇌에서 엔도르핀 분비 → 기분 전환. 이건 과학이다. capsaicin benefits +50%, endorphins +57%, metabolism +22% 성장 중.",
    opportunity: "스트레스 상황 검색 연 4,128,000회. 이 모든 순간이 불닭의 기회다. 불닭은 comfort food가 아니라 rage release ritual이다.",
    totalVolume: 4128000, // 연간
  },

  // ═══ 핵심 스트레스 리추얼 7개 ═══
  // 이것이 AI 숏폼 아이디어 생성의 최우선 맥락
  stressRituals: [

    // ── 1. RAGE RELEASE RITUAL ──
    {
      id: "rage_release",
      position: "Rage Release Ritual",
      situation: "오늘 진짜 열받았을 때",
      emotion: "짜증, 억울함, 과부하",
      usCopy: "Bad day? Burn it off.",
      reason: "미국의 snack culture는 단순 허기가 아니라 기분 전환과 작은 보상에 강하게 연결됩니다. 화가 날 때 매운 거를 먹는 행위는 감정의 물리적 발산이다.",
      color: "#EF4444",
      icon: "🔥",
      searchVolume: { // 이 상황과 연결되는 스트레스 검색량
        "overwhelmed": 90500,
        "stressed out": 53166,
        "having a bad day": 1700,
        "frustrated at work": 196,
      },
      annualVolume: 1746744, // 위 합계 × 12
      demographics: ["직장인 전 연령", "대학생", "서비스업 종사자"],
      hookExamples: [
        "Bad day? Burn it off.",
        "POV: Your boss just said 'per my last email'",
        "That meeting could've been an email. This Buldak can't.",
        "Coming home after the worst day and making this",
        "Therapy is $200/hr. Buldak is $2.",
        "When 'I'm fine' means I need 2x spicy tonight",
      ],
      shortformFormats: ["POV", "Day in my life", "Get ready with me (unwind edition)", "ASMR rage cooking"],
      buldakProduct: "Original 2x Spicy — 분노에는 가장 매운 걸로",
      seasonPeak: "연중 (월요일/수요일 피크 — 주중 스트레스)",
      contentAngle: "스트레스 상황으로 시작. 불닭 끓이는 과정이 카타르시스. 첫 한 입에 표정 변화가 핵심 장면.",
    },

    // ── 2. LITTLE TREAT, BUT SAVAGE ──
    {
      id: "reward_burn",
      position: "Little Treat, But Savage",
      situation: "월급날, 금요일 밤, '나 오늘 수고했다' 싶은 순간",
      emotion: "작은 사치, 자기보상",
      usCopy: "You earned the burn.",
      reason: "미국의 little treat 문화는 일상적 보상을 반복 소비로 만드는 데 매우 유리합니다. $2짜리 보상이 매일의 리추얼이 될 수 있다.",
      color: "#F59E0B",
      icon: "🏆",
      searchVolume: {
        "work life balance": 17000,
        "burned out": 12100,
        "i hate my job": 6200,
      },
      annualVolume: 423600,
      demographics: ["20-30대 직장인", "프리랜서", "gig worker"],
      hookExamples: [
        "You earned the burn.",
        "Friday night. Paycheck hit. Buldak time.",
        "Treat yourself — for $2.",
        "POV: You survived another week",
        "Little treat culture but make it spicy",
        "Payday ritual: step 1 — boil water",
      ],
      shortformFormats: ["Friday night routine", "Payday haul", "Little treat", "Self-care but chaotic"],
      buldakProduct: "Carbonara / Cheese — 보상은 살짝 부드럽게",
      seasonPeak: "금요일 저녁, 월말",
      contentAngle: "퇴근/금요일 저녁의 해방감. 조리 과정 자체가 리추얼. '나를 위한 시간'의 상징으로 불닭.",
    },

    // ── 3. DEADLINE IGNITION ──
    {
      id: "deadline_fuel",
      position: "Deadline Ignition",
      situation: "마감 전날, 시험 기간, 피치덱 밤샘 중간",
      emotion: "피곤함, 각성 필요, 루틴 깨기",
      usCopy: "When sleep is not an option.",
      reason: "미국 소비자는 간식을 식사 대체로도 쓰고, 무엇보다 '빨리 먹을 수 있는 것'을 중요하게 봅니다. 그래서 불닭은 meal보다 fuel ritual이 더 잘 맞습니다.",
      color: "#8B5CF6",
      icon: "⚡",
      searchVolume: {
        "finals week": 4166,
        "exam stress": 553,
        "stressed out": 53166, // 공유
      },
      annualVolume: 694620,
      demographics: ["대학생", "크리에이터/프리랜서", "스타트업 직원"],
      hookExamples: [
        "When sleep is not an option.",
        "Finals week survival kit: Buldak + Red Bull + tears",
        "3AM study break that hits different",
        "Deadline in 4 hours. Buldak in 5 minutes.",
        "The only thing getting me through finals week",
        "My brain at 2AM: 'you need fire noodles right now'",
      ],
      shortformFormats: ["Study with me", "Finals week vlog", "All-nighter routine", "What I eat during finals"],
      buldakProduct: "Original / Stew Type — 빠르게, 확실하게",
      seasonPeak: "12월(기말), 5월(기말), 분기말(직장인)",
      contentAngle: "새벽 책상/노트북 앞. 피곤한 표정. 불닭 5분 조리. 첫 입에 '눈이 번쩍' 리액션. 매운맛=각성.",
    },

    // ── 4. BREAKUP BURN THERAPY ──
    {
      id: "breakup_burn",
      position: "Breakup Burn Therapy",
      situation: "이별 직후, 친구와 욕하면서 털어버릴 때",
      emotion: "울분, 카타르시스",
      usCopy: "Cry first. Burn later.",
      reason: "미국식 밈 감성과 잘 맞습니다. 감정적인 밤에 먹는 음식은 위로보다 강한 감각이 기억에 남습니다. 아이스크림은 위로, 불닭은 발산.",
      color: "#EC4899",
      icon: "💔",
      searchVolume: {
        "breakup": 85000,
        "relationship stress": 480,
      },
      annualVolume: 1025760,
      demographics: ["18-30대", "여성 비율 높음", "밈 문화 소비층"],
      hookExamples: [
        "Cry first. Burn later.",
        "Day 1 post-breakup: ice cream? No. 2x spicy.",
        "Breakup food tier list: Buldak is S-tier",
        "He's not worth your tears. But he's worth your 2x spicy.",
        "The breakup hit hard. The Buldak hit harder.",
        "Eating my feelings — but make it spicy",
      ],
      shortformFormats: ["Breakup recovery vlog", "Emotional eating but spicy", "Tier list", "Storytime + cooking"],
      buldakProduct: "2x Spicy — 울분은 가장 강한 자극으로",
      seasonPeak: "연중 (2월 Valentine's 직후 스파이크)",
      contentAngle: "감정 토로 → 불닭 끓이기 → 매운맛에 눈물 → '이별 눈물인지 매운 눈물인지' 밈. 친구와 함께 먹는 버전도.",
    },

    // ── 5. MOM'S 5 MINUTES ──
    {
      id: "mom_escape",
      position: "Mom's 5 Minutes",
      situation: "아이 재운 후, 엄마의 유일한 나만의 시간",
      emotion: "탈진, 작은 해방, 나를 위한 시간",
      usCopy: "Kids asleep. Fire noodles on.",
      reason: "Mom burnout은 미국에서 거대한 담론. 하지만 '엄마의 야식'은 콘텐츠화되지 않은 영역. 5분 완성이 핵심 — 엄마에게 시간은 없다.",
      color: "#06B6D4",
      icon: "👩‍👧",
      searchVolume: {
        "mom burnout": 1400,
        "parenting stress": 263,
      },
      annualVolume: 19956,
      demographics: ["25-40대 여성", "워킹맘", "전업맘"],
      hookExamples: [
        "Kids asleep. Fire noodles on.",
        "Mom's 5 minutes of peace — and it's spicy",
        "The only 'me time' I get: Buldak at 9:47PM",
        "Touched out. Burned out. Time to burn something.",
        "Mom burnout is real. This is my therapy.",
        "POV: The kids are finally asleep and you have 5 minutes",
      ],
      shortformFormats: ["Mom night routine", "After bedtime ritual", "Mom burnout real talk", "5-minute me time"],
      buldakProduct: "Carbonara / Rose — 엄마의 시간은 살짝 부드럽게",
      seasonPeak: "연중 (여름방학/겨울방학 = 아이 집에 있는 기간 스파이크)",
      contentAngle: "아이 재우는 장면 → 조용해진 집 → 불닭 조리 ASMR → 소파에서 혼자 먹기 → '이게 내 시간'. 감성적이면서도 리얼한 톤.",
    },

    // ── 6. ROAD RAGE RECOVERY ──
    {
      id: "road_rage",
      position: "Road Rage Recovery",
      situation: "운전 중 열받은 후 귀가, 출퇴근 스트레스",
      emotion: "분노, 짜증, 긴장 해소 필요",
      usCopy: "Road rage? Cook rage.",
      reason: "미국은 자동차 문화. Road rage 검색 연 735,996회. 출퇴근 스트레스→귀가 후 음식은 가장 자연스러운 연결이지만, 아무도 콘텐츠화하지 않았다.",
      color: "#DC2626",
      icon: "🚗",
      searchVolume: {
        "road rage": 61333,
      },
      annualVolume: 735996,
      demographics: ["통근 직장인", "30-50대", "교외 거주자"],
      hookExamples: [
        "Road rage? Cook rage.",
        "Someone cut me off today. So I'm making 2x spicy.",
        "My commute was 90 minutes. My dinner took 5.",
        "POV: You just survived LA traffic",
        "The drive home was fire. So is dinner.",
        "Commute rage → Buldak rage. At least this one tastes good.",
      ],
      shortformFormats: ["Commute vlog", "Road rage compilation → cooking transition", "Day in my life", "POV"],
      buldakProduct: "Original — 분노에는 직구로",
      seasonPeak: "연중 (평일 러시아워 6-8PM)",
      contentAngle: "차 안 짜증 → 현관문 열기 → 불닭 끓이기 → 첫 입. 운전 스트레스→불닭 전환이 핵심 트랜지션.",
    },

    // ── 7. SUNDAY SCARIES CURE ──
    {
      id: "sunday_scaries",
      position: "Sunday Scaries Cure",
      situation: "일요일 밤, 월요일이 다가오는 공포",
      emotion: "불안, 우울, 현실 도피",
      usCopy: "Sunday scaries? Make it a Sunday fire.",
      reason: "Sunday scaries는 미국 Gen Z/Millennial의 공유된 감정. 일요일 밤의 불안을 '불닭 리추얼'로 전환하면 매주 반복되는 습관이 된다.",
      color: "#6366F1",
      icon: "😰",
      searchVolume: {
        // sunday scaries는 ListeningMind에서 0 나왔지만 문화적으로 매우 강력한 밈
        // Google Trends와 TikTok에서는 대형 트렌드
        "stressed out": 53166, // 공유 — 일요일 밤 포함
      },
      annualVolume: 637992, // stressed out의 일부
      demographics: ["Gen Z", "Millennial 직장인", "원격근무자"],
      hookExamples: [
        "Sunday scaries? Make it a Sunday fire.",
        "Tomorrow is Monday. Tonight is Buldak.",
        "Sunday night Buldak: the anti-anxiety noodle",
        "The Sunday scaries can't touch me when I have 2x spicy",
        "Coping mechanism: fire noodles every Sunday at 9PM",
        "POV: It's Sunday night and you're not okay",
      ],
      shortformFormats: ["Sunday night routine", "Weekly reset", "Sunday scaries relatable", "Comfort but chaos"],
      buldakProduct: "Cheese / Carbonara — 일요일 밤은 살짝 위로 섞어서",
      seasonPeak: "매주 일요일 밤 8-11PM",
      contentAngle: "일요일 밤 우울한 분위기 → 불닭 조리 → '이것만은 기대된다' → 먹으면서 월요일 준비. 매주 반복 = 리추얼.",
    },
  ],

  // ═══ 추가 스트레스 마이크로 모먼트 (AI 참고용) ═══
  // 위 7개가 핵심이고, 아래는 AI가 변형/조합할 때 참고
  additionalMoments: [
    {situation:"내 팀이 졌을 때",emotion:"분노+실망",hook:"My team lost. I'm going 2x spicy.",demo:"스포츠팬 남성 30-50대",volume:"game day 7,466/mo"},
    {situation:"비 오는 날 우울할 때",emotion:"우울+아늑함",hook:"Rainy day + fire noodles = perfect.",demo:"전 연령",volume:"rainy day food 923/mo"},
    {situation:"SNS에서 열받는 글 봤을 때",emotion:"짜증+무력감",hook:"Doomscrolling → Buldak scrolling",demo:"Gen Z",volume:"소셜 스트레스"},
    {situation:"체육관에서 운동 끝나고",emotion:"성취감+보상",hook:"Post-gym Buldak: capsaicin boosts metabolism",demo:"피트니스 20-30대",volume:"post workout meal 10,633/mo"},
    {situation:"룸메이트/가족과 싸운 후",emotion:"억울함+고립",hook:"When you need to eat alone tonight.",demo:"대학생/자취생",volume:"relationship stress 480/mo"},
    {situation:"고객/클라이언트에게 당한 날",emotion:"억울+분노",hook:"The customer is NOT always right. But Buldak always is.",demo:"서비스업/프리랜서",volume:"frustrated at work 196/mo"},
    {situation:"월요일 아침 알람 후",emotion:"피곤+분노",hook:"Monday morning Buldak: if I'm gonna suffer, at least it'll taste good.",demo:"직장인 전체",volume:"sunday scaries 시리즈"},
    {situation:"돈 부족할 때",emotion:"스트레스+절약",hook:"Bank account: $3. Dinner: still fire.",demo:"대학생/사회초년생",volume:"cheap dinner 43,500/mo"},
    {situation:"생리 중",emotion:"짜증+갈망",hook:"Period cravings said spicy. I listened.",demo:"여성 20-30대",volume:"period food cravings 2,800/mo"},
    {situation:"이사/새 직장 첫날 후",emotion:"불안+탈진",hook:"New city. Same Buldak.",demo:"20-30대",volume:"overwhelmed 90,500/mo"},
    {situation:"뉴스 보고 열받을 때",emotion:"분노+무력감",hook:"Can't fix the world. Can fix dinner in 5 min.",demo:"정치 관심층",volume:"문화적 맥락"},
    {situation:"건강 검진 후 충격",emotion:"불안+자포자기",hook:"Doctor said eat healthy. Capsaicin IS healthy.",demo:"30대+",volume:"capsaicin benefits 4,800/mo"},
  ],

  // ═══ 과학적 근거 (AI 프롬프트용) ═══
  scienceProof: {
    capsaicinEndorphin: "캡사이신이 통증 수용체(TRPV1)를 자극 → 뇌가 엔도르핀 분비 → 자연스러운 기분 전환. 이건 placebo가 아니라 neuroscience.",
    searchGrowth: {
      "capsaicin benefits": "+50%",
      "does spicy food release endorphins": "+57%",
      "spicy food clear sinuses": "+52%",
      "does spicy food boost metabolism": "+22%",
    },
    keyMessage: "매운맛은 단순한 맛이 아니라 신체적 반응이다. 불닭을 먹는 행위는 감정의 물리적 전환이다.",
  },

  // ═══ AI 프롬프트 우선순위 가이드 ═══
  aiPromptPriority: {
    instruction: `숏폼 아이디어를 생성할 때, 다음 우선순위를 따라:

1순위 (5개 중 2~3개): stressRituals에서 출발
   - 스트레스 상황이 HOOK. 불닭은 해결책으로 등장.
   - 후킹 언어는 usCopy 톤을 따라. 브랜드명 없이 시작.
   - 예: "Bad day? Burn it off." → 불닭 끓이는 장면 → 첫 입 리액션

2순위 (5개 중 1~2개): 기존 기회 (간편식, K-Food, 레시피 등)
   - lazy dinner, buldak sauce, hackable 등

3순위 (5개 중 0~1개): 크로스 카테고리
   - 경쟁 카테고리 침투, 다문화 세그먼트 등

모든 아이디어에서:
- HOOK은 미국 소비자의 언어로. 밈/슬랭 활용.
- 불닭은 첫 3초에 등장하지 않음. 상황 공감 → 불닭 등장 → 리액션.
- CTA는 구매 채널 연결 (Walmart, Amazon, H-Mart).
- 과학적 근거(캡사이신→엔도르핀)를 자연스럽게 포함.`,
  },
};

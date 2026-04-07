// ═══════════════════════════════════════════════════════════════
// 불닭 TikTok 숏폼 시나리오 — 플랫폼별 제작 가이드
// ═══════════════════════════════════════════════════════════════
//
// 기존 STEP 4에 YouTube Shorts + Instagram Reels만 있었음.
// 이 파일을 반영하면 STEP 4가 3컬럼(Shorts + Reels + TikTok)으로 확장됨.
//
// ★ 핵심: TikTok은 Shorts/Reels와 같은 아이디어를 "다르게" 만들어야 한다.
//   같은 아이디어라도 TikTok 알고리즘이 밀어주는 조건이 다르기 때문.
// ═══════════════════════════════════════════════════════════════

export const tiktokSpec = {

  // ═══ 1. TikTok 2026 알고리즘 핵심 조건 ═══
  algorithm: {
    // TikTok이 영상을 밀어주는 조건 (2026년 기준)
    rankingFactors: {
      // #1 — 완시청률 (가장 중요)
      completionRate: {
        weight: "40~50% (알고리즘 가중치 최대)",
        threshold: "70% 이상이면 바이럴 배포 시작 (2024년 50%에서 상향)",
        implication: "영상을 끝까지 보게 만드는 구조가 필수. 짧을수록 유리 — 15~30초 최적.",
        buldakApplication: "스트레스 상황(3초) → 불닭 끓이기(15초) → 첫 입 리액션(5초) = 23초 구조. 궁금증→해결의 완결 구조로 완시청 유도.",
      },
      // #2 — 반복 시청 (루프)
      rewatchRate: {
        weight: "Watch time 다음으로 강력",
        benchmark: "20~30%가 좋은 수준",
        implication: "영상 끝이 다시 처음으로 연결되는 루프 구조, 또는 '놓쳤을 때' 다시 보고 싶은 디테일 삽입.",
        buldakApplication: "마지막 한 입 → 영상 처음의 스트레스 장면으로 자연스러운 루프. 또는 '소스 레시피가 뭐였지?' 하고 다시 보게 만드는 정보 삽입.",
      },
      // #3 — 공유 & 저장 (좋아요보다 훨씬 강력)
      sharesAndSaves: {
        weight: "2025년부터 좋아요보다 공유/저장이 더 높은 가중치",
        implication: "공유 트리거: '이건 내 친구한테 보내야 해' 반응. 저장 트리거: '나중에 따라해봐야지' 반응.",
        buldakApplication: "공유 → 스트레스 공감 밈 ('이거 너 얘기야' 태그). 저장 → 불닭 해킹 레시피, 소스 활용법 등 실용 정보.",
      },
      // #4 — 초반 3초 (Qualified View)
      hookIn3Seconds: {
        weight: "5초 이내 시청 유지 = 'Qualified View' — 배포 기준점",
        implication: "첫 3초에 호기심/긴장/즉각적 가치 중 하나를 전달해야. 워밍업 금지.",
        buldakApplication: "첫 프레임: 스트레스 상황 텍스트 오버레이 ('POV: Your boss just said...') + 짜증난 표정. 브랜드명 절대 안 나옴.",
      },
      // #5 — TikTok SEO (검색 발견)
      searchDiscovery: {
        weight: "2026년 필수 — Gen Z 40%가 구글 대신 TikTok 검색",
        layers: [
          "Layer 1: 음성 자동 전사 — 말하는 모든 단어가 인덱싱",
          "Layer 2: 화면 텍스트 OCR — 텍스트 오버레이도 인덱싱",
          "Layer 3: 캡션/해시태그 — 기존과 동일",
        ],
        implication: "영상 첫 3초에 핵심 키워드를 '말하고' + '화면에 쓰고' + '캡션에 넣어야'.",
        buldakApplication: "음성: 'When you're having the worst day...' / 화면 텍스트: 'Bad day dinner in 5 min' / 캡션: 'stress meal buldak ramen hack'",
      },
      // #6 — 오리지널 콘텐츠
      originality: {
        weight: "2025년 9월 업데이트 후 재포스팅/워터마크 콘텐츠 강력 디모션",
        implication: "YouTube/Reels 영상 그대로 올리면 안 됨. TikTok 네이티브로 촬영하거나 편집이 다르게.",
        buldakApplication: "같은 아이디어라도 TikTok 전용 촬영. POV 앵글, 텍스트 오버레이 스타일, 트렌딩 사운드 활용.",
      },
      // #7 — 니치 커뮤니티 타겟팅
      microNiche: {
        weight: "2025년부터 첫 배포 대상이 '마이크로 니치 관심 그룹'으로 변경",
        implication: "넓은 대중이 아니라 특정 관심 그룹에 먼저 보여줌. 해당 그룹에서 성과 나면 확장.",
        buldakApplication: "불닭 니치 커뮤니티: #BuldakChallenge, #SpicyNoodleHack, #RamenTok, #StressBaking → 이 커뮤니티에서 먼저 확산.",
      },
    },

    // 배포 구조 (바이럴까지의 경로)
    distributionTiers: [
      {tier:1, audience:"~200명", condition:"첫 테스트 배치", metric:"5초 이내 이탈율 확인"},
      {tier:2, audience:"~1,000명", condition:"70%+ 완시청 + 초반 참여", metric:"공유/저장 비율 확인"},
      {tier:3, audience:"~10,000명", condition:"Tier 2 성과 유지", metric:"댓글 품질(길이, 깊이)"},
      {tier:4, audience:"~100,000+", condition:"Tier 3 성과 유지 + 트렌딩 시그널", metric:"FYP 노출 + 검색 유입"},
    ],
  },

  // ═══ 2. TikTok vs Shorts vs Reels — 핵심 차이 ═══
  platformComparison: {
    tiktok: {
      maxDuration: "10분 (하지만 15~60초가 최적)",
      optimalDuration: "15~30초 (완시청률 극대화)",
      ratio: "9:16",
      algorithm: "Interest Graph (콘텐츠 기반 추천) — 팔로워 수 무관",
      engagement: "3.15% (3개 플랫폼 중 최고)",
      discovery: "FYP + TikTok Search (Gen Z 40%가 검색엔진으로 사용)",
      strength: "바이럴 잠재력 최고. 0 팔로워도 수백만 뷰 가능.",
      tone: "Raw, 밈 감성, 불완전한 게 진정성. 과도한 편집은 역효과.",
      audio: "트렌딩 사운드 중요하지만, 2026년부터 오리지널 오디오 가중치 상승.",
      textOverlay: "필수. 알고리즘이 OCR로 읽음. 키워드를 화면에 써야 검색 노출.",
      cta: "프로필 링크 (link in bio). 댓글 고정으로 구매 링크.",
      community: "#BuldakTok #RamenTok #SpicyFood #StressEating — 니치 커뮤니티 진입이 핵심",
    },
    shorts: {
      maxDuration: "3분",
      optimalDuration: "30~60초",
      ratio: "9:16",
      algorithm: "추천 + 검색 (YouTube 검색 연동)",
      engagement: "0.40%",
      discovery: "YouTube 추천 + 구글 검색",
      strength: "검색 기반 롱테일 발견. 수명이 길다.",
      tone: "정보형, 비교형, 교육형에 강함",
    },
    reels: {
      maxDuration: "3분",
      optimalDuration: "30~90초",
      ratio: "9:16",
      algorithm: "Social Graph + Interest (팔로워 기반 + 추천 혼합)",
      engagement: "0.65%",
      discovery: "팔로워 피드 + 탐색 탭",
      strength: "기존 팔로워 대상 유지. 비주얼 감성에 강함.",
      tone: "비주얼 완성도, 감성적 편집, 라이프스타일",
    },
  },

  // ═══ 3. TikTok 전용 제작 조건 — 불닭 숏폼 ═══
  productionRules: {
    // 필수 조건 (이걸 안 지키면 알고리즘이 안 밀어줌)
    mustDo: [
      {rule:"첫 1~3초에 HOOK", detail:"텍스트 오버레이 + 감정 표현. 'POV:', 'When...', 'Tell me without telling me' 등의 TikTok 네이티브 포맷 사용. 첫 프레임에 브랜드명 절대 안 나옴.", priority:"CRITICAL"},
      {rule:"15~30초 구조", detail:"완시청률 70% 달성이 핵심. 짧을수록 유리. 15초면 충분하다. 정보를 담으려면 30초. 60초 이상은 상급자만.", priority:"CRITICAL"},
      {rule:"루프 구조", detail:"영상 끝→처음이 자연스럽게 이어지게. 또는 마지막 장면에서 '이걸 다시 보고 싶게' 만드는 정보/서프라이즈 삽입.", priority:"HIGH"},
      {rule:"텍스트 오버레이 = SEO", detail:"화면에 키워드를 쓴다. 알고리즘이 OCR로 읽어서 검색에 노출시킴. 예: 'stress meal in 5 min' 'buldak ramen hack'", priority:"HIGH"},
      {rule:"음성에 키워드", detail:"말하는 내용도 자동 전사되어 검색 인덱싱. 첫 3초에 핵심 키워드를 말해야.", priority:"HIGH"},
      {rule:"오리지널 촬영", detail:"YouTube/Reels 영상 재활용 금지. TikTok 네이티브로. 세로 풀스크린, 폰 촬영 느낌, raw한 질감.", priority:"HIGH"},
      {rule:"트렌딩 사운드 or 오리지널 오디오", detail:"Rising 트렌드 사운드 사용하거나, 오리지널 나레이션. 2026년부터 오리지널 오디오 가중치 상승.", priority:"MEDIUM"},
      {rule:"CTA: 댓글 유도", detail:"'댓글로 알려줘', '이거 해봤어?', '누구한테 보내야 해?' — 댓글 품질(길이, 깊이)이 랭킹에 영향.", priority:"MEDIUM"},
    ],
    // 하면 안 되는 것
    mustNot: [
      {rule:"첫 3초에 브랜드 로고/이름", detail:"즉시 스와이핑. '광고'로 인식되면 알고리즘이 안 밀어줌."},
      {rule:"TV CF 세로 리사이징", detail:"TikTok 유저는 '광고'와 '콘텐츠'를 0.5초 만에 구분. 감각이 다름."},
      {rule:"과도한 편집/프로덕션", detail:"TikTok은 raw한 질감이 진정성. 너무 깔끔하면 역효과."},
      {rule:"Shorts/Reels 워터마크", detail:"다른 플랫폼 워터마크 있으면 알고리즘이 디모션."},
      {rule:"#fyp #foryou 해시태그", detail:"2026년 기준 효과 없음. 니치 해시태그가 더 강력."},
      {rule:"60초 이상 영상 (초기)", detail:"완시청률 70% 달성이 어려워짐. 15~30초로 시작."},
    ],
  },

  // ═══ 4. TikTok 전용 숏폼 시나리오 구조 ═══
  // 기존 shorts/reels 구조에 tiktok 필드 추가
  scenarioTemplate: {
    title: "TikTok 제목 (검색 키워드 포함)",
    hook: "첫 1~3초 텍스트 + 음성 (HOOK)",
    hookD: "후킹 전략 설명",
    duration: "목표 길이 (15s / 30s / 60s)",
    structure: "시간별 구조 (0-3s / 3-10s / 10-20s / 20-30s)",
    scenes: ["씬1 상세", "씬2 상세", "씬3 상세", "씬4 상세"],
    textOverlays: ["화면에 표시할 텍스트 1", "텍스트 2", "텍스트 3"],
    voiceKeywords: ["음성으로 말할 키워드 1", "키워드 2"],
    sound: "트렌딩 사운드 추천 또는 오리지널 오디오",
    loopPoint: "루프 연결 설명 (끝→처음 어떻게 이어지는지)",
    proof: "제품 증거 (자연스럽게 등장)",
    cta: "댓글 유도 CTA",
    hashtags: ["#니치해시태그1", "#니치2", "#니치3", "#브랜드태그"],
    postTime: "업로드 최적시간",
    targetNiche: "초기 배포 타겟 니치 커뮤니티",
    sharesTrigger: "공유 트리거 (왜 친구한테 보내고 싶어지는지)",
    saveTrigger: "저장 트리거 (왜 나중에 다시 보고 싶어지는지)",
  },

  // ═══ 5. 불닭 × 스트레스 리추얼 — TikTok 시나리오 예시 7개 ═══
  exampleScenarios: [
    // ── 1. Rage Release ──
    {
      stressRitual: "rage_release",
      title: "Bad day dinner that fixes everything",
      hook: "POV: Your boss just emailed 'per my last email' at 5:47pm",
      hookD: "POV 텍스트 + 짜증난 표정 클로즈업. TikTok 최강 포맷 'POV:'로 진입. 직장인 공감 즉시 발동.",
      duration: "23s",
      structure: "0-3s: POV 텍스트 + 짜증 표정 / 3-8s: 귀가 + 냉장고 열기 / 8-18s: 불닭 끓이기 ASMR(물 끓는 소리, 소스 짜는 소리) / 18-23s: 첫 한 입 → 표정 변화 → 미소",
      scenes: [
        "POV 텍스트 오버레이: 'your boss just said per my last email at 5:47pm' + 짜증/무표정",
        "현관문 열고 들어옴 → 가방 던지듯 놓음 → 냉장고 열기",
        "불닭 끓이기 몽타주 — 물 끓는 소리, 소스 짜는 소리 ASMR, 젓가락 휘젓기",
        "첫 한 입 → 매운 리액션 → 그런데 미소 → 텍스트: 'worth it' → 페이드 아웃"
      ],
      textOverlays: ["POV: your boss just emailed at 5:47pm", "5 min stress meal", "worth it."],
      voiceKeywords: ["bad day", "five minute dinner", "buldak"],
      sound: "오리지널 ASMR (끓는 물 + 소스 짜는 소리) 또는 trending 'sad but productive' 사운드",
      loopPoint: "마지막 '미소' → 첫 장면 '짜증 표정'으로 대비 루프. '어, 처음 표정이랑 완전 다르네' 하고 다시 봄.",
      proof: "소스 짜는 장면에서 불닭 패키지 자연 노출. 절대 제품 중심 샷 아님.",
      cta: "What's YOUR bad day meal? 👇 댓글로",
      hashtags: ["#baddaymeal", "#stresseating", "#buldak", "#ramenasmr", "#5minutedinner", "#worksucks"],
      postTime: "평일 저녁 6-8PM EST (퇴근 직후 FYP 소비 시간)",
      targetNiche: "#OfficeLife #WorkTok #9to5 #CorporateHumor",
      sharesTrigger: "'이거 완전 내 얘기야' — 직장인 친구한테 태그. @사람이름 넣으면서 공유.",
      saveTrigger: "5분 스트레스 밀 레시피로 저장. '나도 나쁜 날에 해봐야지'.",
    },
    // ── 2. Little Treat ──
    {
      stressRitual: "reward_burn",
      title: "Friday night $2 treat yourself",
      hook: "tell me you survived the week without telling me",
      hookD: "TikTok 밈 포맷 'tell me without telling me' 활용. 금요일 저녁 해방감 즉시 공감.",
      duration: "18s",
      structure: "0-3s: 밈 텍스트 + 소파에 쓰러지는 장면 / 3-8s: 일어나서 불닭 조리 시작 / 8-15s: 소스 추가 + 치즈 토핑 해킹 / 15-18s: 소파에서 먹기 + '이게 내 금요일'",
      scenes: [
        "'tell me you survived the week without telling me' 텍스트 + 소파에 쓰러짐",
        "일어나서 부엌으로 → 불닭 봉지 오픈 → 물 끓이기",
        "소스 + 치즈 토핑 + 계란 추가 — 나만의 해킹",
        "소파 복귀 → 먹으면서 → 텍스트: '$2 Friday ritual' + 만족 표정"
      ],
      textOverlays: ["tell me you survived the week without telling me", "the $2 friday ritual", "you earned this"],
      voiceKeywords: ["friday night", "treat yourself", "two dollar dinner"],
      sound: "트렌딩 'feel good Friday' 사운드 또는 lo-fi beat",
      loopPoint: "마지막 만족 장면 → 첫 쓰러지는 장면 = '매주 반복되는 리추얼'로 루프",
      proof: "$2 가격 텍스트로 가성비 자연 전달. 패키지는 해킹 과정에서 자연 노출.",
      cta: "What's your Friday night ritual? 👇",
      hashtags: ["#fridaynight", "#littletreat", "#buldakhack", "#treatyourself", "#cheapmeals", "#fridayvibes"],
      postTime: "금요일 오후 5-7PM EST",
      targetNiche: "#LittleTreat #FridayMood #SelfCareFriday",
      sharesTrigger: "'금요일이다!!' 분위기에서 친구 태그. '이거 오늘 하자' 반응.",
      saveTrigger: "치즈+계란 해킹 레시피 저장. '다음 금요일에 해볼래'.",
    },
    // ── 3. Deadline Ignition ──
    {
      stressRitual: "deadline_fuel",
      title: "3AM study fuel that actually works",
      hook: "finals week day 4. this is all I'm eating.",
      hookD: "시험 기간 공감 텍스트. 대학생이 가장 많이 공유하는 포맷 — 시험 고통 밈.",
      duration: "20s",
      structure: "0-3s: 텍스트 + 피곤한 표정 + 노트북 화면 / 3-10s: 불닭 끓이기 (최소 컷) / 10-17s: 먹으면서 공부 계속 / 17-20s: '눈이 번쩍' 리액션 + 텍스트",
      scenes: [
        "책상/노트북 앞 + 'finals week day 4' 텍스트 + 시계 3:17AM",
        "일어나서 불닭 끓이기 — 물만 부어서 초간편. 타이머 5:00",
        "책상에서 먹으면서 노트북 보기 → 매운 리액션 → 눈이 커짐",
        "텍스트: 'capsaicin releases endorphins. it's science.' + 다시 공부하는 척"
      ],
      textOverlays: ["finals week day 4", "3AM fuel", "capsaicin releases endorphins. it's science.", "back to studying"],
      voiceKeywords: ["finals week", "study break", "three AM", "buldak"],
      sound: "lo-fi study beat 또는 '고통스러운 공부' 트렌딩 사운드",
      loopPoint: "마지막 '다시 공부' → 처음 '피곤한 표정' = 무한 루프 밤샘 밈",
      proof: "'capsaicin releases endorphins'이라는 과학 팩트를 자연스럽게 텍스트로.",
      cta: "Tag someone in finals week rn 🫠",
      hashtags: ["#finalsweek", "#studywithme", "#3AMstudy", "#buldak", "#collegelife", "#studyfuel"],
      postTime: "밤 10PM-2AM EST (시험기간 야행성 대학생 FYP)",
      targetNiche: "#StudyTok #CollegeTok #FinalsWeek #StudentLife",
      sharesTrigger: "시험 기간 동료 태그 필수. '이거 우리 얘기다' 공유.",
      saveTrigger: "'시험 기간에 해봐야지' 또는 '캡사이신 엔도르핀 사실이야?' 확인하려고 저장.",
    },
    // ── 4. Breakup Burn ──
    {
      stressRitual: "breakup_burn",
      title: "breakup meal that hits harder than he did",
      hook: "day 1 post-breakup. ice cream? no. 2x spicy.",
      hookD: "이별 밈 + 반전 선택. 아이스크림 대신 2x spicy라는 의외성이 후킹.",
      duration: "25s",
      structure: "0-3s: 침대/소파 + 이별 텍스트 / 3-8s: 냉동실 열기 → 아이스크림 쳐다보기 → 거부 / 8-18s: 대신 불닭 2x spicy 끓이기 / 18-25s: 매운맛에 눈물 + 텍스트 '이 눈물은 매운 눈물임'",
      scenes: [
        "침대/소파에 누워있는 장면 + 'day 1 post-breakup' 텍스트",
        "냉동실 오픈 → 아이스크림 클로즈업 → 고개 저으며 닫기 (반전)",
        "불닭 2x spicy 봉지 꺼내기 → 조리 → 소스 전체 투입",
        "매운맛에 눈물 흘리면서 → 텍스트: 'these are spicy tears not breakup tears' → 웃음"
      ],
      textOverlays: ["day 1 post-breakup", "ice cream? no.", "2x spicy.", "these are spicy tears not breakup tears 🥲"],
      voiceKeywords: ["breakup", "ice cream", "two times spicy", "crying"],
      sound: "슬픈 노래 → 중간에 전환되는 밈 사운드 (슬픔→파워 전환)",
      loopPoint: "마지막 웃음 → 처음 슬픈 표정 = 감정 전환의 루프. '이 과정이 힐링이구나' 하고 다시 봄.",
      proof: "2x spicy 패키지 자연 노출. '아이스크림 대신 이걸 선택했다'는 제품 포지셔닝.",
      cta: "breakup food tier list? 👇 drop yours",
      hashtags: ["#breakup", "#postbreakup", "#2xspicy", "#buldak", "#cryingeating", "#breakupmeal", "#spicytears"],
      postTime: "밤 9-11PM EST (감정적 시간대)",
      targetNiche: "#BreakupTok #HealingJourney #SingleLife #EmotionalEating",
      sharesTrigger: "'이거 보내야 해' — 이별한 친구에게 위로 겸 공유. 밈 감성.",
      saveTrigger: "밈으로 저장 + '나도 이별하면 이거 해야지' (바라지 않지만).",
    },
    // ── 5. Mom's 5 Minutes ──
    {
      stressRitual: "mom_escape",
      title: "the only 5 minutes of peace I get as a mom",
      hook: "9:47PM. kids finally asleep. this is my moment.",
      hookD: "엄마의 시간 텍스트. 시간까지 특정하면 리얼리티 급상승. MomTok 공감 폭발.",
      duration: "28s",
      structure: "0-3s: 9:47PM 시계 + 침묵 + 텍스트 / 3-10s: 조용히 부엌으로 이동 + 불닭 조리 / 10-22s: ASMR 조리 (소리 강조 — 아이 깨면 안 됨) / 22-28s: 소파에서 혼자 먹기 + 만족 텍스트",
      scenes: [
        "시계 9:47PM 클로즈업 → 아이 방문 닫는 장면 → 조용히 한숨",
        "발소리 안 내면서 부엌으로 → 불닭 꺼내기 (소리 최소화 코미디)",
        "조리 ASMR — 물 끓는 소리, 소스 짜기, 젓가락 — 전부 낮은 볼륨(아이 깨면 안 됨 코미디)",
        "소파에 앉아서 먹기 → 눈 감고 → 텍스트: 'this is self-care' → 평화로운 표정"
      ],
      textOverlays: ["9:47PM. kids finally asleep.", "don't wake the kids", "mom's 5 minutes", "this is self-care"],
      voiceKeywords: ["mom", "kids asleep", "five minutes", "self care"],
      sound: "조용한 ASMR 또는 whisper 나레이션",
      loopPoint: "마지막 '평화' → 처음 '9:47PM 시계' = '매일 밤 이 순간만 기다린다' 루프",
      proof: "5분 완성이 핵심 메시지 — 엄마에게 시간은 없다. 불닭이 딱 5분.",
      cta: "mom's late night meal? 🤫 댓글로",
      hashtags: ["#momlife", "#momtok", "#afterbedtime", "#metime", "#buldak", "#momsnack", "#parentingishard"],
      postTime: "밤 9-11PM EST (아이 재운 후 MomTok 소비 시간)",
      targetNiche: "#MomTok #MomBurnout #ParentingTok #MomAfterDark",
      sharesTrigger: "엄마 친구에게 '이거 나야' 하고 공유. 남편에게 '이게 내 밤이야' 공유.",
      saveTrigger: "'오늘 밤에 해야지' 저장. 또는 '엄마 친구에게 나중에 보내야지'.",
    },
    // ── 6. Road Rage ──
    {
      stressRitual: "road_rage",
      title: "road rage recovery dinner",
      hook: "someone cut me off on the freeway. so I'm making 2x spicy tonight.",
      hookD: "운전 분노 → 요리 분노 전환. 미국인 공감 100%. 짧고 직접적.",
      duration: "18s",
      structure: "0-3s: 차 안 짜증 텍스트 / 3-6s: 현관문 세게 닫기 / 6-14s: 불닭 끓이기 (강하게 — 분노의 요리) / 14-18s: 첫 입 + 텍스트",
      scenes: [
        "차 안 짜증 표정 (주차장) + 'someone cut me off on the 405' 텍스트",
        "현관문 쾅 닫기 → 가방 던지기",
        "불닭 끓이기 — 소스를 분노하듯 짜기, 물 세게 붓기 (분노의 조리 코미디)",
        "첫 한 입 → 매움 → 텍스트: 'road rage transferred' → 평화"
      ],
      textOverlays: ["someone cut me off on the freeway", "converting road rage into dinner rage", "road rage: transferred."],
      voiceKeywords: ["road rage", "commute", "spicy ramen", "dinner"],
      sound: "분노→평화 전환 밈 사운드",
      loopPoint: "마지막 '평화' → 처음 '차 안 짜증' = 매일 출퇴근 루프",
      proof: "분노의 조리 과정에서 불닭 패키지 자연 노출.",
      cta: "worst commute story? 👇",
      hashtags: ["#roadrage", "#commute", "#dinnerrage", "#buldak", "#drivehome", "#afterwork"],
      postTime: "평일 저녁 6-8PM EST",
      targetNiche: "#CommuteTok #RoadRage #DrivingTok #AfterWork",
      sharesTrigger: "운전하는 친구에게 '이거 너야' 태그.",
      saveTrigger: "'출퇴근 스트레스 밀' 개념으로 저장.",
    },
    // ── 7. Sunday Scaries ──
    {
      stressRitual: "sunday_scaries",
      title: "sunday scaries cure: fire noodles at 9PM",
      hook: "it's 9PM on a Sunday. you know the feeling.",
      hookD: "Sunday scaries = Gen Z/Millennial 공유 감정. '너도 알잖아'로 즉시 공감.",
      duration: "22s",
      structure: "0-3s: 일요일 밤 우울 텍스트 / 3-8s: 소파에 누워 폰 보다가 일어남 / 8-18s: 불닭 카보나라 조리 (부드러운 버전) / 18-22s: 먹으면서 + '내일 월요일이지만 괜찮아' 텍스트",
      scenes: [
        "일요일 밤 + 알람 설정 장면 + 'it's 9PM on a Sunday. you know the feeling.' 텍스트",
        "소파에서 일어남 → 부엌으로 → 'if I'm going down, I'm going down with fire noodles' 텍스트",
        "불닭 카보나라 조리 — 이번엔 살짝 부드럽게 (치즈 추가)",
        "먹으면서 → 텍스트: 'monday can wait. this can't.' → 작은 미소"
      ],
      textOverlays: ["9PM Sunday. you know the feeling.", "if I'm going down, I'm going down spicy", "monday can wait. this can't."],
      voiceKeywords: ["sunday night", "sunday scaries", "monday", "buldak carbonara"],
      sound: "melancholy but cozy 사운드 또는 트렌딩 Sunday night 밈 오디오",
      loopPoint: "마지막 '작은 미소' → 처음 '우울한 일요일' = 매주 일요일 리추얼 루프",
      proof: "카보나라 맛 = 일요일 밤은 살짝 부드럽게. 맛 선택에 감정적 이유 부여.",
      cta: "what's your sunday scaries cure? 👇",
      hashtags: ["#sundayscaries", "#sundaynight", "#mondaydread", "#buldak", "#comfortfood", "#sundayritual"],
      postTime: "일요일 저녁 7-10PM EST",
      targetNiche: "#SundayScaries #SundayNight #MondayDread #WeekendOver",
      sharesTrigger: "'일요일 밤인데 이거 봐' 공유. 같은 감정 공유.",
      saveTrigger: "'다음 일요일에 해봐야지' — 매주 반복 리추얼 시작점.",
    },
  ],

  // ═══ 6. AI 프롬프트에 추가할 TikTok 전용 지시 ═══
  aiPromptAddition: `
TikTok 시나리오도 함께 생성해. YouTube Shorts, Instagram Reels와 같은 아이디어이지만 TikTok 알고리즘에 최적화된 별도 버전이야.

TikTok 필수 조건 (2026):
1. 완시청률 70% 이상 달성을 위해 15~30초로 제작. 구조: HOOK(3초) → 전개(15초) → 결말+루프(5초)
2. 첫 1~3초에 텍스트 오버레이로 HOOK. 'POV:', 'When...', 'Tell me without telling me' 등 TikTok 네이티브 포맷.
3. 루프 구조: 영상 끝이 처음으로 자연스럽게 연결되어 반복 시청 유도.
4. TikTok SEO: 화면 텍스트(OCR) + 음성(자동전사) + 캡션에 핵심 키워드 삽입.
5. 공유 트리거: '이거 보내야 해' 반응을 유도하는 공감/밈 요소.
6. 저장 트리거: 레시피/핵/과학 팩트 등 나중에 다시 보고 싶은 정보.
7. 니치 해시태그: #fyp 대신 #BuldakTok #RamenTok #StressMeal 등 커뮤니티 태그.
8. 톤: Raw, 밈 감성, 불완전한 질감. TV CF 느낌 절대 안 됨.
9. 사운드: 트렌딩 사운드 또는 ASMR 오리지널 오디오.
10. CTA: 댓글 유도. '뭐가 너의 ___?' 형식의 질문.

TikTok 시나리오 출력 형식:
"tiktok": {
  "title": "검색 키워드 포함 제목",
  "hook": "1~3초 HOOK 텍스트",
  "hookD": "후킹 전략 설명",
  "duration": "15s/20s/25s/30s",
  "structure": "0-3s: ___ / 3-10s: ___ / 10-20s: ___ / 20-30s: ___",
  "scenes": ["씬1", "씬2", "씬3", "씬4"],
  "textOverlays": ["화면 텍스트1", "텍스트2", "텍스트3"],
  "sound": "사운드 추천",
  "loopPoint": "루프 구조 설명",
  "proof": "제품 증거",
  "cta": "댓글 유도 CTA",
  "hashtags": ["#니치1", "#니치2", "#니치3"],
  "postTime": "업로드 최적시간",
  "targetNiche": "초기 배포 니치 커뮤니티",
  "sharesTrigger": "공유 트리거",
  "saveTrigger": "저장 트리거"
}
`,
};

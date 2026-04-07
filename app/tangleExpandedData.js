// ═══════════════════════════════════════════════════════════════
// 탱글 확장 데이터 — 국내 캠페인용
// ═══════════════════════════════════════════════════════════════
//
// 브리프: 탱글 국내 캠페인 (2026.04~06)
// 메시지: "프로틴 파스타의 완성, 탱글" / "Still Pasta, Just Better"
// 핵심 타겟: 2535 1인가구 직장인, 다이어트/운동/자기관리 관심
// SOW: KOL 3억 + 미디어 1억 (총 6억), 마이크로 크리에이터 100명+
//
// 기존 "다이어트 면 대안" 데이터는 유지.
// 이 파일은 3개 영역의 확장 데이터를 추가:
// 1. 프로틴 × 파스타 키워드 확장
// 2. 직장인/대학생 점심 오케이션
// 3. 운동/자취/간식 새 맥락
// + 프로틴 단독 검색 전략적 분석
// ═══════════════════════════════════════════════════════════════

export const tangleExpandedData = {

  // ═══ 제품 자산 분석 — 신규 자산 5개 (기존 2개에 추가) ═══
  // 기존: 병아리콩 건면 112,009/mo + 다이어트 면 대안 61,008/mo → 유지
  newAssets: [
    { name: "프로틴 파스타", monthlyVolume: 14360, topKeyword: "다이어트 파스타 (9,180)", growth: "+16%", demographic: "여성 74.8%, 30대 36.6%", note: "가장 큰 진입점" },
    { name: "직장인 점심 대용", monthlyVolume: 5765, topKeyword: "직장인 점심 도시락 (2,050)", growth: "+18~40%", demographic: "여성 82.6%, 30대 35.9%", note: "브리프 직결" },
    { name: "단백질 간식/보상", monthlyVolume: 5126, topKeyword: "단백질 간식 (4,703)", growth: "+24~40%", demographic: "남성 60.8%", note: "프로틴 피로감 흡수" },
    { name: "운동 후 단백질 보충", monthlyVolume: 2456, topKeyword: "운동 후 식사 (2,456)", growth: "-17%", demographic: "여성 68.2%", note: "운동 관심사 타겟" },
    { name: "자취생 간단한 한끼", monthlyVolume: 1250, topKeyword: "자취 한끼 (313, +45%)", growth: "+45%", demographic: "1인가구 20-30대", note: "최고 성장률" },
  ],

  // ═══ 전략 프레임: 프로틴 단독 검색 분석 결과 ═══
  proteinInsight: {
    headline: "프로틴 44,066/mo는 거대하지만, 그들은 파우더를 찾고 있다",
    data: {
      "프로틴": { volume: 44066, male: 68.7, intent: "N+T", note: "압도적으로 파우더/쉐이크/보충제 검색. 음식 연결 거의 없음" },
      "프로틴 추천": { volume: 18283, male: 83.9, growth: "+20%", intent: "I+T", note: "남성 압도적. 보충제 구매 목적" },
    },
    gap: "프로틴 = 파우더. '프로틴 음식'(51/mo), '프로틴 식품'(0/mo)은 사실상 존재하지 않음",
    crack: "'프로틴 간식' 423/mo (+40%)와 '단백질 간식' 4,703/mo (+24%)에서 균열 시작. 파우더 피로감이 생기고 있다.",
    strategy: "프로틴이라는 문으로는 못 들어간다. '파스타인데 프로틴이 있다'로 들어간다. 광고주 메시지 'Still Pasta, Just Better'가 정확히 이 포지션.",
    shortformApproach: {
      wrong: "프로틴 파스타 드세요 (프로틴 검색자는 파우더를 원함)",
      right: [
        "다이어트 중인데 파스타 먹고 싶을 때 (14,360/mo 진입점)",
        "점심에 뭐 먹지? 이거 단백질 20g (직장인 점심 진입점)",
        "프로틴 쉐이크만 먹다가 지겨울 때 (프로틴 피로감 진입점)",
        "운동 후 식사 뭐 먹지? 5분 파스타 (2,456/mo 진입점)",
      ],
    },
  },

  // ═══ 영역 1: 프로틴 × 파스타 확장 키워드 ═══
  proteinPastaKeywords: [
    // ★ 거대 진입점
    { keyword: "다이어트 파스타", volume: 9180, growth: "+16%", female: 74.8, age: "30대 36.6%", intent: "I", feature: "AI Overview + 비디오", note: "★ 거대 카테고리. '다이어트할 때 파스타 먹어도 돼?' 질문" },
    { keyword: "파스타 다이어트", volume: 5180, growth: "안정", female: 63.3, age: "30대 38.7%", intent: "I", note: "위와 동일 맥락. 합치면 월 14,360회" },
    // 편의점 채널
    { keyword: "편의점 파스타", volume: 1546, growth: "-19%", female: 75.1, age: "30대 32.3%", intent: "C(비교)", note: "탱글 유통채널 직결. 비교 검색" },
    // 단백질 파스타 카테고리
    { keyword: "파스타 단백질", volume: 936, growth: "안정", male: 58.8, age: "30대 39.4%", intent: "I", note: "'파스타에 단백질 얼마나?' 궁금증" },
    { keyword: "단백질 파스타", volume: 493, growth: "-8%", male: 56.3, age: "30대 38.9%", intent: "I+C", feature: "비디오 결과", note: "제품 카테고리 검색. 2024.05 피크(840)" },
    { keyword: "프로틴 파스타", volume: 116, growth: "+8%", age: "25-29세 32.2%, 30대 33.9%", intent: "T(구매)", competition: "HIGH", note: "★ 2025.05에 810 피크 = 탱글 출시 영향. 구매 인텐트" },
    // 탱글 직접 검색 (브랜드 인지)
    { keyword: "탱글 파스타 다이어트", volume: 100, growth: "NEW", female: 74.6, age: "20-24세 22%, 25-29세 25.4%", intent: "I", note: "★★ 2025.05부터 신규 생성! 탱글 인지 시작의 증거" },
    // 하락 키워드 (참고용)
    { keyword: "프로틴 면", volume: 50, growth: "-20%", intent: "T", note: "하락 중. '면'보다 '파스타'가 탱글에 맞는 표현" },
    { keyword: "고단백 면", volume: 56, growth: "-28%", intent: "C", note: "하락 중" },
    { keyword: "하이 프로틴 치킨면", volume: 150, growth: "-97%", note: "2025.11~12에만 피크(390~430)후 급하락. 일시적 트렌드" },
  ],

  // ═══ 영역 2: 직장인/대학생 점심 오케이션 ═══
  lunchOccasionKeywords: [
    // ★ 거대 진입점
    { keyword: "점심 메뉴 추천", volume: 80730, growth: "안정", female: 66.6, age: "40대 29.2%, 30대 21%", intent: "I", note: "거대 카테고리. 숏폼 진입점으로 활용" },
    // 직장인 점심 코어
    { keyword: "직장인 점심 도시락", volume: 2050, growth: "+18%", female: 82.6, age: "30대 35.9%, 40대 27.9%", intent: "C", competition: "HIGH", cpc: 1.03, note: "★ 우리 타겟 정중앙. 여성 압도적 + 성장" },
    { keyword: "직장인 점심", volume: 1023, growth: "-14%", female: 70.7, age: "30대 32.8%", intent: "I", cpc: 6.73, note: "CPC 고가 = 광고주들이 경쟁하는 키워드" },
    { keyword: "편의점 점심", volume: 620, growth: "-20%", female: 67.4, age: "30대 39.1%", intent: "I", note: "탱글 유통채널 직결" },
    { keyword: "직장인 점심 메뉴", volume: 596, growth: "-34%", female: 65.4, age: "40대 29.8%", intent: "C", note: "" },
    // ★ 구매 인텐트 키워드
    { keyword: "점심 대용", volume: 463, growth: "-7%", female: 63.4, age: "30대 37.2%", intent: "T(구매)", competition: "HIGH", cpc: 0.83, note: "★ 구매 인텐트! 이 사람들은 뭘 살지 찾고 있다" },
    { keyword: "점심 식사 대용", volume: 160, growth: "-13%", age: "30대 24.6%", intent: "T(구매)", competition: "HIGH", note: "구매 인텐트" },
    { keyword: "한끼대용", volume: 240, growth: "안정", female: 61, age: "30대 38.2%", intent: "T(구매)", competition: "HIGH", note: "구매 인텐트" },
    { keyword: "점심 간편식", volume: 160, growth: "+36%", male: 51.2, age: "30대 35%, 40대 31.3%", intent: "T(구매)", competition: "HIGH", cpc: 0.91, note: "★ 급성장 + 구매 인텐트" },
    // ★ 급성장 키워드
    { keyword: "회사 점심 메뉴 추천", volume: 213, growth: "+40%", female: 67.1, age: "25-29세 30.6%", intent: "I", note: "★ 급성장! 젊은 직장인 여성" },
    { keyword: "가벼운 점심 메뉴 추천", volume: 130, growth: "+36%", female: 74.6, age: "30대 25.4%", intent: "I", note: "급성장. 탱글이 답할 수 있는 질문" },
    { keyword: "직장인 점심 도시락 메뉴", volume: 306, growth: "+19%", female: 87.4, age: "30대 29.5%", intent: "I", note: "여성 87% 압도적" },
    // 다이어트 점심
    { keyword: "다이어트 점심 메뉴 추천", volume: 340, growth: "-9%", female: 67.2, age: "25-29세 25%", intent: "I", note: "기존 다이어트 면 대안 맥락과 겹침" },
    { keyword: "직장인 다이어트 점심", volume: 120, growth: "-38%", intent: "I", note: "하락 중이지만 맥락 자체는 유효" },
    // 회사 점심
    { keyword: "회사 점심 메뉴", volume: 206, growth: "+4%", female: 64.9, age: "25-29세 27.8%", intent: "C", note: "젊은 직장인" },
    { keyword: "점심 배달", volume: 776, growth: "-2%", age: "40대 35.4%, 50대 38.2%", intent: "N+C", note: "40-50대 주도. 탱글 타겟과 다소 다름" },
  ],

  // ═══ 영역 3: 운동/자취/간식 맥락 ═══
  newContextKeywords: [
    // ★ 거대한 단백질/프로틴 간식
    { keyword: "단백질 간식", volume: 4703, growth: "+24%", female: 59.8, age: "30대 37.5%", intent: "T(구매)", competition: "HIGH", note: "★ 거대 + 구매 인텐트 + 성장. 탱글이 간식 맥락에서도 노출 가능" },
    { keyword: "프로틴 간식", volume: 423, growth: "+40%", male: 60.8, age: "30대 44.6%", intent: "T(구매)", competition: "HIGH", note: "★ 급성장 + 남성 우세 + 구매. 남성 세그먼트 기회" },
    // 운동 맥락
    { keyword: "운동 후 식사", volume: 2456, growth: "-17%", female: 68.2, age: "30대 31.9%", intent: "I", note: "브리프의 '운동 관심사' 타겟 직결. 여성이 더 많이 검색" },
    // 다이어트 간편식
    { keyword: "다이어트 간편식", volume: 890, growth: "+13%", female: 73.1, age: "30대 39.1%", intent: "C(비교)", competition: "100(최고)", note: "광고경쟁 최고치. 모든 다이어트 식품 브랜드가 경쟁" },
    // 자취/1인가구
    { keyword: "자취 한끼", volume: 313, growth: "+45%", intent: "I", note: "★ 최고 성장률! 자취생/1인가구 맥락 폭발 중" },
    { keyword: "간단한 한끼 요리", volume: 362, growth: "+15%", intent: "I", note: "자취/1인가구" },
  ],

  // ═══ 오케이션 맵 — 탱글의 7개 침투 맥락 ═══
  occasionMap: {
    // 기존
    occasion1: {
      name: "다이어트 중 면 욕구",
      status: "기존 유지",
      keywords: ["곤약면", "두부면", "저칼로리 면", "다이어트 면"],
      note: "기존 데이터 그대로 유지. 이하 6개가 신규 추가.",
    },
    // ★ NEW
    occasion2: {
      name: "다이어트 중 파스타 욕구",
      status: "★ NEW — 가장 큰 진입점",
      totalVolume: 14360, // 다이어트 파스타 9,180 + 파스타 다이어트 5,180
      keywords: ["다이어트 파스타", "파스타 다이어트", "다이어트 파스타면", "다이어트 크림 파스타"],
      demographic: "여성 74.8%, 30대 36.6%",
      hook: "'다이어트 중인데 파스타가 먹고 싶어' → '이거 단백질 20g인데 파스타야'",
      trialCTA: "편의점에서 하나만 사서 먹어보세요",
    },
    occasion3: {
      name: "직장인 점심 대용",
      status: "★ NEW — 브리프 직결",
      totalVolume: 3072, // 직장인 점심 도시락 2,050 + 직장인 점심 1,023
      keywords: ["직장인 점심 도시락", "점심 대용", "점심 간편식", "가벼운 점심 메뉴 추천"],
      demographic: "여성 82.6%, 30대 35.9%",
      hook: "'오늘 점심 뭐 먹지?' → '5분 파스타인데 단백질이 이만큼'",
      trialCTA: "오늘 점심 대신 이거 한번",
      offlineConnect: "런치타임 오피스 샘플링과 연계 — 숏폼 촬영 + 현장 Trial",
    },
    occasion4: {
      name: "편의점 한끼",
      status: "★ NEW — 유통채널 직결",
      totalVolume: 2166, // 편의점 파스타 1,546 + 편의점 점심 620
      keywords: ["편의점 파스타", "편의점 점심", "편의점 점심 추천"],
      demographic: "여성 75.1%, 30대 32.3%",
      hook: "'편의점에서 뭐 사먹지?' → '이 파스타 단백질 20g이야'",
      trialCTA: "편의점 가서 이것만 사보세요",
    },
    occasion5: {
      name: "운동 후 단백질 보충",
      status: "★ NEW — 운동 관심사 타겟",
      totalVolume: 2456, // 운동 후 식사
      keywords: ["운동 후 식사", "프로틴 간식", "프로틴 쉐이크 지겨울 때"],
      demographic: "여성 68.2%, 30대 31.9%",
      hook: "'프로틴 쉐이크만 먹다가 지겨울 때' → '이거 파스타인데 프로틴이야'",
      trialCTA: "운동 후 한번 먹어보세요",
    },
    occasion6: {
      name: "자취생 간단한 한끼",
      status: "★ NEW — 1인가구 급성장",
      totalVolume: 675, // 자취 한끼 313 + 간단한 한끼 요리 362
      keywords: ["자취 한끼", "간단한 한끼 요리", "한끼대용", "자취 간편식"],
      growth: "+45% (자취 한끼)",
      hook: "'자취생 5분 한끼' → '전자레인지 돌리면 끝인데 단백질 20g'",
      trialCTA: "자취방 전자레인지로 5분",
    },
    occasion7: {
      name: "단백질 간식/보상",
      status: "★ NEW — 프로틴 피로감 흡수",
      totalVolume: 5126, // 단백질 간식 4,703 + 프로틴 간식 423
      keywords: ["단백질 간식", "프로틴 간식", "프로틴 식품"],
      demographic: "남성 60.8%(프로틴 간식), 여성 59.8%(단백질 간식)",
      growth: "+24~40%",
      hook: "'프로틴 파우더만 먹다 지겨워' → '이건 파스타야. 근데 프로틴이 있어'",
      trialCTA: "쉐이크 대신 오늘 이거 한번",
      note: "남성 세그먼트 기회. 브리프에 없지만 확장 가능",
    },
  },

  // ═══ AI 프롬프트 업데이트 — 탱글 전용 ═══
  aiPromptUpdate: {
    brandMessage: "프로틴 파스타의 완성, 탱글 / Still Pasta, Just Better",
    toneGuide: "프로틴을 앞세우지 않는다. 파스타(맛/편리/만족)를 먼저 보여주고, '근데 이거 단백질 20g이야'를 마지막에 reveal한다.",
    ctaLevels: {
      awareness: "'이런 파스타 있는 거 알아요?'",
      trial: "'편의점에서 하나만 사서 먹어보세요' / '오늘 점심 대신 이거 한번'",
      purchase: "'쿠팡 링크' / '네이버 스토어'",
    },
    priorityOccasions: [
      "1순위: 다이어트 중 파스타 욕구 (14,360/mo) — 가장 큰 진입점",
      "2순위: 직장인 점심 대용 (3,072/mo) — 브리프 직결 + 오프라인 연계",
      "3순위: 단백질 간식/보상 (5,126/mo) — 프로틴 피로감 흡수",
      "4순위: 편의점 한끼 (2,166/mo) — 유통채널 직결",
      "5순위: 운동 후 단백질 보충 (2,456/mo) — 운동 관심사 타겟",
      "6순위: 자취생 간단한 한끼 (675/mo) — 급성장 +45%",
      "7순위: 다이어트 중 면 욕구 — 기존 유지",
    ],
  },

  // ═══ 크리에이터 100명 매칭 가이드 ═══
  creatorMatchingGuide: {
    note: "7개 오케이션 × 크리에이터 카테고리 = 100명+ 매칭 구조",
    categories: [
      { category: "다이어트 일상", count: 20, occasions: ["다이어트 파스타 욕구", "다이어트 간편식"], content: "다이어트 중 파스타 먹어도 되는 이유" },
      { category: "직장인 브이로그", count: 15, occasions: ["직장인 점심", "회사 점심"], content: "오피스 점심 루틴에 탱글 등장" },
      { category: "운동/헬스", count: 15, occasions: ["운동 후 식사", "프로틴 간식"], content: "운동 후 5분 단백질 파스타" },
      { category: "자취/1인 요리", count: 15, occasions: ["자취 한끼", "간단한 한끼"], content: "자취생 전자레인지 한끼" },
      { category: "편의점 리뷰", count: 10, occasions: ["편의점 파스타", "편의점 점심"], content: "편의점 신상 파스타 리뷰" },
      { category: "먹방/ASMR", count: 10, occasions: ["파스타 먹방"], content: "탱글 ASMR 먹방" },
      { category: "헬시 레시피", count: 10, occasions: ["단백질 간식", "다이어트 레시피"], content: "탱글 활용 헬시 레시피" },
      { category: "대학생 일상", count: 5, occasions: ["자취 한끼", "점심 대용"], content: "대학생 점심 루틴" },
    ],
    boostingLogic: "100개 콘텐츠 중 참여율 TOP 10~20% → 미디어 부스팅 집중. 어떤 오케이션이 가장 반응이 좋은지 데이터로 확인 후 2차 웨이브에 해당 오케이션 크리에이터 추가 확보.",
  },
};

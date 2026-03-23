// 삼양 ShortForm Engine — 확인된 기회 매트릭스
// 방법 1: 데이터 검증된 자산 × 맥락 교차점 (항상 표시)
// 방법 2: AI 추가 발견 (Claude API가 재생성, 하단 표시)

export const confirmedOpportunities = {

  // ═══ 탱글 ═══
  "tgl": [
    {
      asset: "단백질 15g",
      assetIcon: "💪",
      context: "WHO",
      contextDetail: "운동하는 30대 (남성 57%)",
      when: "운동 후 식사 고민",
      keyword: "운동 후 라면",
      volume: 278,
      verified: true,
      pathfinder: "'운동 후 식사추천' → '운동 후 라면' 경로 실제 존재",
      shortformIdea: "PT 트레이너가 추천하는 운동 후 식사 TOP3",
      relatedVolume: { "운동 후 단백질": 2643, "운동 후 식사": 2456 },
      creators: {
        categories: ["피트니스/PT 트레이너", "건강식단 크리에이터", "운동 브이로거"],
        reason: "운동 후 식사 맥락 — 피트니스 크리에이터가 추천하면 '광고'가 아닌 '전문가 추천'으로 인식",
        recommended: {
          mega: [ // 100만+ 구독자 — 브랜딩 임팩트, 비용 높음
            { name: "핏블리", platform: "YouTube", subscribers: "273만", category: "피트니스", note: "운동+식단 콘텐츠, 30대 남성 타겟 정확히 일치" },
          ],
          mid: [ // 10만~100만 — 밸런스 좋음
            { name: "땅끄부부", platform: "YouTube", subscribers: "236만", category: "피트니스/다이어트", note: "다이어트 식단+운동 일상, 커플 타겟" },
            { name: "오늘의 운동", platform: "YouTube", subscribers: "45만", category: "홈트레이닝", note: "운동 후 식단 콘텐츠 다수, 여성 타겟" },
          ],
          micro: [ // 1만~10만 — 참여율 높음, 비용 효율적, 컨트롤 용이
            { name: "PT민규", platform: "Instagram", followers: "3.2만", category: "PT트레이너", note: "실제 PT 트레이너, 운동 후 식단 일상 공유. 전문가 신뢰도 + 낮은 비용" },
            { name: "헬스집밥", platform: "Instagram", followers: "2.8만", category: "운동+요리", note: "운동 후 간편식 레시피 전문. 탱글과 콘셉트 정확히 일치" },
            { name: "근육키우는 직장인", platform: "YouTube", subscribers: "1.5만", category: "직장인 피트니스", note: "직장인+운동+식단 일상, 타겟 정확 + 협업 용이" },
          ],
        },
      },
    },
    {
      asset: "다이어트 면 대안",
      assetIcon: "🥗",
      context: "PAIN",
      contextDetail: "다이어트 중 면 먹고 싶은 욕구",
      when: "다이어트 중 야식 욕구",
      keyword: "다이어트 중 라면 먹고 싶을때",
      volume: 201,
      verified: true,
      pathfinder: "'다이어트 라면' ClusterFinder에서 '단백질 라면', '건면 다이어트' 키워드 확인",
      shortformIdea: "다이어트 중 면이 먹고 싶을 때, 이걸 먹으면 됩니다",
      relatedVolume: { "다이어트 야식": 6736, "다이어트 간식": 31046, "다이어트 라면": 7203 },
      creators: {
        categories: ["다이어트 일상 브이로거", "건강 레시피 크리에이터", "영양사/식단 전문가"],
        reason: "다이어트 중 면 욕구 — 다이어트 크리에이터가 '나도 이걸 먹는다'고 하면 죄책감 해소",
        recommended: {
          mega: [
            { name: "다이어트 짱", platform: "YouTube", subscribers: "42만", category: "다이어트", note: "다이어트 식단 전문, 타겟 여성 2030 정확히 일치" },
          ],
          mid: [
            { name: "헬스영양사", platform: "YouTube", subscribers: "35만", category: "영양/식단", note: "전문가 관점에서의 식품 리뷰, 신뢰도 높음" },
          ],
          micro: [
            { name: "수지네 간식창고", platform: "Instagram", followers: "1.8만", category: "건강간식 리뷰", note: "건강 간식/다이어트 식품 리뷰 전문. 팔로워 참여율 높음" },
            { name: "다이어트 하는 직장인", platform: "Instagram", followers: "4.5만", category: "다이어트 일상", note: "직장인 다이어트 일상, '면 먹고 싶을 때' 공감 콘텐츠" },
            { name: "오늘도 건강식", platform: "YouTube", subscribers: "2.1만", category: "건강 레시피", note: "건강한 간편식 리뷰 전문, 협업 비용 효율적" },
          ],
        },
      },
    },
    {
      asset: "병아리콩 건면",
      assetIcon: "🌾",
      context: "NEED",
      contextDetail: "콩담백면보다 나은 대안 탐색",
      when: "다이어트 면 비교할 때",
      keyword: "콩담백면",
      volume: 11156,
      verified: true,
      pathfinder: "'다이어트 면' → '콩담백면' 경로 압도적 — 탱글 부재",
      shortformIdea: "콩담백면만 알고 있다면, 이걸 아직 모르는 겁니다",
      relatedVolume: { "다이어트 면": 1633, "다이어트 파스타": 9180 },
      creators: {
        categories: ["식품 리뷰/비교 크리에이터", "편의점 리뷰어", "자취 요리 크리에이터"],
        reason: "면 비교 맥락 — 리뷰어가 직접 비교하면 '콩담백면보다 나은 대안'이 자연스럽게 전달",
        recommended: {
          mega: [
            { name: "소프", platform: "YouTube", subscribers: "120만", category: "자취 요리", note: "자취생 요리, 간편식 리뷰와 자연스러운 연결" },
          ],
          mid: [
            { name: "먹어볼래", platform: "YouTube", subscribers: "85만", category: "식품 리뷰", note: "신제품 비교 리뷰 전문, 구독자 신뢰도 높음" },
            { name: "편스토랑", platform: "YouTube", subscribers: "55만", category: "편의점 리뷰", note: "편의점 신제품 리뷰, 젊은 여성 타겟" },
          ],
          micro: [
            { name: "면스타그램", platform: "Instagram", followers: "3.7만", category: "면 리뷰", note: "면류 전문 리뷰어, 콩담백면 vs 탱글 비교 콘텐츠 적합. 비용 효율적" },
            { name: "편의점 신상 알리미", platform: "Instagram", followers: "5.2만", category: "편의점 리뷰", note: "편의점 신상품 리뷰, 팔로워 참여율 높음" },
            { name: "자취생 장보기", platform: "YouTube", subscribers: "1.8만", category: "자취 간편식", note: "자취 간편식 추천 전문, 직접 비교 콘텐츠 강점" },
          ],
        },
      },
    },
    {
      asset: "4분 간편조리",
      assetIcon: "⏱️",
      context: "WHO",
      contextDetail: "자취 1인가구 여성 (여성 80%, 25-29세 29%)",
      when: "바쁜 평일 저녁",
      keyword: "자취생 간편식",
      volume: 120,
      verified: true,
      shortformIdea: "자취 3년차, 라면으로 단백질 15g 채우는 법",
      relatedVolume: { "혼밥 레시피": 1526, "자취 라면": 129 },
      creators: {
        categories: ["자취 브이로거", "1인가구 라이프스타일", "혼밥 크리에이터"],
        reason: "자취 일상 맥락 — 자취 크리에이터의 일상 속 자연스러운 제품 등장이 가장 효과적",
        recommended: {
          mega: [
            { name: "곰돌이숲", platform: "YouTube", subscribers: "90만", category: "자취 브이로그", note: "자취 일상+요리, 20대 여성 코어 팬층" },
          ],
          mid: [
            { name: "하루한끼", platform: "YouTube", subscribers: "28만", category: "간편 요리", note: "간단 레시피 전문, 4분 조리와 콘셉트 일치" },
          ],
          micro: [
            { name: "자취일기_", platform: "Instagram", followers: "4.1만", category: "자취 일상", note: "자취 일상 공유, 간편식 리뷰 콘텐츠. 협업 용이" },
            { name: "혼밥연구소", platform: "YouTube", subscribers: "2.3만", category: "혼밥 레시피", note: "1인 간편식 전문, 4분 조리 콘셉트와 완벽 매칭" },
            { name: "월급쟁이 자취생", platform: "Instagram", followers: "1.9만", category: "자취/절약", note: "가성비 간편식 추천, 20대 여성 팔로워 중심" },
          ],
        },
      },
    },
  ],

  // ═══ 맵탱 ═══
  "mep": [
    {
      asset: "캡사이신 효과",
      assetIcon: "🔬",
      context: "INTEREST",
      contextDetail: "스트레스 해소에 관심있는 직장인",
      when: "스트레스 받을 때",
      keyword: "스트레스 풀리는 매운 음식",
      volume: 30,
      verified: true,
      pathfinder: "'스트레스 해소 음식' → '스트레스 풀리는 매운 음식' 경로 실제 존재",
      shortformIdea: "매운 거 먹으면 진짜 스트레스가 풀릴까?",
      relatedVolume: { "스트레스 해소 음식": 300, "매운 음식": 12273 },
      creators: {
        categories: ["직장인 브이로거", "과학/건강 정보 크리에이터", "퇴근 후 일상 크리에이터"],
        reason: "스트레스 해소 맥락 — 직장인 크리에이터의 '퇴근 후 매운 거 먹기'가 공감 극대화",
        recommended: {
          mega: [
            { name: "과학쿠키", platform: "YouTube", subscribers: "120만", category: "과학 정보", note: "캡사이신 효과 과학적 설명 + 제품 연결" },
          ],
          mid: [
            { name: "퇴근 후 한 잔", platform: "Instagram", followers: "15만", category: "직장인 일상", note: "퇴근 후 스트레스 풀기 콘텐츠와 자연스러운 맥락" },
          ],
          micro: [
            { name: "야근맨", platform: "Instagram", followers: "3.5만", category: "직장인 일상", note: "야근 후 스트레스 해소 일상, 매운맛과 자연스러운 연결. 비용 낮음" },
            { name: "스트레스 해소 연구소", platform: "YouTube", subscribers: "1.2만", category: "멘탈/힐링", note: "스트레스 해소법 콘텐츠, 캡사이신 과학 + 맵탱 연결 가능" },
          ],
        },
      },
    },
    {
      asset: "5가지 매운맛",
      assetIcon: "🌶️",
      context: "PAIN",
      contextDetail: "매운 거 먹고 싶은 욕구 (여성 91%!)",
      when: "매운 거 당길 때",
      keyword: "매운거 먹고 싶을때",
      volume: 118,
      trend: 0.68,
      verified: true,
      shortformIdea: "매운 거 먹고 싶을 때 이거 하나면 됩니다",
      relatedVolume: { "매운 라면 추천": 790, "매운 라면 순위": 4126 },
      demo: "여성 91%, +68% 급성장 — 여성의 매운맛 욕구 폭발 중",
      creators: {
        categories: ["먹방 크리에이터", "ASMR 크리에이터", "매운맛 전문 리뷰어"],
        reason: "매운맛 욕구 맥락 — 먹방/ASMR 크리에이터의 매운맛 리액션이 시청 욕구+구매 욕구 동시 자극",
        recommended: {
          mega: [
            { name: "쯔양", platform: "YouTube", subscribers: "1,400만+", category: "먹방", note: "한국 최대 먹방, 매운맛 콘텐츠 다수. 비용 매우 높음" },
          ],
          mid: [
            { name: "열정에 기름부어라", platform: "YouTube", subscribers: "45만", category: "매운맛 전문", note: "매운맛 등급별 리뷰 전문, 맵탱 5단계와 콘셉트 일치" },
          ],
          micro: [
            { name: "매운맛 도전기", platform: "YouTube", subscribers: "5.8만", category: "매운맛 챌린지", note: "매운맛 전문 채널, 맵탱 5단계 리뷰에 최적. 비용 효율적" },
            { name: "라면 먹는 여자", platform: "Instagram", followers: "2.7만", category: "라면 리뷰", note: "여성 91% 타겟 일치, 라면 전문 리뷰. 협업 컨트롤 용이" },
            { name: "매운거 좋아하는 남자", platform: "TikTok", followers: "4.3만", category: "매운맛 리액션", note: "매운맛 리액션 전문, 숏폼 네이티브 크리에이터" },
          ],
        },
      },
    },
    {
      asset: "5가지 매운맛",
      assetIcon: "🌶️",
      context: "NEED",
      contextDetail: "맵소디(오뚜기) 이탈 소비자",
      when: "매운 라면 비교할 때",
      keyword: "맵소디",
      volume: null,
      verified: true,
      pathfinder: "'맵소디 라면' → '오뚜기 맵소디' → '맵탱' 유입 경로 확인",
      shortformIdea: "맵소디 말고 이거 먹어봤어?",
      relatedVolume: { "매운 라면 추천": 790 },
      creators: {
        categories: ["식품 비교 리뷰어", "편의점 신상 리뷰어", "매운맛 랭킹 크리에이터"],
        reason: "비교/전환 맥락 — 리뷰어의 직접 비교가 '맵소디→맵탱' 전환을 가장 자연스럽게 유도",
        recommended: {
          mega: [
            { name: "먹어볼래", platform: "YouTube", subscribers: "85만", category: "식품 리뷰", note: "신제품 비교 전문, 객관적 리뷰로 신뢰도 높음" },
          ],
          mid: [
            { name: "편의점 탐험대", platform: "YouTube", subscribers: "30만", category: "편의점 리뷰", note: "편의점 신상 비교 전문" },
          ],
          micro: [
            { name: "라면 비교왕", platform: "YouTube", subscribers: "2.5만", category: "라면 비교", note: "라면 비교 리뷰 전문, 맵소디 vs 맵탱 직접 비교 가능. 비용 낮음" },
            { name: "오늘의 편의점", platform: "Instagram", followers: "6.1만", category: "편의점 신상", note: "편의점 신상 리뷰, 비교 포맷 강점" },
          ],
        },
      },
    },
    {
      asset: "챌린지 콘텐츠",
      assetIcon: "🎬",
      context: "INTEREST",
      contextDetail: "먹방/챌린지 시청자",
      when: "숏폼 소비 시간",
      keyword: "매운맛 챌린지",
      volume: 162,
      verified: true,
      shortformIdea: "매운맛 5단계, 어디까지 가능해?",
      relatedVolume: { "먹방": 2787350 },
      creators: {
        categories: ["챌린지 크리에이터", "커플/친구 유튜버", "리액션 크리에이터"],
        reason: "챌린지 맥락 — 챌린지 콘텐츠는 크리에이터의 리액션이 바이럴의 핵심. 맵탱 5단계와 완벽한 포맷 매칭",
        recommended: {
          mega: [
            { name: "영국남자", platform: "YouTube", subscribers: "600만+", category: "리액션/챌린지", note: "외국인 리액션 + 매운맛 챌린지 = 글로벌 바이럴. 비용 높음" },
          ],
          mid: [
            { name: "떵개떵", platform: "YouTube", subscribers: "250만", category: "먹방/챌린지", note: "매운맛 챌린지 다수, 숏폼 전문" },
          ],
          micro: [
            { name: "챌린지 브로", platform: "YouTube", subscribers: "7.2만", category: "챌린지 전문", note: "다양한 챌린지 콘텐츠, 맵탱 5단계와 포맷 매칭. 협업 유연" },
            { name: "외국인 친구들", platform: "TikTok", followers: "5.5만", category: "외국인 리액션", note: "외국인 매운맛 리액션, 바이럴 가능성 + 낮은 비용" },
            { name: "커플 먹방", platform: "Instagram", followers: "3.8만", category: "커플 콘텐츠", note: "커플 챌린지 포맷, 참여 유도 강점" },
          ],
        },
      },
    },
  ],

  // ═══ 삼양1963 ═══
  "1963": [
    {
      asset: "우지파동 스토리",
      assetIcon: "📖",
      context: "INTEREST",
      contextDetail: "역사/비하인드 스토리 관심층",
      when: "새로운 사실을 알았을 때",
      keyword: "우지라면",
      volume: 49006,
      verified: true,
      shortformIdea: "우지파동의 진실, 아직도 모르는 사람이 많습니다",
      relatedVolume: {},
      demo: "브랜드명(9,140회)보다 5배 큰 검색 = 스토리가 최강의 콘텐츠 자산",
      creators: {
        categories: ["역사/교양 크리에이터", "브이로그/스토리텔링", "푸드 다큐 크리에이터"],
        reason: "역사 스토리 맥락 — 교양 크리에이터가 우지파동을 다루면 '브랜드 광고'가 아닌 '흥미로운 이야기'로 시청",
        recommended: {
          mega: [
            { name: "슈카월드", platform: "YouTube", subscribers: "320만", category: "경제/비즈니스", note: "기업 스토리 다큐, 삼양 역사와 연결 가능" },
            { name: "지식한입", platform: "YouTube", subscribers: "180만", category: "교양/역사", note: "비하인드 스토리 포맷, 우지파동과 완벽 매칭" },
          ],
          mid: [
            { name: "리뷰엉이", platform: "YouTube", subscribers: "150만", category: "역사/교양", note: "한국 현대사 스토리텔링 전문" },
          ],
          micro: [
            { name: "오늘의 TMI", platform: "YouTube", subscribers: "4.7만", category: "역사/잡학", note: "몰랐던 역사 이야기 전문, 우지파동 숏폼에 최적. 비용 효율적" },
            { name: "식품의 역사", platform: "Instagram", followers: "2.3만", category: "푸드 히스토리", note: "식품 역사 전문 콘텐츠, 삼양1963 스토리와 정확히 매칭" },
          ],
        },
      },
    },
    {
      asset: "야식/혼밥 대표",
      assetIcon: "🌙",
      context: "WHEN",
      contextDetail: "밤에 배고플 때, 다이어트 중 야식 욕구",
      when: "야식 시간 (밤 9-12시)",
      keyword: "다이어트 야식",
      volume: 6736,
      verified: true,
      shortformIdea: "다이어트 중인데 야식이 먹고 싶다면",
      relatedVolume: { "야식 추천": 21856, "야식 라면": 1473 },
      demo: "여성 73%, 30대 39% — 야식 욕구는 다이어트와 공존",
      creators: {
        categories: ["야식/혼밥 크리에이터", "자취 브이로거", "ASMR 먹방"],
        reason: "야식 맥락 — 밤에 혼자 먹는 일상 콘텐츠가 공감 + 구매 욕구 동시 자극",
        recommended: {
          mega: [
            { name: "나름 TV", platform: "YouTube", subscribers: "95만", category: "혼밥/야식", note: "야식 전문 먹방, 밤 시간대 시청률 높음" },
          ],
          mid: [
            { name: "야식이당", platform: "Instagram", followers: "12만", category: "야식 레시피", note: "야식 레시피 전문, 라면 레시피 콘텐츠 다수" },
          ],
          micro: [
            { name: "밤의 라면", platform: "Instagram", followers: "3.4만", category: "야식/라면", note: "야식 라면 전문, 삼양1963 프리미엄 라면 콘텐츠 적합. 비용 낮음" },
            { name: "다이어트 하다 야식", platform: "TikTok", followers: "2.8만", category: "다이어트/야식", note: "다이어트 중 야식 욕구 공감 콘텐츠, 여성 73% 타겟 일치" },
          ],
        },
      },
    },
    {
      asset: "라면 레시피",
      assetIcon: "👨‍🍳",
      context: "WHEN",
      contextDetail: "주말 요리할 때",
      when: "주말 여유 시간",
      keyword: "주말 요리",
      volume: 1286,
      verified: true,
      shortformIdea: "주말에 라면 한 그릇, 이렇게 끓이면 레스토랑급",
      relatedVolume: { "라면 레시피": 20300, "라면 맛있게 끓이는 법": 3173 },
      demo: "여성 73%, 40대 45% — 주말 요리 관심층은 40대 여성 중심",
      creators: {
        categories: ["요리 크리에이터", "셰프 유튜버", "간편 레시피 크리에이터"],
        reason: "레시피 맥락 — 요리 크리에이터가 '이 라면으로 이렇게 만들면'하면 자연스러운 제품 노출",
        recommended: {
          mega: [
            { name: "쿠킹트리", platform: "YouTube", subscribers: "180만", category: "요리 레시피", note: "간편 레시피 전문, 숏폼 포맷 강점" },
          ],
          mid: [
            { name: "자취요리신", platform: "Instagram", followers: "25만", category: "간편 요리", note: "자취생/1인가구 레시피, 라면 활용 레시피 전문" },
          ],
          micro: [
            { name: "라면 레시피 연구소", platform: "YouTube", subscribers: "3.9만", category: "라면 레시피", note: "라면 레시피 전문 채널, 삼양1963 활용 레시피 적합. 비용 효율적" },
            { name: "주말 요리사", platform: "Instagram", followers: "2.1만", category: "주말 요리", note: "주말 요리 일상 공유, 40대 여성 타겟 일치" },
            { name: "5분 요리", platform: "TikTok", followers: "6.3만", category: "간편 레시피", note: "초간편 레시피 전문, 숏폼 네이티브" },
          ],
        },
      },
    },
    {
      asset: "프리미엄 원조",
      assetIcon: "👑",
      context: "WHERE",
      contextDetail: "라면 맛집/프리미엄 라면 비교",
      when: "라면 선택할 때",
      keyword: "프리미엄 라면",
      volume: 406,
      verified: true,
      pathfinder: "'프리미엄 라면' 검색 시 장인라면/더미식으로 흐름 — 삼양1963 부재",
      shortformIdea: "프리미엄 라면 TOP3, 1위가 의외입니다",
      relatedVolume: { "라면 추천": 10866, "라면 순위": 6606 },
      creators: {
        categories: ["식품 랭킹/비교 크리에이터", "라면 전문 리뷰어", "미식가 크리에이터"],
        reason: "프리미엄 비교 맥락 — 랭킹/비교 크리에이터가 삼양1963을 포함시키면 자연스러운 인지 확장",
        recommended: {
          mega: [
            { name: "푸디트립", platform: "YouTube", subscribers: "60만", category: "미식/맛집", note: "프리미엄 식품 리뷰, 고급 타겟" },
          ],
          mid: [
            { name: "라면왕", platform: "YouTube", subscribers: "40만", category: "라면 전문", note: "라면 랭킹/비교 전문 채널" },
          ],
          micro: [
            { name: "프리미엄 라면 리뷰", platform: "YouTube", subscribers: "1.5만", category: "프리미엄 라면", note: "고급 라면 전문 리뷰, 삼양1963 포지셔닝에 최적. 비용 매우 낮음" },
            { name: "미식가의 편의점", platform: "Instagram", followers: "4.2만", category: "미식 리뷰", note: "프리미엄 식품 탐구 콘텐츠" },
          ],
        },
      },
    },
  ],

  // ═══ 펄스랩 ═══
  "pls": [
    {
      asset: "단백질 47g",
      assetIcon: "💪",
      context: "WHO",
      contextDetail: "운동하는 사람 (운동 후 단백질 검색 여성 54%)",
      when: "운동 후 간식 고민",
      keyword: "운동 후 단백질",
      volume: 2643,
      verified: true,
      shortformIdea: "운동 끝나고 단백질 47g 채우는 의외의 간식",
      relatedVolume: { "운동 후 간식": 183, "단백질 간식": 4703 },
      creators: {
        categories: ["피트니스 크리에이터", "여성 운동 브이로거", "건강 간식 리뷰어"],
        reason: "운동 후 간식 맥락 — 피트니스 크리에이터가 '이걸 먹는다'하면 전문가 추천 효과",
        recommended: {
          mega: [
            { name: "피지컬갤러리", platform: "YouTube", subscribers: "270만", category: "피트니스", note: "운동 후 영양 콘텐츠, 단백질 47g 강조 가능" },
          ],
          mid: [
            { name: "운동하는 직장인", platform: "Instagram", followers: "20만", category: "피트니스/직장인", note: "직장인+운동 일상, 간식 추천과 자연스러운 연결" },
          ],
          micro: [
            { name: "PT 선생님의 간식", platform: "Instagram", followers: "3.1만", category: "PT/간식", note: "PT트레이너 실제 간식 추천, 단백질 47g 강조에 최적. 전문가 신뢰도" },
            { name: "헬스 간식 추천", platform: "YouTube", subscribers: "2.4만", category: "운동 간식", note: "운동 간식 전문 리뷰, 펄스랩 콘셉트 정확히 매칭" },
          ],
        },
      },
    },
    {
      asset: "길트프리 스낵",
      assetIcon: "✨",
      context: "WHERE",
      contextDetail: "사무실/회사 (여성 85%, 25-29세 25%)",
      when: "오후 3시 간식 타임",
      keyword: "회사 간식 추천",
      volume: 1720,
      trend: 0.15,
      verified: true,
      shortformIdea: "회사에서 몰래 먹는 죄책감 없는 간식",
      relatedVolume: { "사무실 간식": 11453 },
      demo: "여성 85%, CPC $2.42 — B2B 간식 납품까지 연결 가능한 고가치 키워드",
      creators: {
        categories: ["직장인 브이로거", "오피스 라이프스타일", "건강 간식 리뷰어"],
        reason: "사무실 간식 맥락 — 직장인 크리에이터의 '오후 3시 간식 타임'에 자연스럽게 등장",
        recommended: {
          mega: [
            { name: "이과장", platform: "YouTube", subscribers: "55만", category: "직장인 브이로그", note: "직장인 일상 콘텐츠, 사무실 간식과 자연스러운 맥락" },
          ],
          mid: [
            { name: "오피스 다이어리", platform: "Instagram", followers: "30만", category: "오피스 라이프", note: "사무실 데스크 세팅/간식 추천 전문" },
          ],
          micro: [
            { name: "건간스타", platform: "Instagram", followers: "8만", category: "건강 간식 리뷰", note: "건강 간식 전문 리뷰어, 길트프리 콘셉트 일치" },
            { name: "오후 3시 간식타임", platform: "Instagram", followers: "2.6만", category: "사무실 간식", note: "사무실 간식 전문, 여성 직장인 타겟 정확히 일치. 비용 효율적" },
            { name: "건강한 직장인", platform: "YouTube", subscribers: "1.7만", category: "직장인 건강", note: "직장인 건강 관리 일상, 길트프리 간식 추천 자연스러움" },
          ],
        },
      },
    },
    {
      asset: "병아리콩 + 캐슈넛",
      assetIcon: "🌾",
      context: "INTEREST",
      contextDetail: "건강/영양에 관심 있는 30대 여성",
      when: "건강 정보 탐색할 때",
      keyword: "병아리콩 효능",
      volume: 29180,
      verified: true,
      shortformIdea: "병아리콩이 이렇게 좋은 줄 몰랐습니다",
      relatedVolume: { "병아리콩": 59813, "캐슈넛 효능": 16060 },
      creators: {
        categories: ["건강/영양 정보 크리에이터", "약사/영양사 유튜버", "웰니스 인플루언서"],
        reason: "건강 정보 맥락 — 전문가 크리에이터가 효능을 설명하면 신뢰도 극대화, 제품 연결 자연스러움",
        recommended: {
          mega: [
            { name: "닥터프렌즈", platform: "YouTube", subscribers: "200만+", category: "의학/건강", note: "건강 정보 전문, 병아리콩 효능 콘텐츠 가능. 비용 높음" },
            { name: "약사가 들려주는 약 이야기", platform: "YouTube", subscribers: "130만", category: "건강/약사", note: "건강 정보 신뢰도 최상위" },
          ],
          mid: [
            { name: "풀무원건강생활", platform: "Instagram", followers: "15만", category: "건강식품", note: "건강식품 리뷰, 식물성 단백질 맥락 일치" },
          ],
          micro: [
            { name: "영양사 언니", platform: "Instagram", followers: "4.8만", category: "영양/건강", note: "영양사 자격증 보유, 병아리콩 효능 전문적 설명 가능. 전문가 신뢰도 + 낮은 비용" },
            { name: "건강 덕후", platform: "YouTube", subscribers: "2.9만", category: "건강 정보", note: "건강 식품 효능 리뷰 전문, 캐슈넛/병아리콩 콘텐츠 적합" },
          ],
        },
      },
    },
    {
      asset: "후무스",
      assetIcon: "🥙",
      context: "NEED",
      contextDetail: "후무스를 이미 알고/만들고 싶은 사람",
      when: "레시피 탐색할 때",
      keyword: "후무스 만들기",
      volume: 8363,
      verified: true,
      shortformIdea: "후무스 만들기 귀찮으면, 이게 있습니다",
      relatedVolume: { "후무스": 22196 },
      creators: {
        categories: ["해외 요리/글로벌 푸드 크리에이터", "비건/클린이팅 인플루언서", "간편 레시피 크리에이터"],
        reason: "후무스 레시피 맥락 — 글로벌 푸드 크리에이터가 '한국에서 후무스를 이렇게 쉽게?'하면 발견 효과 극대화",
        recommended: {
          mega: [
            { name: "해먹남녀", platform: "YouTube", subscribers: "120만", category: "요리", note: "글로벌 레시피, 후무스 콘텐츠 적합" },
          ],
          mid: [
            { name: "비건타이거", platform: "Instagram", followers: "10만", category: "비건", note: "비건 식품 전문, 식물성 콘셉트 정확히 일치" },
          ],
          micro: [
            { name: "중동 요리 연구소", platform: "YouTube", subscribers: "1.8만", category: "글로벌 요리", note: "중동 음식 전문, 후무스 문화 소개 + 펄스랩 연결 최적. 비용 효율적" },
            { name: "비건 일상", platform: "Instagram", followers: "3.5만", category: "비건 라이프", note: "비건 식품 일상 공유, 식물성 간식 추천과 자연스러운 맥락" },
            { name: "세계 음식 여행", platform: "TikTok", followers: "5.7만", category: "글로벌 푸드", note: "세계 음식 소개 숏폼, 후무스 → 펄스랩 발견 스토리" },
          ],
        },
      },
    },
    {
      asset: "식물성 단백질",
      assetIcon: "🌱",
      context: "INTEREST",
      contextDetail: "비건/식물성에 관심 있는 사람",
      when: "단백질 비교할 때",
      keyword: "식물성 단백질",
      volume: 7230,
      verified: true,
      pathfinder: "'식물성 단백질' → '흡수율' → '유청 단백질' 비교 경로",
      shortformIdea: "식물성 vs 동물성 단백질, 뭐가 다를까?",
      relatedVolume: { "비건 간식": 436 },
      creators: {
        categories: ["비건/지속가능 인플루언서", "영양학/과학 크리에이터", "환경 크리에이터"],
        reason: "식물성 단백질 맥락 — 비건/환경 크리에이터가 다루면 가치 소비층에게 브랜드 호감도 상승",
        recommended: {
          mega: [
            { name: "과학쿠키", platform: "YouTube", subscribers: "120만", category: "과학 정보", note: "식물성 vs 동물성 비교 과학적 콘텐츠" },
          ],
          mid: [
            { name: "비건타이거", platform: "Instagram", followers: "10만", category: "비건", note: "비건 라이프스타일 전문" },
          ],
          micro: [
            { name: "지구인컴퍼니", platform: "Instagram", followers: "5만", category: "비건/지속가능", note: "식물성 식품 브랜드 경험, 가치 소비 타겟" },
            { name: "비건 뉴비", platform: "YouTube", subscribers: "1.3만", category: "비건 입문", note: "비건 입문자 관점, '비건이 아니어도 먹게 되는' 콘셉트 적합. 협업 용이" },
            { name: "친환경 라이프", platform: "Instagram", followers: "2.8만", category: "지속가능/에코", note: "가치 소비 콘텐츠, ESG 관심층 타겟" },
          ],
        },
      },
    },
  ],
};

// ═══ 앱에서의 동작 ═══
// [확인된 기회] — confirmedOpportunities에서 해당 brand 필터 → 항상 표시
//   각 기회: 자산 × 맥락 + 숏폼 아이디어 + 크리에이터 3티어 추천
//   "✅ 데이터 검증" 배지
//
// [AI 추가 발견] — Claude API가 새로운 교차점 + 크리에이터 실시간 추천
//   프롬프트에 추가:
//   "크리에이터를 MEGA(100만+)/MID(10만~100만)/MICRO(1만~10만) 3티어로 추천해.
//    특히 MICRO를 2~3명 — 참여율 높고 비용 효율적이며 협업 컨트롤 용이.
//    먹방 유튜버만 추천하지 말고 기회의 맥락에 맞는 다양한 카테고리를 추천."
//   "🤖 AI 발견" 배지 + 재생성 가능

// ═══ 크리에이터 3티어 구조 ═══
// 🔴 MEGA (100만+) — 브랜딩 임팩트 크지만 비용 높고 컨트롤 어려움
// 🟡 MID (10만~100만) — 전문성과 도달의 밸런스
// 🟢 MICRO (1만~10만) ← 가장 추천
//   → 참여율 가장 높음 (팔로워 대비 댓글/좋아요 비율)
//   → 비용 효율적, 협업 컨트롤 용이
//   → 동시에 여러 명과 협업 가능 (같은 예산으로 3~5명)
//   → 진정성 높게 느껴져 "광고"가 아닌 "추천"으로 인식

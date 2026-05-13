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
      change: "+20.0%",
      funnelStage: "고려→Trial",
      funnelKPI: "댓글 참여 + 공유율",
      seasonPeak: "3~8월 (운동 시즌)",
      pathfinder: "'운동 후 식사추천' → '운동 후 라면' 경로 실제 존재",
      shortformIdea: "PT 트레이너가 추천하는 운동 후 식사 TOP3",
      relatedVolume: { "운동 후 단백질": 2643, "운동 후 식사": 2686 },
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
      funnelStage: "발견→인지",
      funnelKPI: "조회수 + 저장율",
      seasonPeak: "1~3월, 5~6월 (다이어트 시즌)",
      pathfinder: "'다이어트 라면' ClusterFinder에서 '단백질 라면', '건면 다이어트' 키워드 확인",
      shortformIdea: "다이어트 중 면이 먹고 싶을 때, 이걸 먹으면 됩니다",
      relatedVolume: { "다이어트 야식": 6736, "다이어트 간식": 36896, "다이어트 라면": 7203 },
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
      volume: 10783,
      verified: true,
      change: "+22.4%",
      funnelStage: "발견→인지",
      funnelKPI: "조회수 + 저장율",
      seasonPeak: "연중 (비교 콘텐츠 상시 수요)",
      pathfinder: "'다이어트 면' → '콩담백면' 경로 압도적 — 탱글 부재",
      shortformIdea: "콩담백면만 알고 있다면, 이걸 아직 모르는 겁니다",
      relatedVolume: { "다이어트 면": 1870, "다이어트 파스타": 9980 },
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
      funnelStage: "전환→구매",
      funnelKPI: "링크 클릭 + 쿠폰 사용",
      seasonPeak: "3~4월, 9월 (학기 시작)",
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
    // ── 신규 확인된 기회 3개 (캠페인 확장) ──
    {
      asset:"프로틴 파스타",assetIcon:"🍝",context:"PAIN",
      contextDetail:"다이어트 중 파스타 먹고 싶은 욕구 (여성 74.8%)",
      when:"다이어트 중 파스타 갈망",
      keyword:"다이어트 파스타",volume:9980,verified:true,change:"+8.7%",
      funnelStage:"발견→인지",funnelKPI:"조회수 + 저장율",seasonPeak:"1~3월, 5~6월 (다이어트 시즌)",
      pathfinder:"'다이어트 파스타' → '다이어트 파스타면 추천' 경로 존재. '탱글 파스타 다이어트' 98/mo 안정화",
      shortformIdea:"다이어트 중인데 파스타가 먹고 싶을 때, 이걸 먹으면 됩니다",
      relatedVolume:{"파스타 다이어트":5623,"편의점 파스타":1480,"단백질 파스타":550},
      creators:{categories:["다이어트 일상 브이로거","건강 레시피 크리에이터","영양사/식단 전문가"],reason:"다이어트 중 파스타 욕구 — '나도 이거 먹는다'로 죄책감 해소",recommended:{
        mega:[{name:"다이어트짱",platform:"YouTube",subscribers:"42만",category:"다이어트",note:"다이어트 식단 전문, 여성 2030 타겟 정확히 일치"}],
        mid:[{name:"헬스영양사",platform:"YouTube",subscribers:"35만",category:"영양/식단",note:"전문가 관점 식품 리뷰, 다이어트 중 파스타 욕구 공감 콘텐츠"}],
        micro:[{name:"다이어트하는직장인",platform:"Instagram",followers:"4.5만",category:"다이어트 일상",note:"직장인 다이어트 일상, 파스타 갈망 공감"},{name:"오늘도 건강식",platform:"YouTube",subscribers:"2.1만",category:"건강 레시피",note:"건강한 간편식 리뷰 전문, 자연스러운 체험형 콘텐츠"}],
      }},
    },
    {
      asset:"직장인 점심 대용",assetIcon:"🏢",context:"WHO",
      contextDetail:"2535 직장인 여성 (여성 82.6%, 30대 35.9%)",
      when:"점심시간 메뉴 고민",
      keyword:"직장인 점심 도시락",volume:2450,verified:true,change:"+19.5%",
      funnelStage:"고려→Trial",funnelKPI:"댓글 참여 + 공유율",seasonPeak:"3~6월 (봄~여름 가벼운 식사)",
      pathfinder:"'점심 대용' → '점심 간편식' 구매 인텐트 경로. '직장인 점심 도시락' +66% 급성장",
      shortformIdea:"오늘 점심 5분 파스타인데 단백질이 이만큼",
      relatedVolume:{"직장인 점심":1140,"점심 대용":463,"점심 간편식":160,"회사 점심 메뉴 추천":213},
      creators:{categories:["직장인 브이로거","오피스 라이프 크리에이터","간편식 리뷰어"],reason:"직장인 점심 맥락 — 오피스 크리에이터의 점심 루틴에 자연스럽게 등장",recommended:{
        micro:[{name:"회사점심기록",platform:"Instagram",followers:"2.8만",category:"직장인 점심",note:"직장인 점심 루틴 전문, 타겟 정확"},{name:"오피스간편식",platform:"Instagram",followers:"2.1만",category:"간편식 리뷰",note:"편의점/간편식 비교 콘텐츠, 직장인 여성 팔로워 중심"}],
      }},
    },
    {
      asset:"단백질 간식/보상",assetIcon:"🏋️",context:"NEED",
      contextDetail:"프로틴 쉐이크 피로감 → 음식형 단백질 (남성 60.8%)",
      when:"프로틴 파우더만 먹다 지겨울 때",
      keyword:"단백질 간식",volume:5723,verified:true,change:"+21.7%",
      funnelStage:"고려→Trial",funnelKPI:"댓글 참여 + 공유율",seasonPeak:"연중 (프로틴 시장 상시 수요)",
      pathfinder:"'단백질 간식' +78% 급성장. 남성 60.8% — 새로운 세그먼트",
      shortformIdea:"쉐이크 대신 파스타로 단백질 섭취",
      relatedVolume:{"프로틴 간식":423,"단백질 간식 추천":626},
      creators:{categories:["피트니스 크리에이터","프로틴 리뷰어","남성 헬스 크리에이터"],reason:"프로틴 피로감 맥락 — 피트니스 크리에이터가 '쉐이크 대안'으로 추천하면 신뢰도 극대화",recommended:{
        mid:[{name:"핏블리",platform:"YouTube",subscribers:"273만",category:"피트니스",note:"운동+식단 콘텐츠, 30대 남성 타겟 정확히 일치"}],
        micro:[{name:"프로틴맨",platform:"YouTube",subscribers:"3.2만",category:"프로틴 리뷰",note:"프로틴 식품 전문 리뷰어, 남성 타겟"},{name:"헬스식단남",platform:"Instagram",followers:"2.5만",category:"남성 헬스 식단",note:"남성 세그먼트 공략, 보충제 대신 음식형 프로틴 리뷰"}],
      }},
    },
    // ── Meal-prep 식단 준비 (NEW) ──
    {
      asset:"Meal-prep 식단 준비",assetIcon:"📦",context:"WHEN",
      contextDetail:"일요일 식단 준비 루틴 (여성 74~92%, 30대 38~45%)",
      when:"일요일 한 주치 식단 준비할 때",
      keyword:"밀프랩",volume:20013,verified:true,change:"+17.7%",
      funnelStage:"고려→Trial",funnelKPI:"댓글 참여 + 공유율",seasonPeak:"1~3월, 9월 (신년+가을 식단)",
      pathfinder:"'밀프랩'(20,013)+'밀프렙'(7,956) 합산 27,969/mo. '다이어트 밀프렙' +78% 급성장. '단백질 도시락' 구매 경로",
      shortformIdea:"일요일 밀프렙에 탱글 3개만 넣어두면 주중 점심 해결",
      relatedVolume:{"밀프렙":7956,"다이어트 밀프렙":5952,"단백질 도시락":7946,"식단 도시락":4426,"일주일 식단":3293,"일주일 도시락":710},
      demo:"여성 74~92%, 30대 38~45% — 탱글 핵심 타겟 정중앙",
      reason:"가장 큰 규모의 새 오케이션 (45,590/mo). 밀프렙 문화에 탱글이 자연스럽게 포함되는 루틴 형성",
      seasonTiming:"1~3월(신년 식단), 9월(가을 식단 시즌)",
      purchaseCTA:"이번 주 밀프렙에 탱글 하나 넣어보세요",
      hookLibrary:["일요일 밀프렙 루틴에 이거 하나 추가했더니","주중 점심 고민 끝 — 5분 파스타 밀프렙","밀프렙 3시간이면 한 주 점심 해결"],
      formatRecommend:"브이로그형 — 일요일 밀프렙 루틴 속 자연스러운 등장",
      creators:{categories:["밀프렙/식단관리 크리에이터","다이어트 일상 브이로거","직장인 브이로거"],reason:"밀프렙 루틴 맥락 — '일요일 밀프렙 시리즈'에 탱글이 자연스럽게 등장. 기존 크리에이터 100명 배분(직장인 브이로그 15명, 헬시 레시피 10명)에서 커버",recommended:{
        micro:[{name:"밀프렙일기",platform:"Instagram",followers:"3.8만",category:"식단 관리",note:"밀프렙 전문, 여성 30대 팔로워 중심. 일요일 루틴 시리즈에 탱글 등장 적합"},{name:"직장인식단",platform:"YouTube",subscribers:"2.4만",category:"직장인 식단",note:"주간 식단 준비 콘텐츠, 직장인 점심 맥락과 연결"}],
      }},
    },
    // ── 혈당스파이크 대안 (Section 10) ──
    {
      asset:"혈당스파이크 대안",assetIcon:"📊",context:"PAIN",
      contextDetail:"혈당스파이크 걱정하는 건강 관심층 (피크 후 안정화, 여전히 최대 키워드)",
      when:"밀가루 면을 피하고 싶을 때",
      keyword:"혈당스파이크",volume:37576,verified:true,change:"-5.0%",
      funnelStage:"발견→인지",funnelKPI:"조회수 + 저장율",seasonPeak:"연중 (건강 관심 상시 수요, 1~3월 피크)",
      pathfinder:"'혈당스파이크' 37,576/mo (피크 후 -18%, 여전히 탱글 관련 최대 키워드). '글루텐프리' 11,093/mo → '글루텐프리 파스타' → '글루텐프리 면' 경로. 밀가루 대안 수요 지속",
      shortformIdea:"혈당스파이크 걱정 없이 면을 먹는 법? 밀가루가 아닌 면이 있습니다",
      relatedVolume:{"글루텐프리":11093,"밀가루 끊기":1623,"GI지수 낮은 음식":1183,"혈당스파이크 음식":950,"글루텐프리 파스타":683,"병아리콩 혈당":456,"밀가루 대체":440,"글루텐프리 면":376,"밀가루 없는 면":108},
      toneWarning:"⚠️ 의료/건강 주장 절대 금지. '혈당을 낮춘다' ✗ → '밀가루 면 대신 병아리콩 면을 선택하는 사람들' ✓. 라이프스타일 선택으로만 접근.",
      creators:{categories:["건강/웰빙 크리에이터","영양사 콘텐츠","다이어트 일상 브이로거"],reason:"혈당스파이크 맥락 — 건강 정보 크리에이터의 '밀가루 대안' 정보형 콘텐츠. 의료 주장 없이 라이프스타일 선택으로",recommended:{
        mid:[{name:"영양사언니",platform:"YouTube",subscribers:"38만",category:"영양/건강",note:"영양 정보 전문, 혈당/글루텐프리 콘텐츠 다수. 신뢰도 높음"}],
        micro:[{name:"저탄고지일기",platform:"Instagram",followers:"4.2만",category:"건강식단",note:"저탄수화물/글루텐프리 식단 전문, 혈당 관심층 팔로워"},{name:"밀가루끊기챌린지",platform:"YouTube",subscribers:"1.8만",category:"건강 라이프스타일",note:"밀가루 대안 콘텐츠 전문, 병아리콩 면 자연스러운 소개"}],
      }},
    },
    // ── 야식 라면 대안 (Section 11) ──
    {
      asset:"야식 라면 대안",assetIcon:"🌙",context:"WHEN",
      contextDetail:"밤 11시, 야식으로 라면 끓이려는 순간",
      when:"야식으로 라면 대신 건강한 면 선택",
      keyword:"다이어트 야식",volume:6736,verified:true,change:"0%",
      funnelStage:"발견→인지",funnelKPI:"조회수 + 저장율",seasonPeak:"연중 (야식 상시 수요)",
      pathfinder:"'야식 추천' 21,856/mo → '다이어트 야식' 6,736/mo 경로. 야식 = 라면 공식을 깨는 콘텐츠",
      shortformIdea:"밤 11시, 라면 끓이는 대신 이걸 끓였습니다",
      relatedVolume:{"야식 건강":1200,"건강한 야식":680,"밤에 라면 대신":320},
      creators:{categories:["자취 브이로거","야식 먹방 크리에이터","다이어트 일상 크리에이터"],reason:"야식 맥락 — '밤에 라면 대신 이걸 끓였다'는 자취 일상에서 자연스러운 등장",recommended:{
        micro:[{name:"야식브이로그",platform:"YouTube",subscribers:"3.5만",category:"야식/자취",note:"야식 콘텐츠 전문, 건강한 야식 대안 주제 적합"},{name:"밤라면대신",platform:"Instagram",followers:"2.1만",category:"건강 야식",note:"야식 대안 리뷰 전문, 다이어트 중 야식 고민 공감"}],
      }},
    },
    // ── 키즈 건강 면 (Section 12) ──
    {
      asset:"키즈 건강 면",assetIcon:"👶",context:"WHO",
      contextDetail:"육아맘 — 아이가 라면 달라고 할 때 (여성 92%+)",
      when:"아이에게 건강한 면을 끓여주고 싶을 때",
      keyword:"아이 간식",volume:3376,verified:true,change:"-39.9%",
      funnelStage:"발견→인지",funnelKPI:"조회수 + 저장율",seasonPeak:"연중 (육아 상시 수요)",
      pathfinder:"'아이 간식' 3,376/mo → '아이 건강 간식' 2,100/mo 경로. 육아맘 세그먼트 진입점",
      shortformIdea:"아이가 라면 달라고 할 때, 이걸 끓여주면 죄책감 없어요",
      relatedVolume:{"아이 건강 간식":2100,"어린이 건강식":1350,"아이 라면":950,"키즈 간편식":680,"아이 라면 대안":230},
      creators:{categories:["육아 브이로거","키즈 요리 크리에이터","맘카페 인플루언서"],reason:"육아맘 맥락 — '아이한테 이거 끓여줬다'는 맘카페에서 자연스러운 공유 유도",recommended:{
        mid:[{name:"육아맘일기",platform:"YouTube",subscribers:"45만",category:"육아",note:"육아 일상+아이 간식 콘텐츠, 맘 타겟 정확"}],
        micro:[{name:"아이건강밥상",platform:"Instagram",followers:"3.8만",category:"키즈 요리",note:"아이 건강식 전문, 라면 대안 콘텐츠 적합"},{name:"맘카페추천템",platform:"Instagram",followers:"2.5만",category:"육아 리뷰",note:"육아 용품/식품 리뷰 전문, 맘 커뮤니티 영향력"}],
      }},
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
      relatedVolume: { "운동 후 간식": 183, "단백질 간식": 5723 },
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
      volume: 31913,
      verified: true,
      shortformIdea: "병아리콩이 이렇게 좋은 줄 몰랐습니다",
      relatedVolume: { "병아리콩": 73993, "캐슈넛 효능": 16060 },
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

// ═══ 탱글 오케이션 맵 — 7개 침투 맥락 ═══
export const tangleOccasionMap = {
  occasions: [
    { name: "다이어트 중 면 욕구", status: "기존 유지", keywords: ["곤약면","두부면","저칼로리 면","다이어트 면"], note: "기존 데이터 그대로 유지" },
    { name: "다이어트 중 파스타 욕구", status: "★ NEW — 가장 큰 진입점", totalVolume: 14360, keywords: ["다이어트 파스타","파스타 다이어트"], demographic: "여성 74.8%, 30대 36.6%", hook: "'다이어트 중인데 파스타가 먹고 싶어' → '이거 단백질 20g인데 파스타야'", trialCTA: "편의점에서 하나만 사서 먹어보세요" },
    { name: "직장인 점심 대용", status: "★ NEW — 브리프 직결", totalVolume: 3072, keywords: ["직장인 점심 도시락","점심 대용","점심 간편식","가벼운 점심 메뉴 추천"], demographic: "여성 82.6%, 30대 35.9%", hook: "'오늘 점심 뭐 먹지?' → '5분 파스타인데 단백질이 이만큼'", trialCTA: "오늘 점심 대신 이거 한번" },
    { name: "편의점 한끼", status: "★ NEW — 유통채널 직결", totalVolume: 2166, keywords: ["편의점 파스타","편의점 점심"], demographic: "여성 75.1%, 30대 32.3%", hook: "'편의점에서 뭐 사먹지?' → '이 파스타 단백질 20g이야'", trialCTA: "편의점 가서 이것만 사보세요" },
    { name: "운동 후 단백질 보충", status: "★ NEW — 운동 관심사 타겟", totalVolume: 2686, keywords: ["운동 후 식사","프로틴 간식"], demographic: "여성 68.2%, 30대 31.9%", hook: "'프로틴 쉐이크만 먹다가 지겨울 때' → '이거 파스타인데 프로틴이야'", trialCTA: "운동 후 한번 먹어보세요" },
    { name: "자취생 간단한 한끼", status: "★ NEW — 1인가구 급성장", totalVolume: 675, keywords: ["자취 한끼","간단한 한끼 요리","한끼대용"], growth: "+49%", hook: "'자취생 5분 한끼' → '전자레인지 돌리면 끝인데 단백질 20g'", trialCTA: "자취방 전자레인지로 5분" },
    { name: "단백질 간식/보상", status: "★ NEW — 프로틴 피로감 흡수", totalVolume: 6146, keywords: ["단백질 간식","프로틴 간식"], demographic: "남성 60.8%(프로틴 간식), 여성 59.8%(단백질 간식)", growth: "+78%", hook: "'프로틴 파우더만 먹다 지겨워' → '이건 파스타야. 근데 프로틴이 있어'", trialCTA: "쉐이크 대신 오늘 이거 한번" },
  ],
  proteinInsight: {
    headline: "프로틴 44,066/mo는 거대하지만, 그들은 파우더를 찾고 있다",
    gap: "프로틴 = 파우더. '프로틴 음식'(51/mo), '프로틴 식품'(0/mo)은 사실상 존재하지 않음",
    crack: "'프로틴 간식' 423/mo (+40%)와 '단백질 간식' 4,703/mo (+24%)에서 균열 시작",
    strategy: "프로틴이라는 문으로는 못 들어간다. '파스타인데 프로틴이 있다'로 들어간다.",
  },
};

// ═══ 불닭볶음면 US Market 확인된 기회 ═══
export const buldakConfirmedOpportunities = [
  {asset:"5 Min Meal",assetIcon:"🍳",context:"WHEN",contextDetail:"귀찮은 저녁 — lazy dinner ideas +402% 폭발 성장",keyword:"lazy dinner ideas",volume:14766,relatedVolume:{"quick dinner ideas":79500,"one pot meals":61333,"cheap dinner ideas":43500},shortformIdea:"Too tired to cook? 5 minutes. That's it.",pathfinder:"'dinner ideas'→'lazy dinner'(+402%)→'quick dinner for family'→'cheap easy meals'",demo:"주로 1인가구/맞벌이. 평일 저녁 피크",reason:"미국 최대 성장 맥락. 불닭의 5분 완성이 정확히 답",seasonTiming:"연중 (2026년 1월 18,100으로 피크)",purchaseCTA:"Find it at Walmart — international aisle. $8 for 5-pack.",hookLibrary:["POV: You're too tired to cook but too hungry to sleep","Buldak at 11pm just hits different","I'm in my lazy dinner era"],formatRecommend:"Day in my life / Get ready for bed + making Buldak",creators:{categories:["자취 브이로거","일상 크리에이터"],reason:"퇴근 후 리얼 저녁 만들기로 공감 극대화"}},
  {asset:"Spicy Kick",assetIcon:"🔥",context:"PAIN",contextDetail:"감기/아플 때 — spicy food when sick +49% 급성장",keyword:"spicy food when sick",volume:960,relatedVolume:{"what to eat when sick":23833,"capsaicin benefits":4800,"comfort food when sick":960},shortformIdea:"Korean sick food: why spicy clears your sinuses better than soup",pathfinder:"'what to eat when sick'→'spicy food when sick'→'does spicy help sore throat'→'does it help with colds'",demo:"감기 시즌(11~1월) 피크. 성별 무관",reason:"캡사이신 건강 효과 검색이 전반적으로 급성장(+50%). 과학적 근거가 콘텐츠 소재",seasonTiming:"11~1월 감기 시즌 피크",purchaseCTA:"Grab the Stew Type Buldak — perfect for when you're feeling under the weather",hookLibrary:["Why your body craves spicy food when you're sick","The Korean cold remedy nobody talks about"],formatRecommend:"정보형/과학형 — 캡사이신 효능 설명",barrierContent:"Is Buldak actually bad for you? Here's what the science says",creators:{categories:["건강/웰니스 크리에이터"],reason:"감기 시즌 음식 추천으로 전문성 활용"}},
  {asset:"Buldak Sauce",assetIcon:"🧴",context:"INTEREST",contextDetail:"불닭 소스 활용 — 4년간 5배 구조적 성장 (3,600→18,100)",keyword:"buldak sauce",volume:18100,relatedVolume:{"gochujang sauce":50166,"sweet chili sauce recipe":15000,"hot sauce recipe":8200},shortformIdea:"I put Buldak sauce on everything for a week",pathfinder:"'buldak sauce'→'sauce recipe'→'sauce ingredients'→'how to use'→'where to buy'",demo:"요리 관심층. Swicy 트렌드와 연결",reason:"소스=리추얼 전환의 핵심 증거. 라면 넘어 조미료로 일상 침투",seasonTiming:"연중 안정 성장",purchaseCTA:"Buldak Sauce on Amazon — $6.99. Put it on everything.",hookLibrary:["This sauce changes everything","Buldak sauce on pizza. No cap."],formatRecommend:"Hack 포맷 — 1주일 모든 음식에 불닭 소스",creators:{categories:["요리 크리에이터","소스 리뷰어"],reason:"다양한 음식에 소스 활용하는 레시피 콘텐츠"}},
  {asset:"$2 Dinner",assetIcon:"💰",context:"PAIN",contextDetail:"패스트푸드 $10+ vs 불닭 $2 — 가성비 역전",keyword:"cheap dinner ideas",volume:43500,relatedVolume:{"mac and cheese recipe":497333,"frozen pizza":158666},shortformIdea:"Mac & Cheese costs $3. Buldak costs $2. You decide.",pathfinder:"'cheap dinner'→'under $10 meals'→'fast food near me' (이탈) — 불닭이 가로채는 기회",demo:"대학생, 1인가구, 급여 전",reason:"불닭(282,666)이 냉동피자(158,666)보다 크고 신라면(69,500)의 4배",seasonTiming:"연중 (특히 학기 중)",purchaseCTA:"$8 for 5-pack at Walmart. That's $1.60 per meal.",hookLibrary:["Bank account: $3. Dinner: still fire.","$2 dinner that slaps harder than a $20 meal"],formatRecommend:"What I eat in a day — budget edition",creators:{categories:["대학생 크리에이터","가성비 리뷰어"],reason:"'broke college meals' 맥락에서 리얼한 가성비 체험"}},
  {asset:"K-Food Icon",assetIcon:"🌎",context:"INTEREST",contextDetail:"K-food 트렌드 +80% 급성장 — 한국 문화 탐험 욕구",keyword:"korean food trend",volume:63,relatedVolume:{"korean food":323333,"korean grocery store near me":29100,"gochujang sauce":50166},shortformIdea:"What Koreans actually eat at 2AM — it's not what you think",pathfinder:"'korean food'→다양한 한국 음식 탐색 경로. 불닭은 가장 인지도 높은 진입점",demo:"Gen Z 80%가 음식을 문화 탐험으로 인식. K-pop/K-drama 팬",reason:"K-Food 수출 $136.2억(2025). 라면 수출 $15.2억(+22%). 불닭=K-food 대표 아이콘",seasonTiming:"연중 (K-drama/K-pop 이벤트 시 스파이크)",purchaseCTA:"Find Buldak at your nearest H-Mart or Asian grocery store",hookLibrary:["They always eat ramen in K-dramas. Now I know why.","How to eat Buldak like a Korean"],formatRecommend:"Trying ___ for the first time / How Koreans actually eat ___",creators:{categories:["K-culture 크리에이터","먹방 크리에이터"],reason:"한국 문화 전달자로서 불닭 소개"}},
  {asset:"Shareable",assetIcon:"🎭",context:"WHEN",contextDetail:"Game Day / Super Bowl — 파티 간식 맥락",keyword:"game day snacks",volume:7466,relatedVolume:{"super bowl food":96700,"tailgate food":8700,"movie night snacks":5466},shortformIdea:"Super Bowl party food that makes everyone scream",pathfinder:"시즌: 9월(NFL 시즌 오프닝 18,100 피크) → 1~2월(슈퍼볼)",demo:"30대 남성 중심. 파티/모임 맥락",reason:"game day snacks +22% 성장. 불닭 소스를 나초/윙에 활용하는 파티 푸드 제안",seasonTiming:"9월(NFL), 1~2월(슈퍼볼), 3월(March Madness)",purchaseCTA:"Grab Buldak Sauce + chips for game night. Amazon link in bio.",hookLibrary:["Game night food that makes everyone scream","NFL is back. So is Buldak game night."],formatRecommend:"Recipe/Hack — 불닭 소스 나초, 불닭 윙",creators:{categories:["파티 푸드 크리에이터","스포츠 크리에이터"],reason:"게임데이 파티 맥락에서 불닭 소스 활용"}},
  {asset:"Hackable",assetIcon:"🍜",context:"INTEREST",contextDetail:"불닭 레시피 변형 — 계란/치즈/크림 무한 조합",keyword:"buldak ramen recipe",volume:5866,relatedVolume:{"ramen recipe":91500,"ramen egg recipe":15900,"cheese ramen":4733,"creamy ramen":4733},shortformIdea:"3 Buldak recipes you haven't tried — #2 changed my life",pathfinder:"'buldak ramen'→'recipe'→'with egg'→'how to make creamy'→'with milk'",demo:"요리 관심층. 여성 비율 높음",reason:"불닭을 단순 '끓여먹기'에서 '나만의 레시피'로 전환 — 리추얼의 핵심",seasonTiming:"연중 (주말 저녁 피크)",purchaseCTA:"Get the Carbonara flavor on Amazon — perfect base for hacks",hookLibrary:["Adding one ingredient changed everything","Buldak recipe hack that went viral for a reason"],formatRecommend:"Speed recipe (30초) / Hack 포맷 / Tier List",creators:{categories:["레시피 크리에이터","먹방 크리에이터"],reason:"불닭 변형 레시피로 크리에이티브 콘텐츠"}},
  {asset:"Spicy Kick",assetIcon:"🔥",context:"PAIN",contextDetail:"스트레스/감정 해소 — 매운맛=엔도르핀 과학",keyword:"does spicy food release endorphins",volume:103,relatedVolume:{"emotional eating":3366,"stress relief food":1800,"why do i crave spicy food":633},shortformIdea:"Feeling down? There's a noodle for that. (Science inside)",pathfinder:"'why do i crave spicy food'→'on my period'→'period food cravings list'",demo:"여성 비율 높음. 감정적 식사 맥락",reason:"endorphins +57% 성장. 매운맛의 심리적 기능에 대한 과학적 관심 급증",seasonTiming:"연중 (스트레스 시즌: 시험기간, 연말)",purchaseCTA:"Next time you're stressed, try Buldak instead of ice cream.",hookLibrary:["Ice cream numbs you. Buldak wakes you up.","Why your body craves spicy food when you're stressed"],formatRecommend:"정보형 — 과학 설명 + 실험",creators:{categories:["과학/교양 크리에이터"],reason:"캡사이신→엔도르핀 과학 설명으로 전문성 활용"}},
  {asset:"Flavor World",assetIcon:"🌶️",context:"WHEN",contextDetail:"생리 중 매운맛 갈망 — period food cravings 2,800/mo",keyword:"period food cravings",volume:2800,relatedVolume:{"why do i crave spicy food on my period":0,"craving spicy food meaning":180},shortformIdea:"Why you crave spicy food on your period — it's science, not you",pathfinder:"'why do i crave spicy food'→'on my period'→'period food cravings list'",demo:"여성 전용 맥락. 20-30대",reason:"생리 중 매운맛 갈망은 과학적 현상. 캡사이신→엔도르핀으로 생리통 완화",seasonTiming:"연중 (매월 반복)",purchaseCTA:"Buldak Carbonara — the period craving answer",hookLibrary:["Your period cravings are trying to tell you something","It's not you, it's your hormones — eat the Buldak"],formatRecommend:"공감형 — '나만 그런 게 아니었구나'"},
  {asset:"Buldak Sauce",assetIcon:"🧴",context:"INTEREST",contextDetail:"Swicy (Sweet+Spicy) 트렌드 — 신제품 +49%, hot honey +1,000%",keyword:"sweet chili sauce recipe",volume:15000,relatedVolume:{"gochujang sauce":50166,"viral food":2966},shortformIdea:"Hot honey is so 2025. Buldak sauce is 2026.",pathfinder:"Swicy 트렌드: honey chipotle TikTok +1,000% / 소비자 66%가 매운맛 구매 의향",demo:"Gen Z/Millennial. 트렌드 민감층",reason:"Swicy = 미국 최대 푸드 트렌드. 불닭 카보나라는 이미 Swicy의 완벽한 사례",seasonTiming:"연중 (트렌드 지속 성장)",purchaseCTA:"Buldak Sauce — the Korean answer to hot honey",hookLibrary:["The swicy sauce taking over 2026","Hot honey met its match"],formatRecommend:"Tier List / Taste test / vs comparison"},
  // ═══ Stress Ritual + Social/Comfort/LateNight 추가 ═══
  {asset:"Stress Relief",assetIcon:"😤",context:"PAIN",contextDetail:"스트레스·분노·번아웃 → 매운맛 감정 전환",keyword:"stress relief",volume:57000,relatedVolume:{"stress relief":57000,"i hate my job":20500,"bad day":287000},shortformIdea:"Bad day? Burn it off. — 스트레스를 불닭으로 태운다",pathfinder:"'i hate my job'→'stress relief'→'comfort food' 경로에 불닭 삽입 기회. 'bad day' 검색 연 3,444,000회",demo:"18-34세. 스트레스 상황 전반",reason:"스트레스 검색(연 4,128,000) = 음식 검색(연 684,000)의 6배. 검색에서 '스트레스→매운 음식' 연결이 없음 = 숏폼으로만 만들 수 있는 기회",seasonTiming:"연중 (시험기간·연말·월요일 피크)",purchaseCTA:"Next bad day, grab Buldak instead of scrolling. Walmart — $1.60 per meal.",hookLibrary:["Bad day? Burn it off.","Therapy is $200/hour. Buldak is $1.60.","Stress level: 100. Solution: 2x spicy."],formatRecommend:"감정 공감형 / 일상 브이로그 / Before-After",stressRituals:["Rage Release","Little Treat","Deadline Ignition","Breakup Burn","Mom's 5 Minutes","Road Rage Recovery","Sunday Scaries","Period Craving Cure"],creators:{categories:["스트레스/멘탈헬스 크리에이터","직장인 브이로거","감정 콘텐츠 크리에이터"],reason:"스트레스 상황 공감 콘텐츠로 자연스러운 불닭 연결",recommended:{mega:[{name:"감정 공유형 크리에이터",platform:"YouTube",subscribers:"100만+",category:"스토리텔링",note:"'worst day ever' 스토리텔링 + 불닭 리추얼. 감정 공감 → 대규모 도달"}],mid:[{name:"직장인/번아웃 크리에이터",platform:"YouTube",subscribers:"10만~100만",category:"직장인 일상",note:"9-to-5 직장인 공감 + 퇴근 후 불닭. 타깃 정확히 일치"},{name:"멘탈헬스 톡 크리에이터",platform:"TikTok",followers:"10만~100만",category:"멘탈헬스",note:"스트레스 해소법으로 불닭 포지셔닝. 과학적 근거 활용"}],micro:[{name:"일반인 'bad day' 브이로거",platform:"TikTok",followers:"1만~10만",category:"일상 브이로그",note:"진짜 나쁜 날 → 불닭 = 리얼 리추얼. Spark Ads 전환 최적"},{name:"대학생 스트레스 크리에이터",platform:"TikTok",followers:"1만~10만",category:"대학생 일상",note:"시험/과제 스트레스 + 불닭. #CollegeTok 니치 정확 타겟"}]}}},
  {asset:"Shareable",assetIcon:"🎉",context:"WHEN",contextDetail:"Game Day·파티·소셜 모임에서 불닭 소스 활용",keyword:"game day snacks",volume:7466,relatedVolume:{"super bowl food":96700,"tailgate food":8700,"game day snacks":7466},shortformIdea:"Buldak sauce on your wings. I dare you.",pathfinder:"'game day snacks'→'easy party snacks'→'super bowl food'",demo:"18-34세. 소셜 모임 맥락",reason:"game day snacks +22% 성장. Super Bowl 시즌 피크. 소셜 모임에서 불닭 소스가 파티 푸드로 확장",seasonTiming:"9월(NFL)·1~2월(Super Bowl)·주말",purchaseCTA:"Grab Buldak Sauce for game night — Amazon link in bio.",hookLibrary:["Game night food that makes everyone scream","Buldak sauce on nachos. You're welcome.","NFL is back. So is Buldak game night."],formatRecommend:"Recipe/Hack — 불닭 소스 나초, 불닭 윙",creators:{categories:["스포츠/파티 크리에이터","소셜 챌린지 크리에이터","그룹 콘텐츠"],reason:"게임데이 파티 맥락에서 불닭 소스 활용",recommended:{mid:[{name:"Super Bowl/NFL 파티 크리에이터",platform:"YouTube",subscribers:"10만~100만",category:"스포츠/파티",note:"경기 시청 + 불닭 소스 활용. 시즌 파티 스낵으로 자연스러운 배치"},{name:"소셜 실험/도전 크리에이터",platform:"TikTok",followers:"10만~100만",category:"소셜 챌린지",note:"친구들 불닭 맛 랭킹, 스파이스 룰렛. 공유성 극대화"}],micro:[{name:"하우스 파티 브이로거",platform:"TikTok",followers:"1만~10만",category:"파티 라이프",note:"파티 스낵으로 불닭 소스 등장. 리얼한 파티 맥락"},{name:"대학생 기숙사 파티 크리에이터",platform:"TikTok",followers:"1만~10만",category:"대학생 일상",note:"기숙사 Game Day 파티 + 불닭. #CollegeTok 타겟"}]}}},
  {asset:"Spicy Kick",assetIcon:"🫂",context:"PAIN",contextDetail:"위로가 필요한 순간에 매운맛 = Anti-comfort comfort food",keyword:"comfort food",volume:50166,relatedVolume:{"comfort food":50166,"comfort food recipes":33100,"easy comfort food":8200},shortformIdea:"Comfort food hits different when it burns.",pathfinder:"'comfort food'→'comfort food recipes'→'easy comfort food'",demo:"전연령. 감정적 식사 맥락",reason:"comfort food 50,166/mo — 거대 카테고리에서 불닭 차별화. '위로 음식=따뜻하고 부드러운 것' 공식을 깨는 전략",seasonTiming:"연중 (비 오는 날·실연·스트레스 시즌 피크)",purchaseCTA:"Next rainy day, try Buldak as comfort food. It works.",hookLibrary:["Comfort food hits different when it burns","Anti-comfort comfort food","When mac and cheese isn't enough"],formatRecommend:"감성형 — 비 오는 날/혼밥 브이로그",creators:{categories:["comfort food 크리에이터","감성 먹방","ASMR"],reason:"위로가 필요한 순간의 감정 공감 콘텐츠",recommended:{mid:[{name:"comfort food 전문 크리에이터",platform:"YouTube",subscribers:"10만~100만",category:"comfort food",note:"기존 comfort food(맥앤치즈/치킨수프) 대비 불닭 차별화. Anti-comfort 포지셔닝"},{name:"감성 cooking 크리에이터",platform:"Instagram",followers:"10만~100만",category:"감성 요리",note:"비 오는 날 / 혼자 있는 밤 + 불닭. 무드 콘텐츠"}],micro:[{name:"ASMR 먹방 크리에이터",platform:"TikTok",followers:"1만~10만",category:"ASMR/먹방",note:"빗소리 + 불닭 후루룩 ASMR. 감성 + 청각 만족"},{name:"감정 일기형 크리에이터",platform:"TikTok",followers:"1만~10만",category:"감정 콘텐츠",note:"'힘든 날 나만의 위로 음식' 시리즈. 리얼 공감형"}]}}},
  {asset:"5 Min Meal",assetIcon:"🌙",context:"WHEN",contextDetail:"야식·새벽 간식·파티 후 배고픔",keyword:"late night snack",volume:4733,relatedVolume:{"late night food":33100,"midnight snack ideas":4733,"late night snack":4733},shortformIdea:"2AM. Fridge open. You know what to do.",pathfinder:"'late night snack'→'midnight snack ideas'→'easy late night food'",demo:"18-30대. 야식 맥락",reason:"late night snack 4,733/mo 안정적 수요. 새벽 배고픔+5분 완성의 완벽한 매칭",seasonTiming:"연중 (주말·시험기간 피크)",purchaseCTA:"2AM Buldak. Walmart has it. $1.60.",hookLibrary:["2AM. Fridge open. You know what to do.","Late night Buldak hits different","POV: it's 2AM and you're making ramen"],formatRecommend:"Night routine / POV 포맷 / 야식 먹방",creators:{categories:["야식/야행성 크리에이터","대학생","자취 크리에이터"],reason:"새벽 간식 일상으로 자연스러운 불닭 노출",recommended:{mid:[{name:"야행성 라이프스타일 크리에이터",platform:"YouTube",subscribers:"10만~100만",category:"야행성 라이프",note:"새벽 루틴 + 불닭. 야행성 구독자층과 정확히 일치"}],micro:[{name:"대학생 새벽 공부 크리에이터",platform:"TikTok",followers:"1만~10만",category:"대학생 일상",note:"올나이트 + 새벽 불닭. 시험기간 공감 콘텐츠"},{name:"야식 전문 크리에이터",platform:"TikTok",followers:"1만~10만",category:"야식/먹방",note:"midnight snack 시리즈에 불닭 등장. 야식 맥락 자연스러움"}]}}},
];

// ═══ 불닭 오케이션 맵 데이터 (STEP 2.5 전용) ═══
export const buldakOccasionMap = {
  searchOccasions:[
    {id:"comfort",label:"😌 감정/컴포트",volume:55332,trend:-0.25,color:"#a855f7",topKw:"comfort food 50,166"},
    {id:"quick",label:"🍳 간편식사",volume:157299,trend:1.5,color:"#22c55e",topKw:"lazy dinner +402%🔥🔥🔥"},
    {id:"health",label:"💊 건강/기능",volume:30792,trend:0.35,color:"#3b82f6",topKw:"capsaicin +50%🔥🔥"},
    {id:"latenight",label:"🌙 야식",volume:36966,trend:-0.15,color:"#6366f1",topKw:"late night food 33,100"},
    {id:"social",label:"🎉 소셜/파티",volume:126232,trend:0.1,color:"#f59e0b",topKw:"super bowl 96,700"},
    {id:"budget",label:"💰 가성비",volume:43500,trend:-0.18,color:"#ef4444",topKw:"cheap dinner 43,500"},
  ],
  culturalTabs:{
    seasonCalendar:[
      {month:"Jan-Feb",event:"🏈 Super Bowl",volume:96700,idea:"Buldak nachos for game day"},
      {month:"Feb",event:"💕 Valentine's",volume:0,idea:"Spicy date night for two — $4 total"},
      {month:"May",event:"🌮 Cinco de Mayo",volume:0,idea:"Cinco de Mayo: Korean spice edition"},
      {month:"Jul",event:"🇺🇸 4th of July",volume:0,idea:"Buldak sauce on your July 4th burger"},
      {month:"Aug-Sep",event:"🎓 Back to School",volume:0,idea:"Dorm room essentials: Buldak edition"},
      {month:"Sep",event:"🏈 NFL Season",volume:18100,idea:"NFL is back. So is Buldak game night."},
      {month:"Oct",event:"🎃 Halloween",volume:0,idea:"Halloween dare: finish this Buldak"},
      {month:"Nov",event:"🦃 Thanksgiving",volume:0,idea:"Leftover turkey Buldak ramen"},
      {month:"Nov-Jan",event:"🤧 Flu Season",volume:1600,idea:"Korean sick food that actually works"},
      {month:"Dec",event:"🎄 Holiday Parties",volume:0,idea:"Holiday party appetizer nobody expected"},
    ],
    dailyMoments:[
      {moment:"퇴근 후 소파",freq:"매일",emotion:"피로+귀찮음",hook:"Buldak: for when you can't even"},
      {moment:"시험 공부 중",freq:"시즌",emotion:"스트레스+보상",hook:"Study break that wakes you up"},
      {moment:"넷플릭스 보면서",freq:"매일",emotion:"심심+입 심심",hook:"Netflix and noodles > Netflix and chill"},
      {moment:"게임 중 배고플 때",freq:"매일",emotion:"몰입+간편",hook:"Gamer fuel that's not energy drinks"},
      {moment:"실연 직후",freq:"가끔",emotion:"슬픔+위로",hook:"Breakup food tier list: Buldak is S-tier"},
      {moment:"월급 다 쓴 날",freq:"매월",emotion:"절약",hook:"Bank account: $3. Dinner: still fire."},
      {moment:"비오는 날",freq:"시즌",emotion:"아늑함",hook:"Rain + Buldak + blanket = perfect"},
      {moment:"숙취",freq:"주말",emotion:"회복",hook:"Korean hangover cure: spicy ramen"},
      {moment:"운동 직후",freq:"매일",emotion:"보상",hook:"Post-workout Buldak hits so hard"},
    ],
    multiculturalSegments:[
      {group:"🇲🇽 히스패닉",size:"6,340만",spiceRelation:"칠리/살사 일상. Takis 탄생",hook:"Korean spice meets Mexican heat — Buldak + Tajin"},
      {group:"🇺🇸 아프리칸 아메리칸",size:"4,470만",spiceRelation:"핫소스 문화 강함",hook:"Your hot sauce vs Buldak sauce — blind test"},
      {group:"🇰🇷 아시안 아메리칸",size:"2,400만",spiceRelation:"문화적 게이트키퍼",hook:"How my Korean mom makes Buldak"},
      {group:"🇮🇳 인도계",size:"470만",spiceRelation:"세계 최고 매운맛 문화",hook:"Indian spice vs Korean spice — who wins?"},
      {group:"👶 Gen Alpha",size:"어린이/청소년",spiceRelation:"문화 아이콘/수집품",hook:"POV: Buldak is the new birthday gift"},
      {group:"🎓 대학생",size:"2,000만",spiceRelation:"가성비+야식+소셜",hook:"Every college student's secret weapon"},
    ],
    emotionMoments:[
      {emotion:"스트레스",existing:"아이스크림/초콜릿",buldakWhy:"캡사이신→엔도르핀→기분전환",hook:"Ice cream numbs you. Buldak wakes you up."},
      {emotion:"외로움",existing:"치킨수프/맥앤치즈",buldakWhy:"따뜻한 면+매운 자극=살아있는 느낌",hook:"Eating alone doesn't mean eating boring."},
      {emotion:"분노",existing:"없음",buldakWhy:"매운맛으로 분노 발산",hook:"Angry? Take it out on a bowl of 2x spicy."},
      {emotion:"축하",existing:"케이크/외식",buldakWhy:"친구와 함께 매운맛 경험",hook:"We won! Time for Buldak."},
      {emotion:"보상",existing:"디저트/배달",buldakWhy:"$2로 자기보상",hook:"Treat yourself — for $2."},
      {emotion:"귀찮음",existing:"시리얼/냉동식품",buldakWhy:"5분+맛있음",hook:"Too lazy to cook? 5 minutes. That's it."},
    ],
    mealRituals:[
      {ritual:"Taco Tuesday",penetration:"48%",idea:"Buldak Tuesday — 주중 스트레스 해소의 날"},
      {ritual:"Pizza Friday",penetration:"주간 리추얼",idea:"Fire Noodle Friday — 금요일 밤 보상"},
      {ritual:"Sunday Meal Prep",penetration:"밀프렙 문화",idea:"불닭 5가지 변형으로 한 주 준비"},
      {ritual:"Girl Dinner",penetration:"Gen Z 트렌드",idea:"불닭 컵라면 = 한 끼 간식식사"},
    ],
    weatherRegion:[
      {region:"동북부 (NYC,Boston)",climate:"혹한 겨울",opportunity:"겨울 야식 = 따뜻한 불닭"},
      {region:"남부 (TX,ATL)",climate:"더운 여름",opportunity:"Southern heat meets Korean fire"},
      {region:"서부 (LA,SF)",climate:"온화",opportunity:"LA's K-town secret: Buldak at 2AM"},
      {region:"중서부 (Chicago)",climate:"극한 추위",opportunity:"Midwest winter survival: Buldak"},
      {region:"대학도시",climate:"사계절",opportunity:"College town Buldak crawl"},
    ],
  },
  barriers:[
    {keyword:"does buldak cause cancer",volume:6700,trend:-0.33,resolution:"캡사이신 건강 효과 팩트체크 숏폼"},
    {keyword:"is buldak bad for you",volume:1060,trend:0.30,resolution:"'Is Buldak actually bad? Here's the science' 숏폼"},
    {keyword:"how to make buldak less spicy",volume:1600,trend:-0.18,resolution:"'Buldak Carbonara isn't even that spicy — here's proof' 숏폼"},
  ],
  competitors:[
    {name:"Mac & Cheese",volume:497333,trend:-0.79,position:"유일한 더 큰 경쟁자"},
    {name:"Buldak Ramen",volume:282666,trend:-0.18,position:"★ 기준"},
    {name:"Frozen Pizza",volume:158666,trend:-0.33,position:"불닭보다 작음"},
    {name:"Shin Ramen",volume:69500,trend:0,position:"불닭의 1/4"},
    {name:"Maruchan",volume:65000,trend:0,position:"불닭의 1/4"},
    {name:"Takis",volume:550000,trend:0.22,position:"매운 스낵 #1 (교차 기회)"},
  ],
  hookLibrary:[
    {expression:"hits different",hook:"3AM Buldak hits different."},
    {expression:"main character energy",hook:"Main character energy = making Buldak at 2AM"},
    {expression:"understood the assignment",hook:"Buldak Carbonara understood the assignment."},
    {expression:"POV",hook:"POV: You just discovered Buldak"},
    {expression:"I'm in my ___ era",hook:"I'm in my Buldak era"},
    {expression:"green flag",hook:"Green flag: they have Buldak in their pantry"},
  ],
  formatLibrary:[
    {format:"Tier List",desc:"S/A/B/C/F 등급 매기기",buldakApp:"Buldak flavor tier list"},
    {format:"Day in my life",desc:"하루 일상 브이로그",buldakApp:"Day in my life but every meal is Buldak"},
    {format:"What I eat in a day",desc:"하루 식단",buldakApp:"What I eat in a day — college edition ft. Buldak"},
    {format:"Speed recipe",desc:"초고속 레시피",buldakApp:"Buldak recipe in 30 seconds"},
    {format:"Hack",desc:"꿀팁",buldakApp:"Buldak hack that changed my life: add cream cheese"},
    {format:"Unpopular opinion",desc:"소수 의견",buldakApp:"Unpopular opinion: Buldak Carbonara > actual Carbonara"},
  ],
};

// ═══ 크리에이터 3티어 구조 ═══
// 🔴 MEGA (100만+) — 브랜딩 임팩트 크지만 비용 높고 컨트롤 어려움
// 🟡 MID (10만~100만) — 전문성과 도달의 밸런스
// 🟢 MICRO (1만~10만) ← 가장 추천
//   → 참여율 가장 높음 (팔로워 대비 댓글/좋아요 비율)
//   → 비용 효율적, 협업 컨트롤 용이
//   → 동시에 여러 명과 협업 가능 (같은 예산으로 3~5명)
//   → 진정성 높게 느껴져 "광고"가 아닌 "추천"으로 인식

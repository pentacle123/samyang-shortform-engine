// 삼양 ShortForm Engine — 카테고리 키워드 풀
// 이 풀이 플랫폼의 데이터 엔진.
// Claude API가 제품을 분해 → 이 풀에서 매칭 → 기회 크기 표시 → 아이디어 생성
// 브랜드: brand (1963/mep/tgl/pls/all)
// 매칭 태그: tags (제품 분해 시 Claude가 매칭할 키워드)

export const keywordPool = [
  // ═══ 공통 카테고리 (all) ═══
  { kw: "먹방", vol: 2787350, trend: 0.49, brand: "all", tags: ["먹방","콘텐츠","엔터"] },
  
  // ═══ 삼양1963 관련 ═══
  { kw: "우지라면", vol: 49006, trend: -0.87, brand: "1963", tags: ["우지","스토리","역사","삼양라면"] },
  { kw: "라면 레시피", vol: 20300, trend: -0.04, brand: "1963", tags: ["라면","레시피","요리"] },
  { kw: "야식 추천", vol: 21856, trend: -0.02, brand: "1963", tags: ["야식","추천","밤","배고픔"] },
  { kw: "라면 추천", vol: 10866, trend: -0.12, brand: "1963", tags: ["라면","추천","맛있는"] },
  { kw: "라면 순위", vol: 6606, trend: -0.11, brand: "1963", tags: ["라면","순위","비교","랭킹"] },
  { kw: "라면 맛있게 끓이는 법", vol: 3173, trend: -0.40, brand: "1963", tags: ["라면","레시피","요리법","꿀팁"] },
  { kw: "라면 맛집", vol: 3353, trend: -0.13, brand: "1963", tags: ["라면","맛집","외식"] },
  { kw: "라면 칼로리", vol: 3053, trend: 0.0, brand: "1963", tags: ["라면","칼로리","건강","다이어트"] },
  { kw: "야식 라면", vol: 1473, trend: -0.11, brand: "1963", tags: ["야식","라면","밤","자취"] },
  { kw: "라면 신상", vol: 883, trend: -0.42, brand: "1963", tags: ["라면","신상","신제품","트렌드"] },
  { kw: "프리미엄 라면", vol: 406, trend: -0.46, brand: "1963", tags: ["프리미엄","고급","라면"] },
  { kw: "자취 라면", vol: 129, trend: 0.33, brand: "1963", tags: ["자취","1인가구","라면","혼밥"] },
  { kw: "라면 건강하게", vol: 40, trend: 0.0, brand: "1963", tags: ["라면","건강","웰빙"] },

  // ═══ 맵탱 관련 ═══
  { kw: "매운 음식", vol: 12273, trend: -0.04, brand: "mep", tags: ["매운맛","음식","스트레스"] },
  { kw: "매운 라면", vol: 6516, trend: -0.36, brand: "mep", tags: ["매운","라면","매운맛"] },
  { kw: "캡사이신", vol: 6120, trend: -0.17, brand: "mep", tags: ["캡사이신","매운맛","건강","엔돌핀"] },
  { kw: "매운 라면 순위", vol: 4126, trend: -0.31, brand: "mep", tags: ["매운","라면","순위","비교"] },
  { kw: "매운 라면 추천", vol: 790, trend: -0.36, brand: "mep", tags: ["매운","라면","추천"] },
  { kw: "스트레스 해소 음식", vol: 300, trend: -0.36, brand: "mep", tags: ["스트레스","해소","음식","감정"] },
  { kw: "매운맛 챌린지", vol: 162, trend: -0.07, brand: "mep", tags: ["매운맛","챌린지","먹방","엔터"] },
  { kw: "매운맛 라면", vol: 77, trend: -0.06, brand: "mep", tags: ["매운맛","라면"] },

  // ═══ 탱글 관련 ═══
  { kw: "다이어트 간식", vol: 36896, trend: 0.73, prevVol: 31046, change: "+18.8%", brand: "tgl", tags: ["다이어트","간식","건강","체중"] },
  { kw: "다이어트 파스타", vol: 9980, trend: 0.32, prevVol: 9180, change: "+8.7%", brand: "tgl", tags: ["다이어트","파스타","면","건강"] },
  { kw: "다이어트 라면", vol: 7203, trend: -0.08, brand: "tgl", tags: ["다이어트","라면","면","건강"] },
  { kw: "콩담백면", vol: 10783, trend: -0.13, prevVol: 11156, change: "-3.3%", brand: "tgl", tags: ["콩담백면","다이어트","면","경쟁자"] },
  { kw: "건면", vol: 5000, trend: -0.17, brand: "tgl", tags: ["건면","면","다이어트","건강"] },
  { kw: "운동 후 식사", vol: 2686, trend: 0.32, prevVol: 2456, change: "+9.4%", brand: "tgl", tags: ["운동","식사","피트니스","단백질"] },
  { kw: "다이어트 면", vol: 1870, trend: 0.47, prevVol: 1633, change: "+14.5%", brand: "tgl", tags: ["다이어트","면","건강","체중"] },
  { kw: "다이어트 중 라면", vol: 890, trend: -0.07, brand: "tgl", tags: ["다이어트","라면","욕구","면"] },
  { kw: "단백질 면", vol: 533, trend: 0.06, prevVol: 523, change: "+1.9%", brand: "tgl", tags: ["단백질","면","건강","피트니스"] },
  { kw: "단백질 라면", vol: 360, trend: -0.14, brand: "tgl", tags: ["단백질","라면","운동","건강"] },
  { kw: "운동 후 라면", vol: 278, trend: -0.11, brand: "tgl", tags: ["운동","라면","피트니스","식사"] },

  // ═══ 탱글 확장 — 프로틴 × 파스타 키워드 (10) ═══
  { kw: "파스타 다이어트", vol: 5623, trend: 0.27, prevVol: 5180, change: "+8.6%", brand: "tgl", tags: ["파스타","다이어트","건강","면"] },
  { kw: "편의점 파스타", vol: 1480, trend: -0.12, prevVol: 1546, change: "-4.3%", brand: "tgl", tags: ["편의점","파스타","유통","채널"] },
  { kw: "파스타 단백질", vol: 936, trend: 0, brand: "tgl", tags: ["파스타","단백질","영양","건강"] },
  { kw: "단백질 파스타", vol: 550, trend: 0.34, prevVol: 493, change: "+11.6%", brand: "tgl", tags: ["단백질","파스타","건강","피트니스"] },
  { kw: "하이 프로틴 치킨면", vol: 150, trend: -0.97, brand: "tgl", tags: ["프로틴","치킨면","트렌드"] },
  { kw: "프로틴 파스타", vol: 133, trend: 0.50, prevVol: 116, change: "+14.7%", brand: "tgl", tags: ["프로틴","파스타","구매","단백질"] },
  { kw: "탱글 파스타 다이어트", vol: 98, trend: -0.07, prevVol: 100, change: "-2.0%", brand: "tgl", tags: ["탱글","파스타","다이어트","브랜드인지"] },
  { kw: "고단백 면", vol: 56, trend: -0.28, brand: "tgl", tags: ["고단백","면","건강"] },
  { kw: "프로틴 면", vol: 50, trend: -0.20, brand: "tgl", tags: ["프로틴","면","건강"] },
  { kw: "다이어트 간편식", vol: 890, trend: 0.13, brand: "tgl", tags: ["다이어트","간편식","건강","비교"] },

  // ═══ 탱글 확장 — 직장인/대학생 점심 오케이션 (16) ═══
  { kw: "점심 메뉴 추천", vol: 80730, trend: 0, brand: "tgl", tags: ["점심","메뉴","추천","직장인"] },
  { kw: "직장인 점심 도시락", vol: 2450, trend: 0.66, prevVol: 2050, change: "+19.5%", brand: "tgl", tags: ["직장인","점심","도시락","성장"] },
  { kw: "직장인 점심", vol: 1140, trend: 0.37, prevVol: 1023, change: "+11.4%", brand: "tgl", tags: ["직장인","점심","일상"] },
  { kw: "점심 배달", vol: 776, trend: -0.02, brand: "tgl", tags: ["점심","배달","편의"] },
  { kw: "편의점 점심", vol: 620, trend: -0.20, brand: "tgl", tags: ["편의점","점심","채널"] },
  { kw: "직장인 점심 메뉴", vol: 596, trend: -0.34, brand: "tgl", tags: ["직장인","점심","메뉴"] },
  { kw: "점심 대용", vol: 463, trend: -0.07, brand: "tgl", tags: ["점심","대용","구매","한끼"] },
  { kw: "다이어트 점심 메뉴 추천", vol: 340, trend: -0.09, brand: "tgl", tags: ["다이어트","점심","메뉴","추천"] },
  { kw: "직장인 점심 도시락 메뉴", vol: 306, trend: 0.19, brand: "tgl", tags: ["직장인","점심","도시락","메뉴"] },
  { kw: "한끼대용", vol: 240, trend: 0, brand: "tgl", tags: ["한끼","대용","간편","구매"] },
  { kw: "회사 점심 메뉴 추천", vol: 213, trend: 0.40, brand: "tgl", tags: ["회사","점심","메뉴","급성장"] },
  { kw: "회사 점심 메뉴", vol: 206, trend: 0.04, brand: "tgl", tags: ["회사","점심","메뉴","직장인"] },
  { kw: "점심 간편식", vol: 160, trend: 0.36, brand: "tgl", tags: ["점심","간편식","구매","급성장"] },
  { kw: "점심 식사 대용", vol: 160, trend: -0.13, brand: "tgl", tags: ["점심","식사","대용","구매"] },
  { kw: "가벼운 점심 메뉴 추천", vol: 130, trend: 0.36, brand: "tgl", tags: ["가벼운","점심","메뉴","급성장"] },
  { kw: "직장인 다이어트 점심", vol: 120, trend: -0.38, brand: "tgl", tags: ["직장인","다이어트","점심"] },

  // ═══ 탱글 확장 — 운동/자취/간식 새 맥락 (6) ═══
  { kw: "단백질 간식", vol: 5723, trend: 0.78, prevVol: 4703, change: "+21.7%", brand: "tgl", tags: ["단백질","간식","구매","성장"] },
  { kw: "프로틴 간식", vol: 423, trend: 0.40, brand: "tgl", tags: ["프로틴","간식","남성","급성장"] },
  { kw: "자취 한끼", vol: 357, trend: 0.49, prevVol: 313, change: "+14.1%", brand: "tgl", tags: ["자취","한끼","1인가구","급성장"] },
  { kw: "간단한 한끼 요리", vol: 362, trend: 0.15, brand: "tgl", tags: ["간단","한끼","요리","자취"] },

  // ═══ 탱글 확장 — Meal-prep 식단 준비 키워드 (6) ═══
  { kw: "밀프렙", vol: 7956, trend: 0.69, prevVol: 17216, change: "-53.8%", brand: "tgl", tags: ["밀프렙","식단","준비","직장인"] },
  { kw: "밀프랩", vol: 20013, trend: 0.57, isNew: true, change: "NEW", brand: "tgl", tags: ["밀프랩","밀프렙","식단","준비","직장인"] },
  { kw: "단백질 도시락", vol: 7946, trend: 0.09, prevVol: 7726, change: "+2.8%", brand: "tgl", tags: ["단백질","도시락","구매","밀프렙"] },
  { kw: "다이어트 밀프렙", vol: 5952, trend: 0.78, prevVol: 5563, change: "+7.0%", brand: "tgl", tags: ["다이어트","밀프렙","급성장","식단"] },
  { kw: "식단 도시락", vol: 4426, trend: 0.29, prevVol: 4076, change: "+8.6%", brand: "tgl", tags: ["식단","도시락","밀프렙","건강"] },
  { kw: "일주일 식단", vol: 3293, trend: -0.12, prevVol: 3443, change: "-4.4%", brand: "tgl", tags: ["일주일","식단","밀프렙","계획"] },
  { kw: "일주일 도시락", vol: 710, trend: -0.20, brand: "tgl", tags: ["일주일","도시락","밀프렙","직장인"] },

  // ═══ 탱글 확장 — 혈당스파이크/글루텐프리 키워드 (10) ═══
  { kw: "혈당스파이크", vol: 37576, trend: -0.18, prevVol: 40180, change: "-6.5%", brand: "tgl", tags: ["혈당","스파이크","건강","급성장"] },
  { kw: "글루텐프리", vol: 11093, trend: 0.23, prevVol: 10293, change: "+7.8%", brand: "tgl", tags: ["글루텐프리","건강","알레르기"] },
  { kw: "밀가루 끊기", vol: 1623, trend: 0.14, prevVol: 1563, change: "+3.8%", brand: "tgl", tags: ["밀가루","끊기","건강","대체"] },
  { kw: "GI지수 낮은 음식", vol: 1183, trend: 0.10, brand: "tgl", tags: ["GI지수","혈당","건강","다이어트"] },
  { kw: "혈당스파이크 음식", vol: 950, trend: 0.80, brand: "tgl", tags: ["혈당","스파이크","음식","급성장"] },
  { kw: "글루텐프리 파스타", vol: 683, trend: 0.01, prevVol: 680, change: "+0.4%", brand: "tgl", tags: ["글루텐프리","파스타","대체"] },
  { kw: "병아리콩 혈당", vol: 456, trend: 0.15, brand: "tgl", tags: ["병아리콩","혈당","건강"] },
  { kw: "밀가루 대체", vol: 440, trend: 0.36, prevVol: 400, change: "+10.0%", brand: "tgl", tags: ["밀가루","대체","건강"] },
  { kw: "글루텐프리 면", vol: 376, trend: 0.37, prevVol: 343, change: "+9.6%", brand: "tgl", tags: ["글루텐프리","면","대체"] },
  { kw: "밀가루 없는 면", vol: 108, trend: 0.30, brand: "tgl", tags: ["밀가루","없는","면","대체"] },

  // ═══ 탱글 확장 — 야식 라면 대안 키워드 (5) ═══
  { kw: "다이어트 야식", vol: 6736, trend: 0.12, brand: "tgl", tags: ["다이어트","야식","건강","밤"] },
  { kw: "야식 건강", vol: 1200, trend: 0.15, brand: "tgl", tags: ["야식","건강","대안","밤"] },
  { kw: "아이 라면", vol: 950, trend: 0.08, brand: "tgl", tags: ["아이","라면","키즈","건강"] },
  { kw: "건강한 야식", vol: 680, trend: 0.25, brand: "tgl", tags: ["건강","야식","대안"] },
  { kw: "밤에 라면 대신", vol: 320, trend: 0.30, brand: "tgl", tags: ["밤","라면","대신","대안"] },

  // ═══ 탱글 확장 — 키즈 건강 면 키워드 (5) ═══
  { kw: "아이 간식", vol: 3376, trend: 0.50, prevVol: 8500, change: "-60.3%", brand: "tgl", tags: ["아이","간식","키즈","건강"] },
  { kw: "아이 건강 간식", vol: 2100, trend: 0.18, brand: "tgl", tags: ["아이","건강","간식","키즈"] },
  { kw: "어린이 건강식", vol: 1350, trend: 0.14, brand: "tgl", tags: ["어린이","건강식","키즈"] },
  { kw: "키즈 간편식", vol: 680, trend: 0.22, brand: "tgl", tags: ["키즈","간편식","아이","건강"] },
  { kw: "아이 라면 대안", vol: 230, trend: 0.35, brand: "tgl", tags: ["아이","라면","대안","키즈","건강"] },

  // ═══ 펄스랩 관련 ═══
  { kw: "병아리콩", vol: 73993, trend: 0.75, prevVol: 59813, change: "+23.7%", brand: "pls", tags: ["병아리콩","원료","건강","콩"] },
  { kw: "캐슈넛", vol: 37723, trend: 0.15, brand: "pls", tags: ["캐슈넛","너트","건강","간식"] },
  { kw: "병아리콩 효능", vol: 31913, trend: 0.29, prevVol: 29180, change: "+9.4%", brand: "pls", tags: ["병아리콩","효능","건강","영양"] },
  { kw: "단백질 많은 음식", vol: 26873, trend: 0.16, prevVol: 25486, change: "+5.4%", brand: "pls", tags: ["단백질","음식","건강","영양"] },
  { kw: "병아리콩 요리", vol: 23016, trend: 0.12, brand: "pls", tags: ["병아리콩","요리","레시피"] },
  { kw: "후무스", vol: 22196, trend: -0.05, brand: "pls", tags: ["후무스","건강","중동","간식"] },
  { kw: "캐슈넛 효능", vol: 16060, trend: 0.09, brand: "pls", tags: ["캐슈넛","효능","건강","영양"] },
  { kw: "사무실 간식", vol: 11453, trend: -0.05, cpc: 4.86, brand: "pls", tags: ["사무실","간식","직장","B2B"] },
  { kw: "식이섬유", vol: 43200, trend: 0.71, brand: "pls", tags: ["식이섬유","건강","소화","영양"] },
  { kw: "길트프리", vol: 8623, trend: -0.38, brand: "pls", tags: ["길트프리","죄책감없는","건강","스낵"] },
  { kw: "건강 간식", vol: 8640, trend: -0.23, brand: "pls", tags: ["건강","간식","영양","웰빙"] },
  { kw: "후무스 만들기", vol: 8363, trend: 0.0, brand: "pls", tags: ["후무스","만들기","레시피","요리"] },
  { kw: "식물성 단백질", vol: 7230, trend: -0.22, brand: "pls", tags: ["식물성","단백질","비건","건강"] },
  { kw: "단백질 간식", vol: 5723, trend: 0.78, prevVol: 4703, change: "+21.7%", brand: "pls", tags: ["단백질","간식","건강","운동"] },
  { kw: "편의점 다이어트 간식", vol: 2810, trend: -0.07, brand: "pls", tags: ["편의점","다이어트","간식"] },
  { kw: "단백질 간식 추천", vol: 626, trend: 0.07, brand: "pls", tags: ["단백질","간식","추천"] },
  { kw: "체중관리", vol: 476, trend: -0.24, brand: "pls", tags: ["체중","관리","다이어트","건강"] },
  { kw: "비건 간식", vol: 436, trend: -0.30, brand: "pls", tags: ["비건","간식","식물성","건강"] },
  { kw: "근육 단백질", vol: 333, trend: 0.09, brand: "pls", tags: ["근육","단백질","운동","피트니스"] },
  { kw: "단백질 스낵", vol: 210, trend: 0.05, brand: "pls", tags: ["단백질","스낵","간식","건강"] },
  { kw: "운동 후 간식", vol: 183, trend: 0.06, brand: "pls", tags: ["운동","간식","피트니스","단백질"] },
  { kw: "식이섬유 간식", vol: 110, trend: 0.25, brand: "pls", tags: ["식이섬유","간식","건강","소화"] },

  // ═══ 탱글 + 펄스랩 공통 ═══
  { kw: "다이어트 간식", vol: 36896, trend: 0.73, prevVol: 31046, change: "+18.8%", brand: "tgl,pls", tags: ["다이어트","간식","건강","체중"] },
];

// ═══ 플랫폼 동작 방식 ═══
// 1. Claude API가 제품 정보를 받으면 → 키워드 20~30개 추출
// 2. 추출된 키워드를 keywordPool의 tags에서 매칭
// 3. 매칭된 키워드를 vol(검색량) 내림차순 정렬
// 4. TOP 10~20 기회 키워드를 "기회의 크기" 차트로 표시
// 5. 각 기회 키워드로 숏폼 아이디어 생성

// ═══ 제품 자산 정의 ═══
export const brandAssets = {
  "1963": {
    assets: [
      { name:"우지파동 스토리", icon:"📖", desc:"1963년 한국 최초 라면 + 우지파동이라는 독보적 서사", keywords:["우지라면","라면 역사"], totalVolume:49006, topKeyword:{kw:"우지라면",vol:49006} },
      { name:"야식/혼밥 대표", icon:"🌙", desc:"야식=라면이라는 공식의 프리미엄 버전", keywords:["야식 추천","야식 라면","자취 라면","혼밥 라면"], totalVolume:23458, topKeyword:{kw:"야식 추천",vol:21856} },
      { name:"라면 레시피 자산", icon:"👨‍🍳", desc:"원조 라면의 레시피/맛집 확장 가능성", keywords:["라면 레시피","라면 맛있게 끓이는 법","라면 맛집"], totalVolume:26826, topKeyword:{kw:"라면 레시피",vol:20300} },
      { name:"프리미엄 원조", icon:"👑", desc:"한국 라면의 원조가 만든 프리미엄 라인", keywords:["프리미엄 라면","라면 추천","라면 순위"], totalVolume:17878, topKeyword:{kw:"라면 추천",vol:10866} },
    ],
  },
  "mep": {
    assets: [
      { name:"5가지 매운맛 스펙트럼", icon:"🌶️", desc:"마늘조개, 불닭, 로제 등 다양한 매운맛 라인업", keywords:["매운 라면","매운 라면 추천","매운 라면 순위","매운맛 라면"], totalVolume:12109, topKeyword:{kw:"매운 라면",vol:6516} },
      { name:"캡사이신 효과", icon:"🔬", desc:"캡사이신 → 엔돌핀 → 스트레스 해소 과학적 근거", keywords:["캡사이신","매운 음식"], totalVolume:18393, topKeyword:{kw:"매운 음식",vol:12273} },
      { name:"감정 해소 맥락", icon:"💆", desc:"스트레스 받을 때 매운 거 먹는 소비자 행동", keywords:["스트레스 해소 음식"], totalVolume:300, topKeyword:{kw:"스트레스 해소 음식",vol:300}, pathfinderNote:"'스트레스 해소 음식' → '스트레스 풀리는 매운 음식' 경로 실제 존재!" },
      { name:"챌린지/먹방 콘텐츠", icon:"🎬", desc:"매운맛 챌린지는 숏폼에서 검증된 바이럴 포맷", keywords:["매운맛 챌린지","먹방"], totalVolume:2787512, topKeyword:{kw:"먹방",vol:2787350} },
    ],
  },
  "tgl": {
    assets: [
      { name:"병아리콩 건면", icon:"🌾", desc:"병아리콩 원료 자체가 대형 관심 카테고리 🌱 자연 비건/식물성 — 별도 비건 인증 없이도 원료 자체가 식물성", keywords:["병아리콩","병아리콩 효능","병아리콩 요리"], totalVolume:137819, prevTotalVolume:112009, change:"+23.0%", topKeyword:{kw:"병아리콩",vol:73993} },
      { name:"단백질 15g", icon:"💪", desc:"면 제품에서 단백질 15g은 차별화 자산", keywords:["단백질 면","단백질 라면","단백질 많은 음식"], totalVolume:27406, prevTotalVolume:26369, change:"+3.9%", topKeyword:{kw:"단백질 많은 음식",vol:26873} },
      { name:"다이어트 면 대안", icon:"🥗", desc:"다이어트 중 면 욕구를 해결하는 포지셔닝", keywords:["다이어트 간식","다이어트 면","다이어트 라면","다이어트 중 라면","다이어트 파스타","콩담백면"], totalVolume:67232, prevTotalVolume:61008, change:"+10.2%", topKeyword:{kw:"다이어트 간식",vol:36896}, pathfinderNote:"'다이어트 면' → '콩담백면'(월 10,783회) 여정에 탱글 부재 — 삽입 기회" },
      { name:"4분 간편 조리", icon:"⏱️", desc:"운동 후/바쁜 일상에서 빠른 단백질 섭취", keywords:["운동 후 식사","운동 후 라면"], totalVolume:2964, prevTotalVolume:2734, change:"+8.4%", topKeyword:{kw:"운동 후 식사",vol:2686}, pathfinderNote:"'운동 후 식사추천' → '운동 후 라면' 경로 실제 존재(월 278회)" },
      // ── 신규 자산 5개 (캠페인 확장) ──
      { name:"프로틴 파스타", icon:"🍝", desc:"다이어트 중 파스타 욕구를 프로틴으로 해결", keywords:["다이어트 파스타","파스타 다이어트","단백질 파스타","프로틴 파스타","탱글 파스타 다이어트"], totalVolume:15834, prevTotalVolume:14360, change:"+10.3%", topKeyword:{kw:"다이어트 파스타",vol:9980}, pathfinderNote:"★ 가장 큰 진입점. 탱글 파스타 다이어트 98/mo. 브랜드 검색 안정화" },
      { name:"직장인 점심 대용", icon:"🏢", desc:"오피스 런치타임에 간편하게 한끼 해결", keywords:["직장인 점심 도시락","점심 대용","점심 간편식","회사 점심 메뉴 추천","한끼대용"], totalVolume:6575, prevTotalVolume:5765, change:"+14.0%", topKeyword:{kw:"직장인 점심 도시락",vol:2450}, pathfinderNote:"★ 브리프 직결. 런치타임 오피스 샘플링과 연계. 구매 인텐트(T) 키워드 다수." },
      { name:"단백질 간식/보상", icon:"🏋️", desc:"프로틴 파우더 피로감 탈출, 음식으로 단백질", keywords:["단백질 간식","프로틴 간식","단백질 간식 추천"], totalVolume:6146, prevTotalVolume:5126, change:"+19.9%", topKeyword:{kw:"단백질 간식",vol:5723}, pathfinderNote:"남성 세그먼트 기회. +78% 급성장." },
      { name:"운동 후 단백질 보충", icon:"💪", desc:"운동 후 식사로 파스타+단백질 조합", keywords:["운동 후 식사","운동 후 식사 추천"], totalVolume:2686, prevTotalVolume:2456, change:"+9.4%", topKeyword:{kw:"운동 후 식사",vol:2686}, pathfinderNote:"브리프의 '운동 관심사' 타겟 직결. 여성 68.2%가 검색." },
      { name:"자취생 간단한 한끼", icon:"🏠", desc:"1인가구/자취생의 빠르고 건강한 한끼", keywords:["자취 한끼","간단한 한끼 요리","자취 간편식"], totalVolume:1294, prevTotalVolume:1250, change:"+3.5%", topKeyword:{kw:"자취 한끼",vol:357}, pathfinderNote:"★ 최고 성장률 +49%. 1인가구 트렌드와 직결." },
      { name:"Meal-prep 식단 준비", icon:"📦", desc:"일요일 식단 준비에 탱글을 포함하는 루틴", keywords:["밀프렙","밀프랩","다이어트 밀프렙","단백질 도시락","식단 도시락","일주일 식단","일주일 도시락"], totalVolume:45590, prevTotalVolume:38734, change:"+17.7%", topKeyword:{kw:"밀프랩",vol:20013}, pathfinderNote:"★ NEW — 가장 큰 규모의 새 오케이션. 밀프렙+밀프랩 합산 27,969/mo. +78% 급성장 (다이어트 밀프렙). 단백질 도시락은 구매 인텐트(T)." },
      // ── 신규 자산 3개 (Sections 10-12) ──
      { name:"혈당스파이크 대안", icon:"📊", desc:"병아리콩 건면 = 밀가루 없는 저GI 면. 혈당스파이크 걱정 없이 면을 먹는 법 (※ 의료 주장 금지, 라이프스타일 선택으로 접근)", keywords:["혈당스파이크","글루텐프리","밀가루 끊기","GI지수 낮은 음식","글루텐프리 파스타","병아리콩 혈당","밀가루 없는 면"], totalVolume:53347, prevTotalVolume:56156, change:"-5.0%", topKeyword:{kw:"혈당스파이크",vol:37576}, pathfinderNote:"'혈당스파이크' 37,576/mo (-18% 피크 후 안정화, 여전히 탱글 관련 최대 키워드). 밀가루 대안 수요 지속. '글루텐프리' 11,093/mo. 반드시 '의학적 주장'이 아닌 '라이프스타일 선택'으로 접근" },
      { name:"야식 라면 대안", icon:"🌙", desc:"밤 11시, 라면 끓이는 대신 이걸 끓였습니다. 야식 면 욕구를 건강하게 해결", keywords:["다이어트 야식","야식 건강","건강한 야식","밤에 라면 대신"], totalVolume:8936, prevTotalVolume:8936, change:"0%", topKeyword:{kw:"다이어트 야식",vol:6736}, pathfinderNote:"'야식 추천' 21,856/mo → '다이어트 야식' 6,736/mo 경로. 야식 면 욕구에서 탱글이 건강한 대안으로 포지셔닝" },
      { name:"키즈 건강 면", icon:"👶", desc:"아이가 라면 달라고 할 때, 이걸 끓여주면 죄책감 없어요. 육아맘 타겟", keywords:["아이 간식","아이 건강 간식","키즈 간편식","아이 라면","아이 라면 대안"], totalVolume:7736, prevTotalVolume:12860, change:"-39.9%", topKeyword:{kw:"아이 간식",vol:3376}, pathfinderNote:"육아맘 세그먼트 진입점. '아이 간식' 3,376/mo. 라면 대신 병아리콩 면이라는 죄책감 해소 포지셔닝" },
    ],
  },
  "pls": {
    assets: [
      { name:"식물성 단백질", icon:"🌱", desc:"자체 개발 식물성 단백질 기술", keywords:["식물성 단백질","비건 간식","식물성 너겟"], totalVolume:7676, topKeyword:{kw:"식물성 단백질",vol:7230} },
      { name:"병아리콩 + 캐슈넛 원료", icon:"🌾", desc:"병아리콩·캐슈넛 각각이 대형 관심 카테고리", keywords:["병아리콩","병아리콩 효능","병아리콩 요리","캐슈넛","캐슈넛 효능"], totalVolume:179972, topKeyword:{kw:"병아리콩",vol:73993} },
      { name:"단백질 47g (너겟 기준)", icon:"💪", desc:"봉지당 단백질 47g — 간식치고 압도적 함량", keywords:["단백질 간식","단백질 간식 추천","단백질 많은 음식","단백질 스낵","근육 단백질"], totalVolume:32745, topKeyword:{kw:"단백질 많은 음식",vol:26873} },
      { name:"길트프리 스낵 콘셉트", icon:"✨", desc:"죄책감 없이 즐기는 건강 간식", keywords:["길트프리","건강 간식","다이어트 간식","편의점 다이어트 간식"], totalVolume:56969, topKeyword:{kw:"다이어트 간식",vol:36896} },
      { name:"후무스", icon:"🥙", desc:"글로벌 트렌드 식품. 한국에서도 검색량 2만+", keywords:["후무스","후무스 만들기"], totalVolume:30559, topKeyword:{kw:"후무스",vol:22196} },
    ],
  },
};

// ═══ 불닭볶음면 US Market 키워드 풀 ═══
export const buldakKeywordPool = [
  {kw:"buldak ramen",vol:282666,trend:-0.18,tags:["brand","core"],brand:"buldak"},
  {kw:"buldak",vol:216000,trend:-0.18,tags:["brand","core"],brand:"buldak"},
  {kw:"buldak carbonara",vol:50166,trend:-0.18,tags:["brand","flavor"],brand:"buldak"},
  {kw:"buldak sauce",vol:18100,trend:0.22,tags:["brand","sauce","ritual"],brand:"buldak"},
  {kw:"buldak flavors",vol:12266,trend:-0.18,tags:["brand","exploration"],brand:"buldak"},
  {kw:"buldak ramen recipe",vol:5866,trend:-0.33,tags:["brand","recipe","hackable"],brand:"buldak"},
  {kw:"buldak near me",vol:2733,trend:-0.17,tags:["brand","purchase"],brand:"buldak"},
  {kw:"does buldak cause cancer",vol:6700,trend:-0.33,tags:["brand","barrier"],brand:"buldak"},
  {kw:"is buldak bad for you",vol:1060,trend:0.30,tags:["brand","barrier","growing"],brand:"buldak"},
  {kw:"how to make buldak less spicy",vol:1600,trend:-0.18,tags:["brand","barrier","entry"],brand:"buldak"},
  {kw:"lazy dinner ideas",vol:14766,trend:4.02,tags:["occasion","quick","growing"],brand:"buldak"},
  {kw:"quick dinner ideas",vol:79500,trend:0,tags:["occasion","quick"],brand:"buldak"},
  {kw:"one pot meals",vol:61333,trend:0,tags:["occasion","quick"],brand:"buldak"},
  {kw:"cheap dinner ideas",vol:43500,trend:-0.18,tags:["occasion","budget"],brand:"buldak"},
  {kw:"late night food",vol:33100,trend:-0.18,tags:["occasion","latenight"],brand:"buldak"},
  {kw:"capsaicin benefits",vol:4800,trend:0.50,tags:["occasion","health","growing"],brand:"buldak"},
  {kw:"what to eat when sick",vol:23833,trend:0.22,tags:["occasion","health","comfort","growing"],brand:"buldak"},
  {kw:"spicy food when sick",vol:960,trend:0.49,tags:["occasion","health","growing"],brand:"buldak"},
  {kw:"comfort food",vol:50166,trend:-0.33,tags:["occasion","comfort","emotional"],brand:"buldak"},
  {kw:"super bowl food",vol:96700,trend:128.47,tags:["occasion","social","season"],brand:"buldak"},
  {kw:"game day snacks",vol:7466,trend:0.22,tags:["occasion","social","growing"],brand:"buldak"},
  {kw:"ramen recipe",vol:91500,trend:0,tags:["occasion","recipe"],brand:"buldak"},
  {kw:"korean food",vol:323333,trend:-0.18,tags:["occasion","kfood","culture"],brand:"buldak"},
  {kw:"gochujang sauce",vol:50166,trend:0.22,tags:["occasion","kfood","sauce","growing"],brand:"buldak"},
  {kw:"spicy food",vol:69500,trend:-0.18,tags:["occasion","spicy","identity"],brand:"buldak"},
  {kw:"h mart near me",vol:632000,trend:0.22,tags:["purchase","channel","growing"],brand:"buldak"},
  {kw:"mukbang",vol:1720000,trend:-0.18,tags:["occasion","social","content"],brand:"buldak"},
  // ═══ 스트레스/감정 키워드 (MAIN Occasion) ═══
  {kw:"stress relief",vol:57000,trend:0.15,tags:["stress","emotional","ritual"],brand:"buldak"},
  {kw:"i hate my job",vol:20500,trend:0.10,tags:["stress","emotional","rage"],brand:"buldak"},
  {kw:"bad day",vol:287000,trend:0,tags:["stress","emotional","universal"],brand:"buldak"},
  {kw:"sunday scaries",vol:15000,trend:0.08,tags:["stress","emotional","ritual","weekly"],brand:"buldak"},
  {kw:"burnout",vol:100000,trend:0.12,tags:["stress","emotional","chronic"],brand:"buldak"},
  // ═══ SUB Occasion 추가 키워드 ═══
  {kw:"late night snack",vol:4733,trend:0,tags:["occasion","latenight"],brand:"buldak"},
  {kw:"midnight snack ideas",vol:1800,trend:0,tags:["occasion","latenight"],brand:"buldak"},
  {kw:"drunk food",vol:720,trend:0,tags:["occasion","latenight","social"],brand:"buldak"},
  // ═══ Period Cravings 키워드 ═══
  {kw:"period food cravings",vol:2800,trend:0,tags:["stress","emotional","health","female"],brand:"buldak"},
  {kw:"why do i crave spicy food",vol:633,trend:0,tags:["stress","emotional","health","female"],brand:"buldak"},
  {kw:"craving spicy food meaning",vol:180,trend:0,tags:["stress","emotional","health"],brand:"buldak"},
  // ═══ Swicy (Sweet+Spicy) 트렌드 키워드 ═══
  {kw:"hot honey",vol:60500,trend:0.22,tags:["occasion","sauce","swicy","growing"],brand:"buldak"},
  {kw:"sweet chili sauce",vol:53166,trend:0.22,tags:["occasion","sauce","swicy","growing"],brand:"buldak"},
  {kw:"sweet and spicy sauce",vol:3366,trend:0,tags:["occasion","sauce","swicy"],brand:"buldak"},
  {kw:"sweet and spicy",vol:2900,trend:0,tags:["occasion","sauce","swicy"],brand:"buldak"},
  {kw:"swicy",vol:2033,trend:1.40,tags:["occasion","sauce","swicy","growing"],brand:"buldak"},
];

export const buldakAssets = {
  id:"buldak",market:"us",
  assets:[
    {icon:"😤",name:"Stress Relief (스트레스 해소)",desc:"스트레스·분노·번아웃 상황에서 매운맛으로 감정 전환",totalVolume:344000,topKeyword:{kw:"stress relief",vol:57000},pathfinderNote:"검색 여정 존재: 스트레스 검색량(연 4,128,000) vs 음식 검색량(연 684,000) = 6배. 'i hate my job'(246,000)+'bad day'(3,444,000). 검색에서는 '스트레스→매운 음식' 연결이 보이지 않음 — 숏폼으로 만드는 것이 핵심 전략 (Stress Ritual)"},
    {icon:"🔥",name:"Spicy Kick (엔도르핀)",desc:"캡사이신→엔도르핀→기분전환. 매운맛의 과학적 기능",totalVolume:78229,topKeyword:{kw:"spicy food",vol:69500},pathfinderNote:"'capsaicin benefits'→'capsaicin for men/skin' / 'spicy food when sick'→'does it help sore throat'"},
    {icon:"🍳",name:"5 Min Meal (5분 완성)",desc:"끓는 물+5분=한 끼. 극한의 간편함",totalVolume:157299,topKeyword:{kw:"quick dinner ideas",vol:79500},pathfinderNote:"'lazy dinner ideas'(+402%🔥)→'quick dinner for family'→'cheap easy meals'"},
    {icon:"💰",name:"$2 Dinner (가성비)",desc:"5팩 $8 이하. 패스트푸드 $10+ 대비 압도적",totalVolume:43500,topKeyword:{kw:"cheap dinner ideas",vol:43500},pathfinderNote:"'cheap dinner'→'under $10 meals'→'fast food near me' (이탈) — 불닭이 가로채는 기회"},
    {icon:"🌎",name:"K-Food Icon (한국 문화)",desc:"K-pop/K-drama와 함께 가장 인지도 높은 한국 음식",totalVolume:373496,topKeyword:{kw:"korean food",vol:323333},pathfinderNote:"'korean food trend'(+80%🔥) 급성장 중"},
    {icon:"🍜",name:"Hackable (무한 변형)",desc:"치즈/계란/크림/김치 무한 조합. 나만의 레시피",totalVolume:27499,topKeyword:{kw:"ramen egg recipe",vol:15900},pathfinderNote:"'buldak ramen recipe'→'with egg'→'how to make creamy'→'how to make less spicy'"},
    {icon:"🧴",name:"Buldak Sauce (만능 소스)",desc:"라면 넘어 조미료로 활용. 4년간 5배 구조적 성장. Swicy 트렌드의 핵심 플레이어 — Hot Honey(60,500/mo)+Gochujang(50,166/mo)과 같은 생태계. 'sweet and spicy' 172,131/mo의 거대 Swicy 시장에서 유일한 '라면 브랜드 소스' 포지션",totalVolume:18100,topKeyword:{kw:"buldak sauce",vol:18100},pathfinderNote:"'buldak sauce'→'recipe'→'ingredients'→'where to buy' (리추얼 전환 핵심 증거). Swicy 생태계: hot honey 60,500 + gochujang 50,166 + sweet chili 53,166 = 163,832/mo"},
    {icon:"🎭",name:"Shareable (공유 경험)",desc:"같이 먹으면 콘텐츠가 되는 음식",totalVolume:1720000,topKeyword:{kw:"mukbang",vol:1720000},pathfinderNote:"TikTok 3.6억+ 포스트. 60M뷰 생일선물 영상"},
    {icon:"🌶️",name:"Flavor World (맛 탐험)",desc:"카보나라/로제/치즈/짜장 10+가지 맛 라인업",totalVolume:62432,topKeyword:{kw:"buldak carbonara",vol:50166},pathfinderNote:"'buldak flavors'→'flavors list'→'spicy level'→'least spicy to most spicy'"},
  ]
};

// ═══ CTA 가이드 ═══
// 한국 브랜드: brand.naver.com/syfoodshop
// 불닭 US: Amazon/Walmart/H-Mart

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
  { kw: "다이어트 간식", vol: 31046, trend: 0.26, brand: "tgl", tags: ["다이어트","간식","건강","체중"] },
  { kw: "다이어트 파스타", vol: 9180, trend: 0.16, brand: "tgl", tags: ["다이어트","파스타","면","건강"] },
  { kw: "다이어트 라면", vol: 7203, trend: -0.08, brand: "tgl", tags: ["다이어트","라면","면","건강"] },
  { kw: "콩담백면", vol: 11156, trend: 0.17, brand: "tgl", tags: ["콩담백면","다이어트","면","경쟁자"] },
  { kw: "건면", vol: 5000, trend: -0.17, brand: "tgl", tags: ["건면","면","다이어트","건강"] },
  { kw: "운동 후 식사", vol: 2456, trend: -0.17, brand: "tgl", tags: ["운동","식사","피트니스","단백질"] },
  { kw: "다이어트 면", vol: 1633, trend: 0.02, brand: "tgl", tags: ["다이어트","면","건강","체중"] },
  { kw: "다이어트 중 라면", vol: 890, trend: -0.07, brand: "tgl", tags: ["다이어트","라면","욕구","면"] },
  { kw: "단백질 면", vol: 523, trend: 0.13, brand: "tgl", tags: ["단백질","면","건강","피트니스"] },
  { kw: "단백질 라면", vol: 360, trend: -0.14, brand: "tgl", tags: ["단백질","라면","운동","건강"] },
  { kw: "운동 후 라면", vol: 278, trend: -0.11, brand: "tgl", tags: ["운동","라면","피트니스","식사"] },

  // ═══ 펄스랩 관련 ═══
  { kw: "병아리콩", vol: 59813, trend: -0.03, brand: "pls", tags: ["병아리콩","원료","건강","콩"] },
  { kw: "캐슈넛", vol: 37723, trend: 0.15, brand: "pls", tags: ["캐슈넛","너트","건강","간식"] },
  { kw: "병아리콩 효능", vol: 29180, trend: -0.06, brand: "pls", tags: ["병아리콩","효능","건강","영양"] },
  { kw: "단백질 많은 음식", vol: 25486, trend: -0.13, brand: "pls", tags: ["단백질","음식","건강","영양"] },
  { kw: "병아리콩 요리", vol: 23016, trend: 0.12, brand: "pls", tags: ["병아리콩","요리","레시피"] },
  { kw: "후무스", vol: 22196, trend: -0.05, brand: "pls", tags: ["후무스","건강","중동","간식"] },
  { kw: "캐슈넛 효능", vol: 16060, trend: 0.09, brand: "pls", tags: ["캐슈넛","효능","건강","영양"] },
  { kw: "사무실 간식", vol: 11453, trend: -0.05, cpc: 4.86, brand: "pls", tags: ["사무실","간식","직장","B2B"] },
  { kw: "식이섬유", vol: 43200, trend: 0.71, brand: "pls", tags: ["식이섬유","건강","소화","영양"] },
  { kw: "길트프리", vol: 8623, trend: -0.38, brand: "pls", tags: ["길트프리","죄책감없는","건강","스낵"] },
  { kw: "건강 간식", vol: 8640, trend: -0.23, brand: "pls", tags: ["건강","간식","영양","웰빙"] },
  { kw: "후무스 만들기", vol: 8363, trend: 0.0, brand: "pls", tags: ["후무스","만들기","레시피","요리"] },
  { kw: "식물성 단백질", vol: 7230, trend: -0.22, brand: "pls", tags: ["식물성","단백질","비건","건강"] },
  { kw: "단백질 간식", vol: 4703, trend: 0.24, brand: "pls", tags: ["단백질","간식","건강","운동"] },
  { kw: "편의점 다이어트 간식", vol: 2810, trend: -0.07, brand: "pls", tags: ["편의점","다이어트","간식"] },
  { kw: "단백질 간식 추천", vol: 626, trend: 0.07, brand: "pls", tags: ["단백질","간식","추천"] },
  { kw: "체중관리", vol: 476, trend: -0.24, brand: "pls", tags: ["체중","관리","다이어트","건강"] },
  { kw: "비건 간식", vol: 436, trend: -0.30, brand: "pls", tags: ["비건","간식","식물성","건강"] },
  { kw: "근육 단백질", vol: 333, trend: 0.09, brand: "pls", tags: ["근육","단백질","운동","피트니스"] },
  { kw: "단백질 스낵", vol: 210, trend: 0.05, brand: "pls", tags: ["단백질","스낵","간식","건강"] },
  { kw: "운동 후 간식", vol: 183, trend: 0.06, brand: "pls", tags: ["운동","간식","피트니스","단백질"] },
  { kw: "식이섬유 간식", vol: 110, trend: 0.25, brand: "pls", tags: ["식이섬유","간식","건강","소화"] },

  // ═══ 탱글 + 펄스랩 공통 ═══
  { kw: "다이어트 간식", vol: 31046, trend: 0.26, brand: "tgl,pls", tags: ["다이어트","간식","건강","체중"] },
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
      { name:"병아리콩 건면", icon:"🌾", desc:"병아리콩 원료 자체가 대형 관심 카테고리", keywords:["병아리콩","병아리콩 효능","병아리콩 요리"], totalVolume:112009, topKeyword:{kw:"병아리콩",vol:59813} },
      { name:"단백질 15g", icon:"💪", desc:"면 제품에서 단백질 15g은 차별화 자산", keywords:["단백질 면","단백질 라면","단백질 많은 음식"], totalVolume:26369, topKeyword:{kw:"단백질 많은 음식",vol:25486} },
      { name:"다이어트 면 대안", icon:"🥗", desc:"다이어트 중 면 욕구를 해결하는 포지셔닝", keywords:["다이어트 간식","다이어트 면","다이어트 라면","다이어트 중 라면","다이어트 파스타","콩담백면"], totalVolume:61008, topKeyword:{kw:"다이어트 간식",vol:31046}, pathfinderNote:"'다이어트 면' → '콩담백면'(월 11,156회) 여정에 탱글 부재 — 삽입 기회" },
      { name:"4분 간편 조리", icon:"⏱️", desc:"운동 후/바쁜 일상에서 빠른 단백질 섭취", keywords:["운동 후 식사","운동 후 라면"], totalVolume:2734, topKeyword:{kw:"운동 후 식사",vol:2456}, pathfinderNote:"'운동 후 식사추천' → '운동 후 라면' 경로 실제 존재(월 278회)" },
    ],
  },
  "pls": {
    assets: [
      { name:"식물성 단백질", icon:"🌱", desc:"자체 개발 식물성 단백질 기술", keywords:["식물성 단백질","비건 간식","식물성 너겟"], totalVolume:7676, topKeyword:{kw:"식물성 단백질",vol:7230} },
      { name:"병아리콩 + 캐슈넛 원료", icon:"🌾", desc:"병아리콩·캐슈넛 각각이 대형 관심 카테고리", keywords:["병아리콩","병아리콩 효능","병아리콩 요리","캐슈넛","캐슈넛 효능"], totalVolume:165792, topKeyword:{kw:"병아리콩",vol:59813} },
      { name:"단백질 47g (너겟 기준)", icon:"💪", desc:"봉지당 단백질 47g — 간식치고 압도적 함량", keywords:["단백질 간식","단백질 간식 추천","단백질 많은 음식","단백질 스낵","근육 단백질"], totalVolume:31358, topKeyword:{kw:"단백질 많은 음식",vol:25486} },
      { name:"길트프리 스낵 콘셉트", icon:"✨", desc:"죄책감 없이 즐기는 건강 간식", keywords:["길트프리","건강 간식","다이어트 간식","편의점 다이어트 간식"], totalVolume:51119, topKeyword:{kw:"다이어트 간식",vol:31046} },
      { name:"후무스", icon:"🥙", desc:"글로벌 트렌드 식품. 한국에서도 검색량 2만+", keywords:["후무스","후무스 만들기"], totalVolume:30559, topKeyword:{kw:"후무스",vol:22196} },
    ],
  },
};

// ═══ CTA 가이드 ═══
// 모든 숏폼 아이디어의 CTA는 삼양식품 네이버 브랜드 스토어로 연결:
// brand.naver.com/syfoodshop

// ═══ Claude API 프롬프트에 포함할 내용 ═══
// "이 제품의 속성을 분해해서 다음 키워드 풀에서 매칭되는 것을 찾아.
//  매칭된 키워드의 검색량이 곧 '기회의 크기'야.
//  가장 큰 기회부터 숏폼 아이디어를 만들어.
//  CTA는 삼양식품 공식몰(brand.naver.com/syfoodshop)로 연결."

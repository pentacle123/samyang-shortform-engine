// ═══════════════════════════════════════════════════════════════
// 탱글/불닭 확인된 기회 — 타겟 TOP3 프로필 데이터
// ═══════════════════════════════════════════════════════════════
// ListeningMind 인구통계 데이터 기반. 각 확인된 기회 카드에 "👤 TOP 타겟" 섹션으로 렌더링.
// ═══════════════════════════════════════════════════════════════

export const opportunityTargetProfiles = {

  // ── 불닭(US) ──
  "5min_meal": {
    name: "5 Min Meal", subtitle: "귀찮은 저녁 — lazy dinner ideas +402%",
    genderSkew: "female_strong",
    targets: [
      { rank: 1, gender: "여성", age: "30대", percent: 35, note: "다이어트 중 간편식 핵심" },
      { rank: 2, gender: "여성", age: "40대", percent: 24, note: "가족 간편식 탐색" },
      { rank: 3, gender: "여성", age: "25~29세", percent: 19, note: "사회초년생/자취" },
    ],
    femaleRatio: 81, topKeywordSource: "다이어트 간식 36,896/mo + 다이어트 면 1,870/mo",
  },
  "spicy_kick": {
    name: "Spicy Kick", subtitle: "감기/아플 때 — spicy food when sick +49%",
    genderSkew: "female_moderate",
    targets: [
      { rank: 1, gender: "여성", age: "40대", percent: 31, note: "건강 관리 관심" },
      { rank: 2, gender: "여성", age: "30대", percent: 30, note: "운동/건강 루틴" },
      { rank: 3, gender: "남성", age: "25~29세", percent: 14, note: "헬스 청년층" },
    ],
    femaleRatio: 71, topKeywordSource: "운동 후 식사 2,686/mo",
  },
  "buldak_sauce": {
    name: "Buldak Sauce", subtitle: "불닭 소스 — 4년간 5배 성장",
    genderSkew: "female_strong",
    targets: [
      { rank: 1, gender: "여성", age: "30대", percent: 34, note: "간식 대안 탐색" },
      { rank: 2, gender: "여성", age: "40대", percent: 30, note: "건강 간식" },
      { rank: 3, gender: "남성", age: "30대", percent: 15, note: "운동/프로틴" },
    ],
    femaleRatio: 61, topKeywordSource: "단백질 간식 5,723/mo",
  },
  "dollar2_dinner": {
    name: "$2 Dinner", subtitle: "가성비 — 패스트푸드 $10+ vs 불닭 $2",
    genderSkew: "female_strong",
    targets: [
      { rank: 1, gender: "여성", age: "30대", percent: 35, note: "가성비 식사 핵심" },
      { rank: 2, gender: "여성", age: "40대", percent: 24, note: "가족 예산 관리" },
      { rank: 3, gender: "여성", age: "25~29세", percent: 19, note: "사회초년생" },
    ],
    femaleRatio: 81, topKeywordSource: "다이어트 간식 36,896/mo",
  },
  "kfood_icon": {
    name: "K-Food Icon", subtitle: "K-food 트렌드 +80% — 한국 문화 관심",
    genderSkew: "female_strong",
    targets: [
      { rank: 1, gender: "여성", age: "30대", percent: 37, note: "K-food 관심 핵심" },
      { rank: 2, gender: "여성", age: "40대", percent: 23, note: "한국 요리 탐색" },
      { rank: 3, gender: "여성", age: "50대+", percent: 17, note: "건강 한식 관심" },
    ],
    femaleRatio: 76, topKeywordSource: "콩담백면 10,783/mo",
  },
  "shareable": {
    name: "Shareable", subtitle: "Game Day / Super Bowl — 파티 간식",
    genderSkew: "balanced",
    targets: [
      { rank: 1, gender: "남성", age: "30대", percent: 33, note: "야식/파티 핵심" },
      { rank: 2, gender: "여성", age: "25~29세", percent: 21, note: "젊은 여성 야식" },
      { rank: 3, gender: "남성", age: "40대", percent: 17, note: "중년 야식" },
    ],
    femaleRatio: 49, topKeywordSource: "야식 추천 20,273/mo",
  },
  "hackable": {
    name: "Hackable", subtitle: "불닭 레시피 변형 — 무한 조합",
    genderSkew: "female_moderate",
    targets: [
      { rank: 1, gender: "여성", age: "30대", percent: 41, note: "파스타 레시피 핵심" },
      { rank: 2, gender: "여성", age: "25~29세", percent: 23, note: "젊은 여성" },
      { rank: 3, gender: "여성", age: "40대", percent: 16, note: "요리 관심" },
    ],
    femaleRatio: 74, topKeywordSource: "다이어트 파스타 9,980/mo",
  },

  // ── 탱글 ──
  "diet_noodle": {
    name: "다이어트 면 대안", subtitle: "다이어트 중 면이 먹고 싶을 때",
    genderSkew: "female_strong",
    targets: [
      { rank: 1, gender: "여성", age: "30대", percent: 32, note: "다이어트 면 갈망 핵심" },
      { rank: 2, gender: "여성", age: "40대", percent: 31, note: "건강 면 대안 탐색" },
      { rank: 3, gender: "여성", age: "25~29세", percent: 15, note: "체중 관리 관심" },
    ],
    femaleRatio: 76, topKeywordSource: "다이어트 면 1,870/mo (+47% 성장)",
  },
  "diet_pasta": {
    name: "다이어트 파스타", subtitle: "다이어트 중 파스타가 먹고 싶을 때",
    genderSkew: "female_moderate",
    targets: [
      { rank: 1, gender: "여성", age: "30대", percent: 41, note: "다이어트 파스타의 핵심" },
      { rank: 2, gender: "여성", age: "25~29세", percent: 23, note: "젊은 여성 파스타 욕구" },
      { rank: 3, gender: "여성", age: "40대", percent: 16, note: "건강한 파스타 탐색" },
    ],
    femaleRatio: 74, topKeywordSource: "다이어트 파스타 9,980/mo (+32% 성장)",
  },
  "office_lunch": {
    name: "직장인 점심 대용", subtitle: "오늘 점심 5분 파스타인데 단백질이 이만큼",
    genderSkew: "female_strong",
    targets: [
      { rank: 1, gender: "여성", age: "30대", percent: 33, note: "2535 직장인 핵심" },
      { rank: 2, gender: "여성", age: "40대", percent: 27, note: "중견 직장인" },
      { rank: 3, gender: "여성", age: "25~29세", percent: 17, note: "사회 초년생" },
    ],
    femaleRatio: 83, topKeywordSource: "직장인 점심 도시락 2,450/mo (+66% 성장)",
  },
  "protein_snack": {
    name: "단백질 간식/보상", subtitle: "쉐이크 대신 파스타로 단백질",
    genderSkew: "female_moderate",
    targets: [
      { rank: 1, gender: "여성", age: "30대", percent: 34, note: "간식 대안 탐색" },
      { rank: 2, gender: "여성", age: "40대", percent: 30, note: "건강 간식 관심" },
      { rank: 3, gender: "남성", age: "30대", percent: 15, note: "운동/프로틴 ← 남성 39%" },
    ],
    femaleRatio: 61, maleHighlight: true,
    topKeywordSource: "단백질 간식 5,723/mo (+78% 성장)",
  },
  "convenience_meal": {
    name: "편의점 한끼", subtitle: "편의점에서 간편하게 한 끼",
    genderSkew: "female_moderate",
    targets: [
      { rank: 1, gender: "여성", age: "20~24세", percent: 25, note: "대학생/자취 초기" },
      { rank: 2, gender: "여성", age: "40대", percent: 24, note: "자녀 간편식 탐색" },
      { rank: 3, gender: "남성", age: "20~24세", percent: 10, note: "남자 자취생" },
    ],
    femaleRatio: 60, topKeywordSource: "자취 간편식 189/mo (+67% 성장)",
  },
  "post_workout": {
    name: "운동 후 단백질 보충", subtitle: "운동 끝나고 5분 만에 단백질 15g",
    genderSkew: "female_moderate",
    targets: [
      { rank: 1, gender: "여성", age: "40대", percent: 31, note: "중장년 운동 후 식사" },
      { rank: 2, gender: "여성", age: "30대", percent: 30, note: "직장인 운동 루틴" },
      { rank: 3, gender: "남성", age: "25~29세", percent: 14, note: "헬스 청년층 ← 남성 29%" },
    ],
    femaleRatio: 71, maleHighlight: true,
    topKeywordSource: "운동 후 식사 2,686/mo (+32% 성장)",
  },
  "solo_meal": {
    name: "자취생 간단한 한끼", subtitle: "자취 3년차가 찾은 간편 건강식",
    genderSkew: "female_moderate",
    targets: [
      { rank: 1, gender: "여성", age: "20~24세", percent: 25, note: "대학생/자취 초기" },
      { rank: 2, gender: "여성", age: "40대", percent: 24, note: "의외: 자녀용 탐색?" },
      { rank: 3, gender: "남성", age: "20~24세", percent: 10, note: "남자 자취생" },
    ],
    femaleRatio: 60, topKeywordSource: "자취 한끼 357/mo (+49% 성장)",
  },
  "meal_prep": {
    name: "Meal-prep 식단 준비", subtitle: "일요일 밀프렙에 탱글 3개면 주중 점심 해결",
    genderSkew: "female_strong",
    targets: [
      { rank: 1, gender: "여성", age: "30대", percent: 39, note: "직장인 식단 관리 핵심" },
      { rank: 2, gender: "여성", age: "40대", percent: 25, note: "가족 식단 준비" },
      { rank: 3, gender: "여성", age: "25~29세", percent: 16, note: "다이어트 밀프렙" },
    ],
    femaleRatio: 74, topKeywordSource: "밀프랩 17,216/mo (+11%)",
  },
  "chickpea_base": {
    name: "병아리콩 건면", subtitle: "병아리콩 원료 자체에 대한 관심",
    genderSkew: "female_strong",
    targets: [
      { rank: 1, gender: "여성", age: "50대+", percent: 50, note: "건강/효능 관심 ★ 시니어 편중" },
      { rank: 2, gender: "여성", age: "40대", percent: 29, note: "건강 식재료 탐색" },
      { rank: 3, gender: "여성", age: "30대", percent: 14, note: "요리/레시피 관심" },
    ],
    femaleRatio: 76,
    specialNote: "50대+ 50%로 가장 시니어 편중된 자산",
    topKeywordSource: "병아리콩 73,993/mo (+75% 성장)",
  },
  "blood_sugar": {
    name: "혈당스파이크 걱정", subtitle: "밀가루 걱정 → 글루텐프리 → 병아리콩 건면",
    genderSkew: "female_moderate",
    targets: [
      { rank: 1, gender: "여성", age: "30대", percent: 26, note: "건강 관심 MZ" },
      { rank: 2, gender: "여성", age: "40대", percent: 25, note: "혈당 관리 시작" },
      { rank: 3, gender: "남녀", age: "50대+", percent: 20, note: "혈당 관리 실수요층" },
    ],
    femaleRatio: 55,
    specialNote: "30~50대 고르게 분포 = 가장 넓은 타겟",
    topKeywordSource: "혈당스파이크 40,180/mo (10배 성장!)",
  },
  "late_night_alt": {
    name: "야식 라면 대안", subtitle: "밤 11시, 라면 끓이는 대신 이걸 끓였습니다",
    genderSkew: "balanced",
    targets: [
      { rank: 1, gender: "남성", age: "30대", percent: 33, note: "야식 라면 핵심 소비자" },
      { rank: 2, gender: "여성", age: "25~29세", percent: 21, note: "젊은 여성 야식" },
      { rank: 3, gender: "남성", age: "40대", percent: 17, note: "중년 야식" },
    ],
    femaleRatio: 49,
    specialNote: "유일한 남성 과반(51%) 기회 ← 남성 타겟 확장 가능",
    maleHighlight: true,
    topKeywordSource: "야식 추천 20,273/mo / 야식 라면 1,313/mo",
  },
  "kids_meal": {
    name: "키즈 건강 면", subtitle: "아이가 라면 달라고 할 때, 죄책감 없는 대안",
    genderSkew: "female_strong",
    targets: [
      { rank: 1, gender: "여성", age: "40대", percent: 51, note: "초등 자녀 부모 ★ 압도적" },
      { rank: 2, gender: "여성", age: "30대", percent: 41, note: "영유아 자녀 부모" },
      { rank: 3, gender: "여성", age: "25~29세", percent: 3, note: "신혼/첫아이" },
    ],
    femaleRatio: 87,
    specialNote: "여성 30~40대 93% 집중 = 육아맘 전용",
    topKeywordSource: "아이 간식 3,376/mo / 유아 간식 1,570/mo",
  },
  "protein_15g": {
    name: "단백질 15g", subtitle: "단백질 많은 음식 탐색",
    genderSkew: "female_moderate",
    targets: [
      { rank: 1, gender: "여성", age: "50대+", percent: 34, note: "건강/근감소 예방" },
      { rank: 2, gender: "여성", age: "40대", percent: 27, note: "가족 건강 관리" },
      { rank: 3, gender: "여성", age: "30대", percent: 21, note: "운동/다이어트 보조" },
    ],
    femaleRatio: 73,
    specialNote: "50대+ 의외로 높음 — 시니어 건강 관심",
    topKeywordSource: "단백질 많은 음식 26,873/mo (+16%)",
  },
};

// ═══ 자산명 → 프로필 ID 매핑 ═══
// confirmedOpportunities의 asset 필드로 프로필을 찾기 위한 테이블
export const assetToProfileId = {
  // 탱글
  "단백질 15g": "protein_15g",
  "다이어트 면 대안": "diet_noodle",
  "병아리콩 건면": "chickpea_base",
  "4분 간편조리": "solo_meal",
  "프로틴 파스타": "diet_pasta",
  "직장인 점심 대용": "office_lunch",
  "단백질 간식/보상": "protein_snack",
  "Meal-prep 식단 준비": "meal_prep",
  "혈당스파이크 대안": "blood_sugar",
  "야식 라면 대안": "late_night_alt",
  "키즈 건강 면": "kids_meal",
  "편의점 한끼": "convenience_meal",
  "운동 후 단백질 보충": "post_workout",
  "자취생 간단한 한끼": "solo_meal",
  // 불닭(US)
  "5 Min Meal": "5min_meal",
  "Spicy Kick": "spicy_kick",
  "Buldak Sauce": "buldak_sauce",
  "$2 Dinner": "dollar2_dinner",
  "K-Food Icon": "kfood_icon",
  "Shareable": "shareable",
  "Hackable": "hackable",
};

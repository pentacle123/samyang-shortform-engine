// ═══════════════════════════════════════════════════════════════
// 불닭 Campaign Intelligence Module
// ═══════════════════════════════════════════════════════════════
//
// 리추얼 캠페인의 4가지 의사결정을 실시간 데이터로 지원:
// ① 언제 올려야 하나 (타이밍) → Google Trends
// ② 어떤 포맷을 써야 하나 (형식) → TikTok Creative Center
// ③ 뭐가 먹히나 (성과) → YouTube API + TikTok API
// ④ 어떻게 키우나 (확장) → 댓글 AI + ListeningMind
//
// 이 파일은 2개의 신규 화면을 정의:
// A. STEP 2 오케이션맵 상단: "Now Trending" 스트레스 시그널
// B. STEP 3 이후 신규: "Campaign Intelligence" 대시보드
// ═══════════════════════════════════════════════════════════════

// ── A. 스트레스 시그널 실시간 추적 (Google Trends 연동) ──

// API: Google Trends (pytrends 또는 SerpAPI Google Trends)
// 연동 방법: Next.js API Route에서 서버사이드 호출
// app/api/trends/route.js

export const stressSignalConfig = {
  // 추적할 스트레스 키워드 그룹 (7개 리추얼에 매핑)
  trackingKeywords: {
    rage_release: {
      keywords: ["stressed out", "overwhelmed", "bad day", "frustrated"],
      ritual: "Rage Release Ritual",
      usCopy: "Bad day? Burn it off.",
      icon: "🔥",
      color: "#EF4444",
    },
    reward_burn: {
      keywords: ["burned out", "i hate my job", "work life balance"],
      ritual: "Little Treat, But Savage",
      usCopy: "You earned the burn.",
      icon: "🏆",
      color: "#F59E0B",
    },
    deadline_fuel: {
      keywords: ["finals week", "exam stress", "deadline"],
      ritual: "Deadline Ignition",
      usCopy: "When sleep is not an option.",
      icon: "⚡",
      color: "#8B5CF6",
    },
    breakup_burn: {
      keywords: ["breakup", "heartbreak", "relationship problems"],
      ritual: "Breakup Burn Therapy",
      usCopy: "Cry first. Burn later.",
      icon: "💔",
      color: "#EC4899",
    },
    mom_escape: {
      keywords: ["mom burnout", "parenting stress", "exhausted mom"],
      ritual: "Mom's 5 Minutes",
      usCopy: "Kids asleep. Fire noodles on.",
      icon: "👩‍👧",
      color: "#06B6D4",
    },
    road_rage: {
      keywords: ["road rage", "traffic", "commute stress"],
      ritual: "Road Rage Recovery",
      usCopy: "Road rage? Cook rage.",
      icon: "🚗",
      color: "#DC2626",
    },
    sunday_scaries: {
      keywords: ["sunday scaries", "monday dread", "sunday night anxiety"],
      ritual: "Sunday Scaries Cure",
      usCopy: "Sunday scaries? Make it a Sunday fire.",
      icon: "😰",
      color: "#6366F1",
    },
  },

  // API Route 구현 코드
  // app/api/trends/route.js
  apiRouteCode: `
// app/api/trends/route.js
// Google Trends 실시간 데이터 조회
// pip install pytrends 필요 → 대안: SerpAPI Google Trends ($50/mo)

import { NextResponse } from 'next/server';

// 방법 1: SerpAPI (추천 — 안정적, 유료 $50/mo)
export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const keywords = searchParams.get('keywords')?.split(',') || ['stressed out','overwhelmed','finals week','breakup','road rage'];
  
  try {
    // SerpAPI Google Trends
    const SERPAPI_KEY = process.env.SERPAPI_KEY;
    const results = {};
    
    for (const kw of keywords) {
      const res = await fetch(
        \`https://serpapi.com/search.json?engine=google_trends&q=\${encodeURIComponent(kw)}&geo=US&date=now 7-d&api_key=\${SERPAPI_KEY}\`
      );
      const data = await res.json();
      
      // interest_over_time에서 최근 7일 트렌드 추출
      const timeline = data.interest_over_time?.timeline_data || [];
      const values = timeline.map(t => ({
        date: t.date,
        value: t.values?.[0]?.extracted_value || 0
      }));
      
      // 최근 값 vs 7일 전 값 비교 → 상승/하락 판단
      const recent = values.slice(-3).reduce((s,v) => s + v.value, 0) / 3;
      const earlier = values.slice(0,3).reduce((s,v) => s + v.value, 0) / 3;
      const change = earlier > 0 ? ((recent - earlier) / earlier * 100).toFixed(1) : 0;
      
      results[kw] = {
        current: Math.round(recent),
        weekAgo: Math.round(earlier),
        change: parseFloat(change),
        trending: parseFloat(change) > 15, // 15% 이상 상승이면 '지금 급상승'
        timeline: values,
      };
    }
    
    return NextResponse.json({ ok: true, data: results });
  } catch (e) {
    return NextResponse.json({ ok: false, error: e.message });
  }
}
`,

  // 방법 2: 무료 대안 — pytrends (Python)
  // Next.js API Route에서 Python 스크립트를 child_process로 호출
  pythonScript: `
# scripts/google_trends.py
from pytrends.request import TrendReq
import json, sys

pytrends = TrendReq(hl='en-US', tz=300)  # EST timezone
keywords = sys.argv[1].split(',') if len(sys.argv) > 1 else ['stressed out','overwhelmed','finals week']

# 최근 7일 데이터
pytrends.build_payload(keywords[:5], cat=0, timeframe='now 7-d', geo='US')  # 최대 5개씩
data = pytrends.interest_over_time()

result = {}
for kw in keywords[:5]:
    if kw in data.columns:
        values = data[kw].tolist()
        recent = sum(values[-6:]) / 6 if len(values) >= 6 else values[-1]
        earlier = sum(values[:6]) / 6 if len(values) >= 6 else values[0]
        change = ((recent - earlier) / earlier * 100) if earlier > 0 else 0
        result[kw] = {
            'current': round(recent),
            'weekAgo': round(earlier),
            'change': round(change, 1),
            'trending': change > 15,
        }

print(json.dumps(result))
`,
};


// ── B. 콘텐츠 성과 피드백 시스템 (YouTube + TikTok) ──

export const campaignPerformanceConfig = {
  
  // 리추얼 태그 시스템 — 콘텐츠에 리추얼 ID를 태그하여 성과 추적
  ritualTags: {
    // YouTube: 영상 설명 또는 태그에 포함
    // TikTok: 해시태그에 포함
    rage_release: { ytTag: "buldak-rage-release", tiktokTag: "#BuldakRageRelease" },
    reward_burn: { ytTag: "buldak-reward-burn", tiktokTag: "#BuldakReward" },
    deadline_fuel: { ytTag: "buldak-deadline-fuel", tiktokTag: "#BuldakDeadline" },
    breakup_burn: { ytTag: "buldak-breakup-burn", tiktokTag: "#BuldakBreakup" },
    mom_escape: { ytTag: "buldak-mom-escape", tiktokTag: "#BuldakMom" },
    road_rage: { ytTag: "buldak-road-rage", tiktokTag: "#BuldakRoadRage" },
    sunday_scaries: { ytTag: "buldak-sunday-scaries", tiktokTag: "#BuldakSunday" },
  },

  // YouTube API — 리추얼별 성과 비교 (기존 채널 분석 확장)
  // 기존 STEP 1의 YouTube API를 확장하여 리추얼별 분류 추가
  youtubeRitualAnalysis: `
// 기존 TabDiag 컴포넌트 내에서 추가할 로직:
// 영상의 tag/description에서 리추얼 ID를 매칭하여 분류

const classifyByRitual = (videos) => {
  const ritualPerformance = {};
  const ritualKeys = Object.keys(campaignPerformanceConfig.ritualTags);
  
  videos.forEach(v => {
    const title = (v.title || '').toLowerCase();
    const tags = (v.tags || []).join(' ').toLowerCase();
    const desc = (v.description || '').toLowerCase();
    const combined = title + ' ' + tags + ' ' + desc;
    
    for (const rk of ritualKeys) {
      const ytTag = campaignPerformanceConfig.ritualTags[rk].ytTag;
      if (combined.includes(ytTag) || combined.includes(rk.replace('_',' '))) {
        if (!ritualPerformance[rk]) {
          ritualPerformance[rk] = { videos: [], totalViews: 0, totalLikes: 0, avgEngRate: 0 };
        }
        ritualPerformance[rk].videos.push(v);
        ritualPerformance[rk].totalViews += v.views;
        ritualPerformance[rk].totalLikes += v.likes;
      }
    }
  });
  
  // 평균 참여율 계산
  Object.values(ritualPerformance).forEach(rp => {
    rp.avgEngRate = rp.totalViews > 0 
      ? (rp.totalLikes / rp.totalViews * 100).toFixed(2) 
      : 0;
  });
  
  return ritualPerformance;
};
`,

  // TikTok Business API (승인 필요)
  tiktokApiNote: `
TikTok Business API는 승인이 필요합니다.
승인 전까지는 TikTok Creative Center의 공개 데이터를 활용:

1. Trending Sounds (공개): https://ads.tiktok.com/business/creativecenter/music/pc/en
   → 웹 스크래핑으로 상승 중인 사운드 목록 수집 가능
   
2. Top Ads (공개): https://ads.tiktok.com/business/creativecenter/topads/pc/en
   → Food 카테고리 필터링 → 성과 좋은 포맷/구조 분석
   
3. Trending Hashtags (공개): https://ads.tiktok.com/business/creativecenter/hashtag/pc/en
   → #buldak 관련 해시태그 성장 추적

이 데이터를 주 1회 수집하여 플랫폼에 하드코딩하는 방식으로 시작.
향후 TikTok Business API 승인 후 실시간 연동.
`,
};


// ── C. 오케이션 맵 "NOW TRENDING" 섹션 구현 ──

export const nowTrendingComponent = {
  // 오케이션 맵 최상단에 표시
  // Google Trends 데이터를 기반으로 "지금 미국에서 어떤 스트레스가 피크인지" 표시
  
  uiSpec: {
    position: "오케이션 맵(STEP 2)의 Stress Ritual Map 섹션 바로 위",
    title: "🔴 NOW — 미국에서 지금 급상승 중인 스트레스 시그널",
    subtitle: "Google Trends 실시간 데이터 기반 — 지금 이 리추얼 콘텐츠를 올려야 할 때",
    layout: "가로 스크롤 카드 또는 7개 미니 카드 그리드",
    refreshInterval: "6시간마다 자동 갱신 (또는 수동 새로고침 버튼)",
    
    // 각 카드에 표시할 내용
    cardContent: {
      icon: "리추얼 아이콘",
      ritualName: "리추얼 이름 (영문)",
      usCopy: "핵심 카피",
      trendIndicator: "↑15% 또는 →안정 또는 ↓하락",
      currentIndex: "현재 관심도 (0-100)",
      signal: "🔴 지금 올려라 / 🟡 준비해라 / 🟢 안정",
    },
    
    // 시그널 판단 로직
    signalLogic: {
      hot: "change > 20% → 🔴 '지금 올려라' — 빨간 글로우 + 펄스 애니메이션",
      warm: "change > 5% → 🟡 '준비해라' — 노란 테두리",
      stable: "change -5%~5% → 🟢 '안정' — 기본 상태",
      cold: "change < -5% → ⚪ '대기' — 흐림 처리",
    },
  },

  // React 컴포넌트 코드 (page.js에 추가)
  reactComponent: `
// NowTrending 컴포넌트 — 오케이션 맵 상단
const NowTrending = () => {
  const [trends, setTrends] = useState(null);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    (async () => {
      try {
        // 7개 리추얼의 대표 키워드를 Google Trends에서 조회
        const keywords = [
          'stressed out', 'burned out', 'finals week', 
          'breakup', 'mom burnout', 'road rage', 'sunday scaries'
        ];
        const res = await fetch('/api/trends?keywords=' + keywords.join(','));
        const data = await res.json();
        if (data.ok) setTrends(data.data);
      } catch (e) {
        console.error(e);
      }
      setLoading(false);
    })();
  }, []);
  
  const ritualMap = {
    'stressed out': { id:'rage_release', name:'Rage Release', icon:'🔥', copy:'Bad day? Burn it off.', color:'#EF4444' },
    'burned out': { id:'reward_burn', name:'Little Treat', icon:'🏆', copy:'You earned the burn.', color:'#F59E0B' },
    'finals week': { id:'deadline_fuel', name:'Deadline Ignition', icon:'⚡', copy:'When sleep is not an option.', color:'#8B5CF6' },
    'breakup': { id:'breakup_burn', name:'Breakup Burn', icon:'💔', copy:'Cry first. Burn later.', color:'#EC4899' },
    'mom burnout': { id:'mom_escape', name:"Mom's 5 Min", icon:'👩‍👧', copy:'Kids asleep. Fire noodles on.', color:'#06B6D4' },
    'road rage': { id:'road_rage', name:'Road Rage Recovery', icon:'🚗', copy:'Road rage? Cook rage.', color:'#DC2626' },
    'sunday scaries': { id:'sunday_scaries', name:'Sunday Scaries', icon:'😰', copy:'Make it a Sunday fire.', color:'#6366F1' },
  };
  
  const getSignal = (change) => {
    if (change > 20) return { label: '🔴 NOW', bg: '#FEF2F2', border: '#EF4444', glow: true };
    if (change > 5) return { label: '🟡 SOON', bg: '#FFFBEB', border: '#F59E0B', glow: false };
    if (change > -5) return { label: '🟢 STABLE', bg: '#F0FDF4', border: '#22C55E', glow: false };
    return { label: '⚪ WAIT', bg: '#F9FAFB', border: '#D1D5DB', glow: false };
  };
  
  if (loading) return <div style={{textAlign:'center',padding:20,color:'#999',fontSize:11}}>Google Trends에서 실시간 스트레스 시그널을 불러오는 중...</div>;
  if (!trends) return null;
  
  return (
    <div style={{marginBottom:20}}>
      <div style={{display:'flex',alignItems:'center',gap:8,marginBottom:12}}>
        <div style={{width:8,height:8,borderRadius:'50%',background:'#EF4444',animation:'pulse 1.5s infinite'}}/>
        <span style={{fontSize:13,fontWeight:900,color:'#1a1a1a'}}>NOW — 미국 스트레스 시그널 실시간</span>
        <span style={{fontSize:9,color:'#999',marginLeft:'auto'}}>Google Trends · US · Last 7 days</span>
      </div>
      <div style={{display:'grid',gridTemplateColumns:'repeat(7,1fr)',gap:8}}>
        {Object.entries(ritualMap).map(([kw, ritual]) => {
          const t = trends[kw] || { current: 0, change: 0 };
          const signal = getSignal(t.change);
          return (
            <div key={kw} style={{
              background: signal.bg,
              border: '2px solid ' + signal.border,
              borderRadius: 12,
              padding: '14px 12px',
              textAlign: 'center',
              position: 'relative',
              boxShadow: signal.glow ? '0 0 12px ' + signal.border + '40' : 'none',
              animation: signal.glow ? 'glow 2s infinite' : 'none',
            }}>
              <div style={{fontSize:9,fontWeight:700,color:signal.border,marginBottom:4}}>{signal.label}</div>
              <div style={{fontSize:20,marginBottom:4}}>{ritual.icon}</div>
              <div style={{fontSize:10,fontWeight:800,color:'#1a1a1a',marginBottom:2}}>{ritual.name}</div>
              <div style={{fontSize:18,fontWeight:900,color:ritual.color}}>{t.current}</div>
              <div style={{fontSize:9,color:t.change>0?'#16A34A':'#999',fontWeight:700}}>
                {t.change > 0 ? '↑' : t.change < 0 ? '↓' : '→'}{Math.abs(t.change)}%
              </div>
            </div>
          );
        })}
      </div>
      <div style={{marginTop:8,fontSize:9,color:'#bbb',textAlign:'center'}}>
        🔴 NOW = 지금 이 리추얼 콘텐츠를 올려야 합니다 · 🟡 SOON = 준비하세요 · 🟢 STABLE = 상시 운영
      </div>
    </div>
  );
};
`,
};


// ── D. Campaign Intelligence 대시보드 (STEP 3 이후 신규 화면) ──

export const campaignDashboardSpec = {
  // 리추얼 캠페인 집행 후, 성과를 추적하고 다음 의사결정을 지원하는 대시보드
  // STEP 3(숏폼 제작) 이후에 접근 가능
  
  position: "STEP 4(숏폼 스토리보드) 하단 또는 별도 탭",
  title: "📊 Campaign Intelligence",
  subtitle: "리추얼 캠페인 성과를 실시간으로 추적하고, 다음 콘텐츠 의사결정을 지원합니다",
  
  sections: {
    // 섹션 1: 리추얼별 성과 비교
    ritualPerformance: {
      title: "리추얼별 성과 비교",
      dataSource: "YouTube API + TikTok API (향후)",
      display: "7개 리추얼 카드 — 각각 영상 수, 총 조회수, 평균 참여율",
      insight: "AI가 '어떤 리추얼이 가장 성과가 좋은지' 분석하고 '다음에 이 리추얼에 집중하세요' 추천",
      mockData: [
        { ritual: "Rage Release", videos: 3, views: 125000, engRate: 4.2, signal: "🔥 TOP" },
        { ritual: "Deadline Ignition", videos: 2, views: 89000, engRate: 3.8, signal: "✅ GOOD" },
        { ritual: "Breakup Burn", videos: 2, views: 210000, engRate: 5.1, signal: "🔥 TOP" },
        { ritual: "Mom's 5 Min", videos: 1, views: 45000, engRate: 2.9, signal: "📈 GROW" },
        { ritual: "Road Rage", videos: 1, views: 32000, engRate: 2.1, signal: "⚠️ LOW" },
        { ritual: "Little Treat", videos: 0, views: 0, engRate: 0, signal: "⬜ NOT YET" },
        { ritual: "Sunday Scaries", videos: 0, views: 0, engRate: 0, signal: "⬜ NOT YET" },
      ],
    },
    
    // 섹션 2: 완시청률 TOP 콘텐츠 → 광고 부스팅 추천
    boostRecommend: {
      title: "광고 부스팅 추천",
      dataSource: "TikTok Analytics (완시청률 데이터)",
      logic: "완시청률 70%+ 콘텐츠 = 알고리즘이 이미 밀어주는 콘텐츠 → 이걸 광고로 부스팅",
      display: "완시청률 TOP 3 콘텐츠 + '이 콘텐츠를 광고로 부스팅하세요' CTA",
    },
    
    // 섹션 3: 스트레스 시그널 vs 콘텐츠 타이밍 매칭
    timingMatch: {
      title: "타이밍 매칭 분석",
      dataSource: "Google Trends + 콘텐츠 발행일",
      logic: "스트레스 키워드 급등 시점에 콘텐츠를 올렸는지 확인",
      display: "타임라인 차트 — 스트레스 시그널(선) + 콘텐츠 발행(점) 오버레이",
      insight: "AI가 '이 콘텐츠를 2일 일찍 올렸으면 도달이 30% 더 나왔을 것' 같은 피드백",
    },
    
    // 섹션 4: 소비자 반응에서 발견한 새 기회
    newDiscoveries: {
      title: "소비자가 알려준 새 기회",
      dataSource: "YouTube/TikTok 댓글 AI 분석 + ListeningMind",
      logic: "성과 좋은 영상의 댓글에서 새로운 스트레스 상황/Hack 소재 추출",
      display: "AI가 댓글에서 발견한 새로운 마이크로 모먼트 카드",
      example: [
        { source: "TikTok 댓글", text: "나는 고객한테 당했을 때 이거 먹어", discovery: "고객 응대 스트레스 → 새로운 Rage Release 변형" },
        { source: "YouTube 댓글", text: "치즈 넣으면 진짜 미침", discovery: "Cheese Hack → 새로운 Hackable 레시피 콘텐츠" },
        { source: "ListeningMind", text: "'buldak stress meal' 검색 신규 등장", discovery: "리추얼이 검색 행동까지 바꾸고 있음 → 캠페인 효과 증거" },
      ],
    },
    
    // 섹션 5: TikTok 트렌딩 사운드 추천
    trendingSounds: {
      title: "지금 쓸 수 있는 TikTok 사운드",
      dataSource: "TikTok Creative Center (주 1회 수집)",
      logic: "상승 중인 사운드 중 우리 리추얼 감정과 맞는 사운드 매칭",
      display: "감정별 사운드 추천 카드",
      categories: [
        { emotion: "분노/짜증", soundType: "intense/dramatic", forRitual: "Rage Release, Road Rage" },
        { emotion: "슬픔/위로", soundType: "melancholy/emotional", forRitual: "Breakup Burn, Mom's 5 Min" },
        { emotion: "해방/보상", soundType: "feel-good/celebratory", forRitual: "Little Treat, Sunday Scaries" },
        { emotion: "각성/에너지", soundType: "upbeat/lo-fi study", forRitual: "Deadline Ignition" },
      ],
      note: "TikTok Business API 승인 전까지 Creative Center 웹에서 주 1회 수동 수집 → 하드코딩",
    },
    
    // 섹션 6: YouTube 검색 자동완성 모니터링
    youtubeSearchSuggest: {
      title: "소비자가 불닭에 대해 지금 궁금한 것",
      dataSource: "YouTube Search Suggest API (무료)",
      logic: "YouTube 검색창에 'buldak'을 치면 나오는 자동완성 = 지금 소비자의 관심사",
      apiCall: `
// YouTube Search Suggest (무료, API 키 불필요)
const getYouTubeSuggestions = async (query) => {
  const res = await fetch(
    \`https://suggestqueries.google.com/complete/search?client=youtube&ds=yt&q=\${encodeURIComponent(query)}&gl=us\`
  );
  const text = await res.text();
  // JSONP 파싱
  const match = text.match(/\\[.*\\]/s);
  if (match) {
    const data = JSON.parse(match[0]);
    return data[1].map(item => item[0]); // 자동완성 목록
  }
  return [];
};

// 사용: 주 1회 자동완성 변화 추적
// 예: ['buldak recipe', 'buldak carbonara', 'buldak challenge', ...]
// 새로운 자동완성 = 새로운 소비자 관심 시그널
`,
      example: {
        lastWeek: ["buldak recipe", "buldak carbonara", "buldak challenge", "buldak sauce", "buldak cheese"],
        thisWeek: ["buldak recipe", "buldak carbonara", "buldak stress meal", "buldak sauce", "buldak birria tacos"],
        newSignals: ["buldak stress meal", "buldak birria tacos"],
        insight: "'buldak stress meal'이 새로 등장 → 리추얼 캠페인이 검색 행동을 만들기 시작함!",
      },
    },
  },
};


// ── E. AI 프롬프트에 실시간 데이터 반영 ──

export const aiPromptWithLiveData = {
  instruction: `
숏폼 아이디어를 생성할 때, 실시간 데이터를 참고해서 더 시의적절한 아이디어를 만들어:

## 실시간 스트레스 시그널 (Google Trends)
{stressSignals}
→ 🔴NOW 시그널이 있는 리추얼을 최우선으로 아이디어 생성
→ 🟡SOON 시그널이 있는 리추얼은 준비용 아이디어 생성

## 현재 TikTok 트렌딩 사운드
{trendingSounds}
→ TikTok 시나리오의 sound 필드에 실제 트렌딩 사운드 이름 반영

## YouTube 자동완성 시그널
{youtubeSuggestions}
→ 새로 등장한 자동완성 키워드가 있으면 해당 관심사를 반영한 아이디어 추가

## 캠페인 성과 데이터 (있는 경우)
{campaignPerformance}
→ 참여율 높은 리추얼을 중심으로 변형 아이디어 생성
→ 참여율 낮은 리추얼은 후킹/포맷 변경 제안
`,
};


// ── F. 구현 우선순위 ──

export const implementationPriority = {
  // Phase 1 (즉시 가능 — 무료)
  phase1: {
    timeline: "1주일",
    items: [
      {
        name: "YouTube Search Suggest 모니터링",
        cost: "무료",
        effort: "낮음",
        value: "'buldak' 자동완성 변화를 주 1회 추적 → 새로운 소비자 관심 시그널 발견",
        apiRoute: "app/api/youtube-suggest/route.js",
      },
      {
        name: "리추얼 태그 시스템",
        cost: "무료",
        effort: "낮음",
        value: "콘텐츠에 리추얼 ID 태그 → YouTube API에서 리추얼별 성과 분류",
      },
      {
        name: "TikTok Creative Center 수동 수집",
        cost: "무료",
        effort: "중간 (주 1회 수동)",
        value: "트렌딩 사운드/해시태그를 플랫폼에 하드코딩",
      },
    ],
  },
  
  // Phase 2 (1개월 — 저비용)
  phase2: {
    timeline: "1개월",
    items: [
      {
        name: "Google Trends 실시간 연동",
        cost: "SerpAPI $50/mo 또는 pytrends 무료",
        effort: "중간",
        value: "스트레스 시그널 실시간 추적 → '지금 올려야 할 리추얼' 자동 추천",
        apiRoute: "app/api/trends/route.js",
      },
      {
        name: "NowTrending 컴포넌트",
        cost: "무료 (위 연동 필요)",
        effort: "중간",
        value: "오케이션 맵에 실시간 시그널 표시",
      },
    ],
  },
  
  // Phase 3 (3개월 — 고도화)
  phase3: {
    timeline: "3개월",
    items: [
      {
        name: "TikTok Business API 연동",
        cost: "무료 (승인 필요)",
        effort: "높음",
        value: "완시청률/공유수/저장수 실시간 추적 → 광고 부스팅 자동 추천",
      },
      {
        name: "댓글 AI 분석",
        cost: "Claude API 사용량",
        effort: "높음",
        value: "성과 좋은 영상의 댓글에서 새로운 마이크로 모먼트 자동 발견",
      },
      {
        name: "Campaign Intelligence 대시보드",
        cost: "무료 (위 연동 필요)",
        effort: "높음",
        value: "리추얼별 성과 비교 + 타이밍 매칭 + 새 기회 발견 통합 대시보드",
      },
      {
        name: "ListeningMind 캠페인 전후 비교",
        cost: "리스닝마인드 크레딧",
        effort: "낮음",
        value: "캠페인 전후 'buldak stress' 등 신규 검색어 등장 여부 모니터링",
      },
    ],
  },
};

import './globals.css'

export const metadata = {
  title: '삼양 AI Brandformance Engine | Algorithm Performance Platform',
  description: '브랜드 캠페인과 더불어, 소비자 발견에서 구매까지 연결합니다 — Pentacle × AI',
}

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <head>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable-dynamic-subset.min.css" />
      </head>
      <body>{children}</body>
    </html>
  )
}

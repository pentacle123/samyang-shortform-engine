import './globals.css'

export const metadata = {
  title: '삼양 AI Brandformance Engine | Algorithm Performance Platform',
  description: '알고리즘을 타는 브랜드 숏폼전략 — Pentacle × AI',
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

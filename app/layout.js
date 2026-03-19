import './globals.css'

export const metadata = {
  title: '삼양 ShortForm Engine | Algorithm Performance Platform',
  description: 'AI가 알고리즘을 타는 숏폼 광고를 기획합니다 — Pentacle × AI',
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

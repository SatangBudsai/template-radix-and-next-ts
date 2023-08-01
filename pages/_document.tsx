import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html
      lang="en" data-theme='light' className='border-border bg-background text-foreground'>
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>E ai, Maná!</title>
      </Head>
      <style jsx global>
        {`
          html, body {
            height: 100%;
          }

          html {
            background-image: url(/sorriso-bota.webp);
            background-size: 40px;
          }

          body {
            background-image: url(/e-ai-mana.webp);
            background-repeat: no-repeat;
            background-position: center;
          }
        `}
      </style>
    </>
  )
}

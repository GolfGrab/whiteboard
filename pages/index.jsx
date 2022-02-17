import Head from 'next/head'
import Header from '../components/Header'

export default function Home() {
  return (
    <div className="h-screen min-h-screen overflow-y-scroll bg-neutral-900 text-neutral-400 scrollbar-none">
      {/* Header */}
      <Head>
        <title>Black Whiteboard 🐱‍👤</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
    </div>
  )
}

import Head from 'next/head'
import Login from '../components/Login'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="div global">login global</div>
    <Login />
    <div className="bg-red-50">Tailwind</div>
     
    </div>
  )
}

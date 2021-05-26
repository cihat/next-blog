import Head from 'next/head'
import Navigation from '../components/navigation'


const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>Blog</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <main>{children}</main>
    </>
  )
}

export default Layout

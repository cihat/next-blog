import Head from 'next/head'

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>Blog</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>
      </Head>
      <main>{children}</main>
    </>
  )
}

export default Layout

import unfetch from 'isomorphic-unfetch'
import Head from 'next/head'
import Link from 'next/link'
import slug from 'slug'
import Layout from '../components/Layout'

const index = ({ characters }) => {
  return (
    <>
      <Head>
        <title>Ana Sayfa</title>
      </Head>

      <Layout>
        <h1>Welcome to Next.js</h1>
        <ul>
          {characters.results.map((character) => (
            <li key={character.id}>
              <Link
                href="/character/[slug]"
                as={`/character/${slug(character.name)}-${character.id}`}
              >
                <a>{character.name}</a>
              </Link>
            </li>
          ))}
        </ul>
      </Layout>
    </>
  )
}

export const getStaticProps = async () => {
  //! data fetch
  const data = await fetch(`https://rickandmortyapi.com/api/character`)
  const characters = await data.json()

  return {
    props: {
      characters
    }
  }
}

export default index

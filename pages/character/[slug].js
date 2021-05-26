import Head from 'next/head'
import slug from 'slug'
import Layout from '../../components/Layout'

const CharacterDetail = ({ character }) => {
  return (
    <>
      <Head>
        <title>Ana Sayfa</title>
      </Head>

      <Layout>
        <h1>{character.name}</h1>
        <figure>
          <img src={character.image} alt={character.name} />
        </figure>
      </Layout>
    </>
  )
}

export async function getStaticPaths() {
  //* data fetch
  const data = await fetch(`https://rickandmortyapi.com/api/character/`)
  const characters = await data.json()

  const paths = characters.results.map((character) => {
    return { params: { slug: `${slug(character.name)}-${character.id}` } }
  })

  return {
    paths,
    fallback: false
  }
}

export const getStaticProps = async ({ params }) => {
  // //! data fetch
  const id = params.slug.split('-').slice(-1)[0]

  const data = await fetch(`https://rickandmortyapi.com/api/character/${id}`)
  const character = await data.json()

  return {
    props: {
      character
    }
  }
}

export default CharacterDetail

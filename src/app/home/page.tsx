import { Header, NormalText } from '@/components/DesignSystem'

const Home = () => {
  return (
    <main>
      <Header.One>Vojta Prokop</Header.One>
      <p>
        <NormalText>
          Hey there stranger! I am <strong>medior developer at Ataccama</strong>{' '}
          I am part of team which take care about core application modules.
        </NormalText>
      </p>
    </main>
  )
}

export default Home

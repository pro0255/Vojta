import { Header, Text } from '@/components/DesignSystem'

const About = () => {
  return (
    <main>
      <Header.One>About me</Header.One>
      <ul>
        <li>
          <Text>🎓 High school with medical focus.</Text>
        </li>
        <li>
          <Text>
            🤔 I like programming in Python 🐍 and JavaScript (TypeScript).
            ML/AI enthusiast. Unstructured textual data are fun. I would like to
            try to help with machine learning to save some lives.
          </Text>
        </li>
        <li>
          <Text>
            🎓 Studied Computer Science (Data Analysis) on VSB - Technical
            University of Ostrava - VSB-TUO (master).
          </Text>
        </li>
        <li>
          <Text>💼 Looking for a job.</Text>
        </li>
        <li>
          <Text>🌱 Open to learn something new.</Text>
        </li>
      </ul>
    </main>
  )
}

export default About

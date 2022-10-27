import NextLink from 'next/link'
import {
  Link,
  Container,
  Heading,
  Box,
  SimpleGrid,
  Button,
  List,
  ListItem,
  useColorModeValue,
  chakra
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear, TimeLine, } from '../components/bio'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'
import { IoLogoTwitter, IoLogoInstagram, IoLogoGithub } from 'react-icons/io5'
import thumbYouTube from '../public/images/links/youtube.png'
import thumbInkdrop from '../public/images/works/inkdrop_eyecatch.png'
import Image from 'next/image'
// import Turkey from '../public/images/tr.png'

const ProfileImage = chakra(Image, {
  shouldForwardProp: prop => ['width', 'height', 'src', 'alt'].includes(prop)
})

const Home = () => (
  <Layout>
    <Container>
      <Box
        borderRadius="lg"
        mb={6}
        p={3}
        textAlign="center"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
        css={{ backdropFilter: 'blur(10px)' }}
      >
        Hello, I&apos;m an indie app developer based in Turkey!
      </Box>
      {/* <Image src={Turkey} alt="Turkey!"  width="100%"
              height="100%"></Image> */}

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            ./badblli
          </Heading>
          <p>FE Developer ( Artist / Developer / Designer )</p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
          <Box
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            w="100px"
            h="100px"
            display="inline-block"
            borderRadius="full"
            overflow="hidden"
          >
            <ProfileImage
              src="/images/bs.png"
              alt="Profile image"
              borderRadius="full"
              width="100%"
              height="100%"
            />
          </Box>
        </Box>
      </Box>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          Work
        </Heading>
        <Paragraph>
          Buse is a freelance and a front-end developer based in Antalya with a passion for building creative projects/stuff she wants. When not online, she loves hanging out with his camera. Graduated from Ondokuz Mayıs University, Department of Computer Technologies in 2022. Currently, she is a 3rd year student of MIS at Anadolu University{' '}
          {/* <NextLink href="/works/inkdrop" passHref scroll={false}>
            <Link>@badblli.dev</Link>
          </NextLink> */}
          . She is excitedly preparing to produce digital media content &quot;
          <NextLink href="https://www.instagram.com/badblli.dev/" passHref>
            <Link target="_blank">@badblli.dev</Link>
          </NextLink>
          &quot; has more than * followers.
        </Paragraph>
        <Box align="center" my={4}>
          <NextLink href="https://docs.google.com/document/d/1eN71-Qqd9bmjPWkyxLZ2N8l9VSzeYpomBUuU9cLdynw/edit?usp=sharing" passHref scroll={false}>
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
              My Resume
            </Button>
          </NextLink>
        </Box>
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Bio
        </Heading>
        <BioSection>
          <BioYear>May, 2002</BioYear>
          Born in Antalya, Turkey.
        </BioSection>
        <TimeLine> ----- </TimeLine>
        <BioSection>
          <BioYear>June, 2022</BioYear>
          <Paragraph>Completed the Associate Degree Computer Technologies Program in the Graduate Ondokuz Mayıs University.</Paragraph>
          Full-Stack Intern at <NextLink href="https://softalya.com/" passHref>
            <Link target="_blank">Softalya Software Inc.</Link>
          </NextLink>
        </BioSection>
        <TimeLine> ----- </TimeLine>
        <BioSection>
          <BioYear>July, 2022</BioYear>
          Worked as a Jr. Front-End Developer
        </BioSection>
        <TimeLine> ----- </TimeLine>
        <BioSection>
          <BioYear>Sept, 2022
          </BioYear>
          Now, I&apos;m a Freelance Front-End Developer
        </BioSection>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          I ♥
        </Heading>
        <Paragraph>
          Art,{' '}
          <Link href="https://open.spotify.com/user/ixsh3dn2i29wuuof61fbf8ng4?si=2c630680f7404925" target="_blank">
            Music
          </Link>
          , Gaming 🎮,{' '}
          {/* <Link href="https://500px.com/p/craftzdog" target="_blank"> */}
          Photography
          {/* </Link> */}
        </Paragraph>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          On the web
        </Heading>
        <List>
          <ListItem>
            <Link href="https://github.com/badblli" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoGithub />}
              >
                @badblli
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://twitter.com/illakikonusuruz" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoTwitter />}
              >
                @illakikonusuruz
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://instagram.com/craftzdog" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoInstagram />}
              >
                @badblli.dev
              </Button>
            </Link>
          </ListItem>
        </List>

        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
            href="https://www.youtube.com/devaslife"
            title="Dev as Life"
            thumbnail={thumbYouTube}
          >
            My YouTube channel (&gt;100k subs)
          </GridItem>
          <GridItem
            href="https://www.inkdrop.app/"
            title="Inkdrop"
            thumbnail={thumbInkdrop}
          >
            A Markdown note-taking app
          </GridItem>
        </SimpleGrid>

        <Box align="center" my={4}>
          <NextLink href="/posts" passHref scroll={false}>
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
              Popular blogs
            </Button>
          </NextLink>
        </Box>
      </Section>
    </Container>
  </Layout>
)

export default Home
export { getServerSideProps } from '../components/chakra'

import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

import { getAllProjects } from '../functions/getAllProjects'

const Works = ({ projects }) => (
  // console.log(projects[0].title),
  <Layout title="Works">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Works
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={8}>
        <Section>
          {projects.map((project) => (
            console.log(project.title),
            <WorkGridItem id={project.id} title={project.title} description={project.description} url={project.image.url}
              key={project.id} project={project}
            >



            </WorkGridItem>
          ))}
        </Section>
      </SimpleGrid>

      <Section delay={0.2}>
        <Divider my={6} />

        <Heading as="h3" fontSize={20} mb={4}>
          Collaborations
        </Heading>
      </Section>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section delay={0.3}>
          <WorkGridItem id="margelo" title="Margelo">
            thumbnail ekle
            A website of the elite app development and contracting agency based
            in Austria
          </WorkGridItem>
        </Section>
      </SimpleGrid>

      <Section delay={0.4}>
        <Divider my={6} />

        <Heading as="h3" fontSize={20} mb={4}>
          Old works
        </Heading>
      </Section>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section delay={0.5}>
          <WorkGridItem id="pichu2" title="Pichu*Pichu">
            Twitter client app for iPhone Safari
          </WorkGridItem>
        </Section>
      </SimpleGrid>
    </Container>
  </Layout >
)

export default Works
// export { getServerSideProps } from '../components/chakra'
export const getStaticProps = async () => {
  const projects = await getAllProjects();
  return {
    props: {
      projects,
    },
  };
};
import { gql } from "graphql-request";
import { graphcms } from "../client.js";

export const getAllProjects = async () => {
  const getAllProjectsQuery = gql`
    {
      projects {
        id
        title
        description
        image {
          url
        }
        source
        tags
      }
    }
  `;
  console.log(getAllProjects);
  const { projects } = await graphcms.request(getAllProjectsQuery);
  console.log(projects);
  return projects;
};
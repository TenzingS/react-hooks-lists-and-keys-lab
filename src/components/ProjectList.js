import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {
  const projectId = projects.map((project) => {
    return (
    <div key= {project.id}>
      <ul>
        <h3>{project.name}</h3>
        <p>{project.about}</p>
        <ProjectItem technologies = {project.technologies} />
      </ul>
    </div>)
  })
  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">
        {projectId}
      </div>
    </div>
  );
}

export default ProjectList;

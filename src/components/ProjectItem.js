function ProjectItem({ technologies }) {
  console.log(technologies)
  const projectTech = technologies.map((tech) => {
    return (
    <span key= {tech}>
      {tech}
    </span>
    )
  })
  return (
    <div> 
        {projectTech}
    </div>
  )
}

export default ProjectItem;

import React from 'react'
import { projects } from '../utils/project-actions'
import SingleProjects from './SingleProjects'

const AllProjects = () => {
  return (
    <>
      {projects.map(item => {
        return <SingleProjects {...item}/>
      })}
    </>
  )
}

export default AllProjects

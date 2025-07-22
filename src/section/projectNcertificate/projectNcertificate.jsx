import React from 'react'
import ProjectSwitcher from '../../components/ui/projectSwitcher/projectSwitcher'
import Certificate from '../../components/ui/certificate/certificate'

const ProjectNcertificate = () => {
  return (
    <div className='mt-10'>
        <h1 className='container text-2xl font-bold text-purple-600'>Certificate</h1>
        <div className='container'>
          <Certificate/>
        </div>
    </div>
  )
}

export default ProjectNcertificate
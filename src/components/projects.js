import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Presentation from './presentation'
import './styling/projects.css'

const Projects = () => {


        const [projects, setProjects] = useState([])
        const [popUp, setPopUp] = useState(false)
        const [presentation, setPresentation] = useState([])

     useEffect(() => {
        axios.get('/api/projects').then((res) =>{
            setProjects(res.data)})
        }, [])

        console.log(projects)
        const handlePopUpClick = (id) => {
            axios.get(`/api/presentation/${id}`).then((res) => {
                setPresentation(res.data)
            })
        }

    const mappedProjects = projects.map((e) => {
        return(
            <div className='project-info'>
                <h2 onClick={() => {
                    setPopUp(true);
                    handlePopUpClick(e.id)
                }}>{e.name}</h2>
                <img src={e.photo}/>
                <p>{e.description}</p>
            </div>
        )
    })

    return (
    <div className='projects-wrapper'>
        <div className='projects-div'>
            {mappedProjects}
        </div>
            {popUp === true ? <Presentation 
                project={projects} 
                projectId={presentation} 
                setPopUp={setPopUp}/> : null}
    </div>
    )

}

export default Projects
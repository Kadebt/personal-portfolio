import React, {useState, useEffect} from 'react'
import axios from 'axios'

const Projects = () => {


        const [projects, setProjects] = useState([])

     useEffect(() => {
        axios.get('/api/inventory').then((res) =>{
            setProjects(res.data)})
        })

    const mappedProjects = projects.map((e) => {
        return(
            <div>
                <h2>e.name</h2>
                <img src={e.img}/>
                <p>e.description</p>
            </div>
        )
    })

    return (
        <div>
            <p>kade</p>
            {mappedProjects}
        </div>
    )

}

export default Projects
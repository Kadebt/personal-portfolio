import React from 'react' 
import './styling/presentation.css'

const Presentation = (props) => {

    // const [presentation, setPresentation] = useState([])

    // const getPresentation = () => {
    //     axios.get('/api/presentation/${id}').then((res) => {
    //         setPresentation
    //     })
    // }

    return(
        <>
        <div className='presentation-scrim' />
        <div className='presentation-div'>
                <div className='presentation-inner'>
                <img src={props.projectId.gif}/>
                <button onClick={() => props.setPopUp(false)}>Close</button>
                </div>
            </div>
        </>
        
    )
}
export default Presentation
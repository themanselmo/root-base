import { useState } from "react"
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';

const PlantCard = ({ plant: {plantName, dateGerminated, image, notes} }) => {
    const [displayDetails, setDisplayDetails] = useState(true)

    const CardDetail = () => {
        return <div className="card-detail">
                    <h3>{plantName}</h3>
                    <p>Germinated On: {dateGerminated}</p>
                </div>
    }

    const PlantNotes = () => {
        return (
            <ul className="card-notes">
            {notes.length > 0 ? 
                notes.map(note => <li>{note}</li>) : 
                <li>Empty</li>
            }
            </ul>
        )
    }

    function toggleNotesOn() {
        setDisplayDetails(false)
    }

    function toggleDetailsOn() {
        setDisplayDetails(true)
    }

    return (
        <li className="card">
            <img src={image} alt={plantName}/>
            {displayDetails ? <CardDetail /> : <PlantNotes />}
            {displayDetails ? <button onClick={toggleNotesOn}>View Note(s)</button> : 
                <button onClick={toggleDetailsOn}>Hide Note(s)</button>}
            {displayDetails ? <button>Delete</button> : <button>Add Note</button>}
        </li>

    )
}

export default PlantCard
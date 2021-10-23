import React from "react"
import PlantCard from "./PlantCard"
import Nav from "./Nav"

const MainContent = ({ currentUser, onLogout }) => {
    return (
        <>

            <Nav onLogout={onLogout}/>
            <div id = "main-content">
                <h2>Welcome {currentUser.name}!</h2>
                <ul className='cards'>
                    {currentUser.plants.map(plant => 
                        <PlantCard key={plant.id} plant={plant}/>)}
                </ul>
            </div>
        </>
    )
}

export default MainContent
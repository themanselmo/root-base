import React from "react"
import PlantCard from "./PlantCard"
import Nav from "./Nav"

const MainContent = ({ currentUser, onLogout }) => {
    return (
        <>
            <Nav onLogout={onLogout}/>
            <div className = "main-content">
                <h3>Welcome to your Rootbase {currentUser.name}!</h3>
                {currentUser.plants.map(plant => {
                    return <PlantCard plant={plant}/>
                })}
            </div>
        </>
    )
}

export default MainContent
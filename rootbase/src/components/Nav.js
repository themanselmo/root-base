import { useState } from "react"
import { MdClose } from "react-icons/md"
import { FiMenu } from "react-icons/fi"

const Nav = ({ onLogout }) => {
    const [displayOps, setDisplayOps] = useState(false)

    function handleDisplay() {
        setDisplayOps(!displayOps)
    }

    const NavButtons = () => {
        return (
            <>
                <button onClick={() => console.log('adding plant')}>Add Plant</button>
                <button onClick={onLogout}>Log Out</button>
            </>
        )
    }

    const NavOpen = () => {
        return (
            <>
                <button onClick={handleDisplay}>
                    <MdClose style={{ color: "#7b7b7b", width: "40px", height: "40px" }}/>
                </button>
                <NavButtons />
            </>
        )
    }

    return (
        <nav className='navBar'> 
                { 
                    displayOps ?  <NavOpen /> : 
                        <button onClick={handleDisplay}>
                            <FiMenu style={{ color: "#7b7b7b", width: "40px", height: "40px" }} />
                        </button>
                }        
        </nav>
    )
}

export default Nav
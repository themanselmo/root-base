
const Nav = ({ onLogout }) => {
    return (
        <div id='nav'>
            <button onClick={onLogout}>Log Out</button>
        </div>
    )
}

export default Nav
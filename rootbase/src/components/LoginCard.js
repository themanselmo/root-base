import { useState, useEffect } from "react"
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Grow from '@mui/material/Grow';
import Paper from '@mui/material/Paper';

const LoginCard = ({ onLogin }) => {
    const [formData, setFormData] = useState({
        username: '',
        password: ''
    })

    const [loaded, setLoaded] = useState(false)

    useEffect(handleLoaded, [])
    
    function handleLoaded() {
        setLoaded((prev) => !prev)
    }

    function handleChange(e) {
        setFormData({...formData, [e.target.name]: e.target.value})
    }

    function handleLogin(e, formData) {
        // handleLoaded()
        onLogin(e, formData)
    }

    return (
        
        <Box sx={{ 
            
            }}>
            <Grow in={loaded}>
                <div id='login-cont'>
                    <Paper elevation={3}>
                    <h2>Welcome!</h2>
                    <h4>Please sign in:</h4>
                    <form>
                        <div id='login-form-cont'>
                            
                            <label>username</label>
                            <input 
                                name="username" 
                                type="text" 
                                onChange={handleChange}
                            />
                            <label>password</label>
                            <input 
                                name="password" 
                                type="password" 
                                onChange={handleChange}
                            />
                            <Button onClick={(e) => handleLogin(e, formData)} variant="contained">log in</Button>
                            
                        </div>
                    </form>
                    </Paper>
                </div>
            </Grow>
            {/* Conditionally applies the timeout prop to change the entry speed. */}
            {/* <Grow
                in={checked}
                style={{ transformOrigin: '0 0 0' }}
                {...(checked ? { timeout: 1000 } : {})}
            >
                <p>hello max</p>
            </Grow> */}
            </Box>
            
       
        
    )
}

export default LoginCard
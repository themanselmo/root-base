import { useState } from "react"

const LoginCard = ({ onLogin }) => {
    const [formData, setFormData] = useState({
        username: '',
        password: ''
    })

    function handleChange(e) {
        setFormData({...formData, [e.target.name]: e.target.value})
    }

    return (
        <div id='login-cont'>
            <h2>Welcome!</h2>
            <h4>Please sign in:</h4>
            <form onSubmit={(e) => onLogin(e, formData)}>
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
                    <button>log in</button>
                </div>
            </form>
        </div>
    )
}

export default LoginCard
import {useState} from "react";
import axios from 'axios'

const LoginForm = ()=>{
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')

    const handleSubmit = async (e)=>{
        e.preventDefault()
        const authObject  = {'Project-ID':'a553d44b-6350-4fc9-904b-de0b05e35522', 'User-Name': userName, 'User-Secret': password}
        try {
            await axios.get('https://api.chatengine.io/chats', {headers: authObject})

            localStorage.setItem('username', userName)
            localStorage.setItem('password', password)
            window.location.reload()

        }catch (error){
            setError('Wrong Credentials')
            console.log(error);
        }

    }

    return (
        <div className='wrapper'>
            <div className='form'>
                <h1 className='title'>Chat Application</h1>
                <form onSubmit={handleSubmit}>
                    <input type='text' className='input' value={userName} onChange={(e) => {
                        setUserName(e.target.value)
                    }} placeholder='Username' required/>
                    <input type='password' className='input' value={password} onChange={(e) => {
                        setPassword(e.target.value)
                    }} placeholder='Password' required/>
                    <div align='center'>
                        <button type='submit' className='button'>
                            <span>Start Chatting</span>
                        </button>
                    </div>
                    <h2 className='error'>{error}</h2>
                </form>
            </div>
        </div>
    )

}
export default LoginForm
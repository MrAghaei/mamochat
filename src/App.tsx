import { ChatEngine} from 'react-chat-engine'
import "./App.css"
import ChatFeed from "./Components/ChatFeed.tsx";
import LoginForm from "./Components/LoginForm.tsx";

const App = () => {
    if(!localStorage.getItem('username')) return <LoginForm/>
    return (
        <div className="">
            <ChatEngine
                height='100vh'
                projectID='a553d44b-6350-4fc9-904b-de0b05e35522'
                userName={localStorage.getItem('username')}
                userSecret={localStorage.getItem('password')}
                renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
            />
        </div>
    )
}

export default App

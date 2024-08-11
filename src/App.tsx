import { ChatEngine} from 'react-chat-engine'
import "./App.css"

const App = () => {
    return (
        <div className="">
            <ChatEngine
                height='100vh'
                projectID='a553d44b-6350-4fc9-904b-de0b05e35522'
                userName='mamadaghaei'
                userSecret='1234'
            />
        </div>
    )
}
export default App
import MyMessage from "./MyMessage.tsx";
import TheirMessage from "./TheirMessage.tsx";
import MessageForm from "./MessageForm.tsx";

const ChatFeed = (props) => {
    const {chats, activeChat, username, messages} = props
    const chat = chats && chats[activeChat]

    const renderReadReciepts = (message ,isMyMessage)=>{
        return chat.people.map((person,index)=>{
            const lastPerson = index === chat.people.length - 1
            return (
                <div
                    key={`read_${person.username}`}
                    className="read-receipt"
                    style={{
                        float: isMyMessage ? 'right' : 'left',
                        backgroundImage: `url(${person?.person?.avatar})`
                    }}
                />
            )
        })
    }

    const renderMessages = () => {
        const keys = Object.keys(messages);

        return keys.map((key,index)=>
        {
            const message = messages[key];
            const lastMessageKey = index === 0 ? null : keys[index - 1];
            const isMyMessage = username === message.username;
            return (
                <div key={`msg_${index}`} style={{width:'100%'}}>
                    <div className="message-block">
                        {isMyMessage
                            ? <MyMessage message={message} />
                            : <TheirMessage message={message} lastMessage={messages[lastMessageKey]} />}
                    </div>
                    <div className="read-receipts" style={{marginRight: isMyMessage ? '18px' : '0px', marginLeft: isMyMessage ? '0px' : '68px'}}>
                        reader receipts
                    </div>
                </div>
            )
        })
    }

    renderMessages()

    if(!chat) return "Loading..."
    return (
        <div className='chat-feed'>
            <div className='chat-title-container'>
                <div className='chat-title'>{chat.title}</div>
                <div className='chat-subtitle'>
                    {chat.people.map((person) => ` ${person.person.username}`)}
                </div>
            </div>
            {renderMessages()}
            <div style={{height: '100px'}}/>
            <div className='message-form-container'>
                <MessageForm {...props}  chatId={activeChat}/>
            </div>
        </div>
    )
}
export default ChatFeed
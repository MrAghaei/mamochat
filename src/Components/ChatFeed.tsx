import MyMessage from "./MyMessage.tsx";
import TheirMessage from "./TheirMessage.tsx";

const ChatFeed = (props) => {
    const {chats, activeChat, username, messages} = props
    const chat = chats && chats[activeChat]

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

    console.log(props);
    return (
        <div>
            ChatFeed
        </div>
    )
}
export default ChatFeed
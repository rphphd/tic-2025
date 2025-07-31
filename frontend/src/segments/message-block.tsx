type MessageBlockProps = {
    msgType: string;
    message: React.ReactNode;
    showIt?: string;
};

const MessageBlock = ({ msgType, message, showIt  = 'hide' }: MessageBlockProps) => {

    const cls = { msgType: msgType }
    if (showIt === 'show') {
        cls.msgType = msgType  + ' show'
    } else {
        cls.msgType = msgType + ' hide'
    }
    return (
        <div className={cls.msgType}>
            {message}
        </div>
    )

}

export default MessageBlock

import s from './Messages.module.css';
import Mess from "./Mess/Mess";
import DialogItem from "./DialogItem/DialogItem";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/message-reducer";

const Messages = (props) => {
    let state = props.store.getState().messagePage;

    let dialogsElements = state.dialogData.map(dialog => <DialogItem name={dialog.name} id={dialog.id} />);
    let messageElements = state.messageData.map(mess => <Mess message={mess.message} />);
    let newMessageBody = state.newMessageBody;

    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageCreator());
    }

    let onNewMessageChange = (event) => {
        let body = event.target.value;
        props.store.dispatch(updateNewMessageBodyCreator(body));
        console.log(body);
    }

    return (
        <div className={s.dialogs}>

            <div className={s.dialogsItem}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div>{messageElements}</div>
                <div>
                    <div>
                        <textarea placeholder='Enter'
                                  onChange={ onNewMessageChange }
                                  value={ props.newMessageBody }>
                        </textarea>
                    </div>
                    <div>
                        <button onClick={ onSendMessageClick }>SEND</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Messages;
import messageReducer from "./message-reducer";
import profileReducer from "./profile-reducer";

let store = {
    _state: {
        profilePage: {
            postsData: [
                {id: 1, post: 'How are you?', likeCount: '5'},
                {id: 2, post: 'It\'s my first test!', likeCount: '0'},
                {id: 3, post: 'All right?', likeCount: '777'},
                {id: 4, post: 'What are you doing?', likeCount: '1000'}
            ],
            newPostText: 'NikArt Yohhoo!'
        },
        messagePage: {
            dialogData: [
                {id: 1, name: 'NikArt'},
                {id: 2, name: 'Andrey'},
                {id: 3, name: 'Anya'},
                {id: 4, name: 'Mama'}
            ],
            messageData: [
                {id: 1, message: 'Hi???'},
                {id: 2, message: 'Good!'},
                {id: 3, message: 'All right?'},
                {id: 4, message: 'Welcome !!!'}
            ],
            newMessageBody: 'NNNNNNNN'
        }
    },
    _callSubscriber(){

    },

    getState() {
        return this._state;
    },

    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.messagePage = messageReducer(this._state.messagePage, action);

        this._callSubscriber(this._state);

    }
}




export default store;
window.store = store;
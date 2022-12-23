import React from "react";
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";

const MyPosts = (props) => {

    let postsElements = props.posts.map(posts => <Post message={posts.post} likesCount={posts.likeCount} />);

    let newPostEl = React.createRef();

    let addPostClick = () => {
        // let action = {type: 'ADD-POST'};
        props.dispatch(addPostActionCreator());
    }

    let postChange = () => {
        let text = newPostEl.current.value;
        // let action = {type: 'UPDATE-NEW-POST-TEXT', newText: text};
        let action = updateNewPostTextActionCreator(text);
        console.log(text);
        props.dispatch(action);
    }


    return (
        <div className={s.postsBlock}>
            <h3>My post</h3>
            <div>
                <div>
                    <textarea onChange={postChange}
                              ref={newPostEl}
                              value={props.newPostText}  />
                </div>
                <div>
                    <button onClick={ addPostClick }>Button</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
}

export default MyPosts;
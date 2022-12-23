import s from './Post.module.css';

const Post = (props) => {
    return (
        <div className={s.item}>
            <img src='https://cdn-icons-png.flaticon.com/512/53/53104.png'/>
            {props.message}
            <div>
                <span>Like: </span>{props.likesCount}
            </div>
        </div>
    )
}

export default Post;
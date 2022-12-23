import s from './../Messages.module.css';


const Mess = (props) => {
    return (
        <div className={s.message}>{props.message}</div>
    )
}


export default Mess;
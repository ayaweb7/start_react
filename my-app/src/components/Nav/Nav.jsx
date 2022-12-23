import s from './Nav.module.css';
import {NavLink} from "react-router-dom";

const Nav = () => {
    return (
        <nav className={`${s.nav} ${s.item}`}>
            <div><NavLink to='/profile' className = { navData => navData.isActive ? s.active : s.item }>Profile</NavLink></div>
            <div><NavLink to='/messages' className = { navData => navData.isActive ? s.active : s.item }>Message</NavLink></div>
            <div><NavLink to='/news' className = { navData => navData.isActive ? s.active : s.item }>News</NavLink></div>
            <div><NavLink to='/music' className = { navData => navData.isActive ? s.active : s.item }>Music</NavLink></div>
            <div><NavLink to='/settings' className = { navData => navData.isActive ? s.active : s.item }>Settings</NavLink></div>
        </nav>
    )
}

export default Nav;
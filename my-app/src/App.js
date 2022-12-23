//import logo from './logo.svg';
import './App.css';
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Profile from "./components/Profile/Profile";
import Messages from "./components/Messages/Messages";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";

const App = (props) => {

    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header />
                <Nav />
                <div className="app-wrapper-content">
                    <Routes>
                        <Route path='/profile'
                               element={<Profile
                                   profilePage={props.state.profilePage}
                                   dispatch={props.dispatch}
                               />}
                        />
                        <Route path='/messages/*'
                               element={<Messages
                                   store={props.store} />}/>
                        <Route path='/news'
                               element={<News />}/>
                        <Route path='/music'
                               element={<Music />}/>
                        <Route path='/settings'
                               element={<Settings />}/>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
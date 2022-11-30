import logo from './logo.svg';
import Header from "./components/Header";
import Nav from "./components/Nav";
import Profile from "./components/Profile";

// import './App.css';
// import Header from "./header";
// import Techno from "./techno";
// import Footer from "./footer";

const App = () => {
  return (
    <div className='app-wrapper'>
        <Header />
        <Nav />
        <Profile />
    </div>);
}

export default App;
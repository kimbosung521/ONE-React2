import Login from "./components/Login";
import Register from "./components/Register";
import {BrowserRouter,  Route, Routes,Link} from "react-router-dom"
import Main from "./components/Main";

function App() {
  return (
    
    <div>
    <h1>페이지</h1>
    <ul>
        <Link to={"/"}><li>Home</li></Link>
        <Link to={"/Login"}><li>Login</li></Link>
        <Link to={"/Register"}><li>Register</li></Link>
      </ul>
    
      <Routes>
      <Route path="/" element ={<Main />} />
      <Route path="/login" element ={<Login />}/>
      <Route path="/Register" element ={<Register />}/>
      </Routes>
      </div>
      
  );
}

export default App;
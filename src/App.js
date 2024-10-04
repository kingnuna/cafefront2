
import './App.css';
import Userhome from './components/member/UserHome';
import {Link, BrowserRouter} from "react-router-dom"
import Router from './Router';

function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Userhome/>
        <hr/>
        <Router/>
      </BrowserRouter>
    </div>
  );
}

export default App;

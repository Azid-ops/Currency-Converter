import logo from './logo.svg';
import './App.css';

import LandingComponent from './Landing Page/components/landingPage';

//This Import all the basic elements to enable routing
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import MainComponent from './MainPage/components/mainpage';
import LoginComponent from './User/School/login/components/login';

//Starting Function or Main Function
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingComponent />} />
        <Route path="/home" element={<MainComponent />} />
        <Route path="/login" element={<LoginComponent />} />
      </Routes>
    </Router>
  );
}

export default App;

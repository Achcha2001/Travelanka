import logo from './logo.svg';
import './MenuBar.css';
import MenuBar from './MenuBar';
import LoginForm from './login';
import SignupForm from './Signup';
import Contact from './Contact';


function App() {
  return (
    <div className="App">
     <MenuBar/>
     <Contact/>
     <LoginForm />
      <SignupForm />
     
    </div>
   
  );
}

export default App;
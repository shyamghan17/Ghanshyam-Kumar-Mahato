import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet'
import Welcome from './components/Welcome'
import Hello from './components/Hello'

function App() {
  return (
    <div className="App">

      <Greet name="Ghanshyam" heroName="Captain America">
        <p>This is Thakur Intenational</p>
      </Greet>
      <Greet name="Kumar" heroName="Thor"/>
      <Greet name="Radhey" heroName="BatMan"/>
      {/* <Welcome /> */}
      {/* <Hello></Hello> */}
      
    </div>
  );
}

export default App;

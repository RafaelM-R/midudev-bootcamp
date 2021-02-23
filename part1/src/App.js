import './App.css';
import Mensaje from './mensaje.js';

const Description = () =>{
  return <p>Esta es la app del curso fullstack bootcamp</p>
}

const App = ()=> {
  return (
    <div className="App">
      <Mensaje color='red' message='Estamos trabajando '></Mensaje>
      <Mensaje color='green' message='En un curso'></Mensaje>
      <Mensaje color='blue' message='De react '></Mensaje>
      <Description/>
    </div>
  );
}

export default App;

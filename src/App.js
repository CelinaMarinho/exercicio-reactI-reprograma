
import './App.css';
import Title from './components/Title';
import Subtitle from './components/Subtitle';
import Card from "./components/Card"



function App() {
  return (
    <div className="App">
      <header className="App-header">
        
        <Title>Meu Primeiro Projeto React do Zero</Title>
        <Subtitle texto="Flores e Arbustos" />
        
        <Card />
        
        
      </header>
    </div>
    
  );
}

export default App;

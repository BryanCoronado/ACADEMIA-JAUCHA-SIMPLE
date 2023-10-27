import './App.css';
import Footer from './componentes/Footer/Footer';
import Galeria from './componentes/Galeria/Galeria';
import Inicio from './componentes/Inicio/Inicio';
import Introduccion from './componentes/Introduccion/Introduccion';
import Servicios from './componentes/Servicios/Servicios';
import Ubicacion from './componentes/Ubicacion/Ubicacion';



function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Inicio/>
      <Introduccion/>
      <Servicios/>
      <Galeria/>
      <Ubicacion/>
      <Footer/>

      </header>
    </div>
  );
}

export default App;

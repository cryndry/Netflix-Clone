import './normalize.css'
import NavBar from './components/NavBar/NavBar';
import Billboard from './components/Billboard/Billboard';
import Titles from './components/Titles/Titles';
import Footer from './components/Footer/Footer';

const App = () => {
  return (
    <div className="App">
      <NavBar/>
      <Billboard/>
      <Titles/>
      <Footer/> 
    </div>
  );
}

export default App;
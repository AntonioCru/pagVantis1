import './App.css';
import { Aside } from './components/Aside';
import { Aside2 } from './components/Aside2';
import { Aside3 } from './components/Aside3';
import { Aside4 } from './components/Aside4';
import { Aside5 } from './components/Aside5';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import styles from './styles/StylesContainer.module.css';

function App() {
  return (
    <div className={styles.gridContainer}>
      <Header />
      <Aside/>
      <Aside2/>
      <Aside3/>
      <Aside4/>
      <Aside5/>
      <Footer/>
    </div>
  );
}

export default App;

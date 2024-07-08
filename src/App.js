import './App.css';
import NavBar from './Components/Nav';
import Main from './Components/Main';
import TwoContainers from './Components/TwoContainers';
import StandAlone from './Components/StandAlone';
import ThreeContainers from './Components/ThreeContainers';
import Boxes from './Components/Boxes';


function App() {
  return (
    <>
      <nav>
        <NavBar/>
      </nav>
      <div className ='Cont'>
      <main>
        <Main/>
      </main>
      <section>
        <TwoContainers/>
      </section>
      <article>
        <StandAlone />
      </article>
      <shapes>
        <ThreeContainers/>
      </shapes>
      </div>
      <empty>
        <Boxes/>
      </empty>
    </>
  );
}

export default App;

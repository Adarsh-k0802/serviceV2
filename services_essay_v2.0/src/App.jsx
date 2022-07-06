
import './App.css';
import Accordion from './Components/Accordion/Accordian';
import Essay from './Components/Essay';
import General from './Components/General';
import Help from './Components/Help';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Plagiarism from './Components/Plagiarism';
import Squote2 from './Components/Squote2';


function App() {
  return (
    <div className="App">
      
   <Navbar/>
   <Squote2/>
   <Essay/>
   <General/>
   <Help/>
   <Plagiarism/>
   <Accordion/>
   <Footer/>
   
   
  

    </div>
  );
}

export default App;

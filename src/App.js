import './App.css';
import Banner from './Components/Banner/Banner';
import Sectors from './Components/Sectors/Sectors';
import { Toaster } from 'react-hot-toast';
import AddedSectors from './Components/AddedSectors/AddedSectors';


function App() {
  return (
    <div className="App">
      <Toaster />
      <Banner></Banner>
      <Sectors></Sectors>
      <AddedSectors></AddedSectors>
    </div>
  );
}

export default App;

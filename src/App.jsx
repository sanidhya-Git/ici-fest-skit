import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import Footer from './components/footer';
import Accommodation from './components/accommodation';
import TempReg from './components/temp_regis';
import AboutTeam from './components/aboutteam';
import Layout from './layout';
import EventDetail from './components/events_details/eventdetail';
import Event from './components/events';
import GALLERY from './components/gallery';
const App = () => {
  return (
    <>
      <BrowserRouter>
        <>
          <Navbar />
          <Routes>           
            <Route path='/' element={<Layout />} />
            <Route path="/events" element={<Event />} />
            <Route path="/event/:slug" element={<EventDetail />} />
            <Route path='/accommodation' element={<Accommodation />} />
            <Route path='/registrations' element={<TempReg />} />
            <Route path='/aboutteam' element={<AboutTeam />} />
            <Route path='/gallery' element={<GALLERY />} />
            </Routes>
          <Footer />
        </>
      </BrowserRouter>
    </>
  );
};

export default App;

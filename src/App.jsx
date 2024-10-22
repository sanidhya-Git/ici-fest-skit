import { BrowserRouter, Routes, Route } from 'react-router-dom';
// gvgjgfgjfgfhj

import Navbar from './components/navbar';
import FestEvent from './components/events';
import Footer from './components/footer';
import Accommodation from './components/accommodation';
import TempReg from './components/temp_regis';
import AboutTeam from './components/aboutteam';

import JK from './components/events_details/joistkwik';
import BYC  from './components/events_details/beyondthecanvas';
import BA from './components/events_details/bowlingalley';
import BOB from './components/events_details/brickobrick';
import ES from './components/events_details/engineexotics';
import EV from './components/events_details/egammingvalorent';
import EVWORKSHOP from './components/events_details/EVworkshop';
import WALKATHON from './components/events_details/webathon';

import Fabric from './components/events_details/fabricoffantasy';

import JENGA from './components/events_details/jengapalooza';
import MUN from './components/events_details/mun';
import TECH from './components/events_details/techconnecttheexhibition';
import OAT from './components/events_details/Quizathon';
import pp from './components/events_details/pitchperfect';
import EBGMI from './components/events_details/egammingbgmi';
import DN from './components/events_details/doneworkshop';
import CC from './components/events_details/coordinationclash';

import SH from './components/events_details/scavenger';
import TOGGLE from './components/events_details/toggle';
import TOWER from './components/events_details/towercraft';
import QUAKE from './components/events_details/quakeproof';
import MIXANDMOULD from './components/events_details/mixandmould';
import ARTOFPERSUASION from './components/events_details/artofpersuasion';
import INNOSTRUCT from './components/events_details/innostruct';
import CRACKTHECIRCUIT from './components/events_details/crackthecircuit';
import MUDADVENTURE from './components/events_details/mudadventure';
import BRUSHTALK from './components/events_details/brushtalk';
import WORKSHOP from './components/events_details/cementworkshop';

import Layout from './layout';
import GALLERY from './components/gallery';
import RESPONSE from './components/response';
import JECRC from './components/jecrc';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <>
          <Navbar />
          <Routes>
            <Route path='/' element={<Layout />} />
            <Route path='/events' element={<FestEvent />} />
            <Route path='/accommodation' element={<Accommodation />} />
            <Route path='/registrations' element={<TempReg />} />
            <Route path='/aboutteam' element={<AboutTeam />} />
            <Route path='/joist-kwik' element={<JK />} />
            <Route path='/bowling_alley' element={<BA />} />
            <Route path='/pitch_perfect' element={<pp />} />
            <Route path='/beyond_the_canvas' element={<BYC />} />
            <Route path='/brick-o-brick' element={<BOB />} />
            <Route path='/pitch_perfect' element={<pp />} />
            <Route path='/scanvenger-hunt' element={<SH />} />
            <Route path='/toggle' element={<TOGGLE />} />
            <Route path='/tower-craft' element={<TOWER />} />
            <Route path='/quakeproof' element={<QUAKE />} />
            <Route path='/mix-and-mould' element={<MIXANDMOULD />} />
            <Route path='/art-of-persuasion' element={<ARTOFPERSUASION />} />
            <Route path='/innostruct' element={<INNOSTRUCT />} />
            <Route path='/crackthecircuit' element={<CRACKTHECIRCUIT />} />
            <Route path='/the-mud-adventure' element={<MUDADVENTURE />} />
            <Route path='/let-the-brush-talk' element={<BRUSHTALK />} />
            <Route path='/cement-workshop' element={<WORKSHOP />} />
            <Route path='/cyclothon-walkathon' element={<WALKATHON />} />
            <Route path='/gallery' element={<GALLERY />} />
            <Route path='/response' element={<RESPONSE />} />
            <Route path='/jecrc' element={<JECRC />} />
          </Routes>
          <Footer />
        </>
      </BrowserRouter>
    </>
  );
};

export default App;

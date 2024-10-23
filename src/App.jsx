import { BrowserRouter, Routes, Route } from 'react-router-dom';
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
import WEBATHON from './components/events_details/webathon';
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

import JENGA from './components/events_details/jengapalooza';
import MUN from './components/events_details/mun';
import TECH from './components/events_details/techconnecttheexhibition';
import OAT from './components/events_details/Quizathon';
import PP from './components/events_details/pitchperfect';
import EBGMI from './components/events_details/egammingbgmi';
import DN from './components/events_details/doneworkshop';
import CC from './components/events_details/coordinationclash';
import Fabric from './components/events_details/fabricoffantasy';
import ES from './components/events_details/engineexotics';
import EV from './components/events_details/egammingvalorent';
import EVWORKSHOP from './components/events_details/EVworkshop';
// import ROBOSOCCER from './components/events_details/robosoccer';
import OFFROAD from './components/events_details/offroad_odyssey';
import DRAG_RAGE from './components/events_details/drag_race';
import AVD_CONSTRUCT from './components/events_details/adv_construction';
import ROBO_SOCCER from './components/events_details/robo_soccer';


// import { i } from './assets';

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
            <Route path='/joist_kwik' element={<JK />} />
            <Route path='/drone_workshop' element={<DN />} />
            <Route path='/fabricoffantacy' element={<Fabric />} />
            <Route path='/jengaplooza' element={<JENGA />} />
            <Route path='/ici_mun' element={<MUN />} />
            <Route path='/offroad_odyssey' element={<OFFROAD />} />

            <Route path='/engine_exotics' element={<ES />} />
            <Route path='/egamingvalorant' element={<EV />} />
            <Route path='/coordination_clash' element={<CC />} />
            <Route path='/ev_workshop' element={<EVWORKSHOP />} />
            {/* <Route path='/robo_soccer' element={<ROBOSOCCER />} /> */}
            <Route path='/pitch_perfect' element={<PP />} />
            <Route path='/drag_race' element={<DRAG_RAGE />} />
            <Route path='/adv_construction' element={<AVD_CONSTRUCT />} />
            {/* <Route path='/robo_soccer' element={<ROBO_SOCCER />} /> */}


            <Route path='/techconnect' element={<TECH />} />
            <Route path='/web_a_thon' element={<WEBATHON />} />
            <Route path='/quiz_a_thon' element={<OAT />} />
            <Route path='/pitch_perfect' element={<pp />} />
            <Route path='/egamingbgmi' element={<EBGMI />} />
            <Route path='/bowling_alley' element={<BA />} />
            <Route path='/pitch_perfect' element={<pp />} />
            <Route path='/beyond_the_canvas' element={<BYC />} />
            <Route path='/brick-o-brick' element={<BOB />} />
            <Route path='/pitch_perfect' element={<pp />} />
            <Route path='/scavenger_hunt' element={<SH />} />
            <Route path='/toggle' element={<TOGGLE />} />
            <Route path='/tower_craft' element={<TOWER />} />
            <Route path='/quakeproof' element={<QUAKE />} />
            <Route path='/mix-and-mould' element={<MIXANDMOULD />} />
            <Route path='/art-of-persuasion' element={<ARTOFPERSUASION />} />
            <Route path='/innostruct' element={<INNOSTRUCT />} />
            <Route path='/crackthecircuit' element={<CRACKTHECIRCUIT />} />
            <Route path='/the-mud-adventure' element={<MUDADVENTURE />} />
            <Route path='/let-the-brush-talk' element={<BRUSHTALK />} />
            <Route path='/cement-workshop' element={<WORKSHOP />} />
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

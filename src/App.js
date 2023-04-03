import "./app.scss";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Footer from "./components/footer/Footer";
import TopBar from "./components/topbar/TopBar";
import Contact from "./pages/contact/Contact";
import Exhibit from "./pages/exhibit/Exhibit";

import Schedule from "./pages/schedule/Schedule";
import Sessions from "./pages/schedule/sessions/Sessions";
import Workshops from "./pages/schedule/workshops/Workshops";
import Speakers from "./pages/schedule/speakers/Speakers";
import SpecialDestinations from "./pages/schedule/special-destinations/SpecialDestinations";

import StandForm from "./pages/book-a-stand/stand-form/StandForm";

import Sponsors from "./pages/sponsors/Sponsors";
import Home from "./pages/home/Home";

import ExhibitorsInfo from "./pages/exhibit/exhibitors-info/ExhibitorsInfo";
import ExhibitorsList from "./pages/exhibit/exhibitors-list/ExhibitorsList";
import ExhibitorsBrochure from "./pages/exhibit/exhibitors-brochure/ExhibitorsBrochure";
import VenueAndTravelInfo from "./pages/exhibit/venue-and-travel-info/VenueAndTravelInfo";

import BeASponsor from './pages/sponsors/be-a-sponsor/BeASponsor'

import BeASponsor2 from './pages/sponsor/be-a-sponsor/BeASponsor'

import RegisterToAttend from './pages/attend/register-to-attend/StandForm'
import AttendeesInfo from './pages/attend/attendees-info/AttendeesInfo'
import VenueAndTravelInfo2 from './pages/attend/venue-and-travel-info/VenueAndTravelInfo'
import InvitationLetter from './pages/attend/invitation-letter/InvitationLetter'
import VisaApplication from './pages/attend/visa-application/VisaApplication'
import TermsAndConditions from './pages/attend/terms-and-conditions/TermsAndConditions'

import ContactInfo from './pages/contact/contact-info/ContactInfo'

import ListOfFaq from './pages/faq/list-of-faq/ListOfFaq'


import {ThemeContextProvider} from './contexts/ThemeContext'
import UseScrollToTop from "./hooks/UseScrollToTop";

function AppMain() {

  return (
    <div>
        <TopBar />
        <div
        className="app-cont">
          <div
          className="app-cont-center">
          <UseScrollToTop />
          <Routes>
            <Route path="/">
              <Route index element={
                  <Home />
                } />
              <Route path='home'>
                <Route index element={<Home />}/>
              </Route>
              <Route path='schedule'>
                <Route index element={<Schedule /> }   />
                <Route path="sessions" element={<Sessions />}   />
                <Route path="workshops" element={<Workshops />}   />
                <Route path="special-destinations" element={<SpecialDestinations />}   />
                <Route path="speakers" element={<Speakers />}   />
              </Route>
              <Route path='book-a-stand'>
                <Route index element={ <Exhibit />} />
                <Route path="stand-form" element={ <StandForm />} />
              </Route>
              <Route path='exhibit'>
                <Route index element={ <Exhibit />} />
                <Route path="exhibitors-info" element={ <ExhibitorsInfo />} />
                <Route path="exhibitors-brochure" element={ <ExhibitorsBrochure />} />
                <Route path="venue-and-travel-info" element={ <VenueAndTravelInfo />} />
                <Route path="exhibitors-list" element={ <ExhibitorsList />} />
              </Route>
              <Route path='sponsors'>
                <Route index element={<Contact />}/>
                <Route path='be-a-sponsor' element={<BeASponsor2 />}/>
                <Route path='download-brochure' element={<BeASponsor />}/>
              </Route>
              <Route path='sponsor'>
                <Route index element={<Contact />}/>
                <Route path='be_a_sponsor' element={<BeASponsor2 />} />
              </Route>
              <Route path='attend'>
                <Route index element={<Contact />}/>
                <Route path='register-to-attend' element={<RegisterToAttend/>}/>
                <Route path='attendees-info' element={<AttendeesInfo />}/>
                <Route path='venue-and-travel-info' element={<VenueAndTravelInfo2/>}/>
                <Route path='invitation-letter' element={<InvitationLetter />}/>
                <Route path='visa-application' element={<VisaApplication />}/>
                <Route path='terms-and-conditons' element={<TermsAndConditions />}/>
              </Route>
              <Route path='contact'>
                <Route index element={<Contact />}/>
                <Route path='contact-info' element={<ContactInfo />}/>
              </Route>
              <Route path='faq'>
                <Route index element={<Contact />}/>
                <Route path='list-of-faq' element={<ListOfFaq />}/>
              </Route>
            </Route>
          </Routes>
          </div>
        </div>
        {/* <ScrollRestoration /> */}
        <Footer />
    </div>
  );
}

const App = () => {
  return (
    <ThemeContextProvider>
        <BrowserRouter>    
            <AppMain />
        </BrowserRouter>
    </ThemeContextProvider>
  )
}


export default App;

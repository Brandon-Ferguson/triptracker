import { Routes, Route } from 'react-router-dom';
import Home from './components/shared/Home';
import About from './components/shared/About';
import Nomatch from './components/shared/Nomatch';
import MainNavbar from './components/shared/MainNavbar';
import Users from './components/users/Users';
import Trips from './components/trips/Trips'
import Locations from './components/locations/Locations'
import Addresses from './components/addresses/Addresses'

const App = () => (
  <>
    <MainNavbar />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/users' element={<Users />} />
      <Route path='/:user_ID/trips' element={<Trips />} />
      <Route path='/:trip_ID/locations' element={<Locations />} />
      <Route path='/:location_ID/addresses' element={<Addresses />} />
      <Route path='/*' element={<Nomatch />} />
    </Routes>
  </>
)

export default App;

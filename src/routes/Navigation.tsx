import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Routes,
} from 'react-router-dom';
import { ShoppingPage } from '../02-component-patterns/pages/ShoppingPage';
import logo from '../logo.svg';

export const Navigation = () => {
  return (
    <Router>
      <div className="main-layout">
        <nav>
          <img src={logo} alt="React Logo" />
          <ul>
            <li key={'home'}>
              <NavLink to='/home' >{'Home'}</NavLink>
            </li>
            <li key={'about'}>
              <NavLink to='/shopping' >{'Shopping'}</NavLink>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
        <Routes>
          <Route path='/home' element={<div>Home</div>} />
          <Route path='/shopping' element={ <ShoppingPage /> } />
          {/* <Route path="/*" element={ <Navigate to={ routes[0].to } replace /> } /> */}
        </Routes>
      </div>
    </Router>
  );
}

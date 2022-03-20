import { BrowserRouter as Router} from 'react-router-dom';
import { Routes, Route, NavLink, Navigate } from 'react-router-dom'
import { ShoppingPage } from '../02-component-pattern/pages/ShoppingPage';
import logo from '../logo.svg';

export const Navigation = () => {
  return (
    <Router>
      <div className="main-layout">
        <nav>
            <img src={ logo } alt="React Logo" />
          <ul>
            <li>
              <NavLink to="/" className={ ({ isActive }) => isActive ? 'nav-active' : '' }>Shopping</NavLink>
            </li>
            <li>
              <NavLink to="/about" className={ ({ isActive }) => isActive ? 'nav-active' : '' }>About</NavLink>
            </li>
            <li>
              <NavLink to="/users" className={ ({ isActive }) => isActive ? 'nav-active' : '' }>Users</NavLink>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        {/* <Switch>
          <Route path="/about">
            <h1>About</h1>
          </Route>
          <Route path="/users">
            <h1>Users</h1>
          </Route>
          <Route path="/">
            <h1>Home</h1>
          </Route>
        </Switch> */}

        <Routes>
          <Route path='' element={ <ShoppingPage />} />
          <Route path='about' element={ <h1>About</h1>} />
          <Route path='users' element={ <h1>Users</h1>} />

          <Route path='/*' element={ <Navigate to='/' replace /> } />
        </Routes>
      </div>
    </Router>
  );
}
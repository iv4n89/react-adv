import { BrowserRouter as Router} from 'react-router-dom';
import { Routes, Route, NavLink, Navigate } from 'react-router-dom'
import { routes } from './routes';
import logo from '../logo.svg';

export const Navigation = () => {
  return (
    <Router>
      <div className="main-layout">
        <nav>
            <img src={ logo } alt="React Logo" />
          <ul>
            { routes.map(({ name, to }) => (
              <li key={to}>
                <NavLink to={to} className={ ({ isActive }) => isActive ? 'nav-active' : '' }> { name } </NavLink>
              </li>
            )) }
          </ul>
        </nav>

        <Routes>
          { routes.map(({ Component, path }) => (
            <Route key={path} path={ path } element={ <Component /> } />
          )) }

          <Route path='/*' element={ <Navigate to='/lazy1' replace /> } />
        </Routes>
      </div>
    </Router>
  );
}
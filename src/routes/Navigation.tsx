import { BrowserRouter as Router} from 'react-router-dom';
import { Routes, Route, NavLink, Navigate } from 'react-router-dom'
import { DynamicForm } from '../03-forms/pages/DynamicForm';
import { FormikAbstractation } from '../03-forms/pages/FormikAbstractation';
import { FormikBasicPage } from '../03-forms/pages/FormikBasicPage';
import { FormikComponents } from '../03-forms/pages/FormikComponents';
import { FormikYupPage } from '../03-forms/pages/FormikYupPage';
import { RegisterFormikPage } from '../03-forms/pages/RegisterFormikPage';
import { RegisterPage } from '../03-forms/pages/RegisterPage';
import logo from '../logo.svg';

export const Navigation = () => {
  return (
    <Router>
      <div className="main-layout">
        <nav>
            <img src={ logo } alt="React Logo" />
          <ul>
            <li>
              <NavLink to="/register" className={ ({ isActive }) => isActive ? 'nav-active' : '' }>Register page</NavLink>
            </li>
            <li>
              <NavLink to="/register-formik" className={ ({ isActive }) => isActive ? 'nav-active' : '' }>Register formik page</NavLink>
            </li>
            <li>
              <NavLink to="/formik-basic" className={ ({ isActive }) => isActive ? 'nav-active' : '' }>Formik basic</NavLink>
            </li>
            <li>
              <NavLink to="/formik-yup" className={ ({ isActive }) => isActive ? 'nav-active' : '' }>Formik yup</NavLink>
            </li>
            <li>
              <NavLink to="/formik-components" className={ ({ isActive }) => isActive ? 'nav-active' : '' }>Formik components</NavLink>
            </li>
            <li>
              <NavLink to="/formik-abstractation" className={ ({ isActive }) => isActive ? 'nav-active' : '' }>Formik abstractation</NavLink>
            </li>
            <li>
              <NavLink to="/dynamic-form" className={ ({ isActive }) => isActive ? 'nav-active' : '' }>Dynamic form</NavLink>
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
          <Route path='/formik-basic' element={ <FormikBasicPage /> } />
          <Route path='/formik-yup' element={ <FormikYupPage /> } />
          <Route path='/formik-components' element={ <FormikComponents /> } />
          <Route path='/formik-abstractation' element={ <FormikAbstractation /> } />
          <Route path='/register' element={ <RegisterPage />} />
          <Route path='/register-formik' element={ <RegisterFormikPage />} />
          <Route path='/dynamic-form' element={ <DynamicForm />} />

          <Route path='/*' element={ <Navigate to='/formik-basic' replace /> } />
        </Routes>
      </div>
    </Router>
  );
}
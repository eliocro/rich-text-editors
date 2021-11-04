import { Route, Switch } from 'react-router';
import { HashRouter, NavLink } from 'react-router-dom';

import Tiny from './components/tiny';
import Preview from './components/preview';

const editors = [
  ['tiny',  'TinyMCE v5', Tiny],
  ['preview', 'Preview',   Preview],
];

export default function App() {
  return (
    <div className="wrapper">
      <h1>Rich text editor comparison</h1>
      <HashRouter>
        <Nav />
        <Switch>
          { editors.map(([path, _, Component], idx) => (
            <Route key={idx} path={`/${path}`} component={ Component } />
          )) }
        </Switch>
      </HashRouter>
    </div>
  );
}

function Nav() {
  return (
    <nav className="main-nav">
      <ul className="list">
        { editors.map(([path, name], idx) => (
          <li key={idx}>
            <NavLink to={`/${path}`} activeClassName="active">{name }</NavLink>
          </li>
        )) }
      </ul>
    </nav>
  )
}

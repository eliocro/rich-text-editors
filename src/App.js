import { Route, Switch } from 'react-router';
import { HashRouter, NavLink } from 'react-router-dom';

import Tiny from './components/tiny';
import Draft from './components/draft';
import CKEditor from './components/ckeditor';
import Preview from './components/preview';

const editors = [
  ['tiny', 'TinyMCE v5', Tiny],
  ['draft', 'Draft.js', Draft],
  ['ckeditor', 'CKEditor 5', CKEditor],
  ['preview', 'Preview', Preview],
];

export default function App() {
  return (
    <div className="wrapper">
      <HashRouter>
        <header className="header">
          <h1>Rich text editor comparison</h1>
          <Nav />
        </header>
        <Switch>
          {editors.map(([path, _, Component], idx) => (
            <Route key={idx} path={`/${path}`} component={Component} />
          ))}
          <Route>
            <p>
              Pick an editor from the menu. Or check the Preview on the right.
            </p>
          </Route>
        </Switch>
      </HashRouter>
      <footer className="footer">
        <span>Source code: </span>
        <a
          href="https://github.com/eliocro/rich-text-editors"
          target="_blank"
          rel="noreferrer noopener"
        >
          Github
        </a>
      </footer>
    </div>
  );
}

function Nav() {
  return (
    <nav className="main-nav">
      <ul className="list">
        {editors.map(([path, name], idx) => (
          <li key={idx}>
            <NavLink to={`/${path}`} activeClassName="active">
              {name}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}

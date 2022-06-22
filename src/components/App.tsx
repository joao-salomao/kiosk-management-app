import { ReactElement } from 'react';
import { Header } from './header';
import { Footer } from './footer';
import { List, Edit, New } from './pages/kiosk'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export function App(): ReactElement {
  return (
    <Router>
      <Header />
      <main>
        <Switch>
          <Route path="/list">
            <List />
          </Route>
          <Route path="/edit">
            <Edit />
          </Route>
          <Route path="/new">
            <New />
          </Route>
        </Switch>
      </main>
      <Footer />
    </Router>
  );
}

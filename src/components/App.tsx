import { ReactElement } from 'react';
import { Header } from './header';
import { Footer } from './footer';
import { List, Edit, New } from './pages/kiosk'

import {
  Route,
  Routes,
  BrowserRouter as Router,
} from "react-router-dom";

export function App(): ReactElement {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<List />} />
          <Route path="/edit" element={<Edit />} />
          <Route path="/new" element={<New />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

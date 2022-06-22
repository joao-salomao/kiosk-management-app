import { ReactElement } from 'react';
import { Header } from './header';
import { Footer } from './footer';
import { List, Edit, New } from './pages/kiosk'

import {
  Route,
  Routes,
  BrowserRouter as Router,
} from "react-router-dom";
import {
  RecoilRoot
} from 'recoil';

export function App(): ReactElement {
  return (
    <RecoilRoot>
      <Router>
        <Header />
        <main className='p-4 m-4'>
          <Routes>
            <Route path="/" element={<List />} />
            <Route path="/edit" element={<Edit />} />
            <Route path="/new" element={<New />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </RecoilRoot>
  );
}

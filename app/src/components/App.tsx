import { ReactElement } from 'react';
import {
  Route,
  Routes,
  BrowserRouter as Router,
} from "react-router-dom";
import {
  RecoilRoot
} from 'recoil';
import { ToastContainer } from 'react-toastify';
import { Header } from './header';
import { Footer } from './footer';
import { List, Edit, New, Logs } from './pages/kiosk'


export function App(): ReactElement {
  return (
    <RecoilRoot>
      <Router>
        <Header />
        <main className='p-4 m-4'>
          <Routes>
            <Route path="/" element={<List />} />
            <Route path="/new" element={<New />} />
            <Route path="/edit/:kioskId" element={<Edit />} />
            <Route path="/logs/:kioskId" element={<Logs />} />
          </Routes>

          <ToastContainer
            draggable
            closeOnClick
            pauseOnHover
            hideProgressBar
            pauseOnFocusLoss
            rtl={false}
            autoClose={2000}
            position="top-right"
            newestOnTop={false}
          />
        </main>
        <Footer />
      </Router>
    </RecoilRoot>
  );
}

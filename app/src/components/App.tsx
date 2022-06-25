import { ReactElement } from 'react';
import {
  Route,
  Routes,
} from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import { Header } from './header';
import { List, Edit, New, Logs } from './pages/kiosk'

export function App(): ReactElement {
  return (
    <>
      <Header />
      <main className='p-4 m-4'>
        <Routes>
          <Route path="/" element={<List />} />
          <Route path="/new" element={<New />} />
          <Route path="/edit/:kioskId" element={<Edit />} />
          <Route path="/logs" element={<Logs />} />
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
    </>
  );
}

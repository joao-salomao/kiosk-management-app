import { ReactElement } from 'react';
import {
  Link
} from "react-router-dom";

export const Header = (): ReactElement => (
  <header>
    <nav className="flex align-center bg-white border-gray-200 px-1 sm:px-4 py-2.5 bg-gray-800">
      <Link to='/' className='block text-xl font-semibold rounded hover:bg-gray-700 text-white mr-8 p-2'>
        Kiosk Management App
      </Link>
      <Link to='/' className='block rounded p-2 text-white border-gray-100 hover:bg-gray-700 mr-4'>
        Kiosks
      </Link>
      <Link to='/logs' className='block rounded p-2 text-white border-gray-100 hover:bg-gray-700'>
        Logs
      </Link>
    </nav>
  </header>
);
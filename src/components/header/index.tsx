import { ReactElement } from 'react';

import {
  Link
} from "react-router-dom";

export const Header = (): ReactElement => (
  <header>
    <nav className="bg-white border-gray-200 px-1 sm:px-4 py-2.5 rounded bg-gray-800">
      <div className="container flex flex-wrap justify-between items-center mx-auto">
        <Link to='/' className='self-center text-xl font-semibold whitespace-nowrap text-white' >
          Kiosk Management App
        </Link>
      </div>
    </nav>
  </header>
);
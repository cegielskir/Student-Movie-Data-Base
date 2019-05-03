import React from 'react';
import { Link} from "react-router-dom";

import './SideDrawer.css';

const sideDrawer = props => {
  let drawerClasses = 'side-drawer';
  if (props.show) {
    drawerClasses = 'side-drawer open';
  }
  return (
    <nav className={drawerClasses}>
      <ul>
        <li>
          <Link to="news">Aktualności</Link>
        </li>
        <li>
          <Link to="movies">Filmy</Link>
        </li>
        <li>
          <Link to="series">Seriale</Link>
        </li>
        <li>
          <Link to="rankings">Seriale</Link>
        </li>
      </ul>
    </nav>
  );
};

export default sideDrawer;
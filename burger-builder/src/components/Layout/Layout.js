import React from 'react';
import './Layout.css';

const Layout = (props) => {
  return (
    <div>
      <div>Toolbar, SideDrawer, Backdrop</div>
      <main className="Content">
        {props.children}
      </main>
    </div>
  )
}

export default Layout;
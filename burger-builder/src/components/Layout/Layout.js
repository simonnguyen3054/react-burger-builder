import React from 'react';

const Layout = (props) => {
  return (
    <div>
      <div>Toolbar, SideDrawer, Backdrop</div>
      <main>
        {props.children}
      </main>
    </div>
  )
}

export default Layout;
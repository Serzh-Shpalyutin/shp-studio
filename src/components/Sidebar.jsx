import React from 'react';
import SidebarBtn from "./SidebarBtn";
import Menu from "./Menu";
import Social from "./Social";

const Sidebar = () => {
  return (
      <aside className="sidebar">
        <SidebarBtn/>
      
        <Menu/>
      
        <Social/>
      </aside>
  );
};

export default Sidebar;
import React from "react";
import { NavLink } from "react-router-dom";

class Sidebar extends React.Component {
  render() {
    return (
      <>
        <aside className="sidebar">
          <ul>
            <NavLink activeclassname="active" exact to="/">
              <li>Home</li>
            </NavLink>
            <NavLink activeclassname="active" to="/articles">
              <li>Article</li>
            </NavLink>
            <NavLink activeclassname="active" to="/help">
              <li>Help</li>
            </NavLink>
          </ul>
        </aside>
      </>
    );
  }
}

export default Sidebar;

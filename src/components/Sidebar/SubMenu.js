import React from 'react';

import { Link, NavLink } from 'react-router-dom';

import './SubMenu.css';

function SubMenu({ item }) {
  return (
    <div className="subMenu">
      <NavLink className='subBarLink' to={item.path}>
        <div className='toFlexThis'>
          {item.icon}
          <p className='subBarLabel'>{item.title}</p>
        </div>
      </NavLink>
    </div>
  )
}

export default SubMenu
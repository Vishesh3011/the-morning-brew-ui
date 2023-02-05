import React from 'react';

import { Link } from 'react-router-dom';

import './SubMenu.css';

function SubMenu({ item }) {
  return (
    <div className = "subMenu">
        <Link className='subBarLink' to = {item.path}>
            <div className='toFlexThis'>
                {item.icon}
                <p className='subBarLabel'>{item.title}</p>
            </div>
        </Link>
    </div>
  )
}

export default SubMenu
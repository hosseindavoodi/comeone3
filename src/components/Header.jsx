
import React from 'react';

export default function Header() {


  return (
    <div className="ui one column center aligned page grid">
    <div className="column twelve wide">
        <img src={require('../images/logo.svg')} alt="logo" />
    </div>
  </div>
  )
}
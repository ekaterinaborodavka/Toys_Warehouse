import React from 'react';

import Navigation from '../Navigation/Navigation';

import './About.css';

export default function About() {

  return (
    <React.Fragment>
      <h1 className='Title'>Toys Warehouse</h1>
      <h2 className='About_Title'>About</h2>
      <Navigation />
      <div className='About_Content'>
                Page about app&apos;s author
      </div>
    </React.Fragment>
  );
}

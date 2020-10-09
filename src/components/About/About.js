import React from 'react';
import ButtonBack from '../ButtonBack/ButtonBack';

import './About.css';

export default function About() {

  return (
    <React.Fragment>
      <h1 className='Title'>Toys Warehouse</h1>
      <h2 className='About_Title'>About</h2>
      <ButtonBack />
      <div className='About_Content'>
                Page about app&apos;s author
      </div>
    </React.Fragment>
  );
}

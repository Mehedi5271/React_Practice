// home.js
import React from 'react';
import '../Component/Css/home.css'; 
import Img from '../Component/Image/জরুরি.jpeg';

export default function Home() { 
  return (
    <div>
      <p className='a'>Mehedi Hassan</p>
      <img src={Img} alt='' height={200} width={500} />
    </div>
  );
}

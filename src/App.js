import React from 'react';

import './style.css';
import Navbar from './component/Navbar';
import TextForm from './component/TextForm';

export default function App() {
  return (
    <div>
      <Navbar title="TextTuttils" aboutUs="About Us" />
      <TextForm heading="Enter the text to analyse" />
    </div>
  );
}

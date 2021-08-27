import React, { useState } from 'react';

function TextForm(props) {
  const [text, setText] = useState('Online Converter');

  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };
  const handleLowClick = () => {
    let newText1 = text.toLowerCase();
    setText(newText1);
  };
  const habdleOnchange = event => {
    console.log('habdleOnchange');
    setText(event.target.value);
  };
  return (
    <>
      <div className="container my-3">
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={habdleOnchange}
            id="myBox"
            rows="8"
          />
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>
          Convert to Uppercase
        </button>
        <button className="btn btn-primary" onClick={handleLowClick}>
          Convert to LowerCase
        </button>
      </div>
    </>
  );
}

export default TextForm;

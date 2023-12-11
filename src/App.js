import React, { useState, useRef, useEffect } from 'react';
import * as Slider from '@radix-ui/react-slider'

import IconOne from './images/icon-01.svg';
import IconTwo from './images/icon-02.svg';
import IconThree from './images/icon-03.svg';
import IconFour from './images/icon-04.svg';
import IconFive from './images/icon-05.svg';
import IconClose from './images/icon-05close.svg';
import logoRecode from './images/logo ReCode Sans-03.svg';
import Burger from './images/burger-05.svg';
import Anotace from './images/anotace-02.png';


function ImageButton({ src, alt, onClick, className }) {
  return (
    <button onClick={onClick}>
      <img src={src} alt={alt} className={className} style={{ width: '95px', height: '95px' }} />
    </button>
  );
}

const App = () => {
  const [weightValue, setWeightSliderValue] = useState([300]); //default weight slider value
  const [fontSizeValue, setFontSizeSliderValue] = useState([90]); //default font size slider value
  const [font, setFont] = useState('TerikFont'); //default font
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const [selectedButton, setSelectedButton] = useState(null);
  const sidebarRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setSidebarOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleWeightChange = (weightValue) => {
    setWeightSliderValue(weightValue);
    console.log(`Slider weightValue: ${weightValue}`)
  };

  const handleFontChange = (fontName, buttonName) => {
    setFont(fontName);
    setSelectedButton(buttonName);
    console.log(`Font: ${fontName}, ${buttonName}`);
  };
  const handleFontSizeChange = (fontSizeValue) => {
    setFontSizeSliderValue(fontSizeValue);
    console.log(`Slider fontSizeValue: ${fontSizeValue}`)
  }

  return (
    <div>
      <img src={logoRecode} style={{ position: 'absolute', top: -75, right: 20, width: '235px', height: '235px' }} alt='LogoRecode' className='logoright' onClick={() => setSidebarOpen(false)} />
      <div style={{ display: 'flex', justifyContent: 'space-between', position: 'absolute', top: 5, left: 5, width: '100%' }}>
        <img src={Burger} style={{ width: '75px', height: '75px', }} alt='burgermenu' onClick={() => setSidebarOpen(true)} />
        {sidebarOpen && (
          <div ref={sidebarRef} className={`sidebar ${sidebarOpen ? 'open' : ''}`}
            style={{
              display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-start',
              position: 'fixed', top: 0, left: 0, width: '400px', height: '100vh',
              overflowY: 'scroll'
            }}>
            {/* Sidebar content goes here */}


            <img src={Anotace} alt='anotace' style={{ width: '95%', height: 'auto', objectFit: 'contain', marginTop: '0.5%' }} />


          </div>
        )}
      </div>

      <div style={{ display: 'flex', position: 'absolute', top: 100, left: 100 }}>
        {/* Replace this with your slider component */}
        <div style={{ marginRight: '20px' }}>
          <Slider.Root className="SliderRoot" value={weightValue} onValueChange={handleWeightChange} max={599} step={1}>
            <Slider.Track className="SliderTrack">
              <Slider.Range className="SliderRange" />
            </Slider.Track>
            <Slider.Thumb className="SliderThumb" aria-label="Volume" />
          </Slider.Root>
          <p style={{ fontWeight: '100' }}>illegibility</p>
        </div>
        <div>
          <Slider.Root className="SliderRoot" value={fontSizeValue} onValueChange={handleFontSizeChange} min={20} max={200} step={1}>
            <Slider.Track className="SliderTrack">
              <Slider.Range className="SliderRange" />
            </Slider.Track>
            <Slider.Thumb className="SliderThumb" aria-label="Volume" />

          </Slider.Root>
          <p style={{ fontWeight: '100' }}>size</p>
        </div>
      </div>
      <div style={{ textAlign: 'center', marginTop: '195px' }}>
        {/* TextArea */}
        <textarea className='center' style={{
          fontSize: fontSizeValue[0], fontWeight: weightValue[0],
          fontFamily: font, width: '97%', height: '100%', resize: 'none', border: 'none', outline: 'none'
        }}>Write whatever you want</textarea>
      </div>
      <div style={{ position: 'absolute', bottom: 20, width: '100%', display: 'flex', justifyContent: 'space-evenly' }}>
        <ImageButton className={selectedButton === 'btn1' ? 'font-iconselected' : ''}
          src={IconOne} alt='V' onClick={() => handleFontChange('TerikFont', 'btn1')} />
        <ImageButton className={selectedButton === 'btn2' ? 'font-iconselected' : ''} src={IconTwo} alt='8' onClick={() => handleFontChange('TerikFont2', 'btn2')} />
        <ImageButton className={selectedButton === 'btn3' ? 'font-iconselected' : ''} src={IconThree} alt='A' onClick={() => handleFontChange('TerikFont3', 'btn3')} />
        <ImageButton className={selectedButton === 'btn4' ? 'font-iconselected' : ''} src={IconFour} alt='4' onClick={() => handleFontChange('TerikFont4', 'btn4')} />
        <ImageButton className={selectedButton === 'btn5' ? 'font-iconselected' : ''} src={IconFive} alt='5' onClick={() => handleFontChange('TerikFont5', 'btn5')} />
      </div>
    </div>

  );
}

export default App;
import React, { useState } from 'react';
import * as Slider from '@radix-ui/react-slider'
// import VImage from './images/V.png';
import OneImage from './images/1_icon_body-01.svg';
import EImage from './images/E.png';
// import AImage from './images/A.png';
import ThreeImage from './images/3_icon_zprehazene-02.svg';
import EightImage from './images/8.png';


function ImageButton({ src, alt, onClick }) {
  return (
    <button onClick={onClick} style={{ border: 'none', padding: 0, background: 'none', borderRadius: '50%', overflow: 'hidden' }}>
      <img src={src} alt={alt} style={{ width: '100px', height: '100px' }} />
    </button>
  );
}

const App = () => {
  const [weightValue, setWeightSliderValue] = useState([300]); //default weight slider value
  const [fontSizeValue, setFontSizeSliderValue] = useState([60]); //default font size slider value
  const [font, setFont] = useState('TerikFont'); //default font
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleWeightChange = (weightValue) => {
    setWeightSliderValue(weightValue);
    console.log(`Slider weightValue: ${weightValue}`)
  };

  const handleFontChange = (fontName) => {
    setFont(fontName);
    console.log(`Font: ${fontName}`);
  };
  const handleFontSizeChange = (fontSizeValue) => {
    setFontSizeSliderValue(fontSizeValue);
    console.log(`Slider fontSizeValue: ${fontSizeValue}`)
  }

  return (
    <div>
      <div>
        <ImageButton src={ThreeImage} style={{ position: 'absolute', top: 100, left: 100 }} onClick={() => setSidebarOpen(true)} />

        {sidebarOpen && (
          <div className={`sidebar ${sidebarOpen ? 'open' : ''}`}
            style={{ position: 'absolute', top: 0, left: 0, width: '400px', height: '100vh', background: 'lightgray' }}>
            {/* Sidebar content goes here */}
            <ImageButton src={ThreeImage} onClick={() => setSidebarOpen(false)} />
          </div>
        )}
      </div>
      <div style={{ display: 'flex', position: 'absolute', top: 200, left: 200 }}>
        {/* Replace this with your slider component */}
        <div style={{ marginRight: '20px' }}>
          <Slider.Root className="SliderRoot" value={weightValue} onValueChange={handleWeightChange} max={600} step={1}>
            <Slider.Track className="SliderTrack">
              <Slider.Range className="SliderRange" />
            </Slider.Track>
            <Slider.Thumb className="SliderThumb" aria-label="Volume" />
          </Slider.Root>
          <p>illegibility</p>
        </div>
        <div>
          <Slider.Root className="SliderRoot" value={fontSizeValue} onValueChange={handleFontSizeChange} min={50} max={80} step={1}>
            <Slider.Track className="SliderTrack">
              <Slider.Range className="SliderRange" />
            </Slider.Track>
            <Slider.Thumb className="SliderThumb" aria-label="Volume" />

          </Slider.Root>
          <p>size</p>
        </div>
      </div>
      <div style={{ textAlign: 'center', marginTop: '350px' }}>
        <textarea className='center' style={{
          fontSize: fontSizeValue[0], fontWeight: weightValue[0],
          fontFamily: font
        }}>Your text paragraph goes here</textarea>
      </div>
      <div style={{ position: 'absolute', bottom: 100, width: '100%', display: 'flex', justifyContent: 'space-evenly' }}>
        <ImageButton src={OneImage} alt='V' onClick={() => handleFontChange('TerikFont')} />
        <ImageButton src={EightImage} alt='8' onClick={() => handleFontChange('Monaco')} />
        <ImageButton src={ThreeImage} alt='A' onClick={() => handleFontChange('Source Code Pro')} />
        <ImageButton src={EImage} alt='A' onClick={() => handleFontChange('Source Code Pro')} />
      </div>
    </div>

  );
}

export default App;
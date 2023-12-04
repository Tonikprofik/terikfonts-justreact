import React, { useState } from 'react';
import * as Slider from '@radix-ui/react-slider'
import VImage from './images/V.png';
import EImage from './images/E.png';
import AImage from './images/A.png';
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
  const [fontSizeValue, setFontSizeSliderValue] = useState([4]); //default font size slider value
  const [font, setFont] = useState('TerikFont'); //default font

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
        <div style={{ display: 'flex', position: 'absolute', top: 40, left: 40 }}>
          {/* Replace this with your slider component */}
          <Slider.Root className="SliderRoot" value={weightValue} onValueChange={handleWeightChange} max={600} step={1}>
            <Slider.Track className="SliderTrack">
              <Slider.Range className="SliderRange" />
            </Slider.Track>
            <Slider.Thumb className="SliderThumb" aria-label="Volume" />
            <p>illegibility</p>
          </Slider.Root>

          <Slider.Root className="SliderRoot" value={fontSizeValue} onValueChange={handleFontSizeChange} min={50} max={80} step={1}>
            <Slider.Track className="SliderTrack">
              <Slider.Range className="SliderRange" />
            </Slider.Track>
            <Slider.Thumb className="SliderThumb" aria-label="Volume" />
          </Slider.Root>
        </div>
        <div style={{ textAlign: 'center', marginTop: '350px' }}>
          <textarea className='center' style={{
            fontSize: fontSizeValue[0], fontWeight: weightValue[0],
            fontFamily: font
          }}>Your text paragraph goes here</textarea>
        </div>
        <div style={{ position: 'absolute', bottom: 100, width: '100%', display: 'flex', justifyContent: 'space-evenly' }}>
          <ImageButton src={VImage} alt='V' onClick={() => handleFontChange('TerikFont')} />
          <ImageButton src={EightImage} alt='8' onClick={() => handleFontChange('Monaco')} />
          <ImageButton src={AImage} alt='A' onClick={() => handleFontChange('Source Code Pro')} />
          <ImageButton src={EImage} alt='A' onClick={() => handleFontChange('Source Code Pro')} />
        </div>
      </div>

  );
}

export default App;
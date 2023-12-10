import React, { useState } from 'react';
import * as Slider from '@radix-ui/react-slider'

import IconOne from './images/icon-01.svg';
import IconTwo from './images/icon-02.svg';
import IconThree from './images/icon-03.svg';
import IconFour from './images/icon-04.svg';
import IconFive from './images/icon-05.svg';
import IconClose from './images/icon-05close.svg';


function ImageButton({ src, alt, onClick }) {
  return (
    <button onClick={onClick} style={{ border: 'none', padding: 0, background: 'none', overflow: 'hidden' }}>
      <img src={src} alt={alt} style={{ width: '100px', height: '100px' }} />
    </button>
  );
}

const App = () => {
  const [weightValue, setWeightSliderValue] = useState([300]); //default weight slider value
  const [fontSizeValue, setFontSizeSliderValue] = useState([90]); //default font size slider value
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
        <ImageButton src={IconFour} style={{ position: 'absolute', top: 100, left: 100 }} onClick={() => setSidebarOpen(true)} />

        {sidebarOpen && (
          <div className={`sidebar ${sidebarOpen ? 'open' : ''}`}
            style={{
              display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-between',
              position: 'absolute', top: 0, left: 0, width: '400px', height: '100vh',
            }}>
            {/* Sidebar content goes here */}
            <ImageButton className="closesidebar" src={IconClose} onClick={() => setSidebarOpen(false)} />
            <div className='contentsidebar' style={{ overflowY:'scroll', margin: '10px', 
             flex: 1, display: 'flex', flexWrap: 'wrap', flexDirection: 'column', alignItems: 'center', justifyContent: "center", fontWeight: '100' }}>
              <p style={{fontWeight: '100'}}>Your text paragraph goes hereYour text paragraph goes hereYour text paragraph goes 
                hereYour text paragraph goes herYour text paragraph goes herYour text paragraph goes hereYour text paragraph goes hereYour text paragraph goes 
                hereYour text paragraph goes herYour text paragraph goes herYour text paragraph goes hereYour text paragraph goes hereYour text paragraph goes 
                hereYour text paragraph goes herYour text paragraph goes her</p>
              <p style={{marginTop: '15px'}}>Your text paragraph goes here</p>
            </div>
            <p style={{ alignSelf: 'center' }}>Footer</p>
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
          <p style={{fontWeight: '100'}}>illegibility</p>
        </div>
        <div>
          <Slider.Root className="SliderRoot" value={fontSizeValue} onValueChange={handleFontSizeChange} min={20} max={95} step={1}>
            <Slider.Track className="SliderTrack">
              <Slider.Range className="SliderRange" />
            </Slider.Track>
            <Slider.Thumb className="SliderThumb" aria-label="Volume" />

          </Slider.Root>
          <p style={{fontWeight: '100'}}>size</p>
        </div>
      </div>
      <div style={{ textAlign: 'center', marginTop: '120px' }}>
        {/* TextArea */}
        <textarea className='center' style={{
          fontSize: fontSizeValue[0], fontWeight: weightValue[0],
          fontFamily: font, marginLeft: '100px', marginRight: '100px', width: '100%', height: '400px'
        }}>Your text paragraph goes here</textarea>
      </div>
      <div style={{ position: 'absolute', bottom: 20, width: '100%', display: 'flex', justifyContent: 'space-evenly' }}>
        <ImageButton src={IconOne} alt='V' onClick={() => handleFontChange('TerikFont')} />
        <ImageButton src={IconTwo} alt='8' onClick={() => handleFontChange('TerikFont2')} />
        <ImageButton src={IconThree} alt='A' onClick={() => handleFontChange('TerikFont3')} />
        <ImageButton src={IconFour} alt='4' onClick={() => handleFontChange('TerikFont4')} />
        <ImageButton src={IconFive} alt='5' onClick={() => handleFontChange('TerikFont5')} />
      </div>
    </div>

  );
}

export default App;
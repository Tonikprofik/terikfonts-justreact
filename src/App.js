import React, { useState } from 'react';
import * as Slider from '@radix-ui/react-slider'
// import './index.css';


const App = () => {
  const [weightValue, setWeightSliderValue] = useState([300]); //default slider value
  const [font, setFont] = useState('TerikFont'); //default font

  const handleChange = (weightValue) => {
    setWeightSliderValue(weightValue);
    console.log(`Slider weightValue: ${weightValue}`)
  };

  const handleFontChange = (fontName) => {
    setFont(fontName);
    console.log(`Font: ${fontName}`);
  };

  return (
    <div>
      <div style={{ position: 'absolute', top: 20, left: 40 }}>
        {/* Replace this with your slider component */}
        <Slider.Root className="SliderRoot" value={weightValue} onValueChange={handleChange} max={600} step={1}>
          <Slider.Track className="SliderTrack">
            <Slider.Range className="SliderRange" />
          </Slider.Track>
          <Slider.Thumb className="SliderThumb" aria-label="Volume" />
        </Slider.Root>
        <p>Slider goes here</p>
      </div>
      <div style={{ textAlign: 'center', marginTop: '250px'}}>
        <p className='center' style={{fontSize: '1.5rem', fontWeight: weightValue[0], 
            fontFamily: font
          }}>Your text paragraph goes here</p>
      </div>
      <div style={{ position: 'absolute', bottom: 100, width: '100%', display: 'flex', justifyContent: 'space-evenly' }}>
        <button onClick={() => handleFontChange('TerikFont')}>Button 1</button>
        <button onClick={() => {
          handleFontChange('Monaco')
          console.log(`Font: ${font}`)
          }}>Button 2</button>
        <button onClick={() => handleFontChange('Source Code Pro')}>Button 3</button>
      </div>
    </div>
  );
}

export default App;
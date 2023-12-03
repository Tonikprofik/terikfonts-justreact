import React, { useState } from 'react';
import * as Slider from '@radix-ui/react-slider'


const App = () => {
  const [value, setValue] = useState([300]);
  const handleChange = (event) => {
    setValue(value);
    console.log(`Slider value: ${value}`)
  };

  return (
    <div>
      <div style={{ position: 'absolute', top: 0, left: 0 }}>
        {/* Replace this with your slider component */}
        <Slider.Root className="SliderRoot" value={value} onValueChange={handleChange} max={100} step={1}>
          <Slider.Track className="SliderTrack">
            <Slider.Range className="SliderRange" />
          </Slider.Track>
          <Slider.Thumb className="SliderThumb" aria-label="Volume" />
        </Slider.Root>
        <p>Slider goes here</p>
      </div>
      <div style={{ textAlign: 'center', marginTop: '150px' }}>
        <p>Your text paragraph goes here</p>
      </div>
      <div style={{ position: 'absolute', bottom: 100, width: '100%', display: 'flex', justifyContent: 'space-evenly' }}>
        <button>Button 1</button>
        <button>Button 2</button>
        <button>Button 3</button>
      </div>
    </div>
  );
}

export default App;
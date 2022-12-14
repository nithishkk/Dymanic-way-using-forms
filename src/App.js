import React, { useState } from 'react';
import './style.css';

function App() {
  const [inputFields, setInputFields] = useState([{ name: '', age: '' }]);

  const handleFormChange = (index,event) => {
    const data={...inputFields}
    data[index][event.target.name] = event.target.value;
    setInputFields(data)

  };    
  return (
    <div className="App">
      <form>
        {inputFields.map((input, index) => {
          return (
            <div key={index}>
              <input
                type="text"
                placeholder="name"
                value={input.name}
                onChange={(event) => handleFormChange(index, event)}
              />
              <input
                type="age"
                placeholder="age"
                value={input.age}
                onChange={(event) => handleFormChange(index, event)}
              />
            </div>
          );
        })}
      </form>
    </div>
  );
}

export default App;

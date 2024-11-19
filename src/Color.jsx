import React, { useState } from 'react'


function Color() {

    const [bgColor, setBgColor] = useState('');

    const handleColorChange = (color) => {
      setBgColor(color);
    }


  return (
    <div className='d-flex flex-column align-items-center justify-content-center w-100 p-5' style={{ backgroundColor: bgColor, height: '100vh' }}>
        <button onClick={() => handleColorChange('red')} className='btn btn-outline-danger fw-bold fs-5 w-25 m-4 p-3'>RED</button>
        <button onClick={() => handleColorChange('green')} className='btn btn-outline-success fw-bold fs-5 w-25 m-4 p-3'>GREEN</button>
        <button onClick={() => handleColorChange('yellow')} className='btn btn-outline-warning fw-bold fs-5  w-25 m-4 p-3'>YELLOW</button>
        <button onClick={() => handleColorChange('blue')} className='btn btn-outline-primary fw-bold fs-5 w-25 m-4 p-3'>BLUE</button>
      
    </div>
  )
}

export default Color

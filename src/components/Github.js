import React from 'react'

export default function Github() {
    const handleClick = () => {
        window.open('https://github.com/ichandrasharma', '_blank');
      };

  return (
    <div className='container'>
      <button className="btn btn-primary mx-2" onClick={handleClick} style={{ backgroundColor: 'green', color: 'white' }}>github.com/ichandrasharma</button>
    </div>
  )
}

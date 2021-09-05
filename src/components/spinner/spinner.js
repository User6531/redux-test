import React from 'react';
const style = {
    color: 'red',
    fontSize: '55px',
    margin: '200px auto',
    display: 'block',
    textAlign: 'center',
    width: '1000px',
}
const Spinner = () => {
    return <div style={style} className="spinner">Loading...</div>
}

export default Spinner;
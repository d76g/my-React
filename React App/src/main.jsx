import React from 'react';
import ReactDOM  from 'react-dom/client';
import './index.css'
import MemeGenerator from './App';
function App(){

    return (
        <div className='container'>
            <MemeGenerator/>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>
    )   
import React, {useState, useEffect} from 'react';
import {info} from './data.js';
import './App.css';

const App = () => {

  const [data, setData] = useState(info);


  //********************************************************************
//          Single component
// *******************************************************************


const Single = ({id, title, info}) => {

  const [open, setOpen] = useState(true);

  return (
    <div className={open ? 'singleWrapClosed' : 'singleWrap'}>

      <div className="title-span-wrap flex-center">
      <h3>{title}</h3>
      <span className='flex-center' onClick={()=> setOpen(!open)}>{open ? '+' : '-'}</span>
      </div>

      <p>{info}</p>


      {/* end of singleWrap */}
    </div>
  )

  // end of single comp
}


  //********************************************************************
//          HTML
// *******************************************************************

  return (
    <div className='wrapper'>


      <div className="box">
        
        <div className="heading">
          Questions And Answers About Login
        </div>


        <div className="faq-holder">
            {data.map((value,index)=> {
             
              return (
                <Single key={index} {...value}/>
              )
            })}
        </div>




        {/* end of box */}
      </div>
      


      {/* end of wrapper */}
    </div>
  )
}

export default App

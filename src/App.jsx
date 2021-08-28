import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/App.css';


const sonidos=[
  {
    tecla:'Q',
    sonido:'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3'
  },
  {
    tecla:'W',
    sonido:'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3'
  },
  {
    tecla:'E',
    sonido:'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3'
  },
  {
    tecla:'A',
    sonido:'https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3'
  },
  {
    tecla:'S',
    sonido:'https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3'
  },
  {
    tecla:'D',
    sonido:'https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3'
  },
  {
    tecla:'Z',
    sonido: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3'
  },
  {
    tecla:'X',
    sonido:'https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3'
  },
  {
    tecla:'C',
    sonido:'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3'
  }
]







const App = (props) => (
  <div id="display" className="display">
    <h1>Presiona una tecla</h1>
    {sonidos.map((sonido,index) =>( <DrumPad caja={sonido.tecla} key={index} audio={sonido.sonido} />
  ))}
  </div>
  );

  
     
      
   



class DrumPad extends React.Component {
 
  constructor(props){
    super(props);
    this.audio= React.createRef();
    
      }
  componentDidMount(){
    this.audio.current.addEventListener('ended',(e)=>{
      const padre =e.target.parentNode;
      padre.classList.remove('active');
    });
}
tocar=()=>{
  console.log(this.audio.current)
  this.audio.current.play();
  const teclaId=this.audio.current.id;
  
  const padre =this.audio.current.parentNode;
      padre.classList.add('active');
 const display=padre.parentNode;
  display.querySelector('h1').innerText=`${teclaId} esta sonando`;
}
  


  render(){
 
    const {caja,audio}=this.props;
  return (
    <div className="drum-pad" onClick={this.tocar}  id={`drum-${caja}`}>
      {caja}
      <audio ref={this.audio} src={audio} className="clip" id={caja} /> 
    </div>
  )
}
    }

document.addEventListener('keydown', (e) => {
  let id = e.key.toUpperCase();
  
let audio=document.getElementById(id);


  if (audio){
   
    const padre=audio.parentNode;
    padre.classList.add('active');
     const display=padre.parentNode;
  display.querySelector('h1').innerText=`${id} esta sonando`;
    audio.play();

  }
  });


      



import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/App.css';

const iniState=
  `
  estos es un parrafo
  
  **esto es un texto con negrita**
  >blockquote
  # heading
  ## heading 2
  - list a 
  
  - list b 
  
  - list c 
  
  [my website](https://google.com)
  
  this is a inline \`<div></div>\`
  
  this is a block of code
  \`\`\`
  let n1=5;
  let n2=10;
  let res=n1+n2;
   \`\`\`
   ![me](https://avatars.githubusercontent.com/u/86790583?v=4)
   `;


class MarkDown extends React.Component {
  state={
    text:iniState
  }
  handleChange=(e)=>{
    this.setState({
      text:e.target.value
    })
  }
  render(){
    const {text}=this.state;
    const markdown=marked(text, {breaks:true});
    return (
    <div>
        <h1 className="text-center m-4">MarkDown</h1>
        <div className="row">
          <div className="col-6">
            <h3>Texto:</h3>
            <textarea id="editor" className="form-control" value={text} onChange={this.handleChange} />
          </div>
          
          <div className="col-6 " >
             <h3>Resultado:</h3>
            <div className="previewer" dangerouslySetInnerHTML={{__html: markdown}} id="preview">
            
          </div>
        </div>
        </div> 
         </div>
      
        
    
    )
    
  }
}






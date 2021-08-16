import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/App.css';


const arreglo = 'https://gist.githubusercontent.com/gejocad/f4914ce6eb4412909e6ebf8e61d6729f/raw/9cee3f9e72a911f3e69d58713821d349f343491b/frases.json';

class Frases extends Component {
  state = {
    frases: [
      {
        frase: "",
        autor: ""
      }
    ],
    cuenta: 0
  }

  componentDidMount() {
      
    fetch(arreglo).then(res => res.json())
      .then(res => {
        this.setState({
          frases: res.frases
        }, this.activador);
    });
  }

  activador = () => {
    const { frases } = this.state;
    
    if(frases.length > 0) {
      const cuenta = Math.floor(Math.random() * frases.length);
      this.setState({
        cuenta
      })
    }
  }

  render() {
    const { frases, cuenta } = this.state;
    
    const frase = frases[cuenta];
    
    const tweetURL = `https://twitter.com/intent/tweet?text=${frase.frase} - ${frase.autor}`;
    
    return (
      <div className="contenedor">
        <div className="col-5 marco" id="quote-box">
          {
            frase && (
              <div className="mb-4">
                <h5 id="text" class="text-large">
                  <i className="fas fa-2"></i>
                  {frase.frase}
                </h5>
                <cite className="d-block text-right" id="author">
                  - {frase.autor}
                </cite>
              </div>
              )
            }
          <div className="d-flex justify-content-between">
            <a className="btn btn-primary"
              target="blank" href={tweetURL} id="tweet-quote">
              <i className="fab fa-twitter"></i> Tweetear
            </a>
            
            <button className="btn btn-success" 
              onClick={this.activador} id="new-quote">
              <i className="fas fa-random"></i> Siguiente
            </button>
          </div>
        </div>
      </div>
    )
  }
}


export default Frases;
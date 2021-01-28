
import './App.css';
import React, { Component } from 'react';
/* import { render } from 'react-dom'; */

class App extends Component{
    constructor(props){
        super(props)

        this.state = {
            marca:'Ford',
            modelo:'Mustang',
            color:'vermelho',
            ano: 1964
            };
    }
    MudaCor =()=>{
        this.setState({color:"blue"});
    }

    render(){
        return(
            <div>
                <h1>Este é meu {this.state.marca}</h1>
                <p>Ele possui a cor {this.state.color}</p>
                <p>O seu modelo é "{this.state.modelo}" {this.state.ano}</p>

            <button onClick={this.MudaCor}>Mudar cor</button>
                
            </div>
        )
    }
}
export default App;

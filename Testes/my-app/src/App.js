
import './App.css';
import React, { Component } from 'react';
/* import { render } from 'react-dom'; */

class MeuBotao extends Component {
    render() {
        return (
            <button 
            onClick={()=>{this.props.click(this.props.label);}}>
            {this.props.label}
            </button>
        )
    }
}

class MyLabel extends Component {
    render() {
        console.log(this.props);
        return (
            <p>{this.props.texto}</p>
        )
    }
}

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            labeltext: '',

        };
    }
    setLabelText =(labeltext) =>{
        this.setState({labeltext});
    }


    render() {
        console.log(this.state)
        return (
            <div>
                <MyLabel texto={this.state.labeltext} />
                <p>Clique no: </p>

                <MeuBotao click={this.setLabelText} label="Botao 1" />
                <MeuBotao click={this.setLabelText} label="Botao 2" />
                <MeuBotao click={this.setLabelText} label="Botao 3" />
                <MeuBotao click={this.setLabelText} label="Botao 4" />
            </div>
        )
    }

}

/* Class App extends Component{
    constructor(props){

    }

    render(){
        return (
            <div>
                <MyLabel texto="Escrevendo pelo App" outro="1" />
                <p>Olá ,Mundão de Deus</p>

                <MeuBotao label="Botao 1" />
                <MeuBotao label="Botao 2" />
                <MeuBotao label="Botao 3" />
                <MeuBotao label="Botao 4" />
            </div>
        );
    }
} */

export default App;

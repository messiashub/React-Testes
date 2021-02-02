import { Component } from "react";
import './Contador.css'

class Contador extends Component {

    constructor(props) {
        super(props)
        this.state = {
            passo: props.passo || 1,
            valor: this.props.valor || 0,
        }
    }
    menos = () => {
        this.setState({
            valor: this.state.valor - this.state.passo
        })

    }
    mais = () => {
        this.setState({
            valor: this.state.valor + this.state.passo
        })

    }
    render() {
        return (
            <div className="contador">
                <h2>Contador</h2>
                <div>
                    <label for="passoInput">Passo: </label>

                    <input id="passoInput" type="number" 
                        value={this.state.passo}
                        onChange={e => this.setState({ passo: +e.target.value })}></input>
                </div>

                <h4>Valor: {this.state.valor}</h4>

                <div>
                    <button onClick={this.menos}>-</button>
                    <button onClick={this.mais}>+</button>
                </div>
            </div>
        )
    }

}
export default Contador
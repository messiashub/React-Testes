import React from 'react'
import './App.css'
import Primeiro from './components/basico/Primeiro'
import CompFilhos from './components/basico/CompFilhos'
import ComParametros from './components/basico/ComParametros'
import Card from './layout/Card'
import Repeticao from './components/basico/Repeticao'
import Condicional from './components/basico/Condicional'
import CondicionalComIf from './components/basico/CondicionalComIf'
import Pai from './components/comunicacao/direta/Pai'

function App(props) {
    return (
        <div className="App">

            <Card titulo = "#07 - Comunicação Direta" color="#d9a324">
                <Pai></Pai>
                
            </Card>
            <Card titulo = "#06 - Condicional V2" color="#d9a384">
                <CondicionalComIf numero={7} />
            </Card>
            <Card titulo = "#05 - Condicional V1"color="#E94C6F">
                <Condicional numero={6} />
            </Card>
            <Card titulo = "#04 - Repetição" color=" #28ABE3">
                <Repeticao />
            </Card>

            <Card titulo="#03 - Componente Com Filhos" color="#F38630">
                <CompFilhos>
                    <ul>
                        <li>Ana</li>
                        <li>Silvania</li>
                        <li>Maria</li>
                        <li>Mônica</li>
                    </ul>
                </CompFilhos>
            </Card>
            <Card titulo="#02 - Componente com parametro" color="#8C4646">  
                <ComParametros titulo="Esse é o titulo"
                              subtitulo='Esse é o subtitulo'/>  
            </Card>
            <Card titulo='#01 - Primeiro Componente Footer' color="#1FDA9A">
                <Primeiro />
            </Card>

        </div>
    );
}

export default App
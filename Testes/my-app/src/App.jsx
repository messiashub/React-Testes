import React from 'react'
import './App.css'
import Primeiro from './components/Primeiro'
import CompFilhos from './components/CompFilhos'
import ComParametros from './components/ComParametros'
import Card from './layout/Card'
import Repeticao from './components/Repeticao'
import Condicional from './components/Condicional'
import CondicionalComIf from './components/CondicionalComIf'

function App(props) {
    return (
        <div className="App">
            <Card titulo = "#06 - Condicional V2">
                <CondicionalComIf numero={7} />
            </Card>
            <Card titulo = "#05 - Condicional V1">
                <Condicional numero={6} />
            </Card>
            <Card titulo = "#04 - Repetição">
                <Repeticao />
            </Card>

            <Card titulo="#03 - Componente Com Filhos">
                <CompFilhos>
                    <ul>
                        <li>Ana</li>
                        <li>Silvania</li>
                        <li>Maria</li>
                        <li>Mônica</li>
                    </ul>
                </CompFilhos>
            </Card>


            <Card titulo="#02 - Componente com parametro">  
                <ComParametros titulo="Esse é o titulo"
                              subtitulo='Esse é o subtitulo'/>  
            </Card>
            <Card titulo='#01 - Primeiro Componente Footer'>
                <Primeiro />
            </Card>

                

            





            {/*  <CompFilhos>
            <ul>
                <li>Ana</li>
                <li>Silvania</li>
                <li>Maria</li>
                <li>Mônica</li>
            </ul>
            </CompFilhos> */}
            {/* 
            <ComParametros titulo ="Esse é o título"
                        subtitulo = "Esse é o subtitulo"/>
            <ComParametros titulo ="Esse é outro"
                        subtitulo = "Esse é mais um outro"/> */}
        </div>

    );
}

export default App
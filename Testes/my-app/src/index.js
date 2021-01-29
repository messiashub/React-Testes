import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import  Primeiro from'./components/Primeiro'
/*import ComParametros from './components/ComParametros' */
/*import CompFilhos from './components/CompFilhos' */
import Card from './layout/Card'

ReactDOM.render(
    <div>
        <Card titulo= 'Primeiro Componente'>
            <Primeiro />
        </Card>
        <Card titulo= 'Exercicio X'>
            Conteudo
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
    </div>,
    
    
    document.getElementById('root')
)

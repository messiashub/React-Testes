import React from 'react'
import produtos from '../data/produtos'

function getProdutosListItem(){
    return (
        produtos.map((produto,index) => {
            return <li key={index}>{produto.id} - {produto.nome} - R${produto.preco}</li>

        })
    )
}

function Repeticao(props){
    return(
        <div>
            <h2>Repetição</h2>
            <ul>
                {getProdutosListItem()}
            </ul>
        </div>
    )

}





export default Repeticao

import Produtos from '../../data/Produtos'

function getProdutosListItem(){
    return (
        Produtos.map((produto,index) => {
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
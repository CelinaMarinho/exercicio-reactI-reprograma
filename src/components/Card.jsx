import flowers from "../data/database-homework"


const Card = () => {
    return(
        <>
            {flowers.map(item => 
                <div key={item.id}>
                    <h2>{item.nome}</h2>
                    <p>{item.familia}</p>
                    <img src={flowers.imagem} alt={flowers.nome}/>
                
                </div>
            )}
        </>
    )
}

export default Card
import {useParams} from 'react-router-dom'
export default  function Home({prod}){
    const {productoId} = useParams()
    return(
        <>
        <h1>About</h1>
        <h3>su producto es {prod} este es un ejemplo de pagina de About</h3>
         {productoId}
        </>
    )

}
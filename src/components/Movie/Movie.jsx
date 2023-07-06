export default  function Movie(){

    return(
        <>
        <h1>Registro</h1>
        <form >
        <p>Nombre
        <input type="text" name="name"></input>
        </p>
        <p>Apellido
        <input type="text" name="surname"></input>
        </p>
        <p>E-mail:
        <input type="text" name="email"></input>
        </p>
        <p>
        <button type="submit">Registrar</button>
        </p>
        </form>
        </>
    )

}
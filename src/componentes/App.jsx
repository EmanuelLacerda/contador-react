import React, { useState } from 'react'

function App(props){
	const [valor, setValor] = useState(0)
	const [passo, setPasso] = useState(1)

	function incrementar(){
		console.log(typeof passo)
		var novoValor = valor+passo
		setValor(novoValor)
	}

	function decrementar(){
		setValor(valor-passo)
	}


  return(
  <>
	<label htmlFor="alterarpasso">Passo:</label>
	<input type="number" name="alterarpasso" value={passo} onChange={function onChange(evento){
			setPasso(
				parseInt(evento.target.value)
			)
		}
	}>
	</input>

  	<span>{valor}</span>

  	<button onClick={incrementar}>+</button>

  	<button onClick={decrementar}>-</button>
  </>	
  )
}

export default App
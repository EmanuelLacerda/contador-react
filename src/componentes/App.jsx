import botaoIncrementarEstadoNormal from '../assets/botao-incrementar-normal.svg'
import botaoIncrementarEstadoHover from '../assets/botao-incrementar-hover.svg'

import botaoDecrementarEstadoNormal from '../assets/botao-decrementar-normal.svg'
import botaoDecrementarEstadoHover from '../assets/botao-decrementar-hover.svg'

import botaoAlterarEstadoNormal from '../assets/botao-alterar-normal.svg'
import botaoAlterarEstadoDesativo from '../assets/botao-alterar-desativo.svg'
import botaoAlterarEstadoHover from '../assets/botao-alterar-hover.svg'

import React, { useState } from 'react'

function App(props){
	const [imagemBotaoIncrementar, setImagemBotaoIncrementar] = useState(botaoIncrementarEstadoNormal)

	const [imagemBotaoDecrementar, setImagemBotaoDecrementar] = useState(botaoDecrementarEstadoNormal)

	const [imagemBotaoAlterar, setImagemBotaoAlterar] = useState(botaoAlterarEstadoDesativo)
	const [estadoBotaoAlterar, setEstadoBotaoAlterar] = useState('desativo')


	const [valor, setValor] = useState(0)
	const [passo, setPasso] = useState(1)
	const [novoValor, setNovoValor] = useState("")

	function incrementar(){
		console.log(typeof passo)
		var novoValor = valor+passo
		setValor(novoValor)
	}

	function decrementar(){
		setValor(valor-passo)
	}

	function alterarValor(){
		setValor(novoValor)
	}


  return(
  <main id="App">
  	<div id="display-digito">
  		<span>{valor}</span>
  	</div>

  	<div id="contador">
  		<div id="alterar-passo">
			<label htmlFor="alterarpasso">Passo</label>
			<br></br>
			<input type="number" name="alterarpasso" value={passo} onChange={function onChange(evento){
					setPasso(
						parseInt(evento.target.value)
					)
				}
			}>
			</input>
  		</div>
  		<div id="botoes">
  			<img src={imagemBotaoIncrementar} onClick={incrementar} onMouseOut={function onMouseOut(){
  					setImagemBotaoIncrementar(
  						botaoIncrementarEstadoNormal
  					)
  				}
  			} onMouseOver={function onMouseOver(){
  					setImagemBotaoIncrementar(
  						botaoIncrementarEstadoHover
  					)
  				}
  			}>

  			</img>

  			<img src={imagemBotaoDecrementar} onClick={decrementar} onMouseOut={function onMouseOut(){
  					setImagemBotaoDecrementar(
  						botaoDecrementarEstadoNormal
  					)
  				}
  			} onMouseOver={function onMouseOver(){
  					setImagemBotaoDecrementar(
  						botaoDecrementarEstadoHover
  					)
  				}
  			}>

  			</img>
  		</div>
  	</div>

  	<div id="alterar-valor">
  		<div id="input-label">
			<label htmlFor="alterarvalor">Novo valor</label>
			<br></br>
			<input type="number" name="alterarvalor" value={novoValor} onChange={function onChange(evento){
					setNovoValor(
						parseInt(evento.target.value) || ""
					)

					console.log(novoValor)

					if(evento.target.value === ""){
						setEstadoBotaoAlterar('desativo')
						setImagemBotaoAlterar(
		  					botaoAlterarEstadoDesativo
		  				)
					} else{
						setNovoValor(
							parseInt(evento.target.value)
						)

						setEstadoBotaoAlterar('ativo')
						setImagemBotaoAlterar(
		  					botaoAlterarEstadoNormal
		  				)
					}
				}
			}>
			</input>
  		</div>
  		<div id="botao">
  			<img src={imagemBotaoAlterar} onClick={alterarValor} onMouseOut={function onMouseOut(){
	  				if (estadoBotaoAlterar === 'ativo'){
		  					setImagemBotaoAlterar(
		  						botaoAlterarEstadoNormal
		  					)
		  			}
  				}
  			} onMouseOver={function onMouseOver(){
  					if (estadoBotaoAlterar === 'ativo'){
		  					setImagemBotaoAlterar(
		  						botaoAlterarEstadoHover
		  					)
		  			}
  				}
  			}>

  			</img>
  		</div>
  	</div>
  </main>	
  )
}

export default App
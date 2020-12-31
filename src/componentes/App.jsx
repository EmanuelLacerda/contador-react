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

	function onBlurInputDoContador(){
		if (passo === ""){
			setPasso(1)
		}
	}

	function incrementar(){
		var novoValor = valor+passo
		setValor(novoValor)
	}

	function onMouseOutBotaoIncrementar(){
		setImagemBotaoIncrementar( botaoIncrementarEstadoNormal )
	}

	function onMouseOverBotaoIncrementar(){
		setImagemBotaoIncrementar( botaoIncrementarEstadoHover )
	}

	function decrementar(){
		setValor(valor-passo)
	}

	function onMouseOutBotaoDecrementar(){
		setImagemBotaoDecrementar( botaoDecrementarEstadoNormal )
	}

	function onMouseOverBotaoDecrementar(){
		setImagemBotaoDecrementar( botaoDecrementarEstadoHover )
	}

	function alterarValor(){
		setValor(novoValor)
	}

	function onChangeInputAlterarValor(evento){
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

	function onMouseOutBotaoAlterar(){
		if (estadoBotaoAlterar === 'ativo'){
			setImagemBotaoAlterar( botaoAlterarEstadoNormal )
		}

	}

	function onMouseOverBotaoAlterar(){
		if (estadoBotaoAlterar === 'ativo'){
			setImagemBotaoAlterar( botaoAlterarEstadoHover )
		}

	}


  return(
  <main id="App">
  	<div id="display-digito">
  		<span>{valor}</span>
  	</div>

  	<div id="contador">
  		<div className="input-label">
			<label htmlFor="alterarpasso">Passo</label>
			<br></br>
			<input type="number" name="alterarpasso" value={passo} onChange={function onChange(evento){
					setPasso( parseInt(evento.target.value) || "" )
				}
			} onBlur={
				onBlurInputDoContador
			}>
			</input>
  		</div>
  		<div className="botoes">
  			<img src={imagemBotaoIncrementar} onClick={ incrementar } onMouseOut={ onMouseOutBotaoIncrementar } onMouseOver={ onMouseOverBotaoIncrementar }>
  			</img>

  			<img src={imagemBotaoDecrementar} onClick={decrementar} onMouseOut={ onMouseOutBotaoDecrementar } onMouseOver={ onMouseOverBotaoDecrementar }>
  			</img>
  		</div>
  	</div>

  	<div id="alterar-valor">
  		<div className="input-label">
			<label htmlFor="alterarvalor">Novo valor</label>
			<br></br>
			<input type="number" name="alterarvalor" value={novoValor} onChange={
				function onChange(evento){
					onChangeInputAlterarValor(evento)
				}
			}>
			</input>
  		</div>

  		<div className="botoes">

  			<img src={imagemBotaoAlterar} onClick={alterarValor} onMouseOut={ onMouseOutBotaoAlterar } onMouseOver={ onMouseOverBotaoAlterar }>
  			</img>

  		</div>
  	</div>
  </main>	
  )
}

export default App
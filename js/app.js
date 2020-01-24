let calc = {
    operador: "",
	flag: "no",
	cadena: "",

	init: function(){
		this.eventos('teclado')
	},

	eventos: function(selector){
		var teclas = document.querySelectorAll('.' + selector + ' img')
		for(i=0;i<teclas.length;i++){
			teclas[i].onclick = this.teclaCheck
			teclas[i].onmouseleave = this.teclaUnckeck
		}
    },
    
    teclaUnckeck: function(event){
		teclaAumento(event.target)
	},

	teclaCheck: function(event){
		if(event.target.id == "1" || event.target.id == "2" || event.target.id == "3"
			|| event.target.id == "4" || event.target.id == "5" || event.target.id == "6"
			|| event.target.id == "7" || event.target.id == "8" || event.target.id == "9"
			|| event.target.id == "0") {
			mostrarNumero(event.target.id)
		}

        if(event.target.id == "mas"){
			suma()
		}

		if(event.target.id == "menos"){
			resta()
		}

		if(event.target.id == "por"){
			multiplicacion()
		}

		if(event.target.id == "on"){
			limpiarPantalla()
		}

		if(event.target.id == "punto"){
			nuevoPunto()
		}

		if(event.target.id == "sign"){
			nuevoSigno()
		}
		
		if(event.target.id == "dividido"){
			division()
		}

		if(event.target.id == "igual"){
			mostrar()
		}

		teclaDisminuir(event.target)

	}

}

function suma(){
	if(calc.cadena == 'XXX'){
		calc.cadena = ""
		calc.flag = "no"
	}
	if(calc.flag == "no"){
		calc.cadena = document.getElementById('display').innerHTML
		calc.flag = "+"
	} else {
		calc.cadena = calc.cadena + calc.flag + document.getElementById('display').innerHTML
		calc.flag = "+"
	}
	document.getElementById('display').innerHTML = ""
}

function resta(){
	if(calc.cadena == 'XXX'){
		calc.cadena = ""
		calc.flag = "no"
	}
	if(calc.flag == "no"){
		calc.cadena = document.getElementById('display').innerHTML
		calc.flag = "-"
	} else {
		calc.cadena = calc.cadena + calc.flag + document.getElementById('display').innerHTML
		calc.flag = "-"
	}
	document.getElementById('display').innerHTML = ""
}

function multiplicacion(){
	if(calc.cadena == 'XXX'){
		calc.cadena = ""
		calc.flag = "no"
	}
	if(calc.flag == "no"){
		calc.cadena = document.getElementById('display').innerHTML
		calc.flag = "*"
	} else {
		calc.cadena = calc.cadena + calc.flag + document.getElementById('display').innerHTML
		calc.flag = "*"
	}
	document.getElementById('display').innerHTML = ""
}

function division(){
	if(calc.cadena == 'XXX'){
		calc.cadena = ""
		calc.flag = "no"
	}
	if(calc.flag == "no"){
		calc.cadena = document.getElementById('display').innerHTML
		calc.flag = "/"
	} else {
		calc.cadena = calc.cadena + calc.flag + document.getElementById('display').innerHTML
		calc.flag = "/"
	}
	document.getElementById('display').innerHTML = ""
}

function mostrar(){
	if(calc.cadena == ""){
		document.getElementById('display').innerHTML = "0"
	} else if(calc.cadena == 'XXX'){
			calc.cadena = document.getElementById('display').innerHTML + calc.operador
			document.getElementById('display').innerHTML = actualizar()
			calc.cadena = 'XXX'
	} else {
				calc.cadena = calc.cadena + calc.flag + document.getElementById('display').innerHTML
				calc.operador = calc.flag + document.getElementById('display').innerHTML
				document.getElementById('display').innerHTML = actualizar()
				calc.cadena = 'XXX'
	}
}

function actualizar(){
	resultado = 0
	resultado = eval(calc.cadena)
	return resultado.toPrecision(4)
}

function nuevoSigno(){
	var pantalla = document.getElementById('display')
	if(pantalla.innerHTML[0] = "-"){
		pantalla.innerHTML[0] = ""
	}
	if(pantalla.innerHTML.length<7 && pantalla.innerHTML != "0"){
		pantalla.innerHTML = "-" + pantalla.innerHTML
	}
}

function nuevoPunto(){
	var existe = "1"
	var pantalla = document.getElementById('display')
	for(i=0;i<pantalla.innerHTML.length;i++){
		if (pantalla.innerHTML[i] == "."){
			existe = "0"
		}
	}
	if(existe == "1" && pantalla.innerHTML.length < 6){
		pantalla.innerHTML = pantalla.innerHTML + "."
	}
}

function limpiarPantalla(){
	var pantalla = document.getElementById('display')
	pantalla.innerHTML = "0"
	calc.cadena = ""
	calc.flag = "no"
}

function mostrarNumero(numero){
	var pantalla = document.getElementById('display')
	if (pantalla.innerHTML.length < 8){
		if(pantalla.innerHTML == "0" && numero != "0"){
			pantalla.innerHTML = numero
		} else if(pantalla.innerHTML != "0"){
			pantalla.innerHTML = pantalla.innerHTML + numero
		}
	}
}

function teclaAumento(elementoDOM){
	elementoDOM.style.padding = "0px"
}

function teclaDisminuir(elementoDOM){
	elementoDOM.style.padding = "1px"
}

calc.init()

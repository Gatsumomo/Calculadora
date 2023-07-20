/*document.addEventListener('DOMContentLoaded', () => {
    const numeros = [1,2,3,4,5,6,7,8,9,0]
    const clickables = document.querySelectorAll('.clickable')
    const eventos = []
    acumulador = ''

    clickables.forEach((clickable) => {
        clickable.addEventListener('click', (event) => {
            event.preventDefault();
            const numeros = [1,2,3,4,5,6,7,8,9,0]
            const operadores = ['+','-','x','/']
            const eventos = []

            if(operadores.includes(event.target.innerText)){
                eventos.push(acumulador)
                acumulador = ''
                eventos.push(event.target.innerText)
                
                clickables.forEach((clickable) => {
                    event.preventDefault()
                    clickable.addEventListener('click', (event) => {
                        if(operadores.includes(event.target.innerText)){
                            eventos.push(acumulador)
                            acumulador = ''
                            eventos.push(event.target.innerText)

                            //show result
                            if(event.target.innerText === '='){
                                document.querySelector('.display').innerText = eval(eventos.join(''))
                            }
                        }
                    })
                })
            }

            acumulador += event.target.innerText
            console.log(eventos)
        })
    })
})

document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('.igualar').addEventListener('click', (event) => {
        event.preventDefault()
        const display_text = document.querySelector('.display')
        console.log(display_text.innerText)
        display_text.innerText = eval(display.innerText)
    })
})*/

//prueba 3
    /*const numeros = document.querySelectorAll('.numeros')
    numeros.forEach(numero => {
        numero.addEventListener('click', (event) => {
            event.preventDefault()
            const display_text = document.querySelector('.display')
            display_text.innerText += event.target.innerText
        })
    })
    
    const operadores = document.querySelectorAll('.operadores')
    operadores.forEach(operador => {
        operador.addEventListener('click', (event) => {
            event.preventDefault()
            const display_text = document.querySelector('.display')
            display_text.innerText += event.target.innerText
        })
    })

    const igualar = document.querySelectorAll('.igualar')
    igualar.forEach(igualar => {
        igualar.addEventListener('click', (event) => {
            event.preventDefault()
            console.log('igualar')
            const display_text = document.querySelector('.display')
            display_text.innerText = eval(display_text.innerText)
        })
    })*/

document.addEventListener('DOMContent', () => {
    const numeros = document.querySelectorAll('.numeros')
    const operadores = document.querySelectorAll('.operadores')
    const igualar = document.querySelectorAll('.igualar')
    const display = document.querySelector('.resultado-anterior')
    const clear = document.querySelectorAll('.clear')
    
    acumulador = ''
    numeros.forEach(numero => {
        numero.addEventListener('click', (event) => {
            event.preventDefault()
            acumulador += event.target.innerText

            console.log(acumulador)
        })
    })
    
    operadores.forEach(operador => {
        operador.addEventListener('click', (event) => {
            event.preventDefault()
            display.innerText += event.target.innerText
            acumulador += event.target.innerText

            console.log(acumulador)
        })
    })
    
    igualar.forEach(igualar => {
        igualar.addEventListener('click', (event => {
            event.preventDefault()
            display.innerText = eval(display.innerText)
            acumulador += event.target.innerText

            console.log(acumulador)
        }))
    })
    
    clear.forEach(clear => {
        clear.addEventListener('click', (event) => {
            event.preventDefault()
            acumulador += ''

            console.log(acumulador)
        })
    })
})

//mostrar resultado anterior en display


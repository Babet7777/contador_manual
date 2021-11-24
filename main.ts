function BotonBPulsado () {
    basic.pause(50)
    if (input.buttonIsPressed(Button.AB)) {
        PoneACero()
    } else {
        Contador = Contador - 1
        led.plot(4, 2)
        Espera()
    }
}
function PoneACero () {
    Contador = 0
    led.plot(0, 2)
    led.plot(4, 2)
    Espera()
}
function BotonAPulsado () {
    basic.pause(50)
    if (input.buttonIsPressed(Button.AB)) {
        PoneACero()
    } else {
        Contador = Contador + 1
        led.plot(0, 2)
        Espera()
    }
}
function Espera () {
    basic.pause(100)
    led.unplot(0, 2)
    led.unplot(4, 2)
    basic.showNumber(Contador)
}
let Contador = 0
Contador = 0
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        BotonAPulsado()
    }
    if (input.buttonIsPressed(Button.B)) {
        BotonBPulsado()
    }
})

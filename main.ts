function do0ne () {
    music.startMelody(music.builtInMelody(Melodies.PowerUp), MelodyOptions.Once)
    strip.setMatrixColor(1, 0, neopixel.colors(NeoPixelColors.Red))
    strip.setMatrixColor(2, 0, neopixel.colors(NeoPixelColors.Red))
    strip.setMatrixColor(3, 0, neopixel.colors(NeoPixelColors.Red))
    strip.setMatrixColor(0, 1, neopixel.colors(NeoPixelColors.Red))
    strip.setMatrixColor(4, 1, neopixel.colors(NeoPixelColors.Red))
    strip.setMatrixColor(0, 2, neopixel.colors(NeoPixelColors.Red))
    strip.setMatrixColor(4, 2, neopixel.colors(NeoPixelColors.Red))
    strip.setMatrixColor(1, 3, neopixel.colors(NeoPixelColors.Red))
    strip.setMatrixColor(2, 3, neopixel.colors(NeoPixelColors.Red))
    strip.setMatrixColor(3, 3, neopixel.colors(NeoPixelColors.Red))
    strip.setMatrixColor(2, 4, neopixel.colors(NeoPixelColors.Yellow))
}
function doTWO () {
    music.startMelody(music.builtInMelody(Melodies.PowerUp), MelodyOptions.Once)
    strip.setMatrixColor(1, 0, neopixel.colors(NeoPixelColors.Yellow))
    strip.setMatrixColor(3, 1, neopixel.colors(NeoPixelColors.Yellow))
    strip.setMatrixColor(2, 2, neopixel.colors(NeoPixelColors.Yellow))
    strip.setMatrixColor(1, 3, neopixel.colors(NeoPixelColors.Yellow))
    strip.setMatrixColor(3, 4, neopixel.colors(NeoPixelColors.Yellow))
    strip.setMatrixColor(4, 0, neopixel.colors(NeoPixelColors.Green))
    strip.setMatrixColor(0, 1, neopixel.colors(NeoPixelColors.Green))
    strip.setMatrixColor(1, 1, neopixel.colors(NeoPixelColors.Green))
    strip.setMatrixColor(3, 2, neopixel.colors(NeoPixelColors.Green))
}
function doSomething (num: number) {
    if (num == 1) {
        do0ne()
    } else if (num == 2) {
        doTWO()
    } else if (num == 3) {
        d0_three()
    } else {
    	
    }
}
function d0_three () {
    strip.setMatrixColor(0, 0, neopixel.colors(NeoPixelColors.Green))
    strip.setMatrixColor(4, 1, neopixel.colors(NeoPixelColors.Green))
    strip.setMatrixColor(3, 1, neopixel.colors(NeoPixelColors.Green))
    strip.setMatrixColor(1, 2, neopixel.colors(NeoPixelColors.Green))
    strip.setMatrixColor(3, 0, neopixel.colors(NeoPixelColors.Yellow))
    strip.setMatrixColor(1, 1, neopixel.colors(NeoPixelColors.Yellow))
    strip.setMatrixColor(2, 2, neopixel.colors(NeoPixelColors.Yellow))
    strip.setMatrixColor(3, 3, neopixel.colors(NeoPixelColors.Yellow))
    strip.setMatrixColor(2, 4, neopixel.colors(NeoPixelColors.Yellow))
}
let strip: neopixel.Strip = null
strip = neopixel.create(DigitalPin.P15, 25, NeoPixelMode.RGB)
strip.setMatrixWidth(5)
strip.setBrightness(30)
basic.forever(function () {
    strip.clear()
    doSomething(2)
    strip.show()
    basic.pause(100)
})

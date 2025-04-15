input.onGesture(Gesture.Shake, function () {
    for (let index = 0; index < 4; index++) {
        basic.showIcon(IconNames.Angry)
        basic.showNumber(5)
        music.play(music.stringPlayable("C5 B C5 B C5 B C5 B ", 120), music.PlaybackMode.UntilDone)
        basic.showNumber(10)
        basic.showIcon(IconNames.Heart)
        basic.showString("Hello")
        basic.clearScreen()
    }
    basic.showLeds(`
        # . . . #
        # # . . #
        . # # # .
        # . . # #
        # . . . #
        `)
})
basic.forever(function () {
    basic.showIcon(IconNames.Heart)
})

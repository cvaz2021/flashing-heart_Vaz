function on_forever() {
    basic.showIcon(IconNames.Heart)
}

basic.clearScreen()
basic.pause(500)
basic.showIcon(IconNames.SmallHeart)
basic.clearScreen()
basic.pause(500)
basic.forever(on_forever)
basic.forever(on_forever)

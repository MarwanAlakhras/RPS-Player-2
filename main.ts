radio.onReceivedNumber(function (receivedNumber) {
    received = true
    opponent_hand = receivedNumber
})
input.onButtonPressed(Button.A, function () {
    if (my_hand == 0) {
        my_hand = 1
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
    } else if (my_hand == 1) {
        my_hand = 2
        basic.showIcon(IconNames.Scissors)
    } else if (my_hand == 2) {
        my_hand = 0
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . .
            `)
    }
})
input.onButtonPressed(Button.B, function () {
    selected = true
    radio.sendNumber(my_hand)
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    received = false
    received = false
    my_hand = 0
    basic.clearScreen()
})
let selected = false
let opponent_hand = 0
let received = false
let my_hand = 0
radio.setGroup(99)
my_hand = 0
basic.forever(function () {
    if (selected == true && received == true) {
        selected = false
        received = false
        if (my_hand == opponent_hand) {
            basic.showIcon(IconNames.Surprised)
        } else {
            if (my_hand == 0 && opponent_hand == 1) {
                basic.showIcon(IconNames.Sad)
            } else if (my_hand == 1 && opponent_hand == 2) {
                basic.showIcon(IconNames.Sad)
            } else if (my_hand == 2 && opponent_hand == 0) {
                basic.showIcon(IconNames.Sad)
            } else if (my_hand == 1 && opponent_hand == 0) {
                basic.showIcon(IconNames.Happy)
            } else if (my_hand == 2 && opponent_hand == 1) {
                basic.showIcon(IconNames.Happy)
            } else if (my_hand == 0 && opponent_hand == 2) {
                basic.showIcon(IconNames.Happy)
            }
        }
    }
})

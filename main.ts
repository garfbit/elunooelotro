let numero1 = 0
input.onButtonPressed(Button.A, function () {
    numero1 = randint(1, 2)
    if (numero1 == 1) {
        basic.showIcon(IconNames.Diamond)
    } else {
        basic.showIcon(IconNames.SmallDiamond)
    }
})

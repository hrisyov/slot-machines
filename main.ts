input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < randint(1, 3); index++) {
        basic.showIcon(IconNames.Heart)
        basic.showIcon(IconNames.Ghost)
        basic.showIcon(IconNames.Diamond)
        basic.showIcon(IconNames.Happy)
        basic.showIcon(IconNames.Target)
    }
})
basic.forever(function () {
	
})

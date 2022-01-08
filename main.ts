input.onButtonPressed(Button.A, function () {
    wuKong.setAllMotor(50, 50)
    basic.pause(2000)
    wuKong.stopAllMotor()
})
input.onButtonPressed(Button.B, function () {
    wuKong.setAllMotor(-50, -50)
    basic.pause(2000)
    wuKong.stopAllMotor()
})
basic.forever(function () {
	
})

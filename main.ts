input.onButtonPressed(Button.A, function () {
    motobit.enable(MotorPower.On)
})
input.onButtonPressed(Button.B, function () {
    motobit.enable(MotorPower.Off)
})
let farRight = 0
let right = 0
let centre = 0
let left = 0
let farLeft = 0
let baseSpeed = 40
let deltaSpeed = 10
motobit.enable(MotorPower.On)
basic.forever(function () {
    farLeft = pins.digitalReadPin(DigitalPin.P0)
    left = pins.digitalReadPin(DigitalPin.P1)
    centre = pins.digitalReadPin(DigitalPin.P2)
    right = pins.digitalReadPin(DigitalPin.P8)
    farRight = pins.digitalReadPin(DigitalPin.P12)
    if (centre == 1) {
        if (left == 1) {
            motobit.setMotorSpeed(Motor.Left, MotorDirection.Forward, baseSpeed + deltaSpeed)
            motobit.setMotorSpeed(Motor.Right, MotorDirection.Forward, baseSpeed)
        } else if (right == 1) {
            motobit.setMotorSpeed(Motor.Left, MotorDirection.Forward, baseSpeed)
            motobit.setMotorSpeed(Motor.Right, MotorDirection.Forward, baseSpeed + deltaSpeed)
        } else {
            motobit.setMotorSpeed(Motor.Left, MotorDirection.Forward, baseSpeed)
            motobit.setMotorSpeed(Motor.Right, MotorDirection.Forward, baseSpeed)
        }
    } else {
        if (left == 1) {
            if (farLeft == 1) {
                motobit.setMotorSpeed(Motor.Left, MotorDirection.Forward, baseSpeed + (deltaSpeed + (deltaSpeed + deltaSpeed)))
                motobit.setMotorSpeed(Motor.Right, MotorDirection.Forward, baseSpeed - deltaSpeed)
            }
            motobit.setMotorSpeed(Motor.Left, MotorDirection.Forward, baseSpeed + (deltaSpeed + deltaSpeed))
            motobit.setMotorSpeed(Motor.Right, MotorDirection.Forward, baseSpeed - deltaSpeed)
        } else if (right == 1) {
            if (farRight == 1) {
                motobit.setMotorSpeed(Motor.Left, MotorDirection.Forward, baseSpeed + (deltaSpeed + (deltaSpeed + deltaSpeed)))
                motobit.setMotorSpeed(Motor.Right, MotorDirection.Forward, baseSpeed - deltaSpeed)
            }
            motobit.setMotorSpeed(Motor.Left, MotorDirection.Forward, baseSpeed - deltaSpeed)
            motobit.setMotorSpeed(Motor.Right, MotorDirection.Forward, baseSpeed + (deltaSpeed + deltaSpeed))
        } else if (left == 0 && right == 0 && (farLeft == 0 && farRight == 0)) {
            motobit.enable(MotorPower.Off)
        }
    }
})

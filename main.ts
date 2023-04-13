input.onButtonPressed(Button.A, function () {
    answer = "" + answer + "A"
})
input.onButtonPressed(Button.AB, function () {
    if (answer == password) {
        basic.showLeds(`
            # . . . .
            . # . . .
            . . # . .
            . . . # .
            . . . . #
            `)
        basic.pause(100)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        answer = ""
        Falled_Time_Count = 0
        _1_open0_closed = 1
    } else {
        answer = ""
        music.playSoundEffect(music.createSoundEffect(WaveShape.Noise, 1, 1, 255, 255, 1000, SoundExpressionEffect.None, InterpolationCurve.Linear), SoundExpressionPlayMode.UntilDone)
        Falled_Time_Count += 1
        _1_open0_closed = 0
    }
})
input.onButtonPressed(Button.B, function () {
    answer = "" + answer + "B"
})
let Sound = 0
let _1_open0_closed = 0
let Falled_Time_Count = 0
let answer = ""
let password = ""
smarthome.crashSensorSetup(DigitalPin.P1)
password = "AABAA"
answer = ""
Falled_Time_Count = 0
_1_open0_closed = 0
music.setBuiltInSpeakerEnabled(true)
basic.forever(function () {
    if (Falled_Time_Count > 5) {
        basic.showIcon(IconNames.No)
        answer = "X"
        Sound = 1
        basic.pause(30000)
        Sound = 0
        Falled_Time_Count = 0
    }
})
basic.forever(function () {
    if (_1_open0_closed == 0) {
        servos.P2.setAngle(90)
    }
    if (_1_open0_closed == 1) {
        if (!(smarthome.crashSensor())) {
            servos.P2.setAngle(180)
        }
    }
})
basic.forever(function () {
    if (Sound == 1) {
        music.playSoundEffect(music.createSoundEffect(WaveShape.Noise, 1, 1, 255, 255, 5000, SoundExpressionEffect.None, InterpolationCurve.Linear), SoundExpressionPlayMode.UntilDone)
    }
})

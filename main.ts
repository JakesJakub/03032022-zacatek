radio.setTransmitPower(3)
radio.setGroup(111)
RunComp.SetLightLevel()
let reset = 0
let zacatek = 1
let stop = 2
RunComp.OnLightDrop(function on_light_drop() {
    radio.sendNumber(zacatek)
})
input.onButtonPressed(Button.A, function on_button_pressed_a() {
    radio.sendNumber(reset)
    control.reset()
})
radio.onReceivedNumber(function on_received_number(stop: number) {
    control.reset()
})

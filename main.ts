radio.setTransmitPower(3)
radio.setGroup(111)
RunComp.SetLightLevel()
RunComp.OnLightDrop(function on_light_drop() {
    radio.sendNumber(1)
})

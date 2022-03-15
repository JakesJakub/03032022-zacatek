radio.set_transmit_power(3)
radio.set_group(111)
RunComp.set_light_level()

def on_light_drop():
    radio.send_number(1)
RunComp.on_light_drop(on_light_drop)
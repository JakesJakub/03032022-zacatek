radio.set_transmit_power(3)
radio.set_group(111)
RunComp.set_light_level()

reset = 0
zacatek = 1
stop = 2

def on_light_drop():
    radio.send_number(zacatek)
RunComp.on_light_drop(on_light_drop)

def on_button_pressed_a():
    radio.send_number(reset)
    control.reset()
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_received_number(stop):
    control.reset()
radio.on_received_number(on_received_number)
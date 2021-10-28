let lamp = new bongDen( false);
let Switch = new congTac( false)




Switch.connectToLamp(lamp);
Switch.switchOn(lamp);
console.log(lamp.status);
Switch.switchOff(lamp);
console.log(lamp.status);

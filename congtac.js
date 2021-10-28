class congTac {
    status;
    lamp;

    constructor(status) {
        this.status = status;

    }
    connectToLamp(lamp) {
        this.lamp = lamp;
    }
    switchOn(lamp) {
        this.status = true;
      lamp.turnOn()
    }
    switchOff(lamp) {
        this.status = false;
        lamp.turnOff();
    }





}
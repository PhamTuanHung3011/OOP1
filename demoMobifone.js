class Mobile {
    id;
    name;
    pin;
    soanthao;
    thuden;
    thudagui;
    screen;



    constructor( id,name,pin, soanthao, thuden, thudagui,) {
        this.id = id;
        this.name = name;
        this.pin = pin;
        this.soanthao = soanthao;
        this.thuden = thuden;
        this.thudagui = thudagui;
        this.screen = screen;
    }
    getId() {
        return this.id;
    }
    setId() {
        return this.id;
    }
    getName() {
        return this.name;
    }
    setName() {
        return this.name;
    }

    getPin() {
        return this.pin;
    }
    setPin() {
        return this.pin;
    }

    getMessage() {
        return this.message;
    }
    setMessage() {
        return this.message;
    }

    getScreen() {
        return this.screen;
    }
    setScreen() {
        return this.screen;
    }

}

    let iphone = new Mobile('Iphone 15', 100);
    document.getElementById('hienthi1').innerHTML= iphone.getName();
    document.getElementById('hienthi2').innerHTML= 'Thoi luong pin: ' + iphone.getPin()+ ' %';

    let Nokia = new Mobile('110I', 75)
    document.getElementById('hienthi1nokia').innerHTML ='Sieu pham '+ Nokia.getName();
    document.getElementById('hienthi2nokia').innerHTML = 'Thoi luong pin: '+ Nokia.getPin()+ ' %';
console.log( typeof iphone);




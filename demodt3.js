class Mobile {
    ten;
    pin = 100;
    trangthai;
    soantin = [];
    guitin = [];
    nhantin = [];

    constructor(ten, trangthai) {
        this.ten = ten;
        this.trangthai = trangthai;
    }

    switchMobile() {
        if (this.pin === 0) {
            this.trangthai = false;
        } else {
            this.trangthai = !this.trangthai;
        }
    }

    decreasePin() {
        if (this.pin > 0 && this.trangthai) {
            this.pin--;
        } else if (this.pin) {
            console.log('bat dien thoai')
        } else {
            this.trangthai = false;
            this.pin = 0;
        }
    }

    getPin() {
        return this.pin;
    }

    sacPin() {
        this.pin = 100;
    }

    soanTinNhan(mess) {
        if (this.trangthai) {
            this.soantin.push(mess);
        } else {
            console.log('bat dien thoai len');
        }
        this.decreasePin();
    }

    getDaGuiTin() {
        return this.guitin;
    }

    setDaGuiTin(daguitin) {
        this.guitin = daguitin;
    }

    getDaNhanTin() {
        return this.nhantin;
    }

    setDaNhanTin(danhantin) {
        this.nhantin = danhantin;
    }

    getSoanTin() {
        return this.soantin;
    }

    setSoanTin(soantin) {
        this.soantin = soantin;
    }

    truyenTinNhan(mobile) {
        if (this.trangthai & mobile.trangthai) {
            mobile.setDaNhanTin(this.getSoanTin());
            this.setDaGuiTin(this.getSoanTin());
            this.getSoanTin([]);
        } else if (this.trangthai) {
            this.setDaGuiTin(this.getSoanTin());
            this.getSoanTin([]);
        } else {
            console.log('bat dien thoai len');
        }
        this.decreasePin();
    }

    checkTrangThai() {
        return this.trangthai;
    }

}

let nokia = new Mobile('110I', false);
let Iphone = new Mobile('Iphone 13', false);

function BattatDT1() {
    nokia.switchMobile();
}

function BattatDT2() {
    Iphone.switchMobile();
}

function checkStatus1() {
    if (nokia.checkTrangThai()){
        document.getElementById('status1').innerHTML = 'Dien thoai dang bat';
    } else {
        document.getElementById('status1').innerHTML = 'Dien thoai dang tat';
    }
}

function checkStatus2() {
    if (Iphone.checkTrangThai()) {
        document.getElementById('status2').innerHTML = 'Dien thoai dang bat';
    } else {
        document.getElementById('status2').innerHTML = 'Dien thoai dang tat';
    }
}

function Nokia() {
    let soantin1 = document.getElementById('input1').value;
//     if (nokia.checkTrangThai() && Iphone.checkTrangThai()) {
//         nokia.soanTinNhan(soantin1);
//         nokia.setDaGuiTin(soantin1);
//         document.getElementById('input2').value = nokia.getDaGuiTin();
//         Iphone.setDaNhanTin(soantin1);
//         document.getElementById('input6').value = Iphone.getDaNhanTin();
//         nokia.setSoanTin([]);
// ;    } else {
//         alert('bat dien thoai len')
//     }
    nokia.soanTinNhan(soantin1);
    nokia.truyenTinNhan(Iphone);
    document.getElementById('input2').value = nokia.getDaGuiTin();
    document.getElementById('input6').value = Iphone.getDaNhanTin();
    nokia.decreasePin();
}

function iphone() {
    let soantin2 = document.getElementById('input4').value;

   Iphone.soanTinNhan(soantin2);
   Iphone.truyenTinNhan(nokia);
   document.getElementById('input5').value = Iphone.getDaGuiTin();
   document.getElementById('input3').value = nokia.getDaNhanTin();

}
    nokia.truyenTinNhan(Iphone);



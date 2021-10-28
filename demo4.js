class MobileDemo{
    status;
    pin = 100;
    soantin = [];
    tindagui = [];
    tindanhan = [];

    constructor(status) {
        this.status = status;
    }
    decreasePin() {
        if (this.pin > 0 && this.status) {
            this.pin --;
        } else if (this.pin > 0) {
            alert('bat dien thoai de con tru pin');
        } else {
            this.status = false;
            this.pin = 0
        }
    }

    checkStatus() {
        return this.status;
    }

    SoanTinNhanNokia(mess) {
        if(nokia.checkStatus()){
            nokia.soantin.push (mess)
        } else {
            alert('bat dien thoai len da');
        }

    }
    SoanTinNhanIphone(mess) {
        if (iphone.checkStatus()) {
            iphone.soantin.push (mess);
        }
    }






    truyenTinNhan(mobile) {
        if (mobile1.trangthai & mobile2.trangthai) {
            mobile2.setDaNhanTin(this.getSoanTin());
            mobile1.setDaGuiTin(this.getSoanTin());
            mobile1.getSoanTin([]);
        } else if (this.trangthai) {
            this.setDaGuiTin(this.getSoanTin());
            this.getSoanTin([]);
        } else {
            console.log('bat dien thoai len');
        }
        this.decreasePin();
    }


}
let nokia = new MobileDemo(false);
let iphone = new MobileDemo()



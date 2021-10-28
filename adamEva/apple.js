class Apple {
    weight;

    constructor(weight) {
        this.weight = weight;
    }

    getWeight() {
        return this.weight;
    }
    setWeight(weight) {
        this.weight = weight;
    }
    checkIsEmpty() {
        if (this.weight === 0){
            console.log('het roi')
        } else {
            return this.weight;
        }
    }

    decreaseApple() {
        this.weight--;
    }



}
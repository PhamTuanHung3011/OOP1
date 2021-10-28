class Human {
    name;
    gender;
    weight;

    constructor(name, gender, weight) {
        this.name = name;
        this.gender = gender;
        this.weight = weight;
    }
    getName() {
        return this.name = name;
    }
    setName(name) {
        this.name = name;
    }
    getWeight() {
        return this.weight;
    }
    setWeight(weight) {
        this.weight = weight;
    }
    EatApple() {
        this.weight++
    }


    checkIsMale() {
        if (this.gender === true){
            console.log('Nam')
        }
        else {
            console.log('Nu')
        }
    }



}
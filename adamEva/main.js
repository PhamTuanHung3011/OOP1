let apple1 = new Apple(1);
let human1 = new Human('Banh', false, 40);



function EatApple() {
    if ( apple1.getWeight() > 0 ){
        human1.EatApple();
        human1.getWeight();
        console.log(human1.getWeight())
        apple1.decreaseApple()
    }
    else {
        apple1.setWeight(0);
        alert('het tao roi');
    }

}


human1.checkIsMale();
EatApple();
apple1.setWeight(5);
console.log(apple1.getWeight());
apple1.setWeight(0);
apple1.checkIsEmpty();
// class Chai {
//     flavour: string;
//     price: number

//     // constructor(flavour: string, price: number){
//     //     this.flavour = flavour
//     //     this.price = price
//     // }
//     constructor(flavour: string){
//         this.flavour = flavour
//         console.log(this)
//     }
// }

// // const masalaChai = new Chai("Ginger", 20)
// const masalaChai = new Chai("Ginger")
// masalaChai.flavour = "masala"

// access modifier
class Chai {
    public flavor: string = "Masala"

    private secretIngredients = "cardamom"

    reveal(){
        return this.secretIngredients //ok , not access directly
    }

}
const c = new Chai()
// c.reveal() // for access private

class Shop {
    protected shopName = "Chai corner"
}

class Branch extends Shop {
    getName(){
        return this.shopName //ok
    }
}

// new Branch().getName we can access through point

// private example
class wallet{
    #balance = 100

    getBalance(){
        return this.#balance
    }
}
const w = new wallet()
// w.getBalance we can access like this

class Cup{
    readonly capacity: number = 250 //readonly= can assign one time but cannot change
    constructor(capacity: number){
        this.capacity = capacity
    }
}
// getter and setter
class ModernChai {
    private _sugar = 2

    get sugar(){
        return this._sugar
    }

    set sugar(value:number){
        if(value > 5) throw new Error("Too sweet");
        this._sugar = value
    }
}

const v = new ModernChai()
v.sugar = 3 

// static member
class EkChai {
    static shopName = "chaicode caffee"

    constructor(public flavour: string){

    }
}
console.log(EkChai.shopName); // ye direct class pe access hoti h , object pe nhi

// abstract class
abstract class Drink{
    abstract make(): void // void = no return type nhi deta
}

class MyChai extends Drink{
    make(){
        console.log("Brewing chai");
    }
}

class Heater {
    heat(){}
}
class ChaiMaker{
    constructor(private heater: Heater){}
    
    make(){
        this.heater.heat
    }
}
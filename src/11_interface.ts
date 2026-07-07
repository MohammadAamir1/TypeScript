interface Chai {
    flavor: string
    price: number
    milk?: boolean
}

const masala: Chai = {
    flavor: "masala",
    price: 35
}

interface Shop {
    readonly id: number
    name: string
}

const s: Shop = {id: 1, name: "chaicode caffee"}
// s.id= 2 do not change
// s.name = "arun"

interface DiscountCalculator{
    (price: number) : number
}

const apply50: DiscountCalculator = (p) => p*0.5

interface TeaMachine{
    start() : void;
    stop(): void
}

const machine: TeaMachine = {
    start() {
        console.log("start")
    },
    stop() {
        console.log("stop");
    }
}

// signature
interface chaiRatings {
    [flavor: string]:number
}


const ratings: chaiRatings = {
    masala: 4.5,
    ginger: 5
}

interface User {
    name : string
}
interface User {
    age : number
}
const u: User = {
    name: "Aman",
    age: 42
}

interface A {a: string}
interface B {b: string}

interface C extends A,B {}
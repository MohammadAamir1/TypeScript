const chaiFlavours: string[] = ["Masala", "Adrak"]
const chaiPrice: number[] = [10,20]

const rating: Array<number> = [4.5, 5.0]

type Chai = {
    name: string;
    price: number
}
const menu: Chai[] = [
    {name: "Masala", price: 15},
    {name: "adrak", price: 25},
]

//readyonly arrays = jis array ko tum define ke sakte ho use tum modify nhi kr sakte
const cities: readonly string[] = ["Delhi", "Jaipur"]
// cities.push("Pune")

// for multidimensional
const table: number[][] = [
    [1,2,3],
    [4,5,6]
]

// tuples
let chaiTuple: [string, number];
chaiTuple = ["Masala", 20]
// chaiTuple = [20, "Masala"] // should acc to datatype

let userInfo: [string, number, boolean?]
userInfo = ["Amir", 100]
userInfo = ["aman", 100, false]

const location: readonly [number, number] = [28.66, 32.22]

const chaiItems: [name: string, price: number] = ["Adrak", 25]

//enums
enum CupSize {
    SMALL,
    MEDIUM,
    LARGE
}

const size = CupSize.LARGE

enum status {
    PENDING = 100,
    SERVED, //101 // it take automatically behaviour it may causes it is in incremental order
    CANCELLED // 102
}

// mostly used of enums in constant, env variable

enum ChaiType {
    MASALA = "masala",
    GINGER = "ginger"
}

function makeChai(type: ChaiType){
    console.log(`Making: ${type}`);
}

makeChai(ChaiType.GINGER)
// makeChai("masala") we cannot take value like this

enum RandomEnum {
    ID = 1,
    NAME = "chai"
}

const enum Sugars {
    LOW = 1,
    MEDIUM = 2,
    HIGH = 3
}

const s = Sugars.HIGH

let t: [string, number] = ["chai", 10]
t.push("extra")
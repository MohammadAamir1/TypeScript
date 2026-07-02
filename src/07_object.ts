const chai = {
    name : "Masala chai",
    price: 20,
    isHot:true
}

// {   // this called infer, do or not but typescript always inffer behind the scene
//     name: string;
//     price: number;
//     isHot: true
// }

// declaration object type
let tea : {
    name: string;
    price: number;
    isHot: boolean
}

tea = {
    name: "Ginger Tea",
    price: 25,
    isHot: true
}

type Tea= {
    name: string;
    price: number;
    ingredients:string[];
}

const adrakChai: Tea = {
    name:"Adrak Chai",
    price: 25,
    ingredients : ["ginger", "tea leaves"]
}

// Duct Typing / Structural Typing

type Cup = {size : string};
let smallCup : Cup = {size: "200ml"}

let bigCup = {size: "500ml", material: "steel"}
smallCup = bigCup


type Brew = {brewTime: number}
const coffee = {brewTime: 5, beans: "Arabica"}
const chaiBrew:Brew = coffee

type User = {
    username: string;
    password: string
}

const u: User = {
    username: "chaicode",
    password: "123"
}

// data type ko split out krna
type Item = {name:string, quantity: number}
type Address = {street: string, pin: number}

type Order = {
    id: string;
    items: Item[];
    address: Address
}

// partial <T> Utility Type
type Chai = {
    name: string;
    price: number;
    isHot: boolean
}

const updateChai = (updates: Partial<Chai>) => {
    console.log("Updating chai with", updates);
}

updateChai({price: 25})
updateChai({isHot: false})
updateChai({}) // we can also create empty obj but it may create issue


// Required <T> Utility Type
type ChaiOrder = {
    name?: string;
    quantity?:number
}

const placeOrder = (order: Required<ChaiOrder>) => {
    console.log(order);
}

placeOrder({
    name: "Masala Chai",
    quantity: 2
})

// Pick <T> Utility type
type Shai = {
    name: string;
    price: number;
    isHot: boolean;
    ingredients: string[]
}

type BasicChaiInfo = Pick<Shai, "name" | "price">;

const ShaiInfo: BasicChaiInfo ={
    name: "Lemon Tea",
    price: 30
}

// omit<T> utility Type
type ShaiNew = {
    name: string;
    price: number;
    isHot: boolean;
    secretIngredients: string[]
};

type PublicChai = Omit<ShaiNew, "secretIngredients">



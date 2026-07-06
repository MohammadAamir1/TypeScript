function makeChai(type: string, cups: number){
    console.log(`Making ${cups} cups of ${type}`);
}

makeChai("Masala", 2)

function getChaiPrice(): number {
    return 25
}

function makeOrder (order: string) {
// function makeOrder (order: string): string {
    if(!order) return null
    return order
}

// void function
function logChai(): void { // void karne se es function se koi return data type bahar nhi aara h
    console.log("Chai is ready");
}

// optional parameter in function

// function orderChai(type?: string){

// }
// default, optional value return in end
function orderChai(type: string = "Masala"){

}

function createChai(order: {
    type: string
    sugar: number
    size: "small" | "large"
}) : number {
    return 4
}
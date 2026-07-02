type ChaiOrder = {
    type: string;
    sugar: number;
    strong: boolean;
};
// types aliases
// function makeChai(order: {type: string; sugar: number; strong: boolean}){
function makeChai(order: ChaiOrder){
    console.log(order);
}

function serveChai(order: ChaiOrder){
    console.log(order);
}

// interface TeaRecipe  { interface me value hona jaruri h
type TeaRecipe = {
    water: number;
    milk: number
}

class MasalaChai implements TeaRecipe {
    water = 100;
    milk = 50
}

// type CupSize = "small" | "large" // instead by using below method
interface CupSize {
    size : "small" | "large"
}

class Chai implements CupSize {
    size : "small" | "large" = "large"
}

// class Chai implements CupSize {
    // customize size me allow nhi karta h 
// }


// type Response = {ok: true} | {ok: false}
interface Response  {ok: true |  false} // commonly we used interface
class myRes implements Response {
    ok: boolean = true;
}

// literal type
type TeaType = "masala" | "ginger" | "lemon"
function orderChai(t: TeaType){
    console.log(t);
}

type BaseChai = {teaLeaves: number}
type Extra = {masala: number}

type Masaalachai = BaseChai & Extra

const cup: Masaalachai = { // dono value jaruri h isme &
    teaLeaves: 2,
    masala: 1
}

type User = {
    username: string;
    bio?: string // optional h hn ya nhi 
}

const u1: User = {username: "Aamir"}
const u2: User = {username: "Aman", bio: "amir.ai"}

type Config = {
    readonly appName: string
    version: number
}

const  cfg: Config = {
    appName: "Masterji",
    version: 1
}

// cfg.appName = "ChaiCode" //after first time assign then cannot assign other times

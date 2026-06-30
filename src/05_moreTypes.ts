let response:any ="42";

let numericLength:number = (response as string).length // we take forcefully string like this

type Book = {
    name: string
}

let bookString = `{"name":"Who moved my cheese"}`;
let bookObject = JSON.parse(bookString) as Book
// if we use as Book then it suggest otherwise not
console.log(bookObject);

const inputElement = document.getElementById("username") as HTMLInputElement


let value:any

value = "chai"
value = [1,2,3];
value = 2.5;
value.toUpperCase();

let newValue : unknown;

newValue = "chai";
newValue = [1, 2, 3];
newValue = 2.5;

if (typeof newValue === "string"){
    newValue.toUpperCase();
}

try {

} catch (error:any){
    if(error instanceof Error){
        console.log(error.message);
    }
    console.log("Error", error);
}

const data:unknown = "chai aur code"
const strData: string = data as string // jab env variables se load karte h to as a string bolna padhta h ya forcefully

// type Role = "admin" | "user" ;
type Role = "admin" | "user" | "superadmin";

function redirectBasedOnRole(role: Role) : void {
    if(role === "admin"){
        console.log("Redirecting to admin dashboard");
        return;
    }
    if (role === "user"){
        console.log("Redirecting to user dashboard");
        return;
    }
    role;
}

function neverReturn():never{
    while(true){}
}
// goal -> understand when to let typescript infer types
// ts -> js very well
// when ts will writes the types / u r gong to write

let count = 0; // ts sees number
const site = "acedevhub"; // ts see the exact literal "acedevhub"
const score = [10,20,30];

// over annonation isnot bad -> just noisy


// you should also annotate when type is not obvious
let maybe: string | number;
maybe = Math.random() > 0.5 ? "test" : 10;
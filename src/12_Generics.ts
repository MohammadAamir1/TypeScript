function wrapInArray<T>(item: T): T[]{
    return [item]
}

wrapInArray("Masala")
wrapInArray(42)
wrapInArray({flavor: "Ginger"});

function pair<A, B>(a: A, b: B): [A, B]{
    return [a,b]
}

pair("masala", "test")
pair("masala", 20)
pair("masala", {flavor: "ginger"})

interface Box<T> {
    content: T
}

const numberBox: Box<number> = {content: 10}
const numberBoxCup: Box<string> = {content: "10"}

//generics also work with utility-partiall etc

interface ApiPromise<T>{
    status: number,
    data: T
}
const res: ApiPromise<{flavor: string}> = {
    status: 200,
    data: {flavor: "masala"}
}
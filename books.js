
let books = ["Java", "Python","Rust", "Golang"];

    let Emily ={
        name : "Emily",
        book : null
    }
    let Jack = {
        name : "Jack",
        book : null
    }

    let Sophia = {
        name : "Sophia",
        book : null
    }

    let Daniel = {
        name : "Daniel",
        book : null
    }
    
let clubMembers = [Emily, Jack, Sophia, Daniel];

console.log(clubMembers);
for (let index = 0; index < clubMembers.length; index++){
    clubMembers[index].book = books[index];
}

console.log(clubMembers);
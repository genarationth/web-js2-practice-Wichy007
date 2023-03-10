// part 2
//  challenge 1 

function calculateAge(birthMonth, birthYear, presentMonth, presentYear){
    let age ;
    if(typeof(birthMonth) === "number" && typeof(birthYear) === "number" && typeof(presentMonth) === "number" && typeof(presentYear) === "number"){
        if(presentMonth < birthMonth){
            age = presentYear-birthYear-1;
            console.log(age);
        }
        else{
            age = presentYear-birthYear;
            console.log(age);
        }
    }
    else{
        console.log("Please input only number");
    }
}

// challenge 2

function informationCard(name, location, hobby){
    if(typeof(name) === "string" && typeof(location) === "string" && typeof(hobby) === "string"){
        console.log(`Hi, my name is ${name}.I live in ${location} and enjoy ${hobby}`);
    }
    else{
        console.log("Please input in letters");
    }
}


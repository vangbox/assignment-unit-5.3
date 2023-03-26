console.log('***** Music Collection *****')

let collection = [];

function addToCollection (title, artist, yearPulbished) {
    //console.log(test); //testing 
    item = {a:title, b:artist, c:yearPulbished};
    collection.push(item);
    console.log(collection);
    return item;

}

addToCollection("Lets go", "celine", "2012");
addToCollection("1Lets go", "1celine", "12012");
addToCollection("2Lets go", "2celine", "22012");
addToCollection("3Lets go", "3celine", "32012");
addToCollection("4Lets go", "4celine", "42012");
addToCollection("5Lets go", "5celine", "52012");

console.log(collection);

function showCollection(hard){
    for (let i = 0; i < hard.length; i++) {
        console.log(hard[i]);
        
    }

}
showCollection(collection);
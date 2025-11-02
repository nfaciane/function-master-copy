//////////////////////////////////////////////////////////////////////
// Function 1 - Object Values ////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function objectValues(object) {
    // code: convert object values as an array
    return Object.values(object);
} 

//////////////////////////////////////////////////////////////////////
// Function 2 - Keys to String ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function keysToString(object) {
    //code: convert object keys as one string
    return Object.keys(object).join(" ");
}

//////////////////////////////////////////////////////////////////////
// Function 3 - Values to String /////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function valuesToString(object) {
    var values;
    var strings = [];
    //convert object values into array
    values = Object.values(object);
    //loop through value array
    for(let i = 0; i < values.length; i++){
         //if value equals string; return and join with space
    if(typeof values[i] === 'string'){
        strings.push(values[i]);
    }
    }
   return strings.join(" ");
}

//////////////////////////////////////////////////////////////////////
// Function 4 - Array or Object //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function arrayOrObject(collection) {
    //if collection is array; return "array"
    if(Array.isArray(collection)){
        return "array";
    } else if(typeof collection === "object" && collection !== null){
        return "object";
    }
    
}

//////////////////////////////////////////////////////////////////////
// Function 5 - Capitalize Word //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeWord(string) {
    let letters;
    //convert string into array of letters
    letters = string.split(""); //["j", "a", "v", "a", "S", "c", "r", "i", "p", "t"]
    //modify first letter to uppercase; 
    letters[0] = letters[0].toUpperCase(); //["J", "a", "v", "a", "S", "c", "r", "i", "p", "t"]
    //return string with uppercase first letter
    return letters.join(""); //"JavaScript"
}

//////////////////////////////////////////////////////////////////////
// Function 6 - Capitalize All Words /////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeAllWords(string) {
    let words;
    let letters;
    //convert string to array
    words = string.split(" "); //["this", "is", "a", "sample", "sentence."]
    //loop through words array 
    for(let i = 0; i < words.length; i++){
        //modify each index to array;
        words[i] = words[i].split(""); //["t", "h", "i", "s"]
        //modify first index in each array
        words[i][0] = words[i][0].toUpperCase(); //["T", "h", "i", "s"]
        //join letters to words
        words[i] = words[i].join(""); ////["this", "is", "a", "sample", "sentence."]
    };
        //return words to sentence
        return words.join(" ");
};

//////////////////////////////////////////////////////////////////////
// Function 7 - Welcome Message //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function welcomeMessage(object) {
    let name;
    //convert string into array
    name = object.name.split("");
    //modify first letter to uppercase
    name[0] = name[0].toUpperCase();
    //return string 'Welcome letters to words!'
    return "Welcome" + " " + name.join("") + "!";
}

//////////////////////////////////////////////////////////////////////
// Function 8 - Profile Info /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function profileInfo(object) {
    //identify string value; convert string into array
    let name = object.name.split("");
    //modify first letter
    name[0] = name[0].toUpperCase();
    //identify string value; convert string into array
    let species = object.species.split("");
    //modify first letter
    species[0] = species[0].toUpperCase();
    //return string(use concat operator) with string value join letters to words
    return name.join("") + " " + "is a" + " " + species.join("");
}

//////////////////////////////////////////////////////////////////////
// Function 9 - Maybe Noises /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function maybeNoises(object) {
    //if object.noise NOT equal array; key in operator object
    if(!"noises" in object){
        return "there are no noises";
    } else{
        if(Array.isArray(object.noises) && object.noises.length > 1){
            return object.noises.join(" ");
        } else{

        }
    }
    return "there are no noises";
}

//////////////////////////////////////////////////////////////////////
// Function 10 - Has Words ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function hasWord(string, word) {

}

//////////////////////////////////////////////////////////////////////
// Function 11 - Add Friend //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function addFriend (name, object) {

}

//////////////////////////////////////////////////////////////////////
// Function 12 - Is Friend ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function isFriend(name, object) {

}

//////////////////////////////////////////////////////////////////////
// Function 13 - Non-Friends /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function nonFriends(name, array) {

}

//////////////////////////////////////////////////////////////////////
// Function 14 - Update Object ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function updateObject(object, key, value) {

}

//////////////////////////////////////////////////////////////////////
// Function 15 - Remove Properties ///////////////////////////////////
//////////////////////////////////////////////////////////////////////

function removeProperties(object, array) {

}

//////////////////////////////////////////////////////////////////////
// Function 16 - Dedup ///////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function dedup(array) {

}

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.objectValues = objectValues;
    module.exports.keysToString = keysToString;
    module.exports.valuesToString = valuesToString;
    module.exports.arrayOrObject = arrayOrObject;
    module.exports.capitalizeWord = capitalizeWord;
    module.exports.capitalizeAllWords = capitalizeAllWords;
    module.exports.welcomeMessage = welcomeMessage;
    module.exports.profileInfo = profileInfo;
    module.exports.maybeNoises = maybeNoises;
    module.exports.hasWord = hasWord;
    module.exports.addFriend = addFriend;
    module.exports.isFriend = isFriend;
    module.exports.nonFriends = nonFriends;
    module.exports.updateObject = updateObject;
    module.exports.removeProperties = removeProperties;
    module.exports.dedup = dedup;
}
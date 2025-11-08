const path = require("path")
const fs = require('fs')

// ../data/recipe.txt
// console.log(__filename)
// i need to get my filepath to by database
// can use either but use join
let filePath1 = path.resolve(__filename, "../../data/recipe.txt")
let filePath2 = path.join(__filename, "../../data/recipe.txt")


function readRecipe(){
    try {
        // Read string in recipe.txt 
        const data = fs.readFileSync(filePath2, 'utf-8')

        // Convert to object 
        const dataParsed = JSON.parse(data)
        return dataParsed
    } catch (error) {
        console.log(error)
    }
    return []
}


// To write  to the file 
function writeRecipe(data){
    
    try {
            let dataToString = JSON.stringify(data, null, 2)
            fs.writeFileSync(filePath2, dataToString, 'utf-8'); 
    } catch (error) {
        console.log(error)
    }
}


// A test to create a creciipe


function createRecipe(newRecipe){

    let allRecipes = readRecipe()
    allRecipes.push(newRecipe)
    writeRecipe(allRecipes)
}

let newRecipe = {
    id: 3,
    name: 'Amala and Ewedu',
    ingredients: [ 'Yam Flour', 'Ewedu Leaves', 'Kpomo'],
    instructions: [ 'Mix Amala' ]
}
createRecipe(newRecipe)

module.exports = {readRecipe, writeRecipe}

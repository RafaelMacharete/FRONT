/*
Create a new array of names.

Write a new function that checks if a name is in your array. This function
should take a name as a parameter and return a boolean.

Use this function to check if various names are in your array and log the 
results.
*/

const namesList: string[] = ['Rafael', 'da', 'Silva', 'Macharete', 'mAcharete']

function checkANameInNamesList(namesToCheck: string[]): boolean {
    for (const name of namesToCheck) {
        if (namesList.includes(name)) {
            console.log(name);
            return true;
        }
    }
    return false;
}

checkANameInNamesList(['Rafael', 'da', 'Silva']);
/*
    ==================
    Title: mclaurine-palindrome.js, 
    Author: Trevor McLaurine
    Date: 3/22/2023
    Description: An application that checks to see if the user input is a palindrome.
*/

// This bit of code checks to see if the HTML document has loaded.
window.addEventListener("DOMContentLoaded", () => { 

    // Finds and links various html elements to variables.
    const phraseButton = document.getElementById('btnCheckPhrase')
    const inputPhrase = document.querySelector('input') 
    const txtPhrase = document.getElementById('txtPhrase')
    const assignResultsHeader = document.getElementById('assign-results-header')
    const assignResults = document.getElementById('assign-results')
    let phraseValue = txtPhrase.value;

    //gets today's date and collects each variable into a string
    const getTodaysDate = () => {
        let today = new Date(); 

        let day = today.getDate()
        let month = today.getMonth() + 1; 
        let year = today.getFullYear()

        //checks to see if month is less than 10 to see if a 0 is needed in front of the month number.
        month = month < 10 ? '0' + month : month;

        return(month + '/' + day + '/' + year)
    }

    //gets the length of the user input
    const getLength = (phrase) => {
        return phrase.length; 
    }

    //splits the input into an array, reverses it and then joins it back together in one, single line.
    const reverse = (phrase) => {
        return phrase.split('').reverse().join(''); 
    }

    //checks to see if user input is indeed a palindrome.
    const isPalindrome = (phrase) => { 
        let phraseReversed = reverse(phrase); 
        if(phraseReversed === phrase) {
            return true
        }
        return false; 
    }

    //updates the value of the user input each time the user types or deletes
    const updatePhrase = (e) => {
        phraseValue = e.target.value
    }

    const todaysDate = getTodaysDate()

    // an event listener to check when the user has inputted or deleted anything in the input box. 
    inputPhrase.addEventListener('input', (e) => {
        updatePhrase(e)
    }) 

    //This adds the event listener so when the user clicks the button it performs the palindrome check
    phraseButton.addEventListener('click', (e) => {
        //performs the check palindrome function to see if it works. 
        let palindrome = isPalindrome(phraseValue)
        const len = getLength(phraseValue)

        //creates the header that contains the variable's values.
        const header = `
                <div>
                    Date: ${todaysDate}<br>
                    Original Phrase: ${phraseValue}<br>
                    Reversed Phrase: ${reverse(phraseValue)}<br>
                    Phrase Length: ${len} <br>
                </div>
                `
        assignResultsHeader.innerHTML = header;

        //sets results based on if the user input is a palindrome or not.
        if(palindrome) {
            assignResults.innerHTML = 
            `
                ${phraseValue} <b><u>is</u></b> a palindrome!
            `
            return
        }
        else {
            assignResults.innerHTML = 
            `
                <div>
                    ${phraseValue} <b><u>is not</u></b> a palindrome!
                </div>
            `
        }
    })

    //resets the user input
    txtPhrase.value = ''
})
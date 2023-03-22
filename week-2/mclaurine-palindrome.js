/*
    ==================
    Title: mclaurine-numbergame.js, 
    Author: Trevor McLaurine
    Date: 1/23/2023
    Description: A guess the number game.
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

    const getTodaysDate = () => {
        let today = new Date(); 

        let day = today.getDate()
        let month = today.getMonth() + 1; 
        let year = today.getFullYear()

        month = month < 10 ? '0' + month : month;

        return(month + '/' + day + '/' + year)
    }

    const getLength = (phrase) => {
        return phrase.length; 
    }

    const reverse = (phrase) => {
        console.log(phrase)
        return phrase.split('').reverse().join(''); 
    }

    const isPalindrome = (phrase) => { 
        let phraseReversed = reverse(phrase); 
        if(phraseReversed === phrase) {
            return true
        }
        return false; 
    }

    const updatePhrase = (e) => {
        phraseValue = e.target.value
        getLength(phraseValue)
    }

    const todaysDate = getTodaysDate()
    const header = `
                <div>
                    Date: ${todaysDate}<br>
                    Original Phrase: ${phraseValue}<br>
                    Reversed Phrase: ${reverse(phraseValue)}<br>
                    Phrase Length: ${getLength(phraseValue)} <br>
                </div>
                `

    inputPhrase.addEventListener('input', (e) => {
        updatePhrase(e)
    }) 

    //This adds the event listener so when the user clicks the button it performs the conversion function
    phraseButton.addEventListener('click', (e) => {
        //This sets the value of the temperature results div to the value received from the convertTemperature function.
        let palindrome = isPalindrome(phraseValue)
        assignResultsHeader.innerHTML = header;
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
    txtPhrase.value = ''
})
var rangeHeight = document.getElementById('rangeHeight')
var rangeWeight = document.getElementById('rangeWeight')
var resultsHeight = document.querySelector('.subtitleHeight')
var resultsWeight = document.querySelector('.subtitleWeight')
var imgResults = document.querySelector('.imghuman')
var resultsTitle = document.querySelector('.titleRes')
var resultsSubitle = document.querySelector('.subtitleRes')
var btnCheck = document.querySelector('.btn-checkk')


rangeHeight.addEventListener('input', () => {
    resultsHeight.innerHTML = rangeHeight.value 
})

rangeWeight.addEventListener('input', () => {
    resultsWeight.innerHTML = rangeWeight.value 
})

btnCheck.addEventListener('click', () => {
    var height = (resultsHeight.textContent / 100)
    var results = resultsWeight.textContent / (height * height)
    results = results.toFixed(2)
    if(results < 18.5) {
        resultsTitle.innerHTML = "UnderWeight"
        resultsSubitle.innerHTML = "(" + results + ")"
        imgResults.src="./assets/img/humanUnderweight.png"
    }
    else if(results > 18.5 && results < 24.9) {
        resultsTitle.innerHTML = "Normal"
        resultsSubitle.innerHTML = "(" + results + ")"
        imgResults.src="./assets/img/humanNormal.png"
    }
    else if(results > 25 && results < 29.9 ) {
        resultsTitle.innerHTML = "OverWeight"
        resultsSubitle.innerHTML = "(" + results + ")"
        imgResults.src="./assets/img/humanOverWeight.png"
    }
    else if(results > 30 && results < 39) {
        resultsTitle.innerHTML = "Obesity"
        resultsSubitle.innerHTML = "(" + results + ")"
        imgResults.src="./assets/img/humanObesity.png"
    }
    else if(results > 40) {
        resultsTitle.innerHTML = "Extreme Obesity"
        resultsSubitle.innerHTML = "(" + results + ")"
        imgResults.src="./assets/img/humanExtremenweight.png"
    }
    else {

    }

})




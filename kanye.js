// Make a function

function dataCollect(){
    fetch('https://api.kanye.rest')
    .then(response => response.json())
    .then(data => allData(data))
}

// Another Function

function allData(data){
    document.querySelector('.dataLoad').innerHTML = data.quote
}
dataCollect()


// Working Fine 

// For Code check descriptio

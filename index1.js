let container = document.querySelector('.container')
let title = document.querySelector('.title')
let movieInput = document.querySelector('.movie-input')
let movies = document.querySelector('.movies')
let buttons = document.querySelector('.buttons')
let btnSave = document.querySelector('.btn-save')
let btnReset = document.querySelector('.btn-reset')

function getMovie(){
    let movie = input.value
    fetch(`http://www.omdbapi.com/?i={omdb}8&apikey={omdb api}=${movie}`)
    .then(movie => {
        
        return movie.json()
    })
    .then(movie => {
        console.log(movie)
        
        // boxMovie
        let boxMovie = document.createElement('div')
        boxMovie.setAttribute('class', 'boxMovie')
        movies.appendChild(boxMovie)

        // movieInformation
        let information = document.createElement('div')
        information.setAttribute('class', 'information')
        boxMovie.appendChild(information)

        // title
        let title = document.createElement('h2')
        title.setAttribute('class', 'title')
        title.innerText = movie.Title
        information.appendChild(title)
        console.log(movie)

        // date
        let date = document.createElement('div')
        date.setAttribute('class', 'date')
        date.innerText =  'Release date : ' + movie.Released
        information.appendChild(date)

        // run Time
        let runTime = document.createElement('div')
        runTime.setAttribute('class', 'rating')
        information.appendChild(runTime)
        runTime.innerText = 'Run time : '+ movie.Runtime
        
        // rated
        let rated = document.createElement('div')
        rated.setAttribute('class', 'rating')
        information.appendChild(rated)
        rated.innerText = 'Rated : '+ movie.Rated

        // plot
        let plot = document.createElement('div')
        let plotWord = document.createElement('div')
        plotWord.setAttribute('class', 'plotWord')
        plotWord.innerText ='Plot :'
        information.appendChild(plotWord)
        plot.setAttribute('class', 'plot')
        information.appendChild(plot)
        plot.innerText =  movie.Plot
        
    })
    
}


let arrayOfMovies =[]
movieInput.addEventListener('keypress', function(e){
   
    if(e.key === 'Enter'){
        getMovie()
        
            let movie = input.value
            arrayOfMovies.push(movie)
           
          
    }
})

btnSave.addEventListener('click', () =>{
   for(let item of arrayOfMovies){
       if(item !==""){
           const moviesArr = JSON.parse(localStorage.getItem('moviesArr')) || [];
           moviesArr.push(item);
           localStorage.setItem('moviesArr', JSON.stringify(moviesArr));
           item = "";
        //    getFromLocalStorage()
       }
   }
})


function getFromLocalStorage(){
    const storedMovies = localStorage.getItem('moviesArr');
    const moviesFromStorage = JSON.parse(storedMovies)
    if(localStorage.getItem("moviesArr") !== null){
      moviesFromStorage.forEach((item) =>{
        fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=cb40a4fb&t=${item}`)
        .then(movie => {
            
            return movie.json()
        })
        .then(movie => {
            
            // boxMovie
            let boxMovie = document.createElement('div')
            boxMovie.setAttribute('class', 'boxMovie')
            movies.appendChild(boxMovie)
    
            // movieInformation
            let information = document.createElement('div')
            information.setAttribute('class', 'information')
            boxMovie.appendChild(information)
    
            // title
            let title = document.createElement('h2')
            title.setAttribute('class', 'title')
            title.innerText = movie.Title
            information.appendChild(title)
            console.log(movie)
    
            // date
            let date = document.createElement('div')
            date.setAttribute('class', 'date')
            date.innerText =  'Release date : ' + movie.Released
            information.appendChild(date)
    
            // rating
            let rating = document.createElement('div')
            rating.setAttribute('class', 'rating')
            information.appendChild(rating)
            rating.innerText =  'Rating : ' + movie.imdbRating
    
            // plot
            let plot = document.createElement('div')
            let plotWord = document.createElement('div')
            plotWord.setAttribute('class', 'plotWord')
            plotWord.innerText ='Plot :'
            information.appendChild(plotWord)
            plot.setAttribute('class', 'plot')
            information.appendChild(plot)
            plot.innerText =  movie.Plot
            
        })
      })
    }
    
}

if(localStorage){
    getFromLocalStorage()
}

btnReset.addEventListener('click', () =>{
    localStorage.clear()
})



// Exercise 1: Get the array of all directors.
function getAllDirectors(array) {
  let result = array.map((movie) => {

    if (movie.director == 'Stanley Kubrick' || movie.director == 'Quentin Tarantino') {
      return movie.director;
    }

  });
  return result;
}

// Exercise 2: Get the films of a certain director
function getMoviesFromDirector(array, director) {
  let result = array.filter((movie) => movie.director == director);
  return result;
}

// Exercise 3: Calculate the average of the films of a given director.
function moviesAverageOfDirector(array, director) {
  let result = 0;
  let quantity = 0;
  array.forEach(movie => {
    if (movie.director == director) {
      quantity++
      result += movie.score
    }
  }
  )
  result = parseFloat(((result / quantity).toFixed(2)));

  return result;
}

// Exercise 4:  Alphabetic order by title 
function orderAlphabetically(array) {
  arrayOfTitles = array.map((object) =>
    object.title).sort();
  result = arrayOfTitles.slice(0, 20);
  return result
}

// Exercise 5: Order by year, ascending
function orderByYear(array) {
  arrayOfYears = array.sort((a, b) => {
    if (a.year > b.year) { return 1 }
    if (a.year < b.year) { return -1 }
    if (a.year == b.year) {
      if (a.title > b.title) { return 1 }
      if (a.title < b.title) { return -1 }
    }
  });
  result = arrayOfYears.map((object) => {
    return { 'title': object.title, 'year': object.year };
  });
  return result
}

// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory() {

}

// Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes() {

}

// Exercise 8: Get the best film of a year
function bestFilmOfYear() {

}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    getMoviesFromDirector,
    moviesAverageOfDirector,
    orderAlphabetically,
    orderByYear,
    moviesAverageByCategory,
    hoursToMinutes,
    bestFilmOfYear,
  };
}

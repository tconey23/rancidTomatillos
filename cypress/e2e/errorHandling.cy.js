describe('eError handling', () => {

  it('Should display an error when the home page doesnt load',  () => {
    cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies', {
      statusCode: 500,
    })
    .visit('http://localhost:3000')
  })

  it('Should display an error when a bad path is entered', () => {
    cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies', {
      statusCode: 200,
      body: {
        'movies': [{
        "id": 694919,
        "poster_path": "https://image.tmdb.org/t/p/original//6CoRTJTmijhBLJTUNoVSUNxZMEI.jpg",
        "backdrop_path": "https://image.tmdb.org/t/p/original//pq0JSpwyT2URytdFG0euztQPAyR.jpg",
        "title": "Money Plane",
        "average_rating": 6.666666666666667,
        "release_date": "2020-09-29"
      }]
    }
    })
    .visit('http://localhost:3000/movies/blackadam')
    .get('.error-modal > div > h3')
    .contains('rancidtomatillos/movies/blackadam could not be found')
  })

  it('Should display an error when a movie doesnt load',  () => {
      cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies', {
      statusCode: 200,
      body: {
          'movies': [{
          "id": 694919,
          "poster_path": "https://image.tmdb.org/t/p/original//6CoRTJTmijhBLJTUNoVSUNxZMEI.jpg",
          "backdrop_path": "https://image.tmdb.org/t/p/original//pq0JSpwyT2URytdFG0euztQPAyR.jpg",
          "title": "Money Plane",
          "average_rating": 6.666666666666667,
          "release_date": "2020-09-29"
        },
        {
          "id": 337401,
          "poster_path": "https://image.tmdb.org/t/p/original//aKx1ARwG55zZ0GpRvU2WrGrCG9o.jpg",
          "backdrop_path": "https://image.tmdb.org/t/p/original//zzWGRw277MNoCs3zhyG3YmYQsXv.jpg",
          "title": "Mulan",
          "average_rating": 4.909090909090909,
          "release_date": "2020-09-04"
        }]      
      } 
    })

    cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies/694919', {
      statusCode: 500,
    })

    .visit('http://localhost:3000')
    .get('[href="/movie/694919"] > .imageCard').click()
    .get('.error-modal > div > h3')
    .contains('Failed to get movie')
  })
})
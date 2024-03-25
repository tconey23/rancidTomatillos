describe('home page', () => {
    beforeEach(() => {
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
      .visit('http://localhost:3000/')
    })

    it('should display the title of the application on page load', () => {
      cy.contains("Rancid Tomatillos")
    })

    it('should display a collection of movies on page load', () => {
      cy.get('.icons-container')
      .get('a')
      .should('have.length', 2)
      .contains('h3', 'Money Plane')
      .get('a')
      .should('exist', '.image-card')
    })
})


// body: {
//   'movies': [{
//   "id": 694919,
//   "poster_path": "https://image.tmdb.org/t/p/original//6CoRTJTmijhBLJTUNoVSUNxZMEI.jpg",
//   "backdrop_path": "https://image.tmdb.org/t/p/original//pq0JSpwyT2URytdFG0euztQPAyR.jpg",
//   "title": "Money Plane",
//   "average_rating": 6.666666666666667,
//   "release_date": "2020-09-29"
// }]      
// }
// })
     // {
      //   "id": 337401,
      //   "poster_path": "https://image.tmdb.org/t/p/original//aKx1ARwG55zZ0GpRvU2WrGrCG9o.jpg",
      //   "backdrop_path": "https://image.tmdb.org/t/p/original//zzWGRw277MNoCs3zhyG3YmYQsXv.jpg",
      //   "title": "Mulan",
      //   "average_rating": 4.909090909090909,
      //   "release_date": "2020-09-04"
      // }
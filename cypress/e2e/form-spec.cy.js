describe('filter movies form ', () => {
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
        },
        {
          "id": 718444,
          "poster_path": "https://image.tmdb.org/t/p/original//uOw5JD8IlD546feZ6oxbIjvN66P.jpg",
          "backdrop_path": "https://image.tmdb.org/t/p/original//x4UkhIQuHIJyeeOTdcbZ3t3gBSa.jpg",
          "title": "Rogue",
          "average_rating": 5.428571428571429,
          "release_date": "2020-08-20"
        },
        {
          "id": 539885,
          "poster_path": "https://image.tmdb.org/t/p/original//qzA87Wf4jo1h8JMk9GilyIYvwsA.jpg",
          "backdrop_path": "https://image.tmdb.org/t/p/original//54yOImQgj8i85u9hxxnaIQBRUuo.jpg",
          "title": "Ava",
          "average_rating": 5.111111111111111,
          "release_date": "2020-07-02"
        },
        {
          "id": 581392,
          "poster_path": "https://image.tmdb.org/t/p/original//sy6DvAu72kjoseZEjocnm2ZZ09i.jpg",
          "backdrop_path": "https://image.tmdb.org/t/p/original//gEjNlhZhyHeto6Fy5wWy5Uk3A9D.jpg",
          "title": "Peninsula",
          "average_rating": 7,
          "release_date": "2020-07-15"
        },
        {
          "id": 726739,
          "poster_path": "https://image.tmdb.org/t/p/original//4BgSWFMW2MJ0dT5metLzsRWO7IJ.jpg",
          "backdrop_path": "https://image.tmdb.org/t/p/original//t22fWbzdnThPseipsdpwgdPOPCR.jpg",
          "title": "Cats & Dogs 3: Paws Unite",
          "average_rating": 7.4,
          "release_date": "2020-10-02"
        }]      
      } 
    })
  })


  it('should filter movies based on user input', () => {
    cy.visit('http://localhost:3000')
    .get('form').contains('label', 'Filter Movies:')
    .get('input').type('M')
    .get('.icons-container')
    .get('a').should('have.length', 2)
    .get('input').type('u')
    .get('a').should('have.length', 1)
    .get('input').type('{backspace}')
    .get('a').should('have.length', 2)
  })

})
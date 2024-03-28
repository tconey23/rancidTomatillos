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

    it('should display an error message when fetch fails', () => {
      cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies', {
        statusCode: 500
    })
    .get('.error-modal')
    .contains('h3', "We're sorry!")
  })

  it('should display a specific movie\'s details when clicked', () => {
    cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies/694919', {
      statusCode: 200,
      body: {
        "movie": {
            "id": 694919,
            "title": "Money Plane",
            "poster_path": "https://image.tmdb.org/t/p/original//pFlaoHTZeyNkG83vxsAJiGzfSsa.jpg",
            "backdrop_path": "https://image.tmdb.org/t/p/original//bQXAqRx2Fgc46uCVWgoPz5L5Dtr.jpg",
            "release_date": "2022-10-19",
            "overview": "Nearly 5,000 years after he was bestowed with the almighty powers of the Egyptian gods—and imprisoned just as quickly—Black Adam is freed from his earthly tomb, ready to unleash his unique form of justice on the modern world.",
            "genres": [
                "Action",
                "Fantasy",
                "Science Fiction"
            ],
            "budget": 200000000,
            "revenue": 384571691,
            "runtime": 125,
            "tagline": "The world needed a hero. It got Black Adam.",
            "average_rating": 4
        }
    }
  })
    cy.get('a')
    .contains('h3', 'Money Plane')
    .click()
    .get('.modal-content')
    .contains('h2', 'Money Plane') 
  })
})


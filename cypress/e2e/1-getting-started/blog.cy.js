describe('Blog app', function () {
  beforeEach(function () {
    cy.visit('http://localhost:3000')
  })

  it('front page can be opened', function () {
    cy.contains('Blogs')
    cy.contains('login')
  })

  it('login form can be opened', function () {
    cy.contains('login').click()
  })

  it('user can log in', function () {
    cy.contains('login').click()
    cy.get('#username').type('orange')
    cy.get('#password').type('123456')
    cy.get('#login-button').click()
    cy.contains('Orange logged in')
  })

  describe('when logged in', function () {
    beforeEach(function () {
      cy.contains('login').click()
      cy.get('#username').type('orange')
      cy.get('#password').type('123456')
      cy.get('#login-button').click()
    })

    it('a new blog can be created', function () {
      cy.contains('new blog').click()
      cy.get('#title').type('a blog created by cypress')
      cy.get('#author').type('orange')
      cy.get('#url').type('http://testing.com')
      cy.get('#create-blog').click()
      cy.contains('a blog created by cypress')
    })
  })
})

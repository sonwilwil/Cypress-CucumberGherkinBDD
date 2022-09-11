describe('test', () => {
    it('test login', () => {
        cy.visit(('/')+'#/login')
        cy.fixture('elements').then((data) => {
            cy.get('[placeholder="Email"]').clear().type(data.email)
            cy.get('[placeholder="Password"]').clear().type(data.pass)
        })
    });
});
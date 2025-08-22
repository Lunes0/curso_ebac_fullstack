/// <reference types="cypress" />

describe("Testes para a página principal", () => {
  beforeEach(() => {
    cy.visit("https://ebac-agenda-contatos-tan.vercel.app/");
  });

  it("Deve renderizar 3 contatos", () => {
    cy.get(".contato").should("have.length", 3);
  }),
    it("Deve remover 1 contato", () => {
      cy.get(":nth-child(4) > .sc-gueYoa > .delete").click();
      cy.get(".contato").should("have.length", 2);
    }),
    it("Deve adicionar 1 contato", () => {
      cy.get("input[type='text']").type("nome teste");
      cy.get("input[type='email']").type("nometeste@email.com");
      cy.get("input[type='tel']").type("01 912345678");
      cy.get(".adicionar").click();
      cy.get(".contato").should("contain.text", "nome teste");
      cy.get(".contato").should("contain.text", "nometeste@email.com");
      cy.get(".contato").should("contain.text", "01 912345678");
    });
});

/// <reference types="cypress" />

describe("Agenda de contatos: Deletar", () => {
  beforeEach(() => cy.visit("https://agenda-contatos-react.vercel.app/"));

  it("Deve deletar um contato", () => {
    //Adiciona 1 contato
    cy.get('input[type="text"]').type("Alexsander Wallace");
    cy.get('input[type="email"]').type("alexsander@gmail.com");
    cy.get('input[type="tel"]').type("3599222222");
    cy.get('button[class="adicionar"]').click();

    //Adiciona 1 contato
    cy.get('input[type="text"]').type("jack2");
    cy.get('input[type="email"]').type("jack2@gmail.com");
    cy.get('input[type="tel"]').type("22222222222");
    cy.get('button[class="adicionar"]').click();

    //Remove o ultimo contato adicionano
    cy.wait(1000);
    cy.get(":last-child > .sc-gueYoa > .delete").click();

    //E esperadom que contenha apenas 1 contato n lista
    cy.get("ul").should("have.length.lessThan", 2);
  });
});

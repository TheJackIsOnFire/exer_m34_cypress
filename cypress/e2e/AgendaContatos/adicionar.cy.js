/// <reference types="cypress" />

describe("Agenda de contatos: Adicionar contato", () => {
  beforeEach(() => cy.visit("https://agenda-contatos-react.vercel.app/"));

  it("Deve testar a adição de um novo contato", () => {
    //Adiciona 1 contato
    cy.get('input[type="text"]').type("Alexsander Wallace");
    cy.get('input[type="email"]').type("alexsander@gmail.com");
    cy.get('input[type="tel"]').type("35998726945");
    cy.get('button[class="adicionar"]').click();

    //Testa se o tamanho da lista
    cy.get("ul").should("have.length.greaterThan", 0);

    //Verifica se os dados do contato adicionado estão na lista
    cy.get("ul > li:nth-child(1)").should("include.text", "Alexsander Wallace");
    cy.get("ul > li:nth-child(2)").should("include.text", "35998726945");
    cy.get("ul > li:nth-child(3)").should(
      "include.text",
      "alexsander@gmail.com"
    );
  });
});

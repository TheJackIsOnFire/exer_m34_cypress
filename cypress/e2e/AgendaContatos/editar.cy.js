/// <reference types="cypress" />

describe("Agenda de contatos: Alterar contato", () => {
  beforeEach(() => cy.visit("https://agenda-contatos-react.vercel.app/"));

  it("Testando botões: editar/cancelar", () => {
    //Adiciona um contato
    cy.get('input[type="text"]').type("Alexsander Wallace");
    cy.get('input[type="email"]').type("alexsander@gmail.com");
    cy.get('input[type="tel"]').type("35998726945");
    cy.get('button[class="adicionar"]').click();

    //Testa os botões
    cy.get(":nth-child(2) > .sc-gueYoa > .edit").click();
    cy.get('button[class="cancelar"]').click();
  });

  it("Deve editar um contato e salvar", () => {
    //Clica no botão editar
    cy.get(":nth-child(2) > .sc-gueYoa > .edit").click();

    //Limpa os campos do formulario
    cy.get('input[type="text"]').clear();
    cy.get('input[type="email"]').clear();
    cy.get('input[type="tel"]').clear();

    //Adiciona novos dados
    cy.get('input[type="text"]').type("Daymon Black");
    cy.get('input[type="email"]').type("DaymonBlack@gmail.com");
    cy.get('input[type="tel"]').type("35999999999");

    //salva as alteracões
    cy.get('button[class="alterar"]').click();

    //Verifica se os dados inseridos estao na lista de contatos
    cy.get("ul > li:nth-child(1)").should("include.text", "Daymon Black");
    cy.get("ul > li:nth-child(2)").should("include.text", "35999999999");
    cy.get("ul > li:nth-child(3)").should(
      "include.text",
      "DaymonBlack@gmail.com"
    );
  });
});

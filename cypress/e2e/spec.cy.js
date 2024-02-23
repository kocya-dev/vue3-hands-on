const soldOut = () => {
  cy.get("[class=header]").next().contains("3");
  cy.get("[type=button]").contains("売り切れ").click();
  cy.get("[class=header]").next().contains("2");
  cy.get("[type=button]").contains("売り切れ").click();
  cy.get("[class=header]").next().contains("1");
  cy.get("[type=button]").contains("売り切れ").click();
  cy.get("[class=header]").next().contains("0");
};
const receiveProduct = () => {
  cy.get("[class=header]").next().contains("0");
  cy.get("[type=button]").contains("入荷").click();
  cy.get("[class=header]").next().contains("1");
  cy.get("[type=button]").contains("入荷").click();
  cy.get("[class=header]").next().contains("2");
  cy.get("[type=button]").contains("入荷").click();
  cy.get("[class=header]").next().contains("3");
  cy.get("[type=button]").contains("入荷").click();
  cy.get("[class=header]").next().contains("4");
};

describe("header test", () => {
  it("init", () => {
    cy.visit("");
    cy.get("h1").contains("Vue.js ハンズオン");
  });
  it("sold-out", () => {
    cy.visit("");
    soldOut();
  });
  it("sold-out-clear", () => {
    cy.visit("");
    soldOut();
    receiveProduct();
  });
});

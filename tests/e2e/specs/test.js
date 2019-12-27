// https://docs.cypress.io/api/introduction/api.html

describe("测试e2e", () => {
  it("访问一下", () => {
    cy.visit("/");
    cy.contains("#message", "开课吧");
    cy.get("button").click();
    cy.contains("#message", "点击文案");
  });
});

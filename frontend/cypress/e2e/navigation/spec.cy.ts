function moveToEachPageWhenNaviClicked({
  naviDiaplayName,
  eachPageHeaderDisplayValue,
  movedURL,
}: {
  naviDiaplayName: string;
  eachPageHeaderDisplayValue: string;
  movedURL: string;
}) {
  cy.visit(Cypress.env("HOST"));
  cy.get(".sidebar").contains(naviDiaplayName).click();
  cy.get(".main-content").contains(eachPageHeaderDisplayValue);
  cy.url().should("include", movedURL);
}

describe("navigation", () => {
  it("getstarted navigation", () => {
    moveToEachPageWhenNaviClicked({
      naviDiaplayName: "Get Started",
      eachPageHeaderDisplayValue: "Get Started",
      movedURL: "getstarted",
    });
  });
  it("weather navigation", () => {
    moveToEachPageWhenNaviClicked({
      naviDiaplayName: "Weather",
      eachPageHeaderDisplayValue: "Weather",
      movedURL: "weather",
    });
  });
  it("setting navigation", () => {
    moveToEachPageWhenNaviClicked({
      naviDiaplayName: "Setting",
      eachPageHeaderDisplayValue: "Setting",
      movedURL: "setting",
    });
  });
});

// @ts-ignore
function moveToEachPageWhenNaviClicked({naviDiaplayName, eachPageHeaderDisplayValue, movedURL}){
    cy.visit('localhost:3000')
    cy.get('.sidebar').contains(naviDiaplayName).click()
    cy.get('.main-content').contains(eachPageHeaderDisplayValue)
    cy.url().should('include', movedURL)
}

describe('navigation', () => {
  it('getstarted navigation', () => {
    moveToEachPageWhenNaviClicked({naviDiaplayName:"Get Started",  eachPageHeaderDisplayValue:"Get Started", movedURL:"getstarted"})
  })
  it('setting navigation', () => {
    moveToEachPageWhenNaviClicked({naviDiaplayName:"Setting",  eachPageHeaderDisplayValue:"Setting", movedURL:"setting"})
  })
})
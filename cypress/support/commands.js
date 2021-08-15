Cypress.Commands.add("any", { prevSubject: "element" }, (subject, size = 1) => {
  cy.wrap(subject).then((elementList) => {
    elementList = elementList.jquery ? elementList.get() : elementList;
    elementList = Cypress._.sampleSize(elementList, size);
    elementList = elementList.length > 1 ? elementList : elementList[0];
    cy.wrap(elementList);
  });
});

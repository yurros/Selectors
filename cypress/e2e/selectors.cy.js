describe: "tesla";
it("should do register user", () => {
  cy.visit("http://localhost:3000/apps/tesla.html");

  // first name input field on registration form
  cy.get("form.registration input[name=first_name]").type("Yuriy");
  // Last name input field on registration form
  cy.get("form.registration input[name=last_name]").type("Ros");
  // About input field on registration form
  cy.get("form.registration textarea[name=about]").type("I am stranger").click;
  // Email input field on registration form
  cy.get("form.registration input[name=email]").type("Test123@gmail.com");
  // Password input field on registration form
  cy.get("form.registration input[name=password]").type("123456");
  //Press button Submit
  cy.get("form.registration button[type=submit]").click();
  //assertion of registration
  cy.get(".main .success").should("have.text", "Вы зарегистрированы");
  //assertion of copyright
  cy.get("footer p[data-cy=copyright]").should(
    "have.text",
    "Все права защищены."
  );
});
it("should do register user", () => {
  cy.visit("http://localhost:3000/apps/tesla.html");
  cy.get("form.login input[name=email]").type("rrr@gmail.com");
  cy.get("form.login input[name=password]").type("111111");
  cy.get("form.login button[type=submit").click();
  //assertion of registration
  cy.get(".main .success").should("have.text", "Вы вошли");
  //assertion of copyright
  cy.get("footer p[data-cy=copyright]").should(
    "have.text",
    "Все права защищены."
  );
});

describe: "tesla";
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

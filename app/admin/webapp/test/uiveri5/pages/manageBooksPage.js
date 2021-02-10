module.exports = createPageObjects({
  ManageBooks: {
    actions: {
      iClickOnCreateNewBook: function () {
        element(
          by.control({
            id:
              "admin::BooksList--fe::table::Books::LineItem::StandardAction::Create",
          })
        ).click();
      },
      iEnterBookId: function (sBookId) {
        element(
          by.control({
            id:
              "CreateDialog::Books::ID-inner",
            interaction: {
              idSuffix: "inner",
            },
          })
        ).sendKeys(sBookId);
      },
      iClickOnCreateInDialog: function () {
        element(
          by.control({
            id:
              "__button39",
          })
        ).click();
      }
    },

    assertions: {
      theBookListContains: function (sBook) {
        var book = element(
          by.control({
            controlType: "sap.m.Label",
            viewName: "sap.fe.templates.ListReport.ListReport",
            properties: {
              text: sBook,
            },
          })
        );
        expect(book.isPresent()).toBeTruthy();
      },
    },
  },
});

const argv = require("yargs").argv;

const operations = require("./contacts");

const invokeAction = async ({ action, id, name, email, phone }) => {
  switch (action) {
    case "list":
      const contacts = await operations.listContacts();
      return console.log("listContacts", contacts);

    case "get":
      const contact = await operations.getContactById(id);
      return console.log("getContactById", contact);

    case "add":
      const newContact = await operations.addContact(name, email, phone);
      return console.log("addContact", newContact);

    case "remove":
      const removedContact = await operations.removeContact(id);

      return console.log("removeContact", removedContact);

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
};

invokeAction(argv);

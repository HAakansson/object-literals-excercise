// ---------- store-object ----------
let ica = {
  name: "Ica Supermarket Skurup",
  address: "Drottninggatan 29",
  zipcode: "12389",
  city: "Skurup",
  staff: [],
  products: [],
  hireStaff: function (person) {
    // Vi använder oss av "this" här, för att "this" hänvisare till det egna objektet. Så "this" = ica
    this.staff.push(person);
    person.worksAt = this;
    return this;
  },
  fireStaff: function (person) {
    // Vi kan här använder en arraymetod som heter filter(), den filtrerar bort element utifrån ett villkor. Är villkoret sant, så behålls elementet. Är villkoret falskt så sorteras det bort.
    this.staff = this.staff.filter((p) => p !== person);
    return this;
  },
};

// ---------- person-objects ----------
let niklas = {
  firstName: "Niklas",
  lastName: "Håkansson",
  age: 30,
  salary: 45000,
  worksAt: null,
  startWorkAt: function (store) {
    this.worksAt = store;
    store.staff.push(this);
    return this;
  },
};

let erik = {
  firstName: "Erik",
  lastName: "Jansson",
  age: 45,
  salary: 23000,
  worksAt: null,
  startWorkAt: function (store) {
    this.worksAt = store;
    store.staff.push(this);
    return this;
  },
};

let sofia = {
  firstName: "Sofia",
  lastName: "Karlsson",
  age: 22,
  salary: 60000,
  worksAt: null,
  startWorkAt: function (store) {
    this.worksAt = store;
    store.staff.push(this);
    return this;
  },
};

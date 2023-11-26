const mockShoppingLists = [
  {
    id: 1,
    name: "Grocery List",
    items: [
      { id: 101, name: "Apples", quantity: 5, archived: false },
      { id: 102, name: "Milk", quantity: 2, archived: false },
      // Add more items as needed
    ],
    members: [
      {
        id: 201,
        name: "Alice",
        role: "Owner",
        email: "alice@example.com",
        password: "password123",
      },
      {
        id: 202,
        name: "Bob",
        role: "Member",
        email: "bob@example.com",
        password: "password456",
      },
      // Add more members as needed
    ],
  },
  {
    id: 2,
    name: "Home Improvement",
    items: [
      { id: 103, name: "Paint", quantity: 1, color: "Blue", archived: false },
      { id: 104, name: "Brushes", quantity: 3, archived: false },
      // Add more items as needed
    ],
    members: [
      {
        id: 203,
        name: "Charlie",
        role: "Owner",
        email: "charlie@example.com",
        password: "password789",
      },
      {
        id: 204,
        name: "David",
        role: "Member",
        email: "david@example.com",
        password: "passwordABC",
      },
      // Add more members as needed
    ],
  },
  {
    id: 3,
    name: "Electronics Wishlist",
    items: [
      { id: 105, name: "Smartphone", quantity: 1, archived: false },
      { id: 106, name: "Laptop", quantity: 1, archived: false },
      // Add more items as needed
    ],
    members: [
      {
        id: 205,
        name: "Emily",
        role: "Owner",
        email: "emily@example.com",
        password: "passwordDEF",
      },
      {
        id: 206,
        name: "Frank",
        role: "Member",
        email: "frank@example.com",
        password: "passwordGHI",
      },
      // Add more members as needed
    ],
  },
  {
    id: 4,
    name: "Party Planning",
    items: [
      { id: 107, name: "Balloons", quantity: 20, archived: false },
      { id: 108, name: "Snacks", quantity: 3, archived: false },
      // Add more items as needed
    ],
    members: [
      {
        id: 207,
        name: "Grace",
        role: "Owner",
        email: "grace@example.com",
        password: "passwordJKL",
      },
      {
        id: 208,
        name: "Henry",
        role: "Member",
        email: "henry@example.com",
        password: "passwordMNO",
      },
      // Add more members as needed
    ],
  },
  // Add more shopping lists as needed
];

export default mockShoppingLists;

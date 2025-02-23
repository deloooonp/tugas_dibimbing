document.addEventListener("alpine:init", () => {
  Alpine.data("products", () => ({
    items: [
      { id: 1, name: "Red Velvet Cake", img: "cake1.jpeg", price: 40000 },
      { id: 2, name: "Chocolate Fudge Cake", img: "cake2.jpg", price: 45000 },
      { id: 3, name: "Lemon Raspberry Cake", img: "cake3.jpg", price: 50000 },
      {
        id: 4,
        name: "Japanese Strawberry Cake",
        img: "cake4.jpg",
        price: 50000,
      },
      { id: 5, name: "Croissant", img: "pastry1.jpg", price: 20000 },
      { id: 6, name: "Buttercream", img: "pastry2.jpg", price: 20000 },
      { id: 7, name: "Macaron", img: "dessert1.jpg", price: 10000 },
      { id: 8, name: "Tiramisu", img: "dessert2.jpg", price: 10000 },
    ],
  }));
});

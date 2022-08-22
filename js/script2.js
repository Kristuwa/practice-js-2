const cars = [
  {
    car: "Honda",
    type: "Civic",
    price: 12000,
  },
  {
    car: "Audi",
    type: "Q7",
    price: 40000,
  },
  {
    car: "BMW",
    type: "5 siries",
    price: 9000,
  },
  {
    car: "Honda",
    type: "Accord",
    price: 20000,
  },
  {
    car: "Volvo",
    type: "XC60",
    price: 7000,
  },
];
// let marka = prompt("Ведите название марки", "");
// const filterCars = cars
//   .filter((car) => car.car.toLowerCase() === marka.toLowerCase())
//   .sort((a, b) => a.price - b.price)
//   .map((car) => car.type);

// console.log(filterCars);

// const minPrice = Number(prompt("Введите минимальную цену", ""));
// const maxPrice = Number(prompt("Введите максимальную цену", ""));

// const filterCarsOfPrice = cars.filter(
//   (car) => car.price >= minPrice && car.price <= maxPrice
// );

// const reduceCars = filterCarsOfPrice.reduce(
//   (acc, car, index, array) => {
//     acc += `${index + 1}: ${car.car}, ${car.type} \n1`;
//     return acc;
//   },
//   filterCarsOfPrice.length
//     ? `Количество авто: ${filterCarsOfPrice.length} \n`
//     : "Ничего не найдено"
// );
// console.log(reduceCars);
// const str = "dfsdasdasffada 0 fsdfa";
// //{d: 5,f:5}
// const array = str.split("");

// const obj = array.reduce((acc, elem) => {
//   if (acc.hasOwnProperty(elem)) {
//     acc[elem] += 1;
//     return acc;
//   }
//   acc[elem] = 1;
//   return acc;
// }, {});
// console.log(obj);

// Стоврити функцію яка буде перебирати масив обєктів (films),з кожного обєкта потрібно взяти IDs жанрів фільмів та знайти
// їх в іншому єбєкті який буде містити в собі ID та назву жанру відповідну до цего ID.
// Функція повертає стрінгу з назвами фільмів та жанрами до яких цей фільм входить, якщо кількість жанрів більше двох потрібно
//  вивести назву перших двох жанрів і додати надпис 'Others'.
// В результаті маємо отримати:
//
// Films list:
// 1. 'Interceptor: Action, Thriller, Others.'
// 2. 'Fantastic Beasts: The Secrets of Dumbledore: Fantasy, Adventure, Others.'
// 3. 'Last Seen Alive: Action, Thriller.'
// 4. 'Jurassic World Dominion: Science Fiction, Action, Others.'
//
// Все повино бути так як написано в прикладі зверху(заголовок Films list: та кожний рядок повинен бути прономерований)!!!
// Все має бути одною стрінгою!!!
// const films = [
//   {
//     title: "Interceptor",
//     genre_ids: [28, 53, 12],
//   },
//   {
//     title: "Fantastic Beasts: The Secrets of Dumbledore",
//     genre_ids: [14, 12, 28],
//   },
//   {
//     title: "Last Seen Alive",
//     genre_ids: [28, 53],
//   },
//   {
//     title: "Jurassic World Dominion",
//     genre_ids: [878, 28, 12, 53],
//   },
// ];
// // // const obj = {
// const genres = [
//   {
//     id: 28,
//     name: "Action",
//   },
//   {
//     id: 12,
//     name: "Adventure",
//   },
//   {
//     id: 14,
//     name: "Fantasy",
//   },
//   {
//     id: 878,
//     name: "Science Fiction",
//   },
//   {
//     id: 53,
//     name: "Thriller",
//   },
//   {
//     id: 10752,
//     name: "War",
//   },
//   {
//     id: 37,
//     name: "Western",
//   },
// ];

// function getList(films, genres) {
//   films.forEach((film) => {
//     const names = film.genre_ids.map((currentId) => {
//       const genre = genres.find(({ id }) => id === currentId);

//       return genre.name;
//     });

//     film.genre_names = names;
//   });
//   console.log(films);

//   const str = films.reduce((acc, elem, index) => {
//     let newElem;
//     if (elem.genre_names.length > 2) {
//       newElem = `${elem.genre_names[0]}, ${elem.genre_names[1]}, Others`;
//     } else {
//       newElem = elem.genre_names.join(",");
//     }
//     acc += `${index + 1}. ${elem.title}: ${newElem} \n`;
//     return acc;
//   }, "Films list: \n");

//   return str;
// }
// console.log(getList(films, genres));

// потрібно створити функцію я буде формувати чергу в магазині
// 1 перший параметр масив, кілікість елементів це кількість покіпців, значення елементу масиву це час який покупець витратить на касі
// 2 параметр це кількість кас
// Повертає обєкт де ключ це номер касси, значення це час черги на касі

function turn(arrBuyers, numberCases) {
  const objs = {};
  for (let i = 1; i <= numberCases; i += 1) {
    objs[i] = 0;
  }
  //перебираем каждого покупателя и определяем на какую кассу отправить
  arrBuyers.forEach((element, index) => {
    const values = Object.values(objs);
    const minTime = Math.min(...values);
    const current = values.indexOf(minTime) + 1;

    console.log(`Buyer ${index} go to case ${current}`);
    objs[current] += element;
  });
  console.log(objs);
}

turn([12, 3, 5, 6, 2, 15, 7], 2);

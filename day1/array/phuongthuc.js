// Khai báo mảng
let users = ["Hải", "Hiền", "Hà", "Huy", "Dũng"];

// let user2  = new Array('Hải', 'Hà', 'Huy','Dũng'); // ít dùng vì dài

// 1. Kiểm tra 1 biến có phải là mảng hay không
Array.isArray(users); // true
console.log(typeof users); // object
console.log(typeof NaN); // number

// nếu đã là object => có các phương thức có sẵn
// duyệt mảng với for in, for of, forEach

// Xóa Hiền khỏi mảng với for
let indexDelete = 1;
result = [];
for (let key in users) {
  if (key == indexDelete) {
    continue;
  }
  result.push(users[key]);
}
console.log(result); // ["Hải", "Hà", "Huy", "Dũng"]

// 3 cách parse về number: +(value), parseInt(value), Number(value)

// 2. hàm set loại bỏ phần tử trùng nhau
let setArr = [1, 2, 3, 4, 5, 1, 2, 3, 4, 5];
let uniqueArr = [...new Set(setArr)]; // [1, 2, 3, 4, 5] // O(n^2)

// 3. hàm indexOf, lastIndexOf
console.log(users.indexOf("Hà")); // 2
// 4. hàm includes(value) => kiểm tra xem mảng có chứa value không
console.log(users.includes("Hải")); // true (áp dụng rất nhiều)

// 5. hàm slice(start, end) => cắt mảng từ start đến end-1
// hàm splice(start, deleteCount, item1, item2, ...) => xóa phần tử từ start, xóa deleteCount phần tử, thêm item1, item2, ...

// 6. join(separator) => chuyển mảng thành chuỗi: arr.join('separator');

// 7. hàm push(value) => thêm value vào cuối mảng, trả về độ dài mảng mới

// 8. hàm pop() => xóa phần tử cuối mảng, trả về phần tử bị xóa

//---------------------------------- LOOP + CALL BACK FUNCTION ----------------------------------
let users2 = ["Hải", "Huy", "Minh", "Vy", "Hà"];

// 1. hàm fill(value, start, end) => thay thế các phần tử từ start đến end-1 bằng value
users2.fill("Hùng", 1, 3); // ["Hải", "Hùng", "Hùng", "Vy", "Hà"]
console.log(users2);

// 2. hàm forEach(callback) => duyệt mảng, không thể dừng được forEach
// callback là  1 function làm đối số cho hàm khác
// cú pháp es6 chính là cú pháp của ReactJs

// 3. map(callback) => duyệt mảng, trả về mảng mới
// - return trong callback
// - số lượng phần tử mảng mới bằng mảng cũ
// - sử dụng để render dữ liệu lên giao diện

// 4. some(callback)
/**
 * - trả về true nếu có ít nhất 1 lần lặp return true;
 * - ví dụ: tìm trong mảng có số lẻ không
 * - vòng lặp chạy tới khi có return true và dừng
 */

let numbers = [1, 2, 3, 4, 5, 6];
let check = numbers.some((num, index) => {
  if (num % 2 !== 0) {
    console.log(num);
    return true;
  }
});
console.log(check);

// 5. every(callback): kiểm tra tất cả phần tử trong mảng có phải số chẵn không
/**
 * - trả về true/false
 * - trả về true nếu tất cả lần lặp đều return true
 * - trả về false nếu có ít nhất 1 lần lặp return false và dừng
 */

let numbers_2 = [2, 4, 6, 8, 10];
let check2 = numbers_2.every((num, index) => {
  if (num % 2 == 0) {
    return true;
  }
});
console.log(check2); // true

// 6. filter(callback) => lọc tất cả phần tử mảng và chỉ 
// trả về những phần tử mà callback return true

// nếu callback trả về true thì phần tử đó sẽ được đưa vào mảng mới
// nếu callback trả về false thì phần tử đó sẽ không được đưa vào mảng mới

let users3 = ["Hải", "Huy", "Minh", "Vy", "Hà"];
// callback không có {} thì không cần return
let newUser3 = users3.filter((user, index) => {
  if (user.length > 3) {
    return true;
  }
});
console.log(newUser3);

// tìm sản phẩm có id = 2
let products = [
  { id: 1, name: "Iphone 12", price: 4, quantity: 1 },
  { id: 2, name: "Iphone 11", price: 4, quantity: 2 },
  { id: 3, name: "Iphone 10", price: 4, quantity: 3 },
];

let productSearch = products.filter((product, index) => {
  return product.id === Number("2");
});
console.log(productSearch); // [{ id: 2, name: "Iphone 11", price: 900 }]

// 7. find(callback) => trả về 1 object đầu tiên , không tìm thấy trả về undefined, findLast trả về object cuối cùng
let productFind = products.find((product, index) => {
  return product.id === 2;
});
console.log(productFind); // { id: 2, name: "Iphone 11", price: 900 }

let numbers8 = [1, 2, 3, 4, 5];
let numberFind = numbers8.find((num, index) => {
  return num === 3;
});
console.log(numberFind); // 3

// 8. findIndex(callback) => trả về index đầu tiên, không tìm thấy trả về -1
//  findLastIndex trả về index , không tìm thấy trả về -1
let productIndex = products.findIndex((product, index) => {
  return product.id === 2;
});
console.log(productIndex); // 1

// 9. reduce(callback, initialValue) => giảm mảng thành 1 giá trị duy nhất
/**
 * trong callback có 2 tham số: accumulator, currentValue => hàm reduce luôn return accumulator
 * nguyên tắc hàm callback: output của lần lặp trước là input của lần lặp sau (giống bài toán tính tổng)
 *
 * CÁC TRƯỜNG HỢP:
 * TH1: không truyền initialValue cho accumulator thì accumulator = phần tử đầu tiên của mảng, lặp từ phần tử thứ 2
 *
 * TH2: có initialValue cho accumulator thì accumulator = initialValue, lặp từ phần tử đầu tiên của mảng
 *  initialValue có thể là 0, [], {}, '', ...
 */
const numbers7 = [1, 2, 3, 4, 5];

const sum = numbers7.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, 0); // Giá trị ban đầu cua accumulator là 0

console.log(sum); // Kết quả: 15

let totalPrice = products.reduce((accumulator, prod) => {
  return accumulator + prod.price * prod.quantity;
}, 0);
console.log(totalPrice); // 24

const arrayOfArrays = [
  [1, 2],
  [3, 4],
  [5, 6],
];

const mergedArray = arrayOfArrays.reduce((acc, curr) => [...acc, ...curr], []);
console.log(mergedArray); // Output: [1, 2, 3, 4, 5, 6]

// 10. flatMap(callback): trả vể 1 mảng mới giống map nhưng các phần tử mảng dc hạ xuống 1 cấp
let numbers10 = [1, 2, 3, [2, 4], [7, 10, [12, 16]]];
// mục tiêu trải mảng ra thành [1, 2, 3, 2, 4, 7, 10, 12, 16]
let flatNumbers = numbers10.flatMap((num, index) => {
  return num;
});
console.log(flatNumbers); // [1, 2, 3, 2, 4, 7, 10, [12, 16]]

const movies = [
  {
    title: "Inception",
    genres: ["Action", "Sci-Fi", "Thriller"],
  },
  {
    title: "The Dark Knight",
    genres: ["Action", "Drama", "Crime"],
  },
  {
    title: "Interstellar",
    genres: ["Adventure", "Drama", "Sci-Fi"],
  },
  {
    title: "Joker",
    genres: ["Crime", ["Drama", "HEHE"], "Thriller"],
  },
];

let genres = movies.flatMap((movie) => {
  return movie.genres.flatMap((genre) => {
    return genre;
  });
});
console.log([...new Set(genres)]); // ["Action", "Sci-Fi", "Thriller", "Drama", "Crime", "Adventure", "HEHE"]

// mình muốn các giá trị trùng lặp biến mất (reduce => O(n))
// Set => lọc ra các giá trị trùng nhau

// 11. Destructuring => giúp lấy các giá trị từ mảng hoặc đối tượng và gán chúng cho các biến một cách nhanh chóng.
// VD: chuyển ngày/tháng/năm thành năm/tháng/ngày ( ko dùng locationString)

const formatDate = (dateString) => {
  const [day, month, year] = dateString.split("/");
  return `${year}/${month}/${day}`;
};

console.log(formatDate("01/06/2021")); // 2021/06/01

// 12. Spread operator: giúp sao chép mảng, đối tượng, thêm phần tử vào mảng, thêm key vào đối tượng
let a = [1, 2, 3];
let b = [4, 5, 6];
let c = [...a, ...b];
console.log(c); // [1, 2, 3, 4, 5, 6]

// áp dụng trong function : thực tế args là một mảng, không phải là một hàm.
function checkSpread(a, b, ...args) {
  args[0](); // Hello (args[0] là hàm, args[0]() là gọi hàm)
  args[1](); // World
}

checkSpread(
  1,
  2,
  () => {
    console.log("Hello");
  },
  () => {
    console.log("World");
  }
);

// 13. flat(depth): giảm mảng nhiều cấp xuống mảng 1 cấp
// const arr = [1, 2, [3, 4, [5, 6]], 7];

// const flattened = arr.flat(2);

// console.log(flattened);
// // Kết quả: [1, 2, 3, 4, 5, 6, 7]  => Hạ xuống 2 cấp

// const arr = [1, [2, [3, [4, [5]]]]];

// const flattened = arr.flat(Infinity);

// console.log(flattened);
// // Kết quả: [1, 2, 3, 4, 5]  => Hạ xuống tất cả các cấp

const arr = [1, 2, , 4, [5, , 6]];

const flattened = arr.flat();

console.log(flattened);
// Kết quả: [1, 2, 4, 5, 6]  => Loại bỏ phần tử trống hoặc undefined

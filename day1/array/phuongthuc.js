// Khai báo mảng
let users = ["Hải", "Hiền", "Hà", "Huy", "Dũng"];

// let user2  = new Array('Hải', 'Hà', 'Huy','Dũng'); // ít dùng vì dài

// 1. Kiểm tra 1 biến có phải là mảng hay không
Array.isArray(users); // true
console.log(typeof users); // object
console.log(typeof NAN); // number

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

// 4. hàm includes(value) => kiểm tra xem mảng có chứa value không
console.log(users.includes("Hải")); // true (áp dụng rất nhiều)

// 5. hàm slice(start, end) => cắt mảng từ start đến end-1

// 6. join(separator) => chuyển mảng thành chuỗi: arr.join('separator');

// 7. hàm push(value) => thêm value vào cuối mảng, trả về độ dài mảng mới
// 8. hàm pop() => xóa phần tử cuối mảng, trả về phần tử bị xóa



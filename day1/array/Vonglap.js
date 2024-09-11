let users = ["Hải", "Huy", "Minh", "Vy", "Hà"];

// 1. hàm fill(value, start, end) => thay thế các phần tử từ start đến end-1 bằng value
users.fill("Hùng", 1, 3); // ["Hải", "Hùng", "Hùng", "Vy", "Hà"]

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


let numbers_2 = [2,4,6,8,10];
let check2 = numbers_2.every((num, index) => {
  if (num % 2 == 0) {
    return true;
  }
});
console.log(check2); // true
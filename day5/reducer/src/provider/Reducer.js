// File này chỉ để quản lí reducer

// Khởi tạo state: state là một object chứa 1 thuộc tính items là mảng
export const initState = {
  items: [],
};

// Khởi tạo action
const ADD_TO_CART = "addToCart";
const DELETE_ALL = "deleteAll";
const DELETE_ITEM = "deleteItem";
const INCREASE_QUANTITY = "increaseQuantity";
const DECREASE_QUANTITY = "decreaseQuantity";
const products = [
  {
    name: "Iphone 12",
    price: 1000,
    quantity: 2,
  },
  // ví dụ action.payload: products[0]

  // items là mảng chứa các sản phẩm (mảng objects)
];

// items ban đầu là rỗng
// khởi tạo reducer
const reducer = (state, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      // Tìm sản phẩm trong giỏ hàng bằng id
      const existProductIndex = state.items.findIndex(
        (item) => item.id === action.payload.id
      );

      // Nếu sản phẩm đã tồn tại
      if (existProductIndex !== -1) {
        // Clone lại mảng items để bảo toàn tính bất biến của state cũ
        const updatedItems = [...state.items];

        // Cập nhật số lượng cho sản phẩm đã tồn tại
        updatedItems[existProductIndex] = {
          ...updatedItems[existProductIndex], // Giữ nguyên thuộc tính cũ
          quantity: updatedItems[existProductIndex].quantity + 1, // Tăng số lượng
        };

        // Trả về 1 đối tượng state mới sau khi cập nhật mảng items
        return {
          ...state,
          items: updatedItems,
        };
      } else {
        // Nếu sản phẩm chưa tồn tại, thêm sản phẩm mới vào giỏ hàng
        return {
          ...state,
          items: [...state.items, { ...action.payload, quantity: 1 }],
        };
        // Giải thích cú pháp:  ...state đảm bảo rằng tất cả các thuộc tính khác của
        // state (nếu có) vẫn giữ nguyên, chỉ có thuộc tính
        // items được cập nhật.
      }
    case DELETE_ALL:
      return {
        ...state,
        items: [],
      };
    case DELETE_ITEM:
      // để xóa item thì dùng filter, coi những cái khác payload.id là return true
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.payload.id),
      };
    case INCREASE_QUANTITY:
      return {
        ...state,
        items: state.items.map((item) =>
          item.id === action.payload.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        ),
      };
    case DECREASE_QUANTITY:
      return {
        ...state,
        items: state.items.map((item) =>
          item.id === action.payload.id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        ),
      };
  }
};

/*** TẠI SAO PHẢI CLONE STATE TRONG REDUCER ?
 * Lý do quan trọng: 
- Bất biến của state: Reducer trong useReducer hay Redux đều yêu cầu state
 là bất biến. Điều này có nghĩa là bạn không nên trực tiếp thay đổi state 
 hiện tại, mà thay vào đó cần tạo ra một bản sao của nó và chỉ thay đổi 
 những phần bạn cần.

 Trong trường hợp này, updatedItems là bản sao của mảng items,
 và sau đó bạn trả về một đối tượng state mới với mảng items đã 
 được cập nhật. State cũ sẽ không bị thay đổi, và React sẽ nhận 
 biết sự thay đổi để re-render component.

- Tính hiệu quả: Khi trả về state mới(biến state sẽ trỏ tới đối
 tượng state mới), React sẽ kiểm tra sự khác biệt giữa state cũ
  và state mới (dựa trên tham chiếu), và chỉ re-render khi cần thiết.

Nếu bạn không trả về một bản sao mới của state, thì React 
sẽ không nhận ra sự thay đổi và component sẽ không được cập nhật đúng cách.


- Chỉ clone với dữ liệu kiểu reference
 */


export default reducer;

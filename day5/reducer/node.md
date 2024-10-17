useReducer(<reducer>, <initialState>)
# reducer: gồm init state và action

# init state
const initState = 0;

# action 
const UP_ACTION = "up";
const DOWN_ACTION = "down";

// cart : 
const ADD_TO_CART = "addtocart"
const REMOVE_FROM_CART = "removefromcart"
const UPDATE_CART = "updatecart"

// Thực chất là 1 cái hàm => hoạt động dựa trên đầu vào là state và action

// Trả về 1 state mới

# Ví dụ:
# reducer

const reducer = (state,action) => {
    switch (action) {
        case UP_ACTION:
            return state + 1;
        case DOWN_ACTION:
            return state - 1;
        default: // phải có default
            throw new Error("Invalid action");
        
    }
}


# useReducer

const [count ,dispatch] = useReducer (reducer, initState);
- useReducer returns an array with exactly two values:
    + The current state. During the first render, it’s set to initState
    + The dispatch function that lets you update the state

# dispatch
 Đây là một hàm được sử dụng để gửi (dispatch) các hành động (action) đến reducer. Khi bạn gọi dispatch(action), nó sẽ thông báo cho reducer để cập nhật trạng thái dựa trên hành động đã gửi
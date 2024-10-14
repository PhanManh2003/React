# useEffect(<function>, <dependency>)
- mô phỏng lại vòng đời của 1 functional component

1. useEffect(callback) -> chạy vô hạn ( ko dùng)
2. useEffect(callback, dependency) -> 1 time and any time depedenncy change
3. useEffet(callback,[]) -> chỉ chạy 1 lần (dùng khi muốn tìm kiếm data thông qua 1 biến,..) 
đuy nhất khi component dc render -> thường dùng để lấy data từ API xuống

# thứ tự xử lí useEffect
1. The useEffect Hook allows you to perform side effects in your components.

2. Some examples of side effects are: fetching data, directly updating the DOM, and timers.

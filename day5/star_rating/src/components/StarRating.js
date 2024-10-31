// src/StarRating.js
import React, { useState } from 'react';
import './StarRating.css'; // Đảm bảo bạn tạo file này

const StarRating = () => {
    const [hoveredValue, setHoveredValue] = useState(null);
    const [selectedValue, setSelectedValue] = useState(1); // Khởi tạo giá trị chọn là 1

    const handleMouseEnter = (value) => {
        setHoveredValue(value);
    };

    const handleMouseLeave = () => {
        setHoveredValue(null);
    };

    // Mảng tĩnh chứa các giá trị sao từ 1 đến 5
    const stars = [1, 2, 3, 4, 5];

    return (
        <div className="rating-selection">
            {stars.map((value) => (  // Ánh xạ qua mảng stars
                <div key={value} className="star-container">
                    <input
                        type="radio"
                        className="rating-input"
                        id={`rating-input-${value}`}
                        value={value}
                        name="rating"
                        checked={selectedValue === value} // So sánh với ===
                        onChange={()=> {setSelectedValue(value); console.log(value)}}
                    />
                    <label
                        htmlFor={`rating-input-${value}`}
                        className={`rating-star ${hoveredValue >= value ? 'hover' : ''} ${selectedValue >= value ? 'selected' : ''}`}
                        onMouseEnter={() => handleMouseEnter(value)}
                        onMouseLeave={handleMouseLeave}
                    >
                        ★
                    </label>
                </div>
            ))}
        </div>
    );
};

export default StarRating;

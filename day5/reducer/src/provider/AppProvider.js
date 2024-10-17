import React, { useState, useEffect, useReducer } from "react";
import AppContext from "./Context";
import axios from "axios";
import reducer, { initState } from "./Reducer";
const sampleProducts = [
  {
    id: 0,
    name: "Uthappizza",
    image: "images/uthappizza.png",
    category: "mains",
    label: "Hot",
    price: "4.99",
    featured: true,
    description:
      "A unique combination of Indian Uthappam (pancake) and Italian pizza, topped with Cerignola olives, ripe vine cherry tomatoes, Vidalia onion, Guntur chillies and Buffalo Paneer.",
  },
  {
    id: 1,
    name: "Zucchipakoda",
    image: "images/zucchipakoda.png",
    category: "appetizer",
    label: "",
    price: "1.99",
    featured: false,
    description:
      "Deep fried Zucchini coated with mildly spiced Chickpea flour batter accompanied with a sweet-tangy tamarind sauce",
  },
  {
    id: 2,
    name: "Vadonut",
    image: "images/vadonut.png",
    category: "appetizer",
    label: "New",
    price: "1.99",
    featured: false,
    description:
      "A quintessential ConFusion experience, is it a vada or is it a donut?",
  },
  {
    id: 3,
    name: "ElaiCheese Cake",
    image: "images/elaicheesecake.png",
    category: "dessert",
    label: "",
    price: "2.99",
    featured: false,
    description:
      "A delectable, semi-sweet New York Style Cheese Cake, with Graham cracker crust and spiced with Indian cardamoms",
  },
];

function AppProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initState);
  const data = { state, dispatch, sampleProducts };
  return <AppContext.Provider value={data}>{children}</AppContext.Provider>;
}

export default AppProvider;

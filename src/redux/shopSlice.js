import { createSlice } from "@reduxjs/toolkit";
const shopSlice = createSlice({
  name: "shop",
  initialState: {
    phones: [
      {
        id: 1,
        name: "Apple Iphone 11 128GB",
        short_desc: "something",
        img: "Apple_Iphone11_128.jpg",
        threads_name: "Apple A13 Bionic",
        front_camera: "12MP",
        main_camera: "12MP",
        count: 1,
        quantity_threads: 6,
        memory: 128,
        price: 10000,
        click: false,
      },
      {
        id: 2,
        name: "Apple Iphone 13 128GB",
        short_desc: "something",
        img: "Apple_Iphone13_128.jpg",
        threads_name: "Apple A14 Bionic",
        front_camera: "12MP",
        main_camera: "12MP",
        price: 15000,
        count: 1,
        quantity_threads: 6,
        memory: 128,
        click: false,
      },
      {
        id: 3,
        name: "Apple Iphone 13 PRO 128GB",
        short_desc: "something",
        img: "Apple_Iphone13_pro_128.jpg",
        threads_name: "Apple A15 Bionic",
        front_camera: "12MP",
        main_camera: "12MP",
        price: 17000,
        count: 1,
        quantity_threads: 6,
        memory: 128,
        click: false,
      },
      {
        id: 4,
        name: "Apple Iphone 13 PRO MAX 128GB",
        short_desc: "something",
        img: "Apple_Iphone13_pro_max_128.jpg",
        threads_name: "Apple A15 Bionic",
        front_camera: "12MP",
        main_camera: "12MP",
        price: 20000,
        count: 1,
        quantity_threads: 6,
        memory: 128,
        click: false,
      },
      {
        id: 5,
        name: "Infinix Note 10 PRO 8/128GB",
        short_desc: "something",
        img: "Infinix_note10_pro_8_128.jpg",
        threads_name: "MediaTek Helio G95",
        main_camera: "64MP + 8MP + 2MP + 2MP",
        front_camera: "16MP",
        price: 7000,
        count: 1,
        quantity_threads: 8,
        memory: 128,
        click: false,
      },
      {
        id: 6,
        name: "Motorola Moto G60 6/128GB",
        short_desc: "something",
        img: "Motorola_moto_g60_6_128.jpg",
        threads_name: "Qualcomm Snapdragon 732G",
        main_camera: "108MP + 8MP + 2MP",
        front_camera: "32MP",
        price: 9000,
        count: 1,
        quantity_threads: 8,
        memory: 128,
        click: false,
      },
      {
        id: 7,
        name: "Samsung Galaxy A32 4/64GB",
        short_desc: "something",
        img: "Samsung_galaxy_a32_4_64.jpg",
        threads_name: "MediaTek Helio G80",
        main_camera: "64MP + 8MP + 5MP + 5MP",
        front_camera: "20MP",
        price: 5000,
        count: 1,
        quantity_threads: 8,
        memory: 64,
        click: false,
      },
      {
        id: 8,
        name: "Samsung Galaxy A32 4/128GB",
        short_desc: "something",
        img: "Samsung_galaxy_a32_4_128.jpg",
        threads_name: "MediaTek Helio G80",
        main_camera: "64MP + 8MP + 5MP + 5MP",
        front_camera: "20MP",
        price: 10000,
        count: 1,
        quantity_threads: 8,
        memory: 128,
        click: false,
      },
      {
        id: 9,
        name: "Samsung Galaxy A53 5G 6/128GB",
        short_desc: "something",
        img: "Samsung_galaxy_a53_5g_6_128.jpg",
        threads_name: "Samsung Exynos 1280",
        main_camera: "64MP + 12MP + 5MP + 5MP",
        front_camera: "32MP",
        price: 17000,
        count: 1,
        quantity_threads: 8,
        memory: 128,
        click: false,
      },
      {
        id: 10,
        name: "Samsung Galaxy M32 6/128GB",
        short_desc: "something",
        img: "Samsung_galaxy_m32_6_128.jpg",
        threads_name: "MediaTek Helio G80",
        main_camera: "64MP + 8MP + 2MP + 2MP",
        front_camera: "20MP",
        price: 17000,
        count: 1,
        quantity_threads: 8,
        memory: 128,
        click: false,
      },
      {
        id: 11,
        name: "Samsung Galaxy M52 5G 6/128GB",
        short_desc: "something",
        img: "Samsung_galaxy_m52_5g_6_128.jpg",
        threads_name: "Qualcomm Snapdragon 778G",
        main_camera: "64MP + 12MP + 5MP",
        front_camera: "32MP",
        price: 11000,
        count: 1,
        quantity_threads: 8,
        memory: 128,
        click: false,
      },
      {
        id: 12,
        name: "Samsung Galaxy M53 5G 6/128GB",
        short_desc: "something",
        img: "Samsung_galaxy_m53_5g_6_128.jpg",
        threads_name: "Qualcomm Snapdragon 778G",
        main_camera: "64MP + 12MP + 5MP",
        front_camera: "32MP",
        price: 17000,
        count: 1,
        quantity_threads: 8,
        memory: 128,
        click: false,
      },
    ],
    orders: [],
    filter_phone: [],
    sum: 0,
  },
  reducers: {
    Countsum(state) {
      state.orders.forEach((el) => (state.sum += el.count * el.price));
    },
    addToOrder(state, action) {
      let isArr = false;
      state.orders.forEach((el) => {
        if (el.id === action.payload.id) {
          isArr = true;
        }
      });
      if (!isArr) {
        state.orders.push(action.payload.phone);
      }
    },
    addcount(state, action) {
      state.orders = state.orders.map((el) =>
        el.id === action.payload.id ? { ...el, count: el.count + 1 } : el
      );
    },
    deletecount(state, action) {
      state.orders = state.orders.map((el) =>
        el.id === action.payload.id ? { ...el, count: el.count - 1 } : el
      );
    },
    deleteOrder(state, action) {
      state.orders = state.orders.filter((el) => el.id !== action.payload.id);

      state.phones = state.phones.map((el) =>
        el.id === action.payload.id ? { ...el, click: (el.click = false) } : el
      );
    },
    addItem(state, action) {
      state.phones = state.phones.map((el) =>
        el.id === action.payload.id ? { ...el, click: (el.click = true) } : el
      );
    },
  },
});
export const {
  addToOrder,
  addcount,
  addItem,
  deleteOrder,
  deletecount,
  Countsum,
} = shopSlice.actions;
export default shopSlice.reducer;

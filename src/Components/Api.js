import axios from "axios";

const baseURL = "https://blood-bank-nomh.onrender.com";
// const baseURL = "http://localhost:3001/";


export default axios.create({ baseURL: baseURL });

import axios from "axios";
export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "0d12f42558db4619b9099544a42d8171",
  },
});

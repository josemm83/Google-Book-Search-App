import axios from "axios";

export default {
  getBooks: (q) => {
    return axios.get("/api/google", { params: { q: "title: " + q } });
  },
  getSavedBooks: () => {
    return axios.get("/api/book/");
  },
  deleteBook: (id) => {
    return axios.delete("/api/book/" + id);
  },
  saveBook: (bookData) => {
    return axios.post("/api/book" + bookData);
  },
};

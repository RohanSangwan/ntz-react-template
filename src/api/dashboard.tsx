import axiosInstance from "./index";

export const fetchToDoList = () => {
  return axiosInstance({
    url: "/todos",
    method: "GET",
  });
};

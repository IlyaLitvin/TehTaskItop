import axios from "axios";
import { signUpSucces } from "../store";

const url = "http://localhost:8080/api/user";

const signUp = (data) => (dispatch) => {
  axios
    .post(`${url}/registration`, data, {
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then(({ data }) => dispatch(signUpSucces(data)))
    .catch((err) => console.log(err));
};

export default signUp;

import axios from "axios";
import { NotificationManager } from 'react-notifications';

exports function fetchUsers() {
    return function (dispatch) {
        axios.get(baseUrl+"api/v1/users")
        .then((response) => {
            dispatch({type: "FETCH_USERS_FULFILLED", payload: response.data});
        })
        .catch((error) => {
            dispatch({type: "FETCH_USERS_REJECTED", payload: error});
        })
};

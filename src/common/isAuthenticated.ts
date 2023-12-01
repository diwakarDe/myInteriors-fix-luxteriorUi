import { AUTH_TOKEN } from "../constants";

function isAuthenticated () {
    // return true;
    const token = localStorage.getItem(AUTH_TOKEN)
    return token;
}


export default isAuthenticated;


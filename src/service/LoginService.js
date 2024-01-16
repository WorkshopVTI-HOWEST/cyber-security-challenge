const adminCredentials = {
    username: "admin",
    password: "dontsharethis",
};

const ceoCredentials = {
    username: "Bert",
    password: "Boomer"
}

class LoginService {
    Adminlogin(username, password) {
        return (
            username === adminCredentials.username &&
            password === adminCredentials.password
        );
    }

    CeoLogin(username, password) {
        return (
            username === ceoCredentials.username &&
            password === ceoCredentials.password
        );
    }



}

export default LoginService;
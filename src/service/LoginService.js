const credentials = {
    username: "admin",
    password: "dontsharethis",
};

class LoginService {
    login(username, password) {
        if (
            username === credentials.username &&
            password === credentials.password
        ) {
            return true;
        } else {
            return false;
        }
    }
}

export default LoginService;

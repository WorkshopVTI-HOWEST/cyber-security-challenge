const credentials = {
    username: "admin",
    password: "dontsharethis",
};

class LoginService {
    login(username, password) {
        return (
            username === credentials.username &&
            password === credentials.password
        );
    }
}

export default LoginService;

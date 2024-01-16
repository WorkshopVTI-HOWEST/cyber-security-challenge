const adminCredentials = {
    username: "admin",
    password: "dontsharethis",
};

class LoginService {
    Adminlogin(username, password) {
        return (
            username === adminCredentials.username &&
            password === adminCredentials.password
        );
    }


}

export default LoginService;
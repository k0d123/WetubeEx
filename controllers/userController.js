import routes from "../routes";

export const getJoin = (req, res) => {
    res.render("join", {pageTitle: "JOIN"});
};

export const postJoin = (req, res) => {
    const {
        body: { name, email, password, password2}
    } = req;
    if(password !== password2){
        res.status(400);
        res.render("join", {pageTitle: "JOIN"});
    } else {
        // To Do : Register User
        // T  Do : Log User In
        res.redirect(routes.home);
    }
    
};


export const getLogin = (req, res) => {
    res.render("login", {pageTitle: "LOGIN"});
};
export const postLogin = (req, res) =>{
    res.redirect(routes.home);
};


export const logout = (req, res) =>{
    // To Do : Process Log Out
    res.redirect(routes.home);
};

export const users = (req, res) => res.render("users");

export const userDetail = (req, res) => 
    res.render("userDetail", {pageTitle: "USERDETAIL"});

export const editProfile = (req, res) => 
    res.render("editProfile", {pageTitle: "EditProfile"});
export const changePassword = (req, res) => 
    res.render("changePassword", {pageTitle: "ChangePassword"});
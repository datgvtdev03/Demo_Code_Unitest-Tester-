// Trong tài liệu đặc tả

// Mô tả tính đăng nhập: Màn hình đăng nhập gồm 2 trường tên đăng nhập và mật khẩu. 
//Mật khẩu không được trùng với tên đăng nhập. Tên đăng nhập phải tối thiểu 6 ký tự

// fullname, username, email, phonenumber, password, EnterThePassword
const users = [
    { fullname: "Nguyen kha chuong", username: "khachuong", email: "admin123@gmail.com", phonenumber: "0987654321", password: "12345678", EnterThePassword: "12345678" },
    { fullname: "giap van thanh dat", username: "thanhdat", email: "admin123@gmail.com", phonenumber: "0987654321", password: "12345678", EnterThePassword: "12345678" },
];

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phoneRegex = /^[0-9]{10}$/;
const passwordRegex = /^[A-Za-z0-9]*$/
const usernameRegex = /^[A-Za-z0-9]*$/

function login(username, password) {
    if (username.length == 0 || password.length == 0) {
        return { isSuccess: false, message: "Tên đăng nhập hoặc mật khẩu không được bỏ trống!", };
    }

    if (typeof username != "string" || typeof password != "string") {
        return { isSuccess: false, message: "Sai định dạng dữ liệu" }
    }

    if (password.length < 6) {
        return { isSuccess: false, message: "Mật khẩu phải lớn hơn 6 ký tự!" }
    }

    if (username == password) {
        return { isSuccess: false, message: "Tên tài khoản và mật khẩu phải khác nhau" };
    }

    if (!password.match(passwordRegex) || !username.match(usernameRegex)) {
        return { isSuccess: false, message: "Tài khoản hoặc mật khẩu không hợp lệ!", };
    }

    for (let i = 0; i <= users.length - 1; i++) {
        if (users[i].username != username) {
            return { isSuccess: false, message: "Tài khoản không tồn tại" };
        } else {
            if (username == users[i].username && password == users[i].password) {
                return { isSuccess: true, message: "Đăng nhập thành công!" }
            } else {
                return { isSuccess: false, message: "Đăng nhập không thành công!", };
            }
        }
    }


}

function register(fullname, username, email, phonenumber, password, EnterThePassword) {

    if (fullname.length == 0 || username.length == 0 || email.length == 0 || phonenumber.length == 0 || password.length == 0 || EnterThePassword.length == 0) {
        return { isSuccess: false, message: "Vui lòng nhập đủ thông tin!" }
    }

    if (typeof fullname != "string" || typeof username != "string" || typeof email != "string" || typeof phonenumber != "string" || typeof password != "string" || typeof EnterThePassword != "string") {
        return { isSuccess: false, message: 'Sai định dạng dữ liệu!' }
    }

    if (username.length < 6 && password.length < 6) {
        return { isSuccess: false, message: 'Tên đăng nhập và mật khẩu không được < 6 kí tự!' }
    }

    if (username == password) {
        return { isSuccess: false, message: 'Tài khoản và mật khẩu không được trùng nhau!' }
    }

    if (password != EnterThePassword) {
        return { isSuccess: false, message: 'Mật khẩu nhập lại không trùng khớp!' }
    }

    if (!username.match(usernameRegex) || !email.match(emailRegex) || !phonenumber.match(phoneRegex) || !password.match(passwordRegex) || !EnterThePassword.match(passwordRegex)) {
        return { isSuccess: false, message: 'Thông tin tài khoản không hợp lệ!' }
    }

    for (let i = 0; i <= users.length - 1; i++) {
        if (users[i].username == username || users[i].email == email || users[i].phonenumber == phonenumber) {
            return { isSuccess: false, message: 'Tài khoản bạn đăng kí đã tồn tại!' }
        } else {
            if (username != users[i].username && email != users[i].email && phonenumber != users[i].phonenumber) {
                return { isSuccess: false, message: 'Chúc mừng. Bạn đã đăng kí thành công!' }
            } else {
                return { isSuccess: false, message: 'Đăng kí không thành công!' }
            }
        }
    }
}

function changePassword(currentPassword, newPassword, enterNewPassword) {
    if (currentPassword.length == 0 || newPassword.length == 0 || enterNewPassword.length == 0) {
        return { isSuccess: false, message: 'Mật khẩu không được để trống!' }
    }
    if (typeof currentPassword != 'string' || typeof newPassword != 'string' || typeof enterNewPassword != 'string') {
        return { isSuccess: false, message: 'Sai định dạng dữ liệu!' }
    }

    if (!newPassword.match(passwordRegex) || !enterNewPassword.match(passwordRegex)) {
        return { isSuccess: false, message: 'Mật khẩu không hợp lệ!' }
    }

    if (newPassword.length < 6 || enterNewPassword.length < 6) {
        return { isSuccess: false, message: 'Mật khẩu mới quá ngắn!' }
    } else if (newPassword.length > 30 || enterNewPassword.length > 30) {
        return { isSuccess: false, message: 'Mật khẩu mới quá dài!' }
    } else if (newPassword != enterNewPassword) {
        return { isSuccess: false, message: 'Mật khẩu mới không trùng khớp nhau!' }
    } else {
        for (var i = 0; i < users.length; i++) {
            if (users[i].password != currentPassword) {
                return { isSuccess: false, message: 'Mật khẩu cũ không đúng!' }
            } else {
                if (newPassword == enterNewPassword) {
                    return { isSuccess: false, message: 'Đổi mật khẩu thành công!' }
                }
            }
        }
    }

}



module.exports.register = register;
module.exports.login = login;
module.exports.changePassword = changePassword;

// feature: tính năng

// Unit test cho function login

// Sẽ phải viết các Test case - các kịch bản test
//1 Test case cần bao gồm

// 1. Tình huống
// 2. Input data
// 3. Kết quả mong đợi


// TC01: Kiểm tra đăng nhập sai mật khẩu
// 1. Tình huống: Người dùng truyền vào tài khoản đúng nhưng mật khẩu sai 
// 2. Input: username = khachuong và password = abc
// 3. Kết qủa mong đợi (Expected result): {isSuccess: false, message: "Sai mật khẩu, vui lòng thử lại!"}

// Kết luận: Not passed (không đạt) - hay còn gọi là failed
// console.log(login("khachuong", "abc"))
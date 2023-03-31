const testCase = require('./app')

describe('Đây là nhóm test case dành cho hàm Login()', () => {

    test('TC01: Tên đăng nhập hoặc mật khẩu bị bỏ rỗng', () => {
        expect(testCase.login("", "12345")).toMatchObject({isSuccess: false, message: "Tên đăng nhập hoặc mật khẩu không được bỏ trống!"})
        expect(testCase.login("khachuong", "")).toMatchObject({isSuccess: false, message: "Tên đăng nhập hoặc mật khẩu không được bỏ trống!"})
    })
    
    test('TC02: Mật khẩu có độ dài < 6 ký tự', () => {
        expect(testCase.login("khachuong", "12345")).toMatchObject({isSuccess: false, message: "Mật khẩu phải lớn hơn 6 ký tự!"})
    })

    test('TC04: Kiểu dữ liệu truyền vào bị sai', () => {
        expect(testCase.login(399944, 12345678)).toMatchObject({isSuccess: false, message: "Sai định dạng dữ liệu"})
    })

    test('TC05: Tài khoản mật khẩu trùng nhau', () => {
        expect(testCase.login("khachuong", "khachuong")).toMatchObject({isSuccess: false, message: "Tên tài khoản và mật khẩu phải khác nhau"})
    })

    test('TC06: Tài khoản không tồn tại', () => {
        expect(testCase.login("duongkien", "12345678")).toMatchObject({isSuccess: false, message: "Tài khoản không tồn tại"})
    })

   

    test('TC07: Đăng nhập khi tài khoản hoặc mật khẩu có khoảng trắng và ký tự đặc biệt', () => {
        expect(testCase.login("kha chuong", "12345678")).toMatchObject({ isSuccess: false, message: "Tài khoản hoặc mật khẩu không hợp lệ!", })
        expect(testCase.login("khachuong", "123 *45678")).toMatchObject({ isSuccess: false, message: "Tài khoản hoặc mật khẩu không hợp lệ!", })
    })


    test('TC08: Đăng nhập đúng tài khoản và mật khẩu', () => {
        expect(testCase.login("khachuong", "12345678")).toMatchObject({ isSuccess: true, message: "Đăng nhập thành công!" })
    })
})


describe('Đây là code hàm đăng kí - register()', () => {
    test('TC01: Các trường bị bỏ rỗng', () => {
        expect(testCase.register("", "12345", "3290920", "shhdsds", "dshhsds", "sa32d")).toMatchObject({ isSuccess: false, message: "Vui lòng nhập đủ thông tin!" })
        expect(testCase.register("12121", "", "3290920", "shhdsds", "dshhsds", "dfassas")).toMatchObject({ isSuccess: false, message: "Vui lòng nhập đủ thông tin!" })
        expect(testCase.register("dssđs", "12345", "", "shhdsds", "dshhsds", "dhshsjsd")).toMatchObject({ isSuccess: false, message: "Vui lòng nhập đủ thông tin!" })
        expect(testCase.register("ewdwed", "12345", "3290920", "", "dshhsds", "hdsdsh")).toMatchObject({ isSuccess: false, message: "Vui lòng nhập đủ thông tin!" })
        expect(testCase.register("scdcds", "12345", "3290920", "shhdsds", "", "sjjdsjsd")).toMatchObject({ isSuccess: false, message: "Vui lòng nhập đủ thông tin!" })
        expect(testCase.register("scdcds", "12345", "3290920", "shhdsds", "xsaaxs", "")).toMatchObject({ isSuccess: false, message: "Vui lòng nhập đủ thông tin!" })
    })

    // fullname, username, email, phonenumber, password, EnterThePassword

    test('TC02: Kiểu dữ liệu truyền vào bị sai', () => {
      expect(testCase.register(123445 ,"111221", 122121, 212, 1212, 12121)).toMatchObject({isSuccess: false, message: 'Sai định dạng dữ liệu!'})
    })

    test('TC03: Tài khoản và mật khẩu trùng nhau', () => {
      expect(testCase.register("fullname" ,"abc1234", "gmail", "phone", "abc1234", "123456")).toMatchObject({isSuccess: false, message: 'Tài khoản và mật khẩu không được trùng nhau!'})
    })

    test('TC04: Mật khẩu không trùng nhau', () => {
      expect(testCase.register("fullname" ,"username", "gmail", "phone", "password", "EnterThePassword")).toMatchObject({isSuccess: false, message: 'Mật khẩu nhập lại không trùng khớp!'})
    })

    test('TC05: Đăng kí khi tài khoản hoặc mật khẩu hoặc email hoặc có khoảng trắng và ký tự đặc biệt', () => {
      expect(testCase.register("fullname" ,"use** rname", "gm **ail", "p **hone", "pas **sword", "pas **sword")).toMatchObject({isSuccess: false, message: 'Thông tin tài khoản không hợp lệ!'})
    })

    test('TC06: Mật khẩu hoặc tên đăng nhập có độ dài kí tự < 6', () => {
      expect(testCase.register("fullname" ,"user", "gmail", "phone", "1111", "1111")).toMatchObject({isSuccess: false, message: 'Tên đăng nhập và mật khẩu không được < 6 kí tự!'})
    })


    test('TC07: Tài khoản đã tồn tại', () => {
      expect(testCase.register("fullname" ,"khachuong", "admin123@gmail.com", "0987065431", "12345678", "12345678")).toMatchObject({isSuccess: false, message: 'Tài khoản bạn đăng kí đã tồn tại!'})
    })

    test('TC08: Đăng kí thành công', () => {
      expect(testCase.register("fullname" ,"giapthanhdat", "thanhdat111@gmail.com", "0333230603", "20022002bg", "20022002bg")).toMatchObject({isSuccess: false, message: 'Chúc mừng. Bạn đã đăng kí thành công!'})
    })

})


// currentPassword, newPassword, enterNewPassword
describe('Đây là test case dùng cho hàm changePassword()', () => {

    test('TC01: Các trường nhập vào bị bỏ trống', () => {
        expect(testCase.changePassword("", "admin1234", "admin1234")).toMatchObject({isSuccess: false, message: 'Mật khẩu không được để trống!'})
        expect(testCase.changePassword("admin1111", "", "admin1234")).toMatchObject({isSuccess: false, message: 'Mật khẩu không được để trống!'})
        expect(testCase.changePassword("admin1111", "admin1234", "")).toMatchObject({isSuccess: false, message: 'Mật khẩu không được để trống!'})
    })

    test('TC02: Kiểu dữ liệu truyền vào sai', () => {
        expect(testCase.changePassword(11111, "1111", 11111)).toMatchObject({isSuccess: false, message: 'Sai định dạng dữ liệu!'})
    })

    test('TC03: Mật khẩu quá ngắn', () => {
        expect(testCase.changePassword("1111111", "111", "111")).toMatchObject({isSuccess: false, message: 'Mật khẩu mới quá ngắn!'})
    })

    test('TC04: Mật khẩu mới quá dài', () => {
        expect(testCase.changePassword("1111111", "11111111111111111111111111111111111111111111111111", "11111111111111111111111111111111111111111111111111")).toMatchObject({isSuccess: false, message: 'Mật khẩu mới quá dài!'})
    })

    test('TC05: Mật khẩu mới và mật khẩu nhập lại không trùng khớp nhau', () => {
        expect(testCase.changePassword("1111111", "123456abc", "123456abcdf")).toMatchObject({isSuccess: false, message: 'Mật khẩu mới không trùng khớp nhau!'})
    })

    test('TC06: Mật khẩu cũ không đúng', () => {
        expect(testCase.changePassword("2003bg", "123456abc", "123456abc")).toMatchObject({isSuccess: false, message: 'Mật khẩu cũ không đúng!'})
    })

    test('TC07: Đổi mật khẩu thành công', () => {
        expect(testCase.changePassword("12345678", "123456abc", "123456abc")).toMatchObject({isSuccess: false, message: 'Đổi mật khẩu thành công!'})
    })

    test('TC08: Mật khẩu không hợp lệ', () => {
        expect(testCase.changePassword("20032003bg", "1234 **56abc", "123456abc")).toMatchObject({isSuccess: false, message: 'Mật khẩu không hợp lệ!'})
        expect(testCase.changePassword("20032003bg", "1234 **56abc", "12345 **6abc")).toMatchObject({isSuccess: false, message: 'Mật khẩu không hợp lệ!'})
    })

    
})
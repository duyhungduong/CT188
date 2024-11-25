function dangnhap(frm) {
    var emailReg = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (emailReg.test(frm.email.value) == false) {
        alert("Bạn vừa nhập email sai vui lòng nhập lại");
        frm.email.focus();
        return false;
    }
    if (frm.psw.value.length < 8) {
        alert("Bạn vừa nhập sai mật khẩu vui lòng nhập lại");
        frm.psw.focus();
        return false;
    }
    alert("Đăng nhập thành công!!!");

    return true;
}
function dangky(frm){
    var emailReg = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (emailReg.test(frm.email.value) == false) {
        alert("Bạn vừa nhập email sai vui lòng nhập lại");
        frm.email.focus();
        return false;
    }
    if (frm.psw.value.length < 8) {
        alert("Mật khẩu có tối thiểu 8 ký tự.");
    frm.psw.focus();
    return false;
    }
    if ( frm.psw2.value.length<8 ) {
    alert("Mật khẩu có tối thiểu 8 ký tự.");
    frm.psw2.focus();
    return false;
    }
    if ( frm.psw.value.length!= frm.psw2.value.length) {
    alert("Mật khẩu và Nhập lại mật khẩu phải giống nhau.");
    frm.psw.focus();
    return false;
    }
    alert("Đã gửi dữ liệu Đăng ký.");
    
    return true;
}
function showAdminLogin() {
    document.getElementById('adminLoginModal').style.display = 'flex';
    document.getElementById('adminLoginMsg').innerText = '';
    document.getElementById('adminPwd').value = '';
}
function hideAdminLogin() {
    document.getElementById('adminLoginModal').style.display = 'none';
}
function checkAdminPwd() {
    const pwd = document.getElementById('adminPwd').value;
    if (pwd === 'admin123') { // 你可以自定义密码
        window.location.href = 'admin.html';
    } else {
        document.getElementById('adminLoginMsg').innerText = '密码错误！';
    }
}

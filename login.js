
document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const userid = document.getElementById('userid').value;
    const password = document.getElementById('password').value;
    const validUsers = {
        "warden": "wardenpass"
    };
    for (let i = 1; i <= 62; i++) {
        const sid = "2024UGPI" + String(i).padStart(3, '0');
        validUsers[sid] = "studentpass";
    }
    if (validUsers[userid] && validUsers[userid] === password) {
        localStorage.setItem('userid', userid);
        window.location.href = 'dashboard.html';
    } else {
        alert('Invalid credentials');
    }
});

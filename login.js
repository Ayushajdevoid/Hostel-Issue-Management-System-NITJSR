const validUsers = {};
for (let i = 1; i <= 62; i++) {
  validUsers[`2024UGPI${i.toString().padStart(3, '0')}`] = 'student123';
}
validUsers['W001'] = 'warden123';

function login() {
  const id = document.getElementById('loginId').value;
  const pass = document.getElementById('loginPassword').value;
  if (validUsers[id] === pass) {
    localStorage.setItem('loggedIn', 'true');
    window.location.href = 'dashboard.html';
  } else {
    document.getElementById('loginError').textContent = 'Invalid ID or Password';
  }
}

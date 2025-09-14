if (localStorage.getItem('loggedIn') !== 'true') {
  window.location.href = 'login.html';
}

function logout() {
  localStorage.removeItem('loggedIn');
  window.location.href = 'login.html';
}

function showSection(sectionId) {
  document.querySelectorAll('.section').forEach(sec => sec.classList.add('hidden'));
  document.getElementById(sectionId).classList.remove('hidden');
}

function submitComplaint() {
  let complaints = JSON.parse(localStorage.getItem('complaints') || '[]');
  const complaint = {
    name: document.getElementById('complaintName').value,
    room: document.getElementById('complaintRoom').value,
    block: document.getElementById('complaintBlock').value,
    type: document.getElementById('complaintType').value,
    text: document.getElementById('complaintText').value,
    status: 'Pending'
  };
  complaints.push(complaint);
  localStorage.setItem('complaints', JSON.stringify(complaints));
  loadComplaints();
}

function loadComplaints() {
  const table = document.getElementById('complaintsTable');
  table.innerHTML = '<tr><th>Name</th><th>Room</th><th>Block</th><th>Type</th><th>Text</th><th>Status</th></tr>';
  const complaints = JSON.parse(localStorage.getItem('complaints') || '[]');
  complaints.forEach(c => {
    table.innerHTML += `<tr><td>${c.name}</td><td>${c.room}</td><td>${c.block}</td><td>${c.type}</td><td>${c.text}</td><td>${c.status}</td></tr>`;
  });
}

loadComplaints();

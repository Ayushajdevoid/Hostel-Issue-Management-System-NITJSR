
function logout() {
    localStorage.removeItem('userid');
    window.location.href = 'index.html';
}

window.onload = function() {
    const user = localStorage.getItem('userid');
    const container = document.getElementById('complaintsContainer');
    if (!user) {
        window.location.href = 'index.html';
    }

    const complaints = JSON.parse(localStorage.getItem('complaints') || '[]');
    if (user === "warden") {
        container.innerHTML = complaints.map((c, idx) => 
            `<div style="background:#b2dfdb; padding:10px; margin-bottom:5px;">
                <p><strong>${c.userid}</strong>: ${c.text}</p>
                <button onclick="markProgress(${idx})">In Progress</button>
                <button onclick="markComplete(${idx})">Completed</button>
            </div>`
        ).join('');
    } else {
        container.innerHTML = complaints.filter(c => c.userid === user).map(c => 
            `<div style="background:#b2dfdb; padding:10px; margin-bottom:5px;">
                <p>${c.text} (Status: ${c.status})</p>
            </div>`
        ).join('');
    }
};

function markProgress(idx) {
    const complaints = JSON.parse(localStorage.getItem('complaints') || '[]');
    complaints[idx].status = 'In Progress';
    localStorage.setItem('complaints', JSON.stringify(complaints));
    location.reload();
}

function markComplete(idx) {
    let complaints = JSON.parse(localStorage.getItem('complaints') || '[]');
    complaints.splice(idx, 1);
    localStorage.setItem('complaints', JSON.stringify(complaints));
    location.reload();
}

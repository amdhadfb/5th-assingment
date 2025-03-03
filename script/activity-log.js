
document.getElementById('clear-history').addEventListener('click', function() {
    document.getElementById('activity-log').innerHTML = ''; 
});

document.querySelectorAll('.complete-btn').forEach(button => {
    button.addEventListener('click', function() {
        this.disabled = true; 
        this.classList.add('btn-disabled', 'opacity-50', 'cursor-not-allowed');

        let taskName = this.closest('.card').querySelector('.card-title').innerText;
        let currentTime = new Date().toLocaleString();

        let logEntry = document.createElement('li');
        logEntry.className = "p-2 bg-gray-100 rounded-md mt-2";
        logEntry.innerText = `Completed: ${taskName} at ${currentTime}`;

        document.getElementById('activity-log').appendChild(logEntry);
    });
});

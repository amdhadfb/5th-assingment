document.querySelectorAll('.complete-btn').forEach(button => {
    button.addEventListener('click', function() {
        this.disabled = true;
        this.classList.add('btn-disabled');
        
        let taskName = this.parentElement.querySelector('.card-title').innerText;
        let currentTime = new Date().toLocaleString();
        
        let logEntry = document.createElement('li');
        logEntry.innerText = `Completed: ${taskName} at ${currentTime}`;
        
        document.getElementById('activity-log').appendChild(logEntry);
    });
});
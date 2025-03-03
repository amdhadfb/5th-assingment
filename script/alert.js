
let totalButtons = document.querySelectorAll('.complete-btn').length; 
let completedButtons = 0; 
document.querySelectorAll('.complete-btn').forEach(button => {
    button.addEventListener('click', function() {
        alert("Board Updated Successfully");
        completedButtons++;
        if (completedButtons === totalButtons) {
            alert("Congrats! You have completed all the tasks.");
        }
    });
});

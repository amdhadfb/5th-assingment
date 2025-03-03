document.addEventListener("DOMContentLoaded", function () {
   
    const taskAssignedElement = document.querySelector(".col-span-2 h1.font-bold"); 
    const btnCircle = document.querySelector(".btn-circle"); 
    const completeButtons = document.querySelectorAll(".complete-btn"); 

    completeButtons.forEach((button) => {
        button.addEventListener("click", function () {
            let taskAssigned = parseInt(taskAssignedElement.textContent); 
            let completedCount = parseInt(btnCircle.textContent); 

            if (taskAssigned > 0) {
                taskAssignedElement.textContent = taskAssigned - 1; 
                btnCircle.textContent = completedCount + 1; 
            }

            // Disable the button after clicking
            this.disabled = true;
            this.textContent = "Completed "; 
        });
    });
});

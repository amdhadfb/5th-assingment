let backgrounds = ['bg-red-100', 'bg-blue-100', 'bg-green-100', 'bg-yellow-100'];
let currentBgIndex = 0;
document.getElementById('theme-toggle').addEventListener('click', function() {
    document.getElementById('main-body').classList.remove(backgrounds[currentBgIndex]);
    currentBgIndex = (currentBgIndex + 1) % backgrounds.length;
    document.getElementById('main-body').classList.add(backgrounds[currentBgIndex]);
});

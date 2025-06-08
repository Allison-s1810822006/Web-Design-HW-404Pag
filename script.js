document.querySelector('.menu').addEventListener('click', function() {
    document.querySelector('.nav-menu').classList.toggle('active');
});

let score = 0;
const interactiveArea = document.querySelector('.interactive-area');
const coffee = document.querySelector('.coffee');
const overlay = document.querySelector('.overlay-404');
const scoreSpan = document.getElementById('score');
const retryBtn = document.querySelector('.retry-btn');

// 顯示Error視窗（漸顯）
function showOverlay() {
    overlay.classList.add('active');
}
// 隱藏Error視窗（漸隱）
function hideOverlay() {
    overlay.classList.remove('active');
}
// 慢速搖晃咖啡杯
function shakeCoffee() {
    coffee.classList.add('shake');
    setTimeout(() => {
        coffee.classList.remove('shake');
    }, 1500);
}
// 初始不顯示Error視窗
window.addEventListener('DOMContentLoaded', function() {
    hideOverlay();
});
// 滑鼠移到咖啡杯或貓咪時，顯示Error視窗並搖晃咖啡杯
interactiveArea.addEventListener('mouseenter', function() {
    showOverlay();
    shakeCoffee();
});
// 滑鼠移出Error視窗時，隱藏Error視窗
overlay.addEventListener('mouseleave', function() {
    hideOverlay();
});
// Try Again按鈕可再次搖晃咖啡杯
retryBtn.addEventListener('click', function(e) {
    e.stopPropagation();
    window.location.href = 'HomePage.html';
});

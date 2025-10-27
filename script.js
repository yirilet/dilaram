const balloons = document.querySelectorAll('.balloon');
const popup = document.getElementById('message-popup');

balloons.forEach(balloon => {
    // Rastgele yatay konumlandır
    balloon.style.left = Math.random() * (window.innerWidth - 100) + 'px';
    // Rastgele animasyon süresi
    balloon.style.animationDuration = 6 + Math.random() * 4 + 's'; // 6-10 saniye

    balloon.addEventListener('click', () => {
        popup.innerText = balloon.dataset.message;
        popup.style.display = 'block';

        setTimeout(() => {
            popup.style.display = 'none';
        }, 2000);
    });
});

// Бургер-меню
document.querySelectorAll('.burger').forEach(burger => {
    burger.addEventListener('click', function() {
        const menuId = this.dataset.target;
        document.getElementById(menuId).classList.toggle('active');
    });
});

// Модальное окно
const modalOverlay = document.getElementById('modalOverlay');
const modalCountry = document.getElementById('modalCountry');
const modalName = document.getElementById('modalName');

window.openModal = function(country) {
    if (modalCountry) modalCountry.value = country || 'Не указана';
    if (modalOverlay) modalOverlay.style.display = 'flex';
};

window.closeModal = function() {
    if (modalOverlay) modalOverlay.style.display = 'none';
};

window.submitBooking = function() {
    alert('Спасибо! Менеджер свяжется с вами в ближайшее время.');
    closeModal();
};

window.onclick = function(event) {
    if (event.target === modalOverlay) {
        closeModal();
    }
};

// Таймер для страницы горящих туров
function updateTimer() {
    const endDate = new Date();
    endDate.setDate(endDate.getDate() + 2);
    endDate.setHours(12, 0, 0, 0);
    
    const now = new Date();
    const diff = endDate - now;
    
    if (diff <= 0) return;
    
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);
    
    const daysEl = document.getElementById('daysHot');
    const hoursEl = document.getElementById('hoursHot');
    const minutesEl = document.getElementById('minutesHot');
    const secondsEl = document.getElementById('secondsHot');
    
    if (daysEl) daysEl.textContent = days.toString().padStart(2, '0');
    if (hoursEl) hoursEl.textContent = hours.toString().padStart(2, '0');
    if (minutesEl) minutesEl.textContent = minutes.toString().padStart(2, '0');
    if (secondsEl) secondsEl.textContent = seconds.toString().padStart(2, '0');
}

if (document.getElementById('daysHot')) {
    updateTimer();
    setInterval(updateTimer, 1000);
}

// Калькулятор на странице поиска
window.calculatePrice = function() {
    const price = parseInt(document.getElementById('calcCountry').value);
    const nights = parseInt(document.getElementById('calcNights').value) || 7;
    const persons = parseInt(document.getElementById('calcPersons').value) || 2;
    const total = price * nights * persons;
    document.getElementById('calcResult').textContent = total.toLocaleString() + ' $';
};
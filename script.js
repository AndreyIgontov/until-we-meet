function updateCountdown() {
    // Set the target date in Warsaw timezone (UTC+2)
    const targetDate = new Date('2025-04-17T18:20:00+02:00');
    const now = new Date();

    // Calculate the time difference
    const diff = targetDate - now;

    // Check if the countdown has ended
    if (diff <= 0) {
        document.querySelector('.countdown').innerHTML = '<h2>The time has come!</h2>';
        return;
    }

    // Calculate days, hours, minutes, and seconds
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    // Update the DOM with padded numbers
    document.getElementById('days').textContent = String(days).padStart(2, '0');
    document.getElementById('hours').textContent = String(hours).padStart(2, '0');
    document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
    document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');
}

// Update the countdown every second
setInterval(updateCountdown, 1000);

// Initial call to avoid delay
updateCountdown(); 
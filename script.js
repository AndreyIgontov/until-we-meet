function updateCountdown() {
    // Create target date in Warsaw time (UTC+2)
    const targetDate = new Date(Date.UTC(2025, 3, 17, 16, 20, 0)); // 18:20 Warsaw time (UTC+2)
    const now = new Date();

    // Calculate the time difference
    const diff = targetDate.getTime() - now.getTime();

    // Calculate all time units
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    // Calculate total values
    const totalHours = Math.floor(diff / (1000 * 60 * 60));
    const totalMinutes = Math.floor(diff / (1000 * 60));
    const totalSeconds = Math.floor(diff / 1000);

    // Get all elements
    const elements = {
        days: document.getElementById('days'),
        hours: document.getElementById('hours'),
        minutes: document.getElementById('minutes'),
        seconds: document.getElementById('seconds'),
        totalHours: document.getElementById('total-hours'),
        totalMinutes: document.getElementById('total-minutes'),
        totalSeconds: document.getElementById('total-seconds'),
        countdown: document.querySelector('.countdown')
    };

    // Check if elements exist
    if (Object.values(elements).some(el => !el)) {
        console.error('Required elements not found');
        return;
    }

    // Update the display
    if (diff <= 0) {
        elements.countdown.innerHTML = '<h2>The time has come!</h2>';
    } else {
        // Update main countdown
        elements.days.textContent = String(days).padStart(2, '0');
        elements.hours.textContent = String(hours).padStart(2, '0');
        elements.minutes.textContent = String(minutes).padStart(2, '0');
        elements.seconds.textContent = String(seconds).padStart(2, '0');

        // Update alternative formats
        elements.totalHours.textContent = totalHours.toLocaleString();
        elements.totalMinutes.textContent = totalMinutes;
        elements.totalSeconds.textContent = totalSeconds;
    }
}

// Initial call to avoid delay
updateCountdown();

// Update the countdown every second
setInterval(updateCountdown, 1000); 
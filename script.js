function updateCountdown() {
    // Create target date for August 2, 2025 at 16:30 Warsaw time (UTC+2 in summer)
    // Warsaw is UTC+2 during summer time, so 16:30 Warsaw = 14:30 UTC
    const targetDate = new Date(Date.UTC(2025, 7, 2, 14, 30, 0));
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

// Dynamic floating images with random positioning
function initializeFloatingImages() {
    const floatingItems = document.querySelectorAll('.floating-item');
    
    floatingItems.forEach((item, index) => {
        // Random horizontal position
        const randomLeft = Math.random() * 80 + 10; // 10% to 90%
        item.style.left = randomLeft + '%';
        
        // Random animation duration between 12-18 seconds
        const randomDuration = Math.random() * 6 + 12;
        item.style.animationDuration = randomDuration + 's';
        
        // Random delay based on index with some randomness
        const randomDelay = (index * 2) + (Math.random() * 3);
        item.style.animationDelay = randomDelay + 's';
        
        // Random rotation
        const randomRotation = Math.random() * 20 - 10; // -10 to 10 degrees
        item.style.transform = `rotate(${randomRotation}deg)`;
    });
}

// Reinitialize positions every 30 seconds for more variety
function randomizeFloatingImages() {
    const floatingItems = document.querySelectorAll('.floating-item');
    
    floatingItems.forEach(item => {
        const randomLeft = Math.random() * 80 + 10;
        item.style.left = randomLeft + '%';
        
        const randomDuration = Math.random() * 6 + 12;
        item.style.animationDuration = randomDuration + 's';
    });
}

// Initialize floating images
initializeFloatingImages();

// Randomize positions every 30 seconds
setInterval(randomizeFloatingImages, 30000); 
// Countdown Timer
const countdown = () => {
    const countDate = new Date('Feb 26, 2025 09:00:00').getTime();
    const now = new Date().getTime();
    const gap = countDate - now;

    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    const textDay = Math.floor(gap / day);
    const textHour = Math.floor((gap % day) / hour);
    const textMinute = Math.floor((gap % hour) / minute);
    const textSecond = Math.floor((gap % minute) / second);

    document.getElementById('countdown').innerHTML = `Time until event: ${textDay}d ${textHour}h ${textMinute}m ${textSecond}s`;
};

// Run countdown every second
setInterval(countdown, 1000);

// Placeholder for live chat integration
document.getElementById('live-chat').innerHTML = '<p>Live chat will be available soon.</p>';

// Form submission and payment integration (Mock example)
document.getElementById('registration-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Registration successful! Payment gateway integration will be added here.');
});

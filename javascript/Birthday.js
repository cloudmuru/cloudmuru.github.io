(() => {
    const tabs = {
        $button: document.querySelectorAll('.tab-menu__button'),
        $panel: document.querySelectorAll('.tab-panel'),
        init() {
            for (let i = 0; i < this.$button.length; i++) {
                let button = this.$button[i];
                let panel = this.$panel[i];

                button.addEventListener('click', () => {
                    document.querySelector('.tab-menu__button.is-active').classList.remove('is-active');
                    document.querySelector('.tab-panel.is-active').classList.remove('is-active');
                    button.classList.add('is-active');
                    panel.classList.add('is-active');
                });
            }
        }
    }
    tabs.init();

    // Countdown Timer for September 18th
    function updateCountdown() {
        // Get current time in Manila timezone
        const now = new Date(new Date().toLocaleString('en-US', { timeZone: 'Asia/Manila' }));
        // Target: September 18th, 00:00 Manila time
        let target = new Date(Date.UTC(now.getFullYear(), 8, 18, 0, 0, 0));
        // Convert target UTC to Manila local time
        target = new Date(target.toLocaleString('en-US', { timeZone: 'Asia/Manila' }));
        if (now > target) {
            // If today is after Sept 18, set target to next year
            target = new Date(Date.UTC(now.getFullYear() + 1, 8, 18, 0, 0, 0));
            target = new Date(target.toLocaleString('en-US', { timeZone: 'Asia/Manila' }));
        }
        const diff = target - now;
        const homeGif = document.getElementById('home-gif');
        const birthdayHeading = document.getElementById('birthday-heading');
        const birthdayClock = document.getElementById('birthday-clock');
        const messagePanel = document.getElementById('message-panel');
        if (diff <= 0) {
            document.getElementById('countdown').textContent = "It's September 18th!";
            if (homeGif) {
                homeGif.src = "images/Happy Birthday Neko.gif";
                homeGif.alt = "Happy Birthday Neko";
            }
            if (birthdayHeading) birthdayHeading.style.display = '';
            if (birthdayClock) birthdayClock.style.display = '';
            if (messagePanel) messagePanel.style.display = '';
            return;
        } else {
            if (homeGif) {
                homeGif.src = "images/5810e746c78c7bc1b7e3f817790a142c.gif";
                homeGif.alt = "Waiting Gif";
            }
            if (birthdayHeading) birthdayHeading.style.display = 'none';
            if (birthdayClock) birthdayClock.style.display = 'none';
            if (messagePanel) messagePanel.style.display = 'none';
        }
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((diff / (1000 * 60)) % 60);
        const seconds = Math.floor((diff / 1000) % 60);
        document.getElementById('countdown').textContent = `${days}d ${hours}h ${minutes}m ${seconds}s`;
    }

    // Only show timer on Home tab
    function showTimerIfHome() {
        const homePanel = document.querySelector('.tab-panel.is-active');
        const timer = document.getElementById('timer');
        if (homePanel && timer) {
            timer.style.display = '';
        } else if (timer) {
            timer.style.display = 'none';
        }
    }

    setInterval(() => {
        updateCountdown();
        showTimerIfHome();
    }, 1000);
})();
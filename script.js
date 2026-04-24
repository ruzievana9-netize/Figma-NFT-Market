// Live countdown timer
    let totalSeconds = 59 * 3600 + 59 * 60 + 59;

    function updateTimer() {
      const h = Math.floor(totalSeconds / 3600);
      const m = Math.floor((totalSeconds % 3600) / 60);
      const s = totalSeconds % 60;
      document.getElementById('hours').textContent   = String(h).padStart(2, '0');
      document.getElementById('minutes').textContent = String(m).padStart(2, '0');
      document.getElementById('seconds').textContent = String(s).padStart(2, '0');

      if (totalSeconds > 0) {
        totalSeconds--;
      } else {
        clearInterval(timerInterval);
      }
    }

    updateTimer();
    const timerInterval = setInterval(updateTimer, 1000);
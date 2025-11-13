(function () {
      // --- CONFIG ---
      const START_CENTS = 500 * 100;
      const START_ISO = '2025-10-18T14:00:00-04:00';
      const INTERVAL_SECONDS = 4;
      const startTime = new Date(START_ISO);
      const priceEl = document.getElementById('price');
      const nowLink = document.getElementById('nowLink');

      function formatCents(cents) {
        return (cents / 100).toFixed(2);
      }

      function getCurrentPrice() {
        const now = new Date();
        let elapsedSec = Math.floor((now - startTime) / 1000);
        if (elapsedSec < 0) elapsedSec = 0;

        const centsToAdd = Math.floor(elapsedSec / INTERVAL_SECONDS);
        const currentCents = START_CENTS + centsToAdd;
        return currentCents;
      }

      function updatePrice() {
        const cents = getCurrentPrice();
        priceEl.textContent = formatCents(cents);
      }


      updatePrice();
      setInterval(updatePrice, 3000);


      nowLink.addEventListener('click', (e) => {
        e.preventDefault();
        const cents = getCurrentPrice();
        const priceStr = `$${formatCents(cents)}`;
        const subject = encodeURIComponent(`${priceStr} offer to buy Bendapudi.com and NeeliBendapudi.com`);
        const mailto = `mailto:nicholasfisher004+bendapudi@gmail.com?subject=${subject}`;
        window.location.href = mailto;
      });
    })();

(function () {
      // --- CONFIG ---
      const START_CENTS = 1000 * 100; // $1000.00
      const START_ISO = '2025-10-18T14:00:00-04:00'; // Oct 18, 2 PM EDT
      const INTERVAL_SECONDS = 2; // increase every 2 seconds
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
        // Increase by 1 cent per INTERVAL_SECONDS
        const centsToAdd = Math.floor(elapsedSec / INTERVAL_SECONDS);
        const currentCents = START_CENTS + centsToAdd;
        return currentCents;
      }

      function updatePrice() {
        const cents = getCurrentPrice();
        priceEl.textContent = formatCents(cents);
      }

      // Update price display every second (for smoother updates)
      updatePrice();
      setInterval(updatePrice, 1000);

      // On click, create mailto link with current price in subject
      nowLink.addEventListener('click', (e) => {
        e.preventDefault();
        const cents = getCurrentPrice();
        const priceStr = `$${formatCents(cents)}`;
        const subject = encodeURIComponent(`${priceStr} offer to buy Bendapudi.com and NeeliBendapudi.com`);
        const mailto = `mailto:nicholasfisher004@gmail.com+bendapudi?subject=${subject}`;
        window.location.href = mailto;
      });
    })();
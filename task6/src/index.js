const toggle = document.getElementById('billingToggle');
const prices = document.querySelectorAll('.price');

toggle.addEventListener('change', () => {
    const isYearly = toggle.checked;

    prices.forEach(price => {
        const monthly = price.getAttribute('data-monthly');
        const yearly = price.getAttribute('data-yearly');

        price.textContent = isYearly ? `$${yearly}/yr` : `$${monthly}/mo`;
    });
});
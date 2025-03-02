document.getElementById('form1').addEventListener('submit', function (event) {
    event.preventDefault();
    const answers = { democrat: 0, oligarch: 0, tyrant: 0 };
    for (let i = 1; i <= 6; i++) {
        const selected = document.querySelector(`input[name="q${i}"]:checked`);
        if (selected) {
            answers[selected.value]++;
        }
    }
    let rulerType;
    if (answers.democrat >= 3) {
        rulerType = 'democrat';
    } else if (answers.oligarch >= 3) {
        rulerType = 'oligarch';
    } else if (answers.tyrant >= 3) {
        rulerType = 'tyrant';
    } else {
        rulerType = 'mixed'; // Fallback for no clear majority
    }
    document.getElementById('form1').style.display = 'none';
    const form2 = document.getElementById(`${rulerType}-form2`);
    if (form2) {
        form2.style.display = 'block';
        form2.dataset.type = rulerType;
    } else {
        document.getElementById('results').innerHTML = '<p>Your leadership style is too mixed to categorize clearly.</p>';
        document.getElementById('results').style.display = 'block';
    }
});

// Handle submissions for all second forms
document.querySelectorAll('[id$="-form2"]').forEach(form => {
    form.addEventListener('submit', function (event) {
        event.preventDefault();
        const type = event.target.dataset.type;
        let positiveCount = 0;
        for (let i = 7; i <= 12; i++) {
            const selected = event.target.querySelector(`input[name="q${i}"]:checked`);
            if (selected && selected.value === 'positive') {
                positiveCount++;
            }
        }
        let morality = positiveCount >= 4 ? 'positive' : 'negative';
        let result;
        if (type === 'democrat') {
            result = morality === 'positive' ? 'Genuine Democrat' : 'Populist Democrat';
        } else if (type === 'oligarch') {
            result = morality === 'positive' ? 'Benevolent Oligarch' : 'Corrupt Oligarch';
        } else if (type === 'tyrant') {
            result = morality === 'positive' ? "People's Champion" : 'Harsh Tyrant';
        }
        const descriptions = {
            'Genuine Democrat': 'You are a Genuine Democrat, dedicated to empowering the people and enacting meaningful reforms.',
            'Populist Democrat': 'You are a Populist Democrat, skilled at inspiring the masses but sometimes falling short on delivering real change.',
            'Benevolent Oligarch': 'You are a Benevolent Oligarch, using your position to maintain order and prosperity for all.',
            'Corrupt Oligarch': 'You are a Corrupt Oligarch, prioritizing your own wealth and power over the good of the polis.',
            "People's Champion": 'You are a People\'s Champion, a tyrant who uses autocratic power to uplift the common man.',
            'Harsh Tyrant': 'You are a Harsh Tyrant, ruling with an iron fist and little regard for the people\'s welfare.'
        };
        document.getElementById('results').innerHTML = `<h2>Your Result</h2><p>${result}</p><p>${descriptions[result]}</p>`;
        document.getElementById('results').style.display = 'block';
        event.target.style.display = 'none';
    });
});
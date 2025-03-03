document.addEventListener('DOMContentLoaded', () => {
    let politicalCategory = '';
    let lawfulness = '';

    // Political Category Form
    const form1 = document.getElementById('form1');
    form1.addEventListener('submit', (e) => {
        e.preventDefault();
        const answers = Array.from(form1.querySelectorAll('input[type="radio"]:checked')).map(input => input.value);
        const counts = { oligarch: 0, democrat: 0, tyrant: 0 };
        answers.forEach(answer => counts[answer]++);
        politicalCategory = Object.keys(counts).reduce((a, b) => counts[a] > counts[b] ? a : b);
        form1.style.display = 'none';
        document.getElementById(`${politicalCategory}-lawfulness`).style.display = 'block';
    });

    // Lawfulness Forms
    ['democrat', 'oligarch', 'tyrant'].forEach(category => {
        const lawfulnessForm = document.getElementById(`${category}-lawfulness`);
        lawfulnessForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const answers = Array.from(lawfulnessForm.querySelectorAll('input[type="radio"]:checked')).map(input => input.value);
            const counts = { lawful: 0, neutral: 0, chaotic: 0 };
            answers.forEach(answer => counts[answer]++);
            lawfulness = Object.keys(counts).reduce((a, b) => counts[a] > counts[b] ? a : b);
            lawfulnessForm.style.display = 'none';
            document.getElementById(`${category}-${lawfulness}-morality`).style.display = 'block';
        });
    });

    // Morality Forms
    const moralityForms = [
        'democrat-lawful-morality', 'democrat-neutral-morality', 'democrat-chaotic-morality',
        'oligarch-lawful-morality', 'oligarch-neutral-morality', 'oligarch-chaotic-morality',
        'tyrant-lawful-morality', 'tyrant-neutral-morality', 'tyrant-chaotic-morality'
    ];
    moralityForms.forEach(formId => {
        const form = document.getElementById(formId);
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const answers = Array.from(form.querySelectorAll('input[type="radio"]:checked')).map(input => input.value);
            const counts = { good: 0, neutral: 0, evil: 0 };
            answers.forEach(answer => counts[answer]++);
            const morality = Object.keys(counts).reduce((a, b) => counts[a] > counts[b] ? a : b);
            form.style.display = 'none';
            showResults(politicalCategory, lawfulness, morality);
        });
    });

    function showResults(political, lawful, moral) {
        const results = {
            'democrat-lawful-good': { title: 'Lawful Good Democrat', desc: 'A just leader who upholds the will of the people through order and kindness.' },
            'democrat-lawful-neutral': { title: 'Lawful Neutral Democrat', desc: 'A strict adherent to the people’s laws, balancing fairness with pragmatism.' },
            'democrat-lawful-evil': { title: 'Lawful Evil Democrat', desc: 'A manipulative ruler who bends the people’s laws to favor the strong.' },
            'democrat-neutral-good': { title: 'Neutral Good Democrat', desc: 'A compassionate voice for the demos, flexible in pursuit of the common good.' },
            'democrat-neutral-neutral': { title: 'Neutral Democrat', desc: 'A practical mediator, guiding the people without rigid ideals.' },
            'democrat-neutral-evil': { title: 'Neutral Evil Democrat', desc: 'A cunning populist who exploits the demos for personal gain.' },
            'democrat-chaotic-good': { title: 'Chaotic Good Democrat', desc: 'A fiery champion of freedom, leading the people in wild acts of justice.' },
            'democrat-chaotic-neutral': { title: 'Chaotic Neutral Democrat', desc: 'An unpredictable force, letting the people’s passions shape the polis.' },
            'democrat-chaotic-evil': { title: 'Chaotic Evil Democrat', desc: 'A demagogue thriving in anarchy, twisting the masses for dark ends.' },
            'oligarch-lawful-good': { title: 'Lawful Good Oligarch', desc: 'A noble steward who rules the elite justly for the polis’s benefit.' },
            'oligarch-lawful-neutral': { title: 'Lawful Neutral Oligarch', desc: 'A traditional aristocrat, maintaining order among the few.' },
            'oligarch-lawful-evil': { title: 'Lawful Evil Oligarch', desc: 'A cold tyrant of the elite, enforcing harsh laws for power.' },
            'oligarch-neutral-good': { title: 'Neutral Good Oligarch', desc: 'A benevolent noble, pragmatically aiding the polis’s growth.' },
            'oligarch-neutral-neutral': { title: 'Neutral Oligarch', desc: 'A shrewd patrician, balancing wealth and influence with little fuss.' },
            'oligarch-neutral-evil': { title: 'Neutral Evil Oligarch', desc: 'A greedy lord, exploiting all for profit without remorse.' },
            'oligarch-chaotic-good': { title: 'Chaotic Good Oligarch', desc: 'A reckless philanthropist, shaking tradition for the greater good.' },
            'oligarch-chaotic-neutral': { title: 'Chaotic Neutral Oligarch', desc: 'A wild noble, acting on whim within the elite’s sphere.' },
            'oligarch-chaotic-evil': { title: 'Chaotic Evil Oligarch', desc: 'A brutal aristocrat, crushing all in a spree of selfish chaos.' },
            'tyrant-lawful-good': { title: 'Lawful Good Tyrant', desc: 'A benevolent despot, ruling with strict justice for the people’s sake.' },
            'tyrant-lawful-neutral': { title: 'Lawful Neutral Tyrant', desc: 'A disciplined autocrat, enforcing order above all else.' },
            'tyrant-lawful-evil': { title: 'Lawful Evil Tyrant', desc: 'A ruthless sovereign, wielding law as a tool of oppression.' },
            'tyrant-neutral-good': { title: 'Neutral Good Tyrant', desc: 'A pragmatic ruler, using power flexibly for the polis’s good.' },
            'tyrant-neutral-neutral': { title: 'Neutral Tyrant', desc: 'A calculating overlord, adapting to keep control.' },
            'tyrant-neutral-evil': { title: 'Neutral Evil Tyrant', desc: 'A selfish autocrat, bending all to personal ambition.' },
            'tyrant-chaotic-good': { title: 'Chaotic Good Tyrant', desc: 'A wild protector, smashing norms to save the polis.' },
            'tyrant-chaotic-neutral': { title: 'Chaotic Neutral Tyrant', desc: 'An erratic ruler, thriving in unpredictable dominion.' },
            'tyrant-chaotic-evil': { title: 'Chaotic Evil Tyrant', desc: 'A mad tyrant, reveling in destruction and absolute power.' }
        };
        const resultKey = `${political}-${lawful}-${moral}`;
        const result = results[resultKey];
        document.getElementById('results').innerHTML = `<h2>${result.title}</h2><p>${result.desc}</p>`;
        document.getElementById('results').style.display = 'block';
    }
});
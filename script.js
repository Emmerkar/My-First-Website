// Tyrant Test Logic
const tyrantResults = {
    'oligarch-lawful-good': 'Lawful Good Oligarch: You rule with honor among the elite, ensuring justice prevails.',
    'oligarch-lawful-neutral': 'Lawful Neutral Oligarch: You maintain order among the few, prioritizing stability over morality.',
    'oligarch-lawful-evil': 'Lawful Evil Oligarch: You enforce strict control, crushing dissent for personal gain.',
    'oligarch-neutral-good': 'Neutral Good Oligarch: You balance power with kindness, seeking the good of your circle.',
    'oligarch-neutral-neutral': 'Neutral Oligarch: You navigate power pragmatically, neither cruel nor kind.',
    'oligarch-neutral-evil': 'Neutral Evil Oligarch: You manipulate the elite for your own ends, ethics be damned.',
    'oligarch-chaotic-good': 'Chaotic Good Oligarch: You champion freedom among the few, defying rigid norms.',
    'oligarch-chaotic-neutral': 'Chaotic Neutral Oligarch: You thrive in elite chaos, unbound by rules.',
    'oligarch-chaotic-evil': 'Chaotic Evil Oligarch: You sow discord among the powerful for your dark pleasure.',
    'democrat-lawful-good': 'Lawful Good Democrat: You uphold justice and the people’s will with unwavering virtue.',
    'democrat-lawful-neutral': 'Lawful Neutral Democrat: You govern by law, serving the masses without bias.',
    'democrat-lawful-evil': 'Lawful Evil Democrat: You twist democracy’s rules to oppress under a veneer of legitimacy.',
    'democrat-neutral-good': 'Neutral Good Democrat: You seek the people’s welfare, adapting as needed.',
    'democrat-neutral-neutral': 'Neutral Democrat: You balance public will with practical governance.',
    'democrat-neutral-evil': 'Neutral Evil Democrat: You exploit the masses’ trust for selfish ends.',
    'democrat-chaotic-good': 'Chaotic Good Democrat: You fight for freedom and the people, defying tyranny.',
    'democrat-chaotic-neutral': 'Chaotic Neutral Democrat: You let the people rule, reveling in the resulting tumult.',
    'democrat-chaotic-evil': 'Chaotic Evil Democrat: You incite chaos under a democratic guise for power.',
    'tyrant-lawful-good': 'Lawful Good Tyrant: You rule absolutely but for the greater good.',
    'tyrant-lawful-neutral': 'Lawful Neutral Tyrant: You impose order with an iron fist, indifferent to morality.',
    'tyrant-lawful-evil': 'Lawful Evil Tyrant: You crush all beneath a tyrannical, lawful regime.',
    'tyrant-neutral-good': 'Neutral Good Tyrant: You wield absolute power benevolently.',
    'tyrant-neutral-neutral': 'Neutral Tyrant: You rule as you see fit, guided by no higher principle.',
    'tyrant-neutral-evil': 'Neutral Evil Tyrant: You dominate for personal gain, unbound by law or chaos.',
    'tyrant-chaotic-good': 'Chaotic Good Tyrant: You overthrow norms for the people’s liberation.',
    'tyrant-chaotic-neutral': 'Chaotic Neutral Tyrant: Your rule is a whirlwind of unpredictable whims.',
    'tyrant-chaotic-evil': 'Chaotic Evil Tyrant: You reign as a merciless storm, delighting in suffering.'
};

let tyrantChoices = { political: '', lawfulness: '' };

// Stage 1: Political Category
const tyrantForm1 = document.getElementById('tyrant-form1');
if (tyrantForm1) {
    tyrantForm1.addEventListener('submit', function (event) {
        event.preventDefault();
        const political = document.querySelector('#tyrant-form1 input[name="political"]:checked').value;
        tyrantChoices.political = political;
        tyrantForm1.style.display = 'none';
        document.getElementById(`${political}-lawfulness`).style.display = 'block';
    });
}

// Stage 2: Lawfulness
const lawfulnessForms = document.querySelectorAll('.lawfulness-form');
lawfulnessForms.forEach(form => {
    form.addEventListener('submit', function (event) {
        event.preventDefault();
        const lawfulness = form.querySelector('input[name="lawfulness"]:checked').value;
        tyrantChoices.lawfulness = lawfulness;
        form.style.display = 'none';
        document.getElementById(`${tyrantChoices.political}-${lawfulness}-morality`).style.display = 'block';
    });
});

// Stage 3: Morality (Dynamic Creation for Brevity)
const moralityFormTemplate = `
    <div class="question">
        <h3>3. What drives your decisions?</h3>
        <div class="options">
            <label><input type="radio" name="morality" value="good" required> The greater good.</label>
            <label><input type="radio" name="morality" value="neutral"> Power and survival.</label>
            <label><input type="radio" name="morality" value="evil"> Domination and revenge.</label>
        </div>
    </div>
    <button type="submit">Reveal Your Nature</button>
`;

const combinations = [
    'oligarch-lawful', 'oligarch-neutral', 'oligarch-chaotic',
    'democrat-lawful', 'democrat-neutral', 'democrat-chaotic',
    'tyrant-lawful', 'tyrant-neutral', 'tyrant-chaotic'
];
combinations.forEach(combo => {
    if (!document.getElementById(`${combo}-morality`)) {
        const form = document.createElement('form');
        form.id = `${combo}-morality`;
        form.className = 'morality-form';
        form.style.display = 'none';
        form.innerHTML = moralityFormTemplate;
        document.querySelector('main').appendChild(form);
        form.addEventListener('submit', function (event) {
            event.preventDefault();
            const morality = form.querySelector('input[name="morality"]:checked').value;
            const resultKey = `${tyrantChoices.political}-${tyrantChoices.lawfulness}-${morality}`;
            document.getElementById('tyrant-results').innerHTML = `<h2>${tyrantResults[resultKey]}</h2>`;
            document.getElementById('tyrant-results').style.display = 'block';
            form.style.display = 'none';
        });
    }
});

// Commander Test Logic
const commanderResults = {
    'alexander': {
        title: 'Alexander the Great: The Relentless Visionary',
        description: 'You charge toward destiny with unbreakable will, inspiring men to follow through fire and death.',
        quote: '"There is nothing impossible to him who will try."'
    },
    'caesar': {
        title: 'Julius Caesar: The Cunning Strategist',
        description: 'You wield intellect like a blade, cutting through chaos with precision and diplomacy.',
        quote: '"Veni, vidi, vici."'
    },
    'hannibal': {
        title: 'Hannibal Barca: The Audacious Tactician',
        description: 'You turn impossible odds into stunning victories with daring and ingenuity.',
        quote: '"I will either find a way, or make one."'
    },
    'scipio': {
        title: 'Scipio Africanus: The Disciplined Conqueror',
        description: 'You master war’s rhythm, building victory on patience and adaptation.',
        quote: '"I am convinced that life is superiority to a life of obedience."'
    },
    'suntzu': {
        title: 'Sun Tzu: The Elusive Mastermind',
        description: 'You unravel foes with wisdom, winning before swords are drawn.',
        quote: '"The supreme art of war is to subdue the enemy without fighting."'
    },
    'leonidas': {
        title: 'Leonidas I: The Defiant Bulwark',
        description: 'You stand as a wall against the storm, unbreakable in spirit and honor.',
        quote: '"Come and take them!"'
    }
};

let commanderAnswers = { alexander: 0, caesar: 0, hannibal: 0, scipio: 0, suntzu: 0, leonidas: 0 };

function getCommanderResult() {
    let maxCount = 0;
    let resultKey = 'alexander';
    for (const [key, count] of Object.entries(commanderAnswers)) {
        if (count > maxCount) {
            maxCount = count;
            resultKey = key;
        }
    }
    const result = commanderResults[resultKey];
    return `<h2>${result.title}</h2><p>${result.description}</p><blockquote>${result.quote}</blockquote>`;
}

// Stage 1
const commanderStage1 = document.getElementById('commander-stage1');
if (commanderStage1) {
    commanderStage1.addEventListener('submit', function (event) {
        event.preventDefault();
        for (let i = 1; i <= 3; i++) {
            const selected = document.querySelector(`#commander-stage1 input[name="q${i}"]:checked`);
            if (selected) commanderAnswers[selected.value]++;
        }
        commanderStage1.style.display = 'none';
        document.getElementById('commander-stage2').style.display = 'block';
    });
}

// Stage 2
const commanderStage2 = document.getElementById('commander-stage2');
if (commanderStage2) {
    commanderStage2.addEventListener('submit', function (event) {
        event.preventDefault();
        for (let i = 4; i <= 6; i++) {
            const selected = document.querySelector(`#commander-stage2 input[name="q${i}"]:checked`);
            if (selected) commanderAnswers[selected.value]++;
        }
        commanderStage2.style.display = 'none';
        document.getElementById('commander-stage3').style.display = 'block';
    });
}

// Stage 3
const commanderStage3 = document.getElementById('commander-stage3');
if (commanderStage3) {
    commanderStage3.addEventListener('submit', function (event) {
        event.preventDefault();
        for (let i = 7; i <= 9; i++) {
            const selected = document.querySelector(`#commander-stage3 input[name="q${i}"]:checked`);
            if (selected) commanderAnswers[selected.value]++;
        }
        const resultHTML = getCommanderResult();
        document.getElementById('commander-results').innerHTML = resultHTML;
        document.getElementById('commander-results').style.display = 'block';
        commanderStage3.style.display = 'none';
    });
}
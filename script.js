// Results object with unique titles and descriptions for all 27 permutations
const results = {
    'democrat-lawful-good': {
        title: 'The People\'s Justiciar',
        description: 'You are a steadfast champion of the demos, weaving the will of the people into a tapestry of just laws. In the agora, your voice rises to protect the weak, ensuring that Solon’s spirit of equity endures.'
    },
    'democrat-lawful-neutral': {
        title: 'The Strict Democrat',
        description: 'You are a meticulous steward of the demos, enforcing the assembly’s decrees with unwavering precision. Your polis thrives on stability, its laws a shield against disorder.'
    },
    'democrat-lawful-evil': {
        title: 'The Tyrannical Populist',
        description: 'You are a cunning architect of the demos, twisting the laws of the assembly to bind the people to your will. Your polis runs like a machine, its order a facade for your dominance.'
    },
    'democrat-neutral-good': {
        title: 'The Compassionate Mediator',
        description: 'You are a compassionate voice in the agora, guiding the demos with a flexible hand toward a brighter future. Laws bend to serve the greater good.'
    },
    'democrat-neutral-neutral': {
        title: 'The Pragmatic Balancer',
        description: 'You are a pragmatic mediator of the demos, balancing the assembly’s cries with the needs of the moment. Your polis endures through adaptability.'
    },
    'democrat-neutral-evil': {
        title: 'The Manipulative Schemer',
        description: 'You are a sly manipulator within the demos, turning debates into a stage for your ambition. Your polis bends to your schemes.'
    },
    'democrat-chaotic-good': {
        title: 'The Passionate Liberator',
        description: 'You are a fiery liberator of the demos, igniting the people’s passion to cast off old chains. Your polis pulses with freedom.'
    },
    'democrat-chaotic-neutral': {
        title: 'The Unpredictable Visionary',
        description: 'You are a wild spirit of the demos, reveling in the untamed will of the assembly. Your polis is a tempest of voices.'
    },
    'democrat-chaotic-evil': {
        title: 'The Anarchic Despot',
        description: 'You are a dark whirlwind within the demos, sowing discord to reap power from the ashes of order. Your polis trembles under your anarchic sway.'
    },
    'oligarch-lawful-good': {
        title: 'The Noble Protector',
        description: 'You are a noble pillar of the polis, upholding ancient laws to shield both rich and poor under your care. Your rule ensures prosperity flows from the elite to the masses.'
    },
    'oligarch-lawful-neutral': {
        title: 'The Traditionalist Enforcer',
        description: 'You are a stern guardian of the polis, enforcing old codes to preserve the dominance of the noble few. Your rule is a bastion of order.'
    },
    'oligarch-lawful-evil': {
        title: 'The Oppressive Aristocrat',
        description: 'You are a cold sovereign of the polis, wielding the elders’ laws as a yoke upon the masses. Your rule fortifies the elite.'
    },
    'oligarch-neutral-good': {
        title: 'The Wise Benefactor',
        description: 'You are a wise benefactor among the elite, bending tradition to ease the burdens of the downtrodden. Your rule blends noble privilege with mercy.'
    },
    'oligarch-neutral-neutral': {
        title: 'The Shrewd Aristocrat',
        description: 'You are a shrewd arbiter of the polis, steering the noble council with a practical hand. Your rule balances the elite’s interests.'
    },
    'oligarch-neutral-evil': {
        title: 'The Corrupt Patrician',
        description: 'You are a crafty schemer among the elite, exploiting noble privilege to tighten your grip on the polis. Your rule is a web of alliances and betrayals.'
    },
    'oligarch-chaotic-good': {
        title: 'The Benevolent Anarchist',
        description: 'You are a rebellious scion of the elite, shattering old hierarchies to lift the polis from stagnation. Your rule defies the council’s norms.'
    },
    'oligarch-chaotic-neutral': {
        title: 'The Capricious Noble',
        description: 'You are an untamed force among the elite, wielding your status with reckless abandon. Your rule is a storm of noble whims.'
    },
    'oligarch-chaotic-evil': {
        title: 'The Savage Warlord',
        description: 'You are a savage prince of the polis, tearing through the noble order to claim all for yourself. Your rule is a reign of terror.'
    },
    'tyrant-lawful-good': {
        title: 'The Just Autocrat',
        description: 'You are a resolute sovereign of the polis, forging a legal order that lifts the people under your benevolent hand. Your rule is a disciplined harmony.'
    },
    'tyrant-lawful-neutral': {
        title: 'The Iron-Fisted Ruler',
        description: 'You are a firm autocrat of the polis, binding all to your unyielding edicts with clinical precision. Your rule is an iron framework.'
    },
    'tyrant-lawful-evil': {
        title: 'The Merciless Despot',
        description: 'You are a merciless despot of the polis, crafting laws to chain the people to your ambition. Your rule is a fortress of order.'
    },
    'tyrant-neutral-good': {
        title: 'The Pragmatic Savior',
        description: 'You are a pragmatic savior of the polis, seizing power to guide its people to a better dawn. Your rule blends bold action with care.'
    },
    'tyrant-neutral-neutral': {
        title: 'The Calculating Monarch',
        description: 'You are a calculating ruler of the polis, wielding power with a steady, uncommitted hand. Your rule adapts to each challenge.'
    },
    'tyrant-neutral-evil': {
        title: 'The Ruthless Autocrat',
        description: 'You are a ruthless opportunist of the polis, turning every crisis into a step toward greater dominion. Your rule is a dance of cunning.'
    },
    'tyrant-chaotic-good': {
        title: 'The Bold Liberator',
        description: 'You are a bold liberator of the polis, toppling old powers to free its people in a blaze of upheaval. Your rule is a chaotic hymn to justice.'
    },
    'tyrant-chaotic-neutral': {
        title: 'The Erratic Sovereign',
        description: 'You are an erratic monarch of the polis, ruling through caprice and unshackled will. Your rule is a whirlwind of freedom and folly.'
    },
    'tyrant-chaotic-evil': {
        title: 'The Mad Despot',
        description: 'You are a tempest of tyranny, sweeping through the polis with ferocity unbound. Your rule is a dark hymn of chaos.'
    }
};

// Function to determine dominant type based on answers
function getDominantType(answers) {
    const counts = { oligarch: 0, democrat: 0, tyrant: 0, lawful: 0, neutral: 0, chaotic: 0, good: 0, evil: 0 };
    Object.entries(answers).forEach(([type, count]) => {
        counts[type] = count;
    });
    let dominant = '';
    let maxCount = 0;
    for (const [type, count] of Object.entries(counts)) {
        if (count > maxCount) {
            maxCount = count;
            dominant = type;
        } else if (count === maxCount && count > 0) {
            dominant = 'mixed';
        }
    }
    return dominant;
}

// Event listener for political category form
document.getElementById('form1').addEventListener('submit', function (event) {
    event.preventDefault();
    const answers = { oligarch: 0, democrat: 0, tyrant: 0 };
    for (let i = 1; i <= 3; i++) {
        const selected = document.querySelector(`input[name="q${i}"]:checked`);
        if (selected) answers[selected.value]++;
    }
    politicalCategory = getDominantType(answers);
    if (politicalCategory !== 'mixed') {
        document.getElementById('form1').style.display = 'none';
        document.getElementById(`${politicalCategory}-lawfulness`).style.display = 'block';
    } else {
        document.getElementById('results').innerHTML = '<p>Your political stance is too varied to define clearly.</p>';
        document.getElementById('results').style.display = 'block';
    }
});

// Event listeners for lawfulness forms
document.querySelectorAll('[id$="-lawfulness"]').forEach(form => {
    form.addEventListener('submit', function (event) {
        event.preventDefault();
        const answers = { lawful: 0, neutral: 0, chaotic: 0 };
        for (let i = 4; i <= 6; i++) {
            const selected = event.target.querySelector(`input[name="q${i}"]:checked`);
            if (selected) answers[selected.value]++;
        }
        lawfulness = getDominantType(answers);
        if (lawfulness !== 'mixed') {
            event.target.style.display = 'none';
            const moralityFormId = `${politicalCategory}-${lawfulness}-morality`;
            const moralityForm = document.getElementById(moralityFormId);
            if (moralityForm) {
                moralityForm.style.display = 'block';
            } else {
                document.getElementById('results').innerHTML = '<p>Error: Morality questions not found for this path.</p>';
                document.getElementById('results').style.display = 'block';
            }
        } else {
            document.getElementById('results').innerHTML = '<p>Your approach to order is too mixed to categorize.</p>';
            document.getElementById('results').style.display = 'block';
        }
    });
});

// Event listeners for morality forms
document.querySelectorAll('[id$="-morality"]').forEach(form => {
    form.addEventListener('submit', function (event) {
        event.preventDefault();
        const answers = { good: 0, neutral: 0, evil: 0 };
        for (let i = 7; i <= 9; i++) {
            const selected = event.target.querySelector(`input[name="q${i}"]:checked`);
            if (selected) answers[selected.value]++;
        }
        const morality = getDominantType(answers);
        event.target.style.display = 'none';
        if (morality !== 'mixed') {
            const key = `${politicalCategory}-${lawfulness}-${morality}`;
            const result = results[key];
            document.getElementById('results').innerHTML = `<h2>${result.title}</h2><p>${result.description}</p>`;
        } else {
            document.getElementById('results').innerHTML = '<p>Your moral path is too conflicted to define clearly.</p>';
        }
        document.getElementById('results').style.display = 'block';
    });
});
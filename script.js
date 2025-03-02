let politicalCategory = '';
let lawfulness = '';

document.getElementById('form1').addEventListener('submit', function (event) {
    event.preventDefault();
    const answers = { oligarch: 0, democrat: 0, tyrant: 0 };
    for (let i = 1; i <= 3; i++) {
        const selected = document.querySelector(`input[name="q${i}"]:checked`);
        if (selected) answers[selected.value]++;
    }
    politicalCategory = answers.oligarch >= 2 ? 'oligarch' : answers.democrat >= 2 ? 'democrat' : answers.tyrant >= 2 ? 'tyrant' : 'mixed';
    if (politicalCategory !== 'mixed') {
        document.getElementById('form1').style.display = 'none';
        document.getElementById(`${politicalCategory}-lawfulness`).style.display = 'block';
    } else {
        document.getElementById('results').innerHTML = '<p>Your political stance is too varied to define clearly.</p>';
        document.getElementById('results').style.display = 'block';
    }
});

document.querySelectorAll('[id$="-lawfulness"]').forEach(form => {
    form.addEventListener('submit', function (event) {
        event.preventDefault();
        const answers = { lawful: 0, neutral: 0, chaotic: 0 };
        for (let i = 4; i <= 6; i++) {
            const selected = event.target.querySelector(`input[name="q${i}"]:checked`);
            if (selected) answers[selected.value]++;
        }
        lawfulness = answers.lawful >= 2 ? 'lawful' : answers.neutral >= 2 ? 'neutral' : answers.chaotic >= 2 ? 'chaotic' : 'mixed';
        if (lawfulness !== 'mixed') {
            event.target.style.display = 'none';
            const moralityFormId = `${politicalCategory}-${lawfulness}-morality`;
            if (document.getElementById(moralityFormId)) {
                document.getElementById(moralityFormId).style.display = 'block';
            } else {
                document.getElementById('results').innerHTML = '<p>Error: Morality questions not found.</p>';
                document.getElementById('results').style.display = 'block';
            }
        } else {
            document.getElementById('results').innerHTML = '<p>Your approach to order is too mixed to categorize.</p>';
            document.getElementById('results').style.display = 'block';
        }
    });
});

document.querySelectorAll('[id$="-morality"]').forEach(form => {
    form.addEventListener('submit', function (event) {
        event.preventDefault();
        const answers = { good: 0, neutral: 0, evil: 0 };
        for (let i = 7; i <= 9; i++) {
            const selected = event.target.querySelector(`input[name="q${i}"]:checked`);
            if (selected) answers[selected.value]++;
        }
        const morality = answers.good >= 2 ? 'good' : answers.neutral >= 2 ? 'neutral' : answers.evil >= 2 ? 'evil' : 'mixed';
        if (morality !== 'mixed') {
            const key = `${politicalCategory}-${lawfulness}-${morality}`;
            const results = {
                'democrat-lawful-good': 'You are a steadfast champion of the demos, weaving the will of the people into a tapestry of just laws. In the agora, your voice rises to protect the weak, ensuring that Solon’s spirit of equity endures. Your polis stands as a beacon of order and benevolence, its citizens united under your measured guidance.',
                'democrat-lawful-neutral': 'You are a meticulous steward of the demos, enforcing the assembly’s decrees with unwavering precision. Your polis thrives on stability, its laws a shield against disorder, though your focus on structure sometimes overshadows the plight of the individual.',
                'democrat-lawful-evil': 'You are a cunning architect of the demos, twisting the laws of the assembly to bind the people to your will. Your polis runs like a machine, its order a facade for your dominance, with dissenters crushed beneath the weight of your legal machinations.',
                'democrat-neutral-good': 'You are a compassionate voice in the agora, guiding the demos with a flexible hand toward a brighter future. Laws bend to serve the greater good, and your leadership fosters a polis where hope flourishes amid practical compromise.',
                'democrat-neutral-neutral': 'You are a pragmatic mediator of the demos, balancing the cries of the assembly with the needs of the moment. Your polis endures through adaptability, its course set by neither grand ideals nor rigid rules, but by the steady rhythm of your decisions.',
                'democrat-neutral-evil': 'You are a sly manipulator within the demos, turning the assembly’s debates into a stage for your ambition. Your polis bends to your schemes, its people unwitting pawns in a game where order serves only your gain.',
                'democrat-chaotic-good': 'You are a fiery liberator of the demos, igniting the people’s passion to cast off old chains. Your polis pulses with freedom, its laws mere suggestions in the face of your relentless drive to uplift the downtrodden through upheaval.',
                'democrat-chaotic-neutral': 'You are a wild spirit of the demos, reveling in the untamed will of the assembly. Your polis is a tempest of voices, unbound by tradition or constraint, its path shaped by the raw energy you unleash upon it.',
                'democrat-chaotic-evil': 'You are a dark whirlwind within the demos, sowing discord to reap power from the ashes of order. Your polis trembles under your anarchic sway, its people free only to serve your cruel whims in a land without law.',
                'oligarch-lawful-good': 'You are a noble pillar of the polis, upholding the ancient laws to shield both rich and poor under your care. Your rule ensures prosperity flows from the elite to the masses, guided by a tradition that honors the gods and the people alike.',
                'oligarch-lawful-neutral': 'You are a stern guardian of the polis, enforcing the old codes to preserve the dominance of the noble few. Your rule is a bastion of order, its rigid structure a testament to the enduring power of your lineage.',
                'oligarch-lawful-evil': 'You are a cold sovereign of the polis, wielding the laws of the elders as a yoke upon the masses. Your rule fortifies the elite, its traditions a weapon to hoard wealth and grind opposition into dust.',
                'oligarch-neutral-good': 'You are a wise benefactor among the elite, bending tradition to ease the burdens of the polis’ downtrodden. Your rule blends noble privilege with acts of mercy, crafting a city where order serves the welfare of all.',
                'oligarch-neutral-neutral': 'You are a shrewd arbiter of the polis, steering the noble council with a practical hand. Your rule balances the interests of the elite with the needs of the moment, ensuring your family’s power endures through calculated flexibility.',
                'oligarch-neutral-evil': 'You are a crafty schemer among the elite, exploiting noble privilege to tighten your grip on the polis. Your rule is a web of alliances and betrayals, its people mere tools to enrich your house.',
                'oligarch-chaotic-good': 'You are a rebellious scion of the elite, shattering old hierarchies to lift the polis from stagnation. Your rule defies the council’s norms, its chaos a forge for a new order where nobility serves the common good.',
                'oligarch-chaotic-neutral': 'You are an untamed force among the elite, wielding your status with reckless abandon. Your rule is a storm of noble whims, its people caught in the unpredictable wake of your defiance against tradition.',
                'oligarch-chaotic-evil': 'You are a savage prince of the polis, tearing through the noble order to claim all for yourself. Your rule is a reign of terror, its chaos a crucible where your enemies burn and your power rises from their ruin.',
                'tyrant-lawful-good': 'You are a resolute sovereign of the polis, forging a legal order that lifts the people under your benevolent hand. Your rule is a disciplined harmony, its decrees a path to prosperity for a city that reveres your name.',
                'tyrant-lawful-neutral': 'You are a firm autocrat of the polis, binding all to your unyielding edicts with clinical precision. Your rule is an iron framework, its people safe but subject to the cold logic of your absolute command.',
                'tyrant-lawful-evil': 'You are a merciless despot of the polis, crafting laws to chain the people to your ambition. Your rule is a fortress of order, its citizens mere cogs in a machine that feeds your insatiable hunger for control.',
                'tyrant-neutral-good': 'You are a pragmatic savior of the polis, seizing power to guide its people to a better dawn. Your rule blends bold action with care, its shifting ways a means to heal a fractured city under your watch.',
                'tyrant-neutral-neutral': 'You are a calculating ruler of the polis, wielding power with a steady, uncommitted hand. Your rule adapts to each challenge, its people neither exalted nor oppressed, but kept in line by your practical will.',
                'tyrant-neutral-evil': 'You are a ruthless opportunist of the polis, turning every crisis into a step toward greater dominion. Your rule is a dance of cunning, its people pawns in a game where only your triumph matters.',
                'tyrant-chaotic-good': 'You are a bold liberator of the polis, toppling old powers to free its people in a blaze of upheaval. Your rule is a chaotic hymn to justice, its unpredictability a price for the hope you bring.',
                'tyrant-chaotic-neutral': 'You are an erratic monarch of the polis, ruling through caprice and unshackled will. Your rule is a whirlwind of freedom and folly, its people swept along by the untamed force of your desires.',
                'tyrant-chaotic-evil': 'You are a tempest of tyranny, sweeping through the polis with a ferocity that knows no bounds. Laws bend or break at your whim, and your enemies’ ashes fertilize your fields of power. Your rule is a dark hymn of chaos, sung by a people too broken to resist.'
            };
            document.getElementById('results').innerHTML = `<h2>Your Path Revealed</h2><p>${results[key]}</p>`;
            document.getElementById('results').style.display = 'block';
            event.target.style.display = 'none';
        } else {
            document.getElementById('results').innerHTML = '<p>Your moral path is too conflicted to define clearly.</p>';
            document.getElementById('results').style.display = 'block';
        }
    });
});
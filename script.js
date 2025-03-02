document.getElementById('test-form').addEventListener('submit', function (event) {
    event.preventDefault();
    const answers = {
        democrat: 0,
        oligarch: 0,
        tyrant: 0
    };
    const questions = ['q1', 'q2', 'q3', 'q4', 'q5'];
    questions.forEach(q => {
        const selected = document.querySelector(`input[name="${q}"]:checked`);
        if (selected) {
            answers[selected.value]++;
        }
    });
    let result;
    if (answers.democrat >= 3) {
        result = "You are a Democrat. In ancient Greece, democrats like Cleisthenes in Athens sought to give power to the people, establishing systems where citizens could participate in governance. You value equity, dialogue, and laws that serve the masses.";
    } else if (answers.oligarch >= 3) {
        result = "You are an Oligarch. Oligarchs were members of the ruling elite, such as the Spartan Gerousia, who believed power should remain with a few wise leaders. You prioritize stability, tradition, and the interests of the aristocracy.";
    } else if (answers.tyrant >= 3) {
        result = "You are a Tyrant. Tyrants like Peisistratos in Athens often rose with popular support but ruled autocratically. You seize power through cunning or opportunity, bending rules to secure your legacy—sometimes for the people’s benefit, often for your own.";
    } else {
        result = "Your leadership style is mixed. You show tendencies of multiple rulers from ancient Greece, blending strategies from democrats, oligarchs, and tyrants.";
    }
    document.getElementById('results').innerHTML = `<h2>Your Result</h2><p>${result}</p>`;
    document.getElementById('results').style.display = 'block';
});
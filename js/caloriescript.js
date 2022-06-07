const fname = document.querySelector('#fname');
const button = document.querySelector('#submitter');
const result = document.querySelector('.result');


button.addEventListener('click', () => {
    fetch(`https://api.nal.usda.gov/fdc/v1/foods/search?api_key=DEMO_KEY&query=${fname.value}`)
    .then(res => res.json())
    .then(data => {
        const fdcid = data.foods[0].fdcId;
        return fetch(`https://api.nal.usda.gov/fdc/v1/food/${fdcid}?api_key=DEMO_KEY`);
    })
    .then(res => res.json())
    .then(data => {
        const calorie = data.labelNutrients.calories.value;
        const sugar = data.labelNutrients.sugars.value;
        const protein = data.labelNutrients.protein.value;

        result.textContent = `Total Calorie = ${calorie} Sugar = ${sugar}g Protein = ${protein}g`;
    })
});
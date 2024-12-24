const form = document.querySelector('form');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const height = document.querySelector('#height').value;
  const weight = document.querySelector('#weight').value;
  const result = document.querySelector('#results');

  if (height == '' || height < 0 || isNaN(height)) {
    result.innerHTML = `Please give a valid height ${height}`;
  } else if (weight == '' || weight < 0 || isNaN(weight)) {
    result.innerHTML = `Please give a valid weight ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    result.innerHTML = `<span>${bmi}</span>`;
    const para = document.createElement('p');

    if (bmi < 18.6) {
      para.textContent = 'You are underweight';
    } else if (bmi > 18.6 && bmi < 24.9) {
      para.textContent = 'You are in normal range';
    } else {
      para.textContent = 'You are overweight';
    }

    result.appendChild(para);
  }
});

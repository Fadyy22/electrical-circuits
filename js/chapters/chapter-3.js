document.querySelectorAll('#toggle-button').forEach(button => {
  button.addEventListener('click', () => {
    const content = button.parentElement.nextElementSibling;
    content.classList.toggle('hidden');
  });
});

document.getElementById('p1-a-submit').addEventListener('click', () => {
  document.getElementById('p1-a-answer').innerHTML = '0.6 V, 1.9 V, 1.1 V';
});

document.getElementById('p1-b-submit').addEventListener('click', () => {
  const V3 = Number(document.getElementById('p1-b-V3').value);
  const R1 = Number(document.getElementById('p1-b-R1').value);
  const R2 = Number(document.getElementById('p1-b-R2').value);
  const R3 = Number(document.getElementById('p1-b-R3').value);
  const R4 = Number(document.getElementById('p1-b-R4').value);
  const R5 = Number(document.getElementById('p1-b-R5').value);

  document.getElementById('p1-b-answer').innerHTML = `${(V3 * ((R1 + R2 + R3 + R4 + R5) / (R3)))} V`;
});

document.getElementById('p1-c-submit').addEventListener('click', () => {
  document.getElementById('p1-c-answer').innerHTML = '0.0409 A, 0.0205 A';
});

document.getElementById('p1-d-submit').addEventListener('click', () => {
  document.getElementById('p1-d-answer').innerHTML = '0.0223 V, 0.03 V, 0.11 V';
});

document.getElementById('p1-e-submit').addEventListener('click', () => {
  const Is = Number(document.getElementById('p1-e-Is').value);
  const R2 = Number(document.getElementById('p1-e-R2').value);
  const R3 = Number(document.getElementById('p1-e-R3').value);
  const R4 = Number(document.getElementById('p1-e-R4').value);
  const R6 = Number(document.getElementById('p1-e-R6').value);
  const R7 = Number(document.getElementById('p1-e-R7').value);
  const R8 = Number(document.getElementById('p1-e-R8').value);
  const stepOne = ((R3 * R6 * R7) + (R3 * R6 * R8) + (R3 * R7 * R8)) / ((R3 * R6) + (R3 * R7) + (R6 * R7) + (R6 * R8) + (R7 * R8));
  const stepTwo = R4 + stepOne;
  const I2 = Is * (stepTwo / (stepTwo + R2));
  const I3 = (Is - I2) * (((R6 * R7) + (R6 * R8) + (R7 * R8)) / ((R6 * R7) + (R6 * R8) + (R7 * R8) + (R3 * R6) + (R3 * R7)));
  const I8 = Is - I2 - I3;
  const I6 = I8 * (R7 / (R7 + R6));
  document.getElementById('p1-e-answer').innerHTML = `${I2}, ${I3}, ${I6}, ${I8} mA`;
});

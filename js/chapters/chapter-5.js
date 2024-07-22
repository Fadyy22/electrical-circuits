document.querySelectorAll('#toggle-button').forEach(button => {
  button.addEventListener('click', () => {
    const content = button.parentElement.nextElementSibling;
    content.classList.toggle('hidden');
  });
});

document.getElementById('p1-a-submit').addEventListener('click', () => {
  const I = Number(document.getElementById('p1-I').value);
  const V = Number(document.getElementById('p1-V').value);
  document.getElementById('p1-a-answer').innerHTML = `${(6 * I - V + 5) / 20} A`;
});

document.getElementById('p1-b-submit').addEventListener('click', () => {
  const I = Number(document.getElementById('p1-I').value);
  const V = Number(document.getElementById('p1-V').value);
  document.getElementById('p1-b-answer').innerHTML = `${(6 * I - V + 5) / 20} A`;
});

document.getElementById('p2-a-submit').addEventListener('click', () => {
  const R1 = Number(document.getElementById('p2-R1').value);
  const R2 = Number(document.getElementById('p2-R2').value);
  const V1 = Number(document.getElementById('p2-V1').value);
  const V2 = Number(document.getElementById('p2-V2').value);
  document.getElementById('p2-a-answer').innerHTML = `${(V1 * V2) * ((R1 - R2) / ((V2 * R1) - (V1 * R2)))} V`;
});

document.getElementById('p2-b-submit').addEventListener('click', () => {
  const R1 = Number(document.getElementById('p2-R1').value);
  const R2 = Number(document.getElementById('p2-R2').value);
  const V1 = Number(document.getElementById('p2-V1').value);
  const V2 = Number(document.getElementById('p2-V2').value);
  const Vth = (V1 * V2) * ((R1 - R2) / ((V2 * R1) - (V1 * R2)));
  document.getElementById('p2-b-answer').innerHTML = `${((Vth / V2) - 1) * R2} &Omega;`;
});

document.getElementById('p3-a-submit').addEventListener('click', () => {
  const V = Number(document.getElementById('p3-V').value);
  const I = Number(document.getElementById('p3-I').value);
  document.getElementById('p3-a-answer').innerHTML = `${((18 * V) + (360 * I)) / 27} V`;
});

document.getElementById('p3-b-submit').addEventListener('click', () => {
  document.getElementById('p3-b-answer').innerHTML = `20 &Omega;`;
});

document.getElementById('p3-c-submit').addEventListener('click', () => {
  document.getElementById('p3-c-answer').innerHTML = `20 &Omega;`;
});

document.getElementById('p4-a-submit').addEventListener('click', () => {
  document.getElementById('p4-a-answer').innerHTML = `0 A`;
});

document.getElementById('p4-b-submit').addEventListener('click', () => {
  const R = Number(document.getElementById('p4-R').value);
  document.getElementById('p4-b-answer').innerHTML = `${(500 * R) / (R - 500)} &Omega;`;
});

document.getElementById('p5-a-submit').addEventListener('click', () => {
  const R = Number(document.getElementById('p5-R').value);
  document.getElementById('p5-a-answer').innerHTML = `${(5000 * R) / (5000 + (R * Math.pow(10, 3)))} &Omega;`;
});

document.getElementById('p5-b-submit').addEventListener('click', () => {
  const R = Number(document.getElementById('p5-R').value);
  document.getElementById('p5-b-answer').innerHTML = `${(0.0128 * (R * Math.pow(10, 3))) / (5000 + (R * 1000))} mW`;
});

document.getElementById('p5-d-submit').addEventListener('click', () => {
  const R = Number(document.getElementById('p5-R').value);
  document.getElementById('p5-d-answer').innerHTML = `${(0.0128 * (R * Math.pow(10, 3))) / (5000 + (R * 1000))} mW`;
});

document.getElementById('p6-a-submit').addEventListener('click', () => {
  const V = Number(document.getElementById('p6-a-V').value);

  function qEquation(a, b, c) {
    // Calculate the discriminant
    const discriminant = b * b - 4 * a * c;
    // Check if the discriminant is non-negative
    if (discriminant >= 0) {
      // Calculate the two solutions
      const R0_1 = (-b + Math.sqrt(discriminant)) / (2 * a);
      const R0_2 = (-b - Math.sqrt(discriminant)) / (2 * a);
      return [R0_1, R0_2];
    }
  }
  document.getElementById('p6-a-answer').innerHTML = `${qEquation(1, (15 - (0.001 * Math.pow(V, 2))), 56.25)} &Omega;`;
});

document.getElementById('p7-a-submit').addEventListener('click', () => {
  const V = Number(document.getElementById('p7-V').value);
  const I = Number(document.getElementById('p7-I').value);
  document.getElementById('p7-a-answer').innerHTML = `${((4 * I) / 15) - (V / 60)} A`;
});

document.getElementById('p7-b-submit').addEventListener('click', () => {
  const V = Number(document.getElementById('p7-V').value);
  const I = Number(document.getElementById('p7-I').value);
  document.getElementById('p7-b-answer').innerHTML = `${((-2 * V) / 3) + (20 * I)} V`;
});

document.getElementById('p8-a-submit').addEventListener('click', () => {
  const I1 = Number(document.getElementById('p8-a-I1').value);
  const I2 = Number(document.getElementById('p8-a-I2').value);
  document.getElementById('p8-a-answer').innerHTML = `${((0.7 * I2) - I1 - 3.5) / 3} A`;
});

document.getElementById('p9-a-submit').addEventListener('click', () => {
  const I = Number(document.getElementById('p9-a-I').value);
  const V = Number(document.getElementById('p9-a-V').value);
  document.getElementById('p9-a-answer').innerHTML = `${(0.96 * V) - (0.8 * I)} V`;
});

// document.getElementById('p10-a-submit').addEventListener('click', () => {
//   const Vs = Number(document.getElementById('p10-a-Vs').value);
//   const R = Number(document.getElementById('p10-a-R').value);
//   document.getElementById('p10-a-answer').innerHTML = `${Vs / R} A`;
// });

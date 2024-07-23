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

document.getElementById('p2-a-submit').addEventListener('click', () => {
  document.getElementById('p2-a-answer').innerHTML = '120 &Omega;';
});

document.getElementById('p2-b-submit').addEventListener('click', () => {
  const Is = Number(document.getElementById('p2-b-Is').value);
  document.getElementById('p2-b-answer').innerHTML = `${(Math.pow(Is * Math.pow(10, -3), 2)) * 120} W`;
});

document.getElementById('p2-c-submit').addEventListener('click', () => {
  document.getElementById('p2-c-answer').innerHTML = '300 &Omega;';
});

document.getElementById('p2-d-submit').addEventListener('click', () => {
  const Is = Number(document.getElementById('p2-d-Is').value);
  document.getElementById('p2-d-answer').innerHTML = `${(Math.pow(Is * Math.pow(10, -3), 2)) * 300} W`;
});

document.getElementById('p2-e-submit').addEventListener('click', () => {
  document.getElementById('p2-e-answer').innerHTML = '27 &Omega;';
});

document.getElementById('p2-f-submit').addEventListener('click', () => {
  const Vs = Number(document.getElementById('p2-f-Vs').value);
  document.getElementById('p2-f-answer').innerHTML = `${Math.pow(Vs, 2) / 27} W`;
});

document.getElementById('p2-g-submit').addEventListener('click', () => {
  document.getElementById('p2-g-answer').innerHTML = '50 &Omega;';
});

document.getElementById('p2-h-submit').addEventListener('click', () => {
  const Vs = Number(document.getElementById('p2-h-Vs').value);
  document.getElementById('p2-h-answer').innerHTML = `${Math.pow(Vs * Math.pow(10, -3), 2) / 50} W`;
});

document.getElementById('p3-a-submit').addEventListener('click', () => {
  const R1 = Number(document.getElementById('p3-a-R1').value);
  const R2 = Number(document.getElementById('p3-a-R2').value);
  const R3 = Number(document.getElementById('p3-a-R3').value);
  const R4 = Number(document.getElementById('p3-a-R4').value);
  const R5 = Number(document.getElementById('p3-a-R5').value);
  const stepOne = R2 + R5;
  const stepTwo = (stepOne * R3) / (stepOne + R3);
  const stepThree = stepTwo + R4;
  const stepFour = (stepThree * R1) / (stepThree + R1);
  document.getElementById('p3-a-answer').innerHTML = `${stepFour} &Omega;`;
});

document.getElementById('p3-b-submit').addEventListener('click', () => {
  document.getElementById('p3-b-answer').innerHTML = '30 &Omega;';
});

document.getElementById('p3-c-submit').addEventListener('click', () => {
  document.getElementById('p3-c-answer').innerHTML = '60 &Omega;';
});

document.getElementById('p3-d-submit').addEventListener('click', () => {
  document.getElementById('p3-d-answer').innerHTML = '20 &Omega;';
});

document.getElementById('p4-a-submit').addEventListener('click', () => {
  const Ig = Number(document.getElementById('p4-a-Ig').value);
  document.getElementById('p4-a-answer').innerHTML = `${(20 * Ig) / 3} V`;
});

document.getElementById('p4-b-submit').addEventListener('click', () => {
  const Ig = Number(document.getElementById('p4-a-Ig').value);
  document.getElementById('p4-b-answer').innerHTML = `${Ig / 15} A`;
});

document.getElementById('p4-c-submit').addEventListener('click', () => {
  const Ig = Number(document.getElementById('p4-a-Ig').value);
  document.getElementById('p4-c-answer').innerHTML = `${(8 * Math.pow(Ig, 2)) / 3} W`;
});

document.getElementById('p4-d-submit').addEventListener('click', () => {
  const Ig = Number(document.getElementById('p4-a-Ig').value);
  document.getElementById('p4-d-answer').innerHTML = `${10 * Math.pow(Ig, 2)} W`;
});

document.getElementById('p5-a-submit').addEventListener('click', () => {
  const V = Number(document.getElementById('p5-V').value);
  document.getElementById('p5-a-answer').innerHTML = `${V * (8 / 15)} V`;
});

document.getElementById('p5-b-submit').addEventListener('click', () => {
  const V = Number(document.getElementById('p5-V').value);
  document.getElementById('p5-b-answer').innerHTML = `${0.6 * V} V`;
});

document.getElementById('p5-c-submit').addEventListener('click', () => {
  document.getElementById('p5-c-answer').innerHTML = 'is greater than';
});

document.getElementById('p6-a-submit').addEventListener('click', () => {
  const R1 = Number(document.getElementById('p6-R1').value);
  const R2 = Number(document.getElementById('p6-R2').value);
  const R3 = Number(document.getElementById('p6-R3').value);
  const R4 = Number(document.getElementById('p6-R4').value);
  const R5 = Number(document.getElementById('p6-R5').value);
  const R6 = Number(document.getElementById('p6-R6').value);
  const stepOne = R3 + R6;
  const stepTwo = (stepOne * R5) / (stepOne + R5);
  const stepThree = R1 + R2 + stepTwo;
  const answer = 30 * (R4 / (R4 + stepThree));
  document.getElementById('p6-a-answer').innerHTML = `${answer} mA`;
});

document.getElementById('p6-b-submit').addEventListener('click', () => {
  const R1 = Number(document.getElementById('p6-R1').value);
  const R2 = Number(document.getElementById('p6-R2').value);
  const R3 = Number(document.getElementById('p6-R3').value);
  const R4 = Number(document.getElementById('p6-R4').value);
  const R5 = Number(document.getElementById('p6-R5').value);
  const R6 = Number(document.getElementById('p6-R6').value);
  const stepOne = R3 + R6;
  const stepTwo = (stepOne * R5) / (stepOne + R5);
  const stepThree = R1 + R2 + stepTwo;
  const stepFour = 30 * (R4 / (R4 + stepThree));
  const answer = stepFour * (R5 / (R3 + R5 + R6));
  document.getElementById('p6-b-answer').innerHTML = `${answer} mA`;
});

document.getElementById('p7-a-submit').addEventListener('click', () => {
  const V = Number(document.getElementById('p7-V').value);
  document.getElementById('p7-a-answer').innerHTML = `${V / 7.5} V`;
});

document.getElementById('p7-b-submit').addEventListener('click', () => {
  const V = Number(document.getElementById('p7-V').value);
  document.getElementById('p7-b-answer').innerHTML = `${V / 30} A`;
});

document.getElementById('p7-c-submit').addEventListener('click', () => {
  const V = Number(document.getElementById('p7-V').value);
  document.getElementById('p7-c-answer').innerHTML = `${V / 50} A`;
});

document.getElementById('p7-d-submit').addEventListener('click', () => {
  const V = Number(document.getElementById('p7-V').value);
  document.getElementById('p7-d-answer').innerHTML = `${V / 125} A`;
});

document.getElementById('p7-e-submit').addEventListener('click', () => {
  const V = Number(document.getElementById('p7-V').value);
  document.getElementById('p7-e-answer').innerHTML = `${V / 12.5} V`;
});

document.getElementById('p7-f-submit').addEventListener('click', () => {
  const V = Number(document.getElementById('p7-V').value);
  document.getElementById('p7-f-answer').innerHTML = `${(6 * V) / 125} V`;
});

document.getElementById('p8-a-submit').addEventListener('click', () => {
  const Vs = Number(document.getElementById('p8-a-Vs').value);
  document.getElementById('p8-a-answer').innerHTML = `${0.2 * Vs} V`;
});

document.getElementById('p8-b-submit').addEventListener('click', () => {
  document.getElementById('p8-b-answer').innerHTML = '0.2 * V<sub>s</sub>';
});

document.getElementById('p9-a-submit').addEventListener('click', () => {
  const Ig = Number(document.getElementById('p9-a-Ig').value);
  document.getElementById('p9-a-answer').innerHTML = `${1.875 * Ig} V`;
});

document.getElementById('p10-a-submit').addEventListener('click', () => {
  const Vg = Number(document.getElementById('p10-Vg').value);
  document.getElementById('p10-a-answer').innerHTML = `${(5 * Vg) / 27} V`;
});

document.getElementById('p10-b-submit').addEventListener('click', () => {
  const Vg = Number(document.getElementById('p10-Vg').value);
  document.getElementById('p10-b-answer').innerHTML = `${Vg / 9} V`;
});

document.getElementById('p11-a-submit').addEventListener('click', () => {
  const Vg = Number(document.getElementById('p11-Vg').value);
  document.getElementById('p11-a-answer').innerHTML = `${1.655 * Vg} mA`;
});

document.getElementById('p11-b-submit').addEventListener('click', () => {
  const Vg = Number(document.getElementById('p11-Vg').value);
  document.getElementById('p11-b-answer').innerHTML = `${4.7286 * Vg} mA`;
});

document.getElementById('p11-c-submit').addEventListener('click', () => {
  const Vg = Number(document.getElementById('p11-Vg').value);
  document.getElementById('p11-c-answer').innerHTML = `${7.1523 * Vg} mA`;
});

document.getElementById('p11-d-submit').addEventListener('click', () => {
  const Vg = Number(document.getElementById('p11-Vg').value);
  document.getElementById('p11-d-answer').innerHTML = `${0.0088082 * Math.pow(Vg, 2)} W`;
});

document.getElementById('p12-a-submit').addEventListener('click', () => {
  const R2 = Number(document.getElementById('p12-R2').value);
  const Ra = ((78 * R2) + 1080) / 18;
  const Rb = ((78 * R2) + 1080) / 60;
  const Rc = ((78 * R2) + 1080) / R2;
  document.getElementById('p12-a-answer').innerHTML = `${Ra}, ${Rb}, ${Rc} &Omega;`;
});

document.getElementById('p12-b-submit').addEventListener('click', () => {
  const R2 = Number(document.getElementById('p12-R2').value);
  const answer = 29 + (((4809.375 * R2) + 68343.75) / ((151.875 * R2) + 5568.75));
  document.getElementById('p12-b-answer').innerHTML = `${answer} &Omega;`;
});

document.getElementById('p12-c-submit').addEventListener('click', () => {
  document.getElementById('p12-c-answer').innerHTML = '16.7, 10, 5 &Omega;';
});

document.getElementById('p12-d-submit').addEventListener('click', () => {
  const R2 = Number(document.getElementById('p12-d-R2').value);
  const answer = 29 + (((4809.375 * R2) + 68343.75) / ((151.875 * R2) + 5568.75));
  document.getElementById('p12-d-answer').innerHTML = `${answer} &Omega;`;
});

document.getElementById('p12-e-submit').addEventListener('click', () => {
  document.getElementById('p12-e-answer').innerHTML = 'R<sub>1</sub> - R<sub>3</sub> - R<sub>4</sub><br/>R<sub>1</sub> - R<sub>2</sub> - R<sub>3</sub>';
});

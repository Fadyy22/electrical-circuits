$('.toggle-button').each(function () {
  $(this).click(function () {
    const content = $(this).parent().next();
    content.toggleClass('hidden');
  });
});

function fromPolar(magnitude, angleDegrees) {
  const angleRadians = degreesToRadians(angleDegrees); // Convert degrees to radians
  const real = magnitude * Math.cos(angleRadians);
  const imaginary = magnitude * Math.sin(angleRadians);
  return [real, imaginary];
}

function toPolar(real, imaginary) {
  const magnitude = Math.sqrt(real * real + imaginary * imaginary);
  const angleRadians = Math.atan2(imaginary, real);
  const angleDegrees = radiansToDegrees(angleRadians); // Convert radians to degrees
  return [magnitude, angleDegrees];
}

function degreesToRadians(degrees) {
  return degrees * (Math.PI / 180);
}

function radiansToDegrees(radians) {
  return radians * (180 / Math.PI);
}
function multiplyComplex(real1, imaginary1, real2, imaginary2) {
  const realPart = real1 * real2 - imaginary1 * imaginary2;
  const imaginaryPart = real1 * imaginary2 + imaginary1 * real2;
  return [realPart, imaginaryPart];
}
function divideComplex(real1, imaginary1, real2, imaginary2) {
  const denominator = real2 * real2 + imaginary2 * imaginary2;
  const realPart = (real1 * real2 + imaginary1 * imaginary2) / denominator;
  const imaginaryPart = (imaginary1 * real2 - real1 * imaginary2) / denominator;
  return [realPart, imaginaryPart];
}

$('#p1-a-submit').click(() => {
  const S = Number($('#p1-a-S').val());
  const PF = Number($('#p1-a-PF').val());
  const theta = -Math.acos(PF);
  const P = S * PF;
  const Q = S * Math.sin(theta);
  $('#p1-a-answer').html(`${P},${Q} kW, kVAR`);
});

$('#p1-b-submit').click(() => {
  const P = Number($('#p1-b-P').val());
  const Q = Number($('#p1-b-Q').val());
  const S = Math.sqrt(P * P + Q * Q);
  const PF = P / S;
  $('#p1-b-answer').html(`${S},${PF} VA, no unit`);
});

$('#p1-c-submit').click(() => {
  const P = Number($('#p1-c-P').val());
  const PF = Number($('#p1-c-PF').val());
  const Ix = Number($('#p1-c-Ix').val());
  const theta = Math.acos(PF);
  const abs_S = P / PF;
  const [real, imaginary] = fromPolar(abs_S, theta);
  const answer = divideComplex(real, imaginary, Ix * Ix, 0);
  $('#p1-c-answer').html(`${answer[0]},${answer[1]}j &Omega;`);
});

$('#p2-a-submit').click(() => {
  $('#p2-a-answer').html('20,-6');
});

$('#p2-b-submit').click(() => {
  $('#p2-b-answer').html('11.3 W');
});

$('#p3-a-submit').click(() => {
  const S1 = Number($('#p3-a-S1').val()) * Math.pow(10, 3);
  const S2 = Number($('#p3-a-S2').val()) * Math.pow(10, 3);
  const PF1 = Number($('#p3-a-PF1').val());
  const PF2 = Number($('#p3-a-PF2').val());
  const theta1 = radiansToDegrees(-Math.acos(PF1));
  const theta2 = radiansToDegrees(Math.acos(PF2));
  const s1FromPolar = fromPolar(S1, theta1);
  const s2FromPolar = fromPolar(S2, theta2);
  const sTotal = [s1FromPolar[0] + s2FromPolar[0], s1FromPolar[1] + s2FromPolar[1]];
  const P = sTotal[0] / 1000;
  const Q = sTotal[1] / 1000;
  const PF = Math.cos(degreesToRadians(toPolar(P, Q)[1]));
  $('#p3-a-answer').html(`${P},${Q},${PF} kW, kVAR, no unit`);
});

$('#p3-b-submit').click(() => {
  const P = Number($('#p3-b-P').val());
  const Q = Number($('#p3-b-Q').val());
  $('#p3-b-answer').html(`${P}${Q > 0 ? ` + ${Q}` : `${Q}`}j VA`);
});

$('#p3-c-submit').click(() => {
  const S1 = Number($('#p3-c-S').val());
  const PF = Number($('#p3-c-PF').val());
  const Q2 = Number($('#p3-c-Q2').val());
  const V = Number($('#p3-c-V').val());
  const theta1 = radiansToDegrees(Math.acos(PF));
  const s1FromPolar = fromPolar(S1, theta1);
  const imaginary = s1FromPolar[1] + Q2;
  const Qc = imaginary * -1;
  console.log(Qc);
  console.log((V * V));
  const Xc = V * V / Qc;
  $('#p3-c-answer').html(`${Xc}j &Omega;`);
});

$('#p4-a-submit').click(() => {
  const V = Number($('#p4-a-V').val());
  const I = Number($('#p4-a-I').val());
  $('#p4-a-answer').html(`${0.4096 * V * I} W`);
});

$('#p4-b-submit').click(() => {
  $('#p4-b-answer').html('The circuit is absorbing average power.');
});

$('#p4-c-submit').click(() => {
  const V = Number($('#p4-c-V').val());
  const I = Number($('#p4-c-I').val());
  $('#p4-c-answer').html(`${0.2868 * V * I} VAR`);
});

$('#p4-d-submit').click(() => {
  $('#p4-d-answer').html('The circuit is absorbing magnetizing vars.');
});

$('#p4-e-submit').click(() => {
  const V = Number($('#p4-e-V').val());
  const I = Number($('#p4-e-I').val());
  $('#p4-e-answer').html(`${0.1294 * V * I} W`);
});

$('#p4-f-submit').click(() => {
  $('#p4-f-answer').html('The circuit is absorbing average power.');
});

$('#p4-g-submit').click(() => {
  const V = Number($('#p4-g-V').val());
  const I = Number($('#p4-g-I').val());
  $('#p4-g-answer').html(`${-0.483 * V * I} VAR`);
});

$('#p4-h-submit').click(() => {
  $('#p4-h-answer').html('The circuit is delivering magnetizing vars.');
});

$('#p4-i-submit').click(() => {
  const V = Number($('#p4-i-V').val());
  const I = Number($('#p4-i-I').val());
  $('#p4-i-answer').html(`${-0.25 * V * I} W`);
});

$('#p4-j-submit').click(() => {
  $('#p4-j-answer').html('The circuit is delivering average power.');
});

$('#p4-k-submit').click(() => {
  const V = Number($('#p4-k-V').val());
  const I = Number($('#p4-k-I').val());
  $('#p4-k-answer').html(`${-0.433 * V * I} VAR`);
});

$('#p4-l-submit').click(() => {
  $('#p4-l-answer').html('The circuit is delivering magnetizing vars.');
});

$('#p4-m-submit').click(() => {
  const V = Number($('#p4-m-V').val());
  const I = Number($('#p4-m-I').val());
  $('#p4-m-answer').html(`${-0.25 * V * I} W`);
});

$('#p4-n-submit').click(() => {
  $('#p4-n-answer').html('The circuit is delivering average power.');
});

$('#p4-o-submit').click(() => {
  const V = Number($('#p4-o-V').val());
  const I = Number($('#p4-o-I').val());
  $('#p4-o-answer').html(`${0.433 * V * I} VAR`);
});

$('#p4-p-submit').click(() => {
  $('#p4-p-answer').html('The circuit is absorbing magnetizing vars.');
});

$('#p5-a-submit').click(() => {
  const R = Number($('#p5-R').val());
  const bottomRight = multiplyComplex(R, 0, 0, 3);
  const real = (bottomRight[0] * -1) + R - 300;
  const imaginary = (bottomRight[1] * -1) + 200;
  const I1 = divideComplex(400 - 4 * R, 400, real, imaginary);
  const [magnitude, angle] = toPolar(I1[0], I1[1]);
  const P = 200 * magnitude * Math.cos(degreesToRadians(-angle));
  $('#p5-a-answer').html(`${P} W`);
});

$('#p5-b-submit').click(() => {
  const R = Number($('#p5-R').val());
  const bottomRight = multiplyComplex(R, 0, 0, 3);
  const real = (bottomRight[0] * -1) + R - 300;
  const imaginary = (bottomRight[1] * -1) + 200;
  const I1 = divideComplex(400 - 4 * R, 400, real, imaginary);
  const [magnitude, angle] = toPolar(I1[0], I1[1]);
  const Q = -200 * magnitude * Math.sin(degreesToRadians(-angle));
  $('#p5-b-answer').html(`${Q} VAR`);
});

$('#p5-c-submit').click(() => {
  const R = Number($('#p5-R').val());
  const bottomRight = multiplyComplex(R, 0, 0, 3);
  const real = (bottomRight[0] * -1) + R - 300;
  const imaginary = (bottomRight[1] * -1) + 200;
  const I1 = divideComplex(400 - 4 * R, 400, real, imaginary);
  const I2 = divideComplex(400, 0, real, imaginary);
  const IT = [I1[0] - I2[0], I1[1] - I2[1]];
  const Vx = [150 * IT[0], 150 * IT[1]];
  const [magnitudeI] = toPolar(IT[0], IT[1]);
  const [magnitudeV] = toPolar(Vx[0], Vx[1]);
  $('#p5-c-answer').html(`${-0.5 * magnitudeI * magnitudeV} W`);
});

$('#p5-d-submit').click(() => {
  $('#p5-d-answer').html('0 VAR');
});

$('#p5-e-submit').click(() => {
  const R = Number($('#p5-R').val());
  const bottomRight = multiplyComplex(R, 0, 0, 3);
  const real = (bottomRight[0] * -1) + R - 300;
  const imaginary = (bottomRight[1] * -1) + 200;
  const I1 = divideComplex(400 - 4 * R, 400, real, imaginary);
  const I2 = divideComplex(400, 0, real, imaginary);
  const IT = [I1[0] - I2[0], I1[1] - I2[1]];
  const [magnitude] = toPolar(IT[0], IT[1]);
  $('#p5-e-answer').html(`${(magnitude * magnitude) * 25} W`);
});

$('#p5-f-submit').click(() => {
  $('#p5-f-answer').html('0 VAR');
});

$('#p5-g-submit').click(() => {
  const R = Number($('#p5-R').val());
  const bottomRight = multiplyComplex(R, 0, 0, 3);
  const real = (bottomRight[0] * -1) + R - 300;
  const imaginary = (bottomRight[1] * -1) + 200;
  const I2 = divideComplex(400, 0, real, imaginary);
  const [magnitude] = toPolar(I2[0], I2[1]);
  $('#p5-g-answer').html(`${0.5 * (magnitude * magnitude) * R} W`);
});

$('#p5-h-submit').click(() => {
  $('#p5-h-answer').html('0 VAR');
});

$('#p5-i-submit').click(() => {
  $('#p5-i-answer').html('0 W');
});

$('#p5-j-submit').click(() => {
  const R = Number($('#p5-R').val());
  const bottomRight = multiplyComplex(R, 0, 0, 3);
  const real = (bottomRight[0] * -1) + R - 300;
  const imaginary = (bottomRight[1] * -1) + 200;
  const I1 = divideComplex(400 - 4 * R, 400, real, imaginary);
  const [magnitude] = toPolar(I1[0], I1[1]);
  $('#p5-j-answer').html(`${(magnitude * magnitude) * 150} W`);
});

$('#p5-k-submit').click(() => {
  $('#p5-k-answer').html('0 W');
});

$('#p5-l-submit').click(() => {
  const R = Number($('#p5-R').val());
  const bottomRight = multiplyComplex(R, 0, 0, 3);
  const real = (bottomRight[0] * -1) + R - 300;
  const imaginary = (bottomRight[1] * -1) + 200;
  const I2 = divideComplex(400, 0, real, imaginary);
  const [magnitude] = toPolar(I2[0], I2[1]);
  $('#p5-l-answer').html(`${-50 * (magnitude * magnitude)} VAR`);
});

$('#p5-m-submit').click(() => {
  const R = Number($('#p5-R').val());
  const bottomRight = multiplyComplex(R, 0, 0, 3);
  const real = (bottomRight[0] * -1) + R - 300;
  const imaginary = (bottomRight[1] * -1) + 200;
  const I1 = divideComplex(400 - 4 * R, 400, real, imaginary);
  const [magnitudeI1, angleI1] = toPolar(I1[0], I1[1]);
  const P = 200 * magnitudeI1 * Math.cos(degreesToRadians(-angleI1));
  const I2 = divideComplex(400, 0, real, imaginary);
  const IT = [I1[0] - I2[0], I1[1] - I2[1]];
  const [magnitudeIT] = toPolar(IT[0], IT[1]);
  const eAnswer = (magnitudeIT * magnitudeIT) * 25;
  const [magnitudeI2] = toPolar(I2[0], I2[1]);
  const gAnswer = 0.5 * (magnitudeI2 * magnitudeI2) * R;
  $('#p5-m-answer').html(`${P + eAnswer + gAnswer},${P + eAnswer + gAnswer} W`);
});

$('#p5-n-submit').click(() => {
  const R = Number($('#p5-R').val());
  const bottomRight = multiplyComplex(R, 0, 0, 3);
  const real = (bottomRight[0] * -1) + R - 300;
  const imaginary = (bottomRight[1] * -1) + 200;
  const I1 = divideComplex(400 - 4 * R, 400, real, imaginary);
  const [magnitude] = toPolar(I1[0], I1[1]);
  const answer = (magnitude * magnitude) * 150;
  $('#p5-n-answer').html(`${answer},${answer} VAR`);
});

$('#p6-a-submit').click(() => {
  const R = Number($('#p6-R').val());
  const Xmin = R - Math.sqrt((50 * R) - (2.25 * (R * R)));
  $('#p6-a-answer').html(`${Xmin} &Omega;`);
});

$('#p6-b-submit').click(() => {
  const R = Number($('#p6-R').val());
  const Xmax = R + Math.sqrt((50 * R) - (2.25 * (R * R)));
  $('#p6-b-answer').html(`${Xmax} &Omega;`);
});

$('#p6-c-submit').click(() => {
  $('#p6-c-answer').html('5000, 5000 VAR');
});

$('#p6-d-submit').click(() => {
  const R = Number($('#p6-R').val());
  const Xmax = R + Math.sqrt((50 * R) - (2.25 * (R * R)));
  const answer = (5000 / R) * Xmax;
  $('#p6-d-answer').html(`${answer},${answer} VAR`);
});

$('#p7-a-submit').click(() => {
  const V = Number($('#p7-V').val());
  const stepOne = divideComplex(-500, 1500, V, 0);
  const stepTwo = multiplyComplex(V, 0, 0.98, 0.004);
  const stepThree = [stepOne[0] + stepTwo[0], stepOne[1] + stepTwo[1]];
  const [magnitude] = toPolar(stepThree[0], stepThree[1]);
  $('#p7-a-answer').html(`${magnitude} V`);
});

$('#p7-b-submit').click(() => {
  const V = Number($('#p7-V').val());
  const stepOne = divideComplex(-500, 1500, V, 0);
  const stepTwo = multiplyComplex(V, 0, 0.98, 0.004);
  const stepThree = [stepOne[0] + stepTwo[0], stepOne[1] + stepTwo[1]];
  const [magnitude, angle] = toPolar(stepThree[0], stepThree[1]);
  $('#p7-b-answer').html(`${angle} <sup>∘</sup`);
});

$('#p8-a-submit').click(() => {
  const V = Number($('#p8-V').val());
  const top = fromPolar(2549.51, 64.44);
  const divide = divideComplex(top[0], top[1], V, 0);
  const real = V + divide[0];
  const answer = toPolar(real, divide[1]);
  $('#p8-a-answer').html(`${answer[0]}∠${answer[1]} V (rms)`);
});

$('#p8-b-submit').click(() => {
  const V = Number($('#p8-V').val());
  const answer = Math.pow(10, 7) / Math.pow(V, 2);
  $('#p8-b-answer').html(`${answer} W`);
});

$('#p8-c-submit').click(() => {
  const V = Number($('#p8-V').val());
  const answer = (8 * Math.pow(10, 4)) / Math.pow(V, 2);
  $('#p8-c-answer').html(`${answer} kVAR`);
});

$('#p8-d-submit').click(() => {
  const V = Number($('#p8-V').val());
  const bAnswer = Math.pow(10, 7) / Math.pow(V, 2);
  $('#p8-d-answer').html(`${bAnswer + 30000} W`);
});

$('#p8-e-submit').click(() => {
  const V = Number($('#p8-V').val());
  const cAnswer = (8 * Math.pow(10, 4)) / Math.pow(V, 2);
  $('#p8-e-answer').html(`${cAnswer + 10} kVAR`);
});

$('#p8-f-submit').click(() => {
  const V = Number($('#p8-V').val());
  const dAnswer = (Math.pow(10, 7) / Math.pow(V, 2)) + 30000;
  $('#p8-f-answer').html(`${(30000 / dAnswer) * 100} %`);
});

$('#p9-a-submit').click(() => {
  const V = Number($('#p9-V').val());
  const answer = (Math.pow(V, 2) / 24025) * 4;
  $('#p9-a-answer').html(`${answer} W`);
});

$('#p9-b-submit').click(() => {
  $('#p9-b-answer').html('-250 &Omega;');
});

$('#p9-c-submit').click(() => {
  $('#p9-c-answer').html('187.5 &Omega;');
});

$('#p9-d-submit').click(() => {
  const V = Number($('#p9-V').val());
  const answer = Math.pow(V, 2) / 9170.3125;
  $('#p9-d-answer').html(`${answer} W`);
});

$('#p9-e-submit').click(() => {
  const V = Number($('#p9-V').val());
  const aAnswer = (Math.pow(V, 2) / 24025) * 4;
  const dAnswer = Math.pow(V, 2) / 9170.3125;
  $('#p9-e-answer').html(`${(dAnswer / aAnswer) * 100} %`);
});

$('#p10-a-submit').click(() => {
  $('#p10-a-answer').html('20 + 20j &Omega;');
});

$('#p10-b-submit').click(() => {
  const V = Number($('#p10-V').val());
  const answer = Math.pow(V, 2) / 320;
  $('#p10-b-answer').html(`${answer} W`);
});

$('#p10-c-submit').click(() => {
  const V = Number($('#p10-V').val());
  const answer = 2.951 * Math.pow(10, -3) * Math.pow(V, 2);
  $('#p10-c-answer').html(`${answer} W`);
});

$('#p11-a-submit').click(() => {
  const V = Number($('#p11-V').val());
  const answer = Math.pow(V, 2) / 90000;
  $('#p11-a-answer').html(`${answer} W`);
});

$('#p11-b-submit').click(() => {
  $('#p11-b-answer').html('4000 &Omega;');
});

$('#p11-c-submit').click(() => {
  $('#p11-c-answer').html('0.1 μF');
});

$('#p11-d-submit').click(() => {
  const V = Number($('#p11-V').val());
  const answer = Math.pow(V, 2) / 72000;
  $('#p11-d-answer').html(`${answer} W`);
});

$('#p11-e-submit').click(() => {
  const V = Number($('#p11-V').val());
  const answer = Math.pow(V, 2) / 72000;
  $('#p11-e-answer').html(`${answer} W`);
});

$('#p11-f-submit').click(() => {
  $('#p11-f-answer').html('4000 &Omega;');
});

$('#p11-g-submit').click(() => {
  $('#p11-g-answer').html('66.67 nF');
});

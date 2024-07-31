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

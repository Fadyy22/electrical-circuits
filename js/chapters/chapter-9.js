$('.toggle-button').each(function () {
  $(this).on('click', function () {
    const content = $(this).parent().next();
    content.toggleClass('hidden');
  });
});

function multiplyComplex(real1, imaginary1, real2, imaginary2) {
  const realPart = real1 * real2 - imaginary1 * imaginary2;
  const imaginaryPart = real1 * imaginary2 + imaginary1 * real2;
  return [realPart, imaginaryPart];
}

function divideComplex(real1, imaginary1, real2, imaginary2) {
  // (a + bi) / (c + di) = [(ac + bd) + (bc - ad)i] / (c^2 + d^2)
  const denominator = real2 * real2 + imaginary2 * imaginary2;
  const realPart = (real1 * real2 + imaginary1 * imaginary2) / denominator;
  const imaginaryPart = (imaginary1 * real2 - real1 * imaginary2) / denominator;
  return [realPart, imaginaryPart];
}

function toPolar(real, imaginary) {
  const magnitude = Math.sqrt(real * real + imaginary * imaginary);
  const angle = Math.atan2(imaginary, real);
  return [magnitude, angle];
}

$('#p1-a-submit').on('click', () => {
  $('#p1-a-answer').html('50.0∠ - 45.0 mV');
});

$('#p1-b-submit').on('click', () => {
  $('#p1-b-answer').html('125cos(2000t - 45) μA');
});

$('#p1-c-submit').on('click', () => {
  $('#p1-c-answer').html('300∠ - 30.0 mA');
});

$('#p1-d-submit').on('click', () => {
  $('#p1-d-answer').html('483.86cos(300t - 48) V');
});

$('#p1-e-submit').on('click', () => {
  $('#p1-e-answer').html('120.51cos(377t + 4.8) mA');
});

$('#p1-f-submit').on('click', () => {
  $('#p1-f-answer').html('-100 sin(10,000t + 90<sup>∘</sup>) + 40s in(10,100t - 80<sup>∘</sup>) + 80 cos(10,000t)<br/>45 sin(2500t - 50<sup>∘</sup>) + 20 cos(1500t + 20<sup>∘</sup>)');
});

$('#p2-a-submit').on('click', () => {
  const V = Number($('#p2-V').val());
  $('#p2-a-answer').html(`${V} V`);
});

$('#p2-b-submit').on('click', () => {
  $('#p2-b-answer').html('50 Hz');
});

$('#p2-c-submit').on('click', () => {
  $('#p2-c-answer').html('314 rad/s');
});

$('#p2-d-submit').on('click', () => {
  $('#p2-d-answer').html('1.05 rad');
});

$('#p2-e-submit').on('click', () => {
  $('#p2-e-answer').html('60<sup>∘</sup>');
});

$('#p2-f-submit').on('click', () => {
  $('#p2-f-answer').html('20 ms');
});

$('#p2-g-submit').on('click', () => {
  $('#p2-g-answer').html('6.67 ms');
});

$('#p2-h-submit').on('click', () => {
  const V = Number($('#p2-V').val());
  $('#p2-h-answer').html(`${V} cos(100πt) V`);
});

$('#p2-i-submit').on('click', () => {
  $('#p2-i-answer').html('11.7 ms');
});

$('#p3-a-submit').on('click', () => {
  const V = Number($('#p3-a-V').val()) * 1.0607;
  $('#p3-a-answer').html(`${V}, 50000, -45 V, rad/s, <sup>∘</sup>`);
});

$('#p4-a-submit').on('click', () => {
  const I = Number($('#p4-a-I').val()) * 84.853;
  $('#p4-a-answer').html(`${I}, 2000, 45 V, rad/s, <sup>∘</sup>`);
});

$('#p5-a-submit').on('click', () => {
  $('#p5-a-answer').html('1.25 H');
});

$('#p5-b-submit').on('click', () => {
  $('#p5-b-answer').html('5 H');
});

$('#p5-c-submit').on('click', () => {
  const V = Number($('#p5-V').val());
  $('#p5-c-answer').html(`${V}, 1000, 0 mA, rad/s, <sup>∘</sup>`);
});

$('#p5-d-submit').on('click', () => {
  const V = Number($('#p5-V').val()) / 2.5;
  $('#p5-d-answer').html(`${V}, 1000, 0 mA, rad/s, <sup>∘</sup>`);
});

$('#p6-a-submit').on('click', () => {
  const R = Number($('#p6-R').val());
  const top = multiplyComplex(R + 50, 60, 0, -100);
  const answer = divideComplex(top[0], top[1], R + 50, -40);
  $('#p6-a-answer').html(`${answer[0]}${answer[1] > 0 ? ` + ${answer[1]}` : `${answer[1]}`}j &Omega;`);
});

$('#p6-b-submit').on('click', () => {
  const R = Number($('#p6-R').val());
  const answer = divideComplex(200, 0, R + 50, 60);
  $('#p6-b-answer').html(`${answer[0]}${answer[1] > 0 ? ` + ${answer[1]}` : `${answer[1]}`}j A`);
});

$('#p7-a-submit').on('click', () => {
  const R = Number($('#p7-R').val());
  const divide = divideComplex(0, 2, R, 0);
  const answer = multiplyComplex(5, 5, 1 + divide[0], divide[1] * -1);
  $('#p7-a-answer').html(`${answer[0]}${answer[1] > 0 ? ` + ${answer[1]}` : `${answer[1]}`}j A`);
});

$('#p7-b-submit').on('click', () => {
  const R = Number($('#p7-R').val());
  const divide = divideComplex(0, 2, R, 0);
  const aAnswer = multiplyComplex(5, 5, 1 + divide[0], divide[1] * -1);
  const left = divideComplex(1600, -1600, 10, R);
  const leftReal = left[0] - 200;
  const leftImaginary = left[1] + 200;
  const answer = divideComplex(leftReal, leftImaginary, aAnswer[0], aAnswer[1]);
  $('#p7-b-answer').html(`${answer[0]}${answer[1] > 0 ? ` + ${answer[1]}` : `${answer[1]}`}j &Omega;`);
});

$('#p8-a-submit').on('click', () => {
  const I = Number($('#p8-I').val());
  const V = Number($('#p8-V').val());
  const topLeft = multiplyComplex(I, 0, 0, -4);
  const topRight = multiplyComplex(V, 0, 1, 1);
  const complex = divideComplex(topLeft[0] + topRight[0], topLeft[1] + topRight[1], 4, -8);
  const [magnitude] = toPolar(complex[0], complex[1]);
  $('#p8-a-answer').html(`${magnitude} A`);
});

$('#p8-b-submit').on('click', () => {
  $('#p8-b-answer').html('2500 rad/s');
});

// TODO
$('#p8-c-submit').on('click', () => {
  const I = Number($('#p8-I').val());
  const V = Number($('#p8-V').val());
  const topLeft = multiplyComplex(I, 0, 0, -4);
  const topRight = multiplyComplex(V, 0, 1, 1);
  const complex = divideComplex(topLeft[0] + topRight[0], topLeft[1] + topRight[1], 4, -8);
  const [magnitude, angle] = toPolar(complex[0], complex[1]);
  $('#p8-c-answer').html(`${angle * (180 / Math.PI)} <sup>∘</sup>`);
});

$('#p9-a-submit').on('click', () => {
  const I = Number($('#p9-I').val());
  $('#p9-a-answer').html(`${I * 8}∠90 V`);
});

$('#p9-b-submit').on('click', () => {
  const I = Number($('#p9-I').val());
  $('#p9-b-answer').html(`${I * 8}J V`);
});

$('#p10-a-submit').on('click', () => {
  const R = Number($('#p10-R').val());
  const right = divideComplex(R, 0, R - 90, -70);
  const answer = multiplyComplex(40, 120, right[0], right[1]);
  const [magnitude] = toPolar(answer[0], answer[1]);
  $('#p10-a-answer').html(`${magnitude} V`);
});

$('#p10-b-submit').on('click', () => {
  const R = Number($('#p10-R').val());
  const right = divideComplex(R, 0, R - 90, -70);
  const answer = multiplyComplex(40, 120, right[0], right[1]);
  const [magnitude, angle] = toPolar(answer[0], answer[1]);
  $('#p10-b-answer').html(`${angle * (180 / Math.PI)} <sup>∘</sup`);
});

$('#p10-c-submit').on('click', () => {
  $('#p10-c-answer').html('5000 rad/s');
});

$('#p11-a-submit').on('click', () => {
  const R = Number($('#p11-R').val());
  const div = divideComplex(500, -1000, R + 500, +600);
  const answer = multiplyComplex(100, 0, div[0], div[1]);
  const [magnitude] = toPolar(answer[0], answer[1]);
  $('#p11-a-answer').html(`${magnitude} V`);
});

$('#p11-b-submit').on('click', () => {
  const R = Number($('#p11-R').val());
  const div = divideComplex(500, -1000, R + 500, +600);
  const answer = multiplyComplex(100, 0, div[0], div[1]);
  const [magnitude, angle] = toPolar(answer[0], answer[1]);
  $('#p11-b-answer').html(`${angle * (180 / Math.PI)} <sup>∘</sup`);
});

$('#p11-c-submit').on('click', () => {
  $('#p11-c-answer').html('8000 rad/s');
});

$('#p12-a-submit').on('click', () => {
  const R = Number($('#p12-R').val());
  const div = divideComplex(R, 1200, R + 200, 800);
  const answer = multiplyComplex(0.4, 0, div[0], div[1]);
  const [magnitude] = toPolar(answer[0], answer[1]);
  $('#p12-a-answer').html(`${magnitude} A`);
});

$('#p12-b-submit').on('click', () => {
  const R = Number($('#p12-R').val());
  const div = divideComplex(R, 1200, R + 200, 800);
  const answer = multiplyComplex(0.4, 0, div[0], div[1]);
  const [magnitude, angle] = toPolar(answer[0], answer[1]);
  $('#p12-b-answer').html(`${angle * (180 / Math.PI)} <sup>∘</sup`);
});

$('#p12-c-submit').on('click', () => {
  $('#p12-c-answer').html('20000 rad/s');
});

$('#p13-a-submit').on('click', () => {
  $('#p13-a-answer').html('superposition');
});

$('#p13-b-submit').on('click', () => {
  const R = Number($('#p13-R').val());
  const stepOne = multiplyComplex(R, 0, 0, -1);
  const stepTwo = multiplyComplex(R, 0, 0, 4);
  const real = stepOne[0] + stepTwo[0] + 400;
  const imaginary = stepOne[1] + stepTwo[1];
  const top = multiplyComplex(R, 0, 0, 40);
  const answer = divideComplex(top[0], top[1], real, imaginary);
  const [magnitude] = toPolar(answer[0], answer[1]);
  $('#p13-b-answer').html(`${magnitude} V`);
});

$('#p13-c-submit').on('click', () => {
  const R = Number($('#p13-R').val());
  const stepOne = multiplyComplex(R, 0, 0, -1);
  const stepTwo = multiplyComplex(R, 0, 0, 4);
  const real = stepOne[0] + stepTwo[0] + 400;
  const imaginary = stepOne[1] + stepTwo[1];
  const top = multiplyComplex(R, 0, 0, 40);
  const answer = divideComplex(top[0], top[1], real, imaginary);
  const [magnitude, angle] = toPolar(answer[0], answer[1]);
  $('#p13-c-answer').html(`${angle * (180 / Math.PI)} <sup>∘</sup`);
});

$('#p13-d-submit').on('click', () => {
  $('#p13-d-answer').html('16000 rad/s');
});

$('#p13-e-submit').on('click', () => {
  const R = Number($('#p13-R').val());
  const answer = divideComplex(0, -8000, 3 * R, 400);
  const [magnitude] = toPolar(answer[0], answer[1]);
  $('#p13-e-answer').html(`${magnitude} V`);
});

$('#p13-f-submit').on('click', () => {
  const R = Number($('#p13-R').val());
  const answer = divideComplex(0, -8000, 3 * R, 400);
  const [magnitude, angle] = toPolar(answer[0], answer[1]);
  $('#p13-f-answer').html(`${angle * (180 / Math.PI)} <sup>∘</sup`);
});

$('#p13-g-submit').on('click', () => {
  $('#p13-g-answer').html('4000 rad/s');
});

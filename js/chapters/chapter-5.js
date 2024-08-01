$('.toggle-button').each(function () {
  $(this).on('click', function () {
    const content = $(this).parent().next();
    content.toggleClass('hidden');
  });
});

const resistances = [
  0.01, 0.1, 1, 10, 100, 1000,
  0.12, 1.2, 12, 120,
  0.015, 0.15, 1.5, 15, 150, 1500,
  0.18, 1.8, 18, 180,
  0.022, 0.22, 2.2, 22, 220, 2200,
  0.27, 2.7, 27, 270,
  0.033, 0.33, 3.3, 33, 330, 3300,
  0.39, 3.9, 39, 390,
  0.047, 0.47, 4.7, 47, 470, 4700,
  0.056, 5.6, 56, 560,
  0.068, 0.68, 6.8, 68, 680, 6800
];

function findClosestResistance(input) {
  return resistances.reduce((prev, curr) =>
    Math.abs(curr - input) < Math.abs(prev - input) ? curr : prev
  );
}

$('#p1-a-submit').on('click', () => {
  const I = Number($('#p1-I').val());
  const V = Number($('#p1-V').val());
  $('#p1-a-answer').html(`${(6 * I - V + 5) / 20} A`);
});

$('#p1-b-submit').on('click', () => {
  const I = Number($('#p1-I').val());
  const V = Number($('#p1-V').val());
  $('#p1-b-answer').html(`${(6 * I - V + 5) / 20} A`);
});

$('#p2-a-submit').on('click', () => {
  const R1 = Number($('#p2-R1').val());
  const R2 = Number($('#p2-R2').val());
  const V1 = Number($('#p2-V1').val());
  const V2 = Number($('#p2-V2').val());
  $('#p2-a-answer').html(`${(V1 * V2) * ((R1 - R2) / ((V2 * R1) - (V1 * R2)))} V`);
});

$('#p2-b-submit').on('click', () => {
  const R1 = Number($('#p2-R1').val());
  const R2 = Number($('#p2-R2').val());
  const V1 = Number($('#p2-V1').val());
  const V2 = Number($('#p2-V2').val());
  const Vth = (V1 * V2) * ((R1 - R2) / ((V2 * R1) - (V1 * R2)));
  $('#p2-b-answer').html(`${((Vth / V2) - 1) * R2} &Omega;`);
});

$('#p3-a-submit').on('click', () => {
  const V = Number($('#p3-V').val());
  const I = Number($('#p3-I').val());
  $('#p3-a-answer').html(`${((18 * V) + (360 * I)) / 27} V`);
});

$('#p3-b-submit').on('click', () => {
  $('#p3-b-answer').html(`20 &Omega;`);
});

$('#p3-c-submit').on('click', () => {
  $('#p3-c-answer').html(`20 &Omega;`);
});

$('#p4-a-submit').on('click', () => {
  $('#p4-a-answer').html(`0 A`);
});

$('#p4-b-submit').on('click', () => {
  const R = Number($('#p4-R').val());
  $('#p4-b-answer').html(`${(500 * R) / (R - 500)} &Omega;`);
});

$('#p5-a-submit').on('click', () => {
  const R = Number($('#p5-R').val());
  $('#p5-a-answer').html(`${(5000 * R) / (5000 + (R * Math.pow(10, 3)))} k&Omega;`);
});

$('#p5-b-submit').on('click', () => {
  const R = Number($('#p5-R').val());
  $('#p5-b-answer').html(`${((0.0128 * (R * Math.pow(10, 3))) / (5000 + (R * 1000))) * 1000} mW`);
});

$('#p5-c-submit').on('click', () => {
  const R = Number($('#p5-R').val());
  const aAnswer = 5000 * R / (5000 + (R * Math.pow(10, 3)));
  const closest = findClosestResistance(aAnswer);
  $('#p5-c-answer').html(`${closest} k&Omega;`);
});

$('#p5-d-submit').on('click', () => {
  const R = Number($('#p5-R').val());
  const aAnswer = 5000 * R / (5000 + (R * Math.pow(10, 3)));
  const closest = findClosestResistance(aAnswer);
  $('#p5-d-answer').html(`${((0.0128 * (closest * Math.pow(10, 3))) / (5000 + (closest * 1000))) * 1000} mW`);
});

$('#p6-a-submit').on('click', () => {
  const V = Number($('#p6-a-V').val());

  function qEquation(a, b, c) {
    const discriminant = b * b - 4 * a * c;
    if (discriminant >= 0) {
      const R0_1 = (-b + Math.sqrt(discriminant)) / (2 * a);
      const R0_2 = (-b - Math.sqrt(discriminant)) / (2 * a);
      return [R0_1, R0_2];
    }
  }
  const answer = qEquation(1, (15 - (0.001 * Math.pow(V, 2))), 56.25);
  $('#p6-a-answer').html(`${answer ? `${answer} &Omega;` : 'No real solutions'}`);
});

$('#p7-a-submit').on('click', () => {
  const V = Number($('#p7-V').val());
  const I = Number($('#p7-I').val());
  $('#p7-a-answer').html(`${((4 * I) / 15) - (V / 60)} A`);
});

$('#p7-b-submit').on('click', () => {
  const V = Number($('#p7-V').val());
  const I = Number($('#p7-I').val());
  $('#p7-b-answer').html(`${((-2 * V) / 3) + (20 * I)} V`);
});

$('#p8-a-submit').on('click', () => {
  const I1 = Number($('#p8-a-I1').val());
  const I2 = Number($('#p8-a-I2').val());
  $('#p8-a-answer').html(`${((0.7 * I2) - I1 - 3.5) / 3} A`);
});

$('#p9-a-submit').on('click', () => {
  const I = Number($('#p9-a-I').val());
  const V = Number($('#p9-a-V').val());
  $('#p9-a-answer').html(`${(0.96 * V) - (0.8 * I)} V`);
});

$('#p10-a-submit').on('click', () => {
  const Vs = Number($('#p10-Vs').val());
  $('#p10-a-answer').html(`${0.000214 * Vs} A`);
});

$('#p10-b-submit').on('click', () => {
  const Vs = Number($('#p10-Vs').val());
  const R = Number($('#p10-R').val()) * 1000;
  const I = 0.000214 * Vs;
  const answer = (Vs / (1.8 + (3600 / R))) / I;
  $('#p10-b-answer').html(`${answer} &Omega;`);
});

$('#p11-a-submit').on('click', () => {
  const I = Number($('#p11-I').val());
  const V = Number($('#p11-V').val());
  $('#p11-a-answer').html(`${-I + (V / 15000)} A`);
});

$('#p11-b-submit').on('click', () => {
  $('#p11-b-answer').html('10000 &Omega;');
});

$('#p12-a-submit').on('click', () => {
  const R = Number($('#p12-a-R').val()) * 1000;
  const answer = (25 * R) / (25000 + R);
  $('#p12-a-answer').html(`${answer} V`);
});

$('#p12-b-submit').on('click', () => {
  const R = Number($('#p12-a-R').val()) * 1000;
  const answer = (25 * R) / (25000 + R);
  $('#p12-b-answer').html(`${answer} V`);
});

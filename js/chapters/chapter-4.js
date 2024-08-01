$('.toggle-button').each(function () {
  $(this).on('click', function () {
    const content = $(this).parent().next();
    content.toggleClass('hidden');
  });
});

function computeVoltages(R1, R2, R3, R4, R5, R6) {
  // Coefficients matrix
  const A = [
    [1 / R1 + 1 / R4 + 1 / R6, -1 / R4, -1 / R6],
    [-1 / R4, 1 / R4 + 1 / R2 + 1 / R5, -1 / R5],
    [-1 / R6, -1 / R5, 1 / R3 + 1 / R5 + 1 / R6]
  ];

  // Constants vector
  const B = [250 / R1, 125 / R2, 0];

  // Solve for voltages Va, Vb, Vc
  const voltages = math.lusolve(A, B);

  // Extract voltages
  const [Va, Vb, Vc] = voltages;

  return [Va, Vb, Vc];
}

$('#p1-a-submit').on('click', () => {
  const V1 = Number($('#p1-V1').val());
  const V2 = Number($('#p1-V2').val());
  $('#p1-a-answer').html(`${((82 * V1) + (36 * V2)) / 460} A`);
});

$('#p1-b-submit').on('click', () => {
  const V1 = Number($('#p1-V1').val());
  const V2 = Number($('#p1-V2').val());
  $('#p1-b-answer').html(`${((33 * V1) - (36 * V2)) / 460} A`);
});

$('#p1-c-submit').on('click', () => {
  const V1 = Number($('#p1-V1').val());
  const V2 = Number($('#p1-V2').val());
  $('#p1-c-answer').html(`${((3 * V1) + (3 * V2)) / 23} A`);
});

$('#p1-d-submit').on('click', () => {
  const V1 = Number($('#p1-V1').val());
  const V2 = Number($('#p1-V2').val());
  $('#p1-d-answer').html(`${((18 * V1) - (51 * V2)) / 345} A`);
});

$('#p1-e-submit').on('click', () => {
  const V1 = Number($('#p1-V1').val());
  const V2 = Number($('#p1-V2').val());
  $('#p1-e-answer').html(`${((18 * V1) + (64 * V2)) / 230} A`);
});

$('#p1-f-submit').on('click', () => {
  const V1 = Number($('#p1-V1').val());
  const V2 = Number($('#p1-V2').val());
  const pA = ((82 * V1) + (36 * V2)) / 460;
  const pE = ((18 * V1) + (64 * V2)) / 230;
  $('#p1-f-answer').html(`${(pA * V1) + (pE * V2)} W`);
});

$('#p2-a-submit').on('click', () => {
  const Vs = Number($('#p2-Vs').val());
  $('#p2-a-answer').html(`${Vs / 5} V`);
});

$('#p2-b-submit').on('click', () => {
  const Vs = Number($('#p2-Vs').val());
  $('#p2-b-answer').html(`${0.96 * Math.pow(Vs, 2)} mW`);
});

$('#p3-a-submit').on('click', () => {
  const V = Number($('#p3-V').val());
  $('#p3-a-answer').html(`${0.25 * V} V`);
});

$('#p4-a-submit').on('click', () => {
  const Vg = Number($('#p4-Vg').val());
  $('#p4-a-answer').html(`${(241 / 160) * Math.pow(Vg, 2)} W`);
});

$('#p5-a-submit').on('click', () => {
  const V1 = Number($('#p5-V1').val());
  const V2 = Number($('#p5-V2').val());
  $('#p5-a-answer').html(`${((24 * V1) + (2 * V2)) / 31} V`);
});

$('#p5-b-submit').on('click', () => {
  const V1 = Number($('#p5-V1').val());
  const V2 = Number($('#p5-V2').val());
  $('#p5-b-answer').html(`${(((-24 * V1) + (13.5 * V2)) / 744) * V2} W`);
});

$('#p6-a-submit').on('click', () => {
  const V = Number($('#p6-V').val());
  $('#p6-a-answer').html(`${(2332 * Math.pow(V, 2)) / 45} W`);
});

$('#p7-a-submit').on('click', () => {
  const I = Number($('#p7-I').val());
  $('#p7-a-answer').html(`${6 * Math.pow(I, 2)} W`);
});

$('#p8-a-submit').on('click', () => {
  const V = Number($('#p8-V').val());
  $('#p8-a-answer').html(`${(-21 * V) / 796} A`);
});

$('#p8-b-submit').on('click', () => {
  const V = Number($('#p8-V').val());
  $('#p8-b-answer').html(`${(37 * V) / 796} A`);
});

$('#p8-c-submit').on('click', () => {
  const V = Number($('#p8-V').val());
  $('#p8-c-answer').html(`${(117 * V) / 3980} A`);
});

$('#p8-d-submit').on('click', () => {
  const V = Number($('#p8-V').val());
  $('#p8-d-answer').html(`${(29 * V) / 398} A`);
});

$('#p8-e-submit').on('click', () => {
  const V = Number($('#p8-V').val());
  $('#p8-e-answer').html(`${(17 * V) / 995} A`);
});

$('#p8-f-submit').on('click', () => {
  const V = Number($('#p8-V').val());
  const stepOne = (18426 * Math.pow(V, 2)) / 792020;
  const stepTwo = (37 * Math.pow(V, 2)) / 796;
  const answer = stepOne + stepTwo;
  $('#p8-f-answer').html(`${answer}, ${answer} W`);
});

$('#p9-a-submit').on('click', () => {
  $('#p9-a-answer').html('The node-voltage method');
});

$('#p9-b-submit').on('click', () => {
  const I = Number($('#p9-b-I').val());
  $('#p9-b-answer').html(`${((110 * (I * Math.pow(10, -3))) - 16) / 12.5} W`);
});

$('#p10-a-submit').on('click', () => {
  const R1 = Number($('#p10-R1').val());
  const R2 = Number($('#p10-R2').val());
  const R3 = Number($('#p10-R3').val());
  const R4 = Number($('#p10-R4').val());
  const R5 = Number($('#p10-R5').val());
  const R6 = Number($('#p10-R6').val());
  const [Va, Vb, Vc] = computeVoltages(R1, R2, R3, R4, R5, R6);
  $('#p10-a-answer').html(`${(250 - Va) / R1} A`);
});

$('#p10-b-submit').on('click', () => {
  const R1 = Number($('#p10-R1').val());
  const R2 = Number($('#p10-R2').val());
  const R3 = Number($('#p10-R3').val());
  const R4 = Number($('#p10-R4').val());
  const R5 = Number($('#p10-R5').val());
  const R6 = Number($('#p10-R6').val());
  const [Va, Vb, Vc] = computeVoltages(R1, R2, R3, R4, R5, R6);
  $('#p10-b-answer').html(`${(Vb - 125) / R2} A`);
});

$('#p10-c-submit').on('click', () => {
  const R1 = Number($('#p10-R1').val());
  const R2 = Number($('#p10-R2').val());
  const R3 = Number($('#p10-R3').val());
  const R4 = Number($('#p10-R4').val());
  const R5 = Number($('#p10-R5').val());
  const R6 = Number($('#p10-R6').val());
  const [Va, Vb, Vc] = computeVoltages(R1, R2, R3, R4, R5, R6);
  $('#p10-c-answer').html(`${Vc / R3} A`);
});

$('#p10-d-submit').on('click', () => {
  const R1 = Number($('#p10-R1').val());
  const R2 = Number($('#p10-R2').val());
  const R3 = Number($('#p10-R3').val());
  const R4 = Number($('#p10-R4').val());
  const R5 = Number($('#p10-R5').val());
  const R6 = Number($('#p10-R6').val());
  const [Va, Vb, Vc] = computeVoltages(R1, R2, R3, R4, R5, R6);
  $('#p10-d-answer').html(`${(Va - Vb) / R4} A`);
});

$('#p10-e-submit').on('click', () => {
  const R1 = Number($('#p10-R1').val());
  const R2 = Number($('#p10-R2').val());
  const R3 = Number($('#p10-R3').val());
  const R4 = Number($('#p10-R4').val());
  const R5 = Number($('#p10-R5').val());
  const R6 = Number($('#p10-R6').val());
  const [Va, Vb, Vc] = computeVoltages(R1, R2, R3, R4, R5, R6);
  $('#p10-e-answer').html(`${(Vb - Vc) / R5} A`);
});

$('#p10-f-submit').on('click', () => {
  const R1 = Number($('#p10-R1').val());
  const R2 = Number($('#p10-R2').val());
  const R3 = Number($('#p10-R3').val());
  const R4 = Number($('#p10-R4').val());
  const R5 = Number($('#p10-R5').val());
  const R6 = Number($('#p10-R6').val());
  const [Va, Vb, Vc] = computeVoltages(R1, R2, R3, R4, R5, R6);
  $('#p10-f-answer').html(`${(Va - Vc) / R6} A`);
});

$('#p11-a-submit').on('click', () => {
  const V = Number($('#p11-a-V').val());
  const coefficient = 0.9375 / 32;
  const answer = coefficient * Math.pow(V, 2);
  $('#p11-a-answer').html(`${answer} W`);
});

$('#p12-a-submit').on('click', () => {
  const V1 = Number($('#p12-V1').val());
  const V3 = Number($('#p12-V3').val());
  const Va = (-V1 / 5000 - 0.01 + V3 / 1000) / (3.2 * Math.pow(10, -3));
  const answer = ((-V1 - Va) / 5000) * 1000;
  $('#p12-a-answer').html(`${answer} mA`);
});

$('#p12-b-submit').on('click', () => {
  const V1 = Number($('#p12-V1').val());
  const V3 = Number($('#p12-V3').val());
  const Va = (-V1 / 5000 - 0.01 + V3 / 1000) / (3.2 * Math.pow(10, -3));
  const answer = (Va / 500) * 1000;
  $('#p12-b-answer').html(`${answer} mA`);
});

$('#p12-c-submit').on('click', () => {
  const V1 = Number($('#p12-V1').val());
  const V3 = Number($('#p12-V3').val());
  const Va = (-V1 / 5000 - 0.01 + V3 / 1000) / (3.2 * Math.pow(10, -3));
  const answer = (-(-0.01 + V3 / 4000 + (V3 - Va) / 1000)) * 1000;
  $('#p12-c-answer').html(`${answer} mA`);
});;

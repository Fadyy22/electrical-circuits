$('.toggle-button').each(function () {
  $(this).click(function () {
    const content = $(this).parent().next();
    content.toggleClass('hidden');
  });
});

$('#p1-a-submit').click(() => {
  $('#p1-a-answer').html('0.6 V, 1.9 V, 1.1 V');
});

$('#p1-b-submit').click(() => {
  const V3 = Number($('#p1-b-V3').val());
  const R1 = Number($('#p1-b-R1').val());
  const R2 = Number($('#p1-b-R2').val());
  const R3 = Number($('#p1-b-R3').val());
  const R4 = Number($('#p1-b-R4').val());
  const R5 = Number($('#p1-b-R5').val());

  $('#p1-b-answer').html(`${(V3 * ((R1 + R2 + R3 + R4 + R5) / (R3)))} V`);
});

$('#p1-c-submit').click(() => {
  $('#p1-c-answer').html('0.0409 A, 0.0205 A');
});

$('#p1-d-submit').click(() => {
  $('#p1-d-answer').html('0.0223 V, 0.03 V, 0.11 V');
});

$('#p1-e-submit').click(() => {
  const Is = Number($('#p1-e-Is').val());
  const R2 = Number($('#p1-e-R2').val());
  const R3 = Number($('#p1-e-R3').val());
  const R4 = Number($('#p1-e-R4').val());
  const R6 = Number($('#p1-e-R6').val());
  const R7 = Number($('#p1-e-R7').val());
  const R8 = Number($('#p1-e-R8').val());
  const stepOne = ((R3 * R6 * R7) + (R3 * R6 * R8) + (R3 * R7 * R8)) / ((R3 * R6) + (R3 * R7) + (R6 * R7) + (R6 * R8) + (R7 * R8));
  const stepTwo = R4 + stepOne;
  const I2 = Is * (stepTwo / (stepTwo + R2));
  const I3 = (Is - I2) * (((R6 * R7) + (R6 * R8) + (R7 * R8)) / ((R6 * R7) + (R6 * R8) + (R7 * R8) + (R3 * R6) + (R3 * R7)));
  const I8 = Is - I2 - I3;
  const I6 = I8 * (R7 / (R7 + R6));
  $('#p1-e-answer').html(`${I2}, ${I3}, ${I6}, ${I8} mA`);
});

$('#p2-a-submit').click(() => {
  $('#p2-a-answer').html('120 &Omega;');
});

$('#p2-b-submit').click(() => {
  const Is = Number($('#p2-b-Is').val());
  $('#p2-b-answer').html(`${(Math.pow(Is * Math.pow(10, -3), 2)) * 120} W`);
});

$('#p2-c-submit').click(() => {
  $('#p2-c-answer').html('300 &Omega;');
});

$('#p2-d-submit').click(() => {
  const Is = Number($('#p2-d-Is').val());
  $('#p2-d-answer').html(`${(Math.pow(Is * Math.pow(10, -3), 2)) * 300} W`);
});

$('#p2-e-submit').click(() => {
  $('#p2-e-answer').html('27 &Omega;');
});

$('#p2-f-submit').click(() => {
  const Vs = Number($('#p2-f-Vs').val());
  $('#p2-f-answer').html(`${Math.pow(Vs, 2) / 27} W`);
});

$('#p2-g-submit').click(() => {
  $('#p2-g-answer').html('50 &Omega;');
});

$('#p2-h-submit').click(() => {
  const Vs = Number($('#p2-h-Vs').val());
  $('#p2-h-answer').html(`${Math.pow(Vs * Math.pow(10, -3), 2) / 50} W`);
});

$('#p3-a-submit').click(() => {
  const R1 = Number($('#p3-a-R1').val());
  const R2 = Number($('#p3-a-R2').val());
  const R3 = Number($('#p3-a-R3').val());
  const R4 = Number($('#p3-a-R4').val());
  const R5 = Number($('#p3-a-R5').val());
  const stepOne = R2 + R5;
  const stepTwo = (stepOne * R3) / (stepOne + R3);
  const stepThree = stepTwo + R4;
  const stepFour = (stepThree * R1) / (stepThree + R1);
  $('#p3-a-answer').html(`${stepFour} &Omega;`);
});

$('#p3-b-submit').click(() => {
  $('#p3-b-answer').html('30 &Omega;');
});

$('#p3-c-submit').click(() => {
  $('#p3-c-answer').html('60 &Omega;');
});

$('#p3-d-submit').click(() => {
  $('#p3-d-answer').html('20 &Omega;');
});

$('#p4-a-submit').click(() => {
  const Ig = Number($('#p4-a-Ig').val());
  $('#p4-a-answer').html(`${(20 * Ig) / 3} V`);
});

$('#p4-b-submit').click(() => {
  const Ig = Number($('#p4-a-Ig').val());
  $('#p4-b-answer').html(`${Ig / 15} A`);
});

$('#p4-c-submit').click(() => {
  const Ig = Number($('#p4-a-Ig').val());
  $('#p4-c-answer').html(`${(8 * Math.pow(Ig, 2)) / 3} W`);
});

$('#p4-d-submit').click(() => {
  const Ig = Number($('#p4-a-Ig').val());
  $('#p4-d-answer').html(`${10 * Math.pow(Ig, 2)} W`);
});

$('#p5-a-submit').click(() => {
  const V = Number($('#p5-V').val());
  $('#p5-a-answer').html(`${V * (8 / 15)} V`);
});

$('#p5-b-submit').click(() => {
  const V = Number($('#p5-V').val());
  $('#p5-b-answer').html(`${0.6 * V} V`);
});

$('#p5-c-submit').click(() => {
  $('#p5-c-answer').html('is greater than');
});

$('#p6-a-submit').click(() => {
  const R1 = Number($('#p6-R1').val());
  const R2 = Number($('#p6-R2').val());
  const R3 = Number($('#p6-R3').val());
  const R4 = Number($('#p6-R4').val());
  const R5 = Number($('#p6-R5').val());
  const R6 = Number($('#p6-R6').val());
  const stepOne = R3 + R6;
  const stepTwo = (stepOne * R5) / (stepOne + R5);
  const stepThree = R1 + R2 + stepTwo;
  const answer = 30 * (R4 / (R4 + stepThree));
  $('#p6-a-answer').html(`${answer} mA`);
});

$('#p6-b-submit').click(() => {
  const R1 = Number($('#p6-R1').val());
  const R2 = Number($('#p6-R2').val());
  const R3 = Number($('#p6-R3').val());
  const R4 = Number($('#p6-R4').val());
  const R5 = Number($('#p6-R5').val());
  const R6 = Number($('#p6-R6').val());
  const stepOne = R3 + R6;
  const stepTwo = (stepOne * R5) / (stepOne + R5);
  const stepThree = R1 + R2 + stepTwo;
  const stepFour = 30 * (R4 / (R4 + stepThree));
  const answer = stepFour * (R5 / (R3 + R5 + R6));
  $('#p6-b-answer').html(`${answer} mA`);
});

$('#p7-a-submit').click(() => {
  const V = Number($('#p7-V').val());
  $('#p7-a-answer').html(`${V / 7.5} V`);
});

$('#p7-b-submit').click(() => {
  const V = Number($('#p7-V').val());
  $('#p7-b-answer').html(`${V / 30} A`);
});

$('#p7-c-submit').click(() => {
  const V = Number($('#p7-V').val());
  $('#p7-c-answer').html(`${V / 50} A`);
});

$('#p7-d-submit').click(() => {
  const V = Number($('#p7-V').val());
  $('#p7-d-answer').html(`${V / 125} A`);
});

$('#p7-e-submit').click(() => {
  const V = Number($('#p7-V').val());
  $('#p7-e-answer').html(`${V / 12.5} V`);
});

$('#p7-f-submit').click(() => {
  const V = Number($('#p7-V').val());
  $('#p7-f-answer').html(`${(6 * V) / 125} V`);
});

$('#p8-a-submit').click(() => {
  const Vs = Number($('#p8-a-Vs').val());
  $('#p8-a-answer').html(`${0.2 * Vs} V`);
});

$('#p8-b-submit').click(() => {
  $('#p8-b-answer').html('0.2 * V<sub>s</sub>');
});

$('#p9-a-submit').click(() => {
  const Ig = Number($('#p9-a-Ig').val());
  $('#p9-a-answer').html(`${1.875 * Ig} V`);
});

$('#p10-a-submit').click(() => {
  const Vg = Number($('#p10-Vg').val());
  $('#p10-a-answer').html(`${(5 * Vg) / 27} V`);
});

$('#p10-b-submit').click(() => {
  const Vg = Number($('#p10-Vg').val());
  $('#p10-b-answer').html(`${Vg / 9} V`);
});

$('#p11-a-submit').click(() => {
  const Vg = Number($('#p11-Vg').val());
  $('#p11-a-answer').html(`${1.655 * Vg} mA`);
});

$('#p11-b-submit').click(() => {
  const Vg = Number($('#p11-Vg').val());
  $('#p11-b-answer').html(`${4.7286 * Vg} mA`);
});

$('#p11-c-submit').click(() => {
  const Vg = Number($('#p11-Vg').val());
  $('#p11-c-answer').html(`${7.1523 * Vg} mA`);
});

$('#p11-d-submit').click(() => {
  const Vg = Number($('#p11-Vg').val());
  $('#p11-d-answer').html(`${0.0088082 * Math.pow(Vg, 2)} W`);
});

$('#p12-a-submit').click(() => {
  const R2 = Number($('#p12-R2').val());
  const Ra = ((78 * R2) + 1080) / 18;
  const Rb = ((78 * R2) + 1080) / 60;
  const Rc = ((78 * R2) + 1080) / R2;
  $('#p12-a-answer').html(`${Ra}, ${Rb}, ${Rc} &Omega;`);
});

$('#p12-b-submit').click(() => {
  const R2 = Number($('#p12-R2').val());
  const answer = 29 + (((4809.375 * R2) + 68343.75) / ((151.875 * R2) + 5568.75));
  $('#p12-b-answer').html(`${answer} &Omega;`);
});

$('#p12-c-submit').click(() => {
  $('#p12-c-answer').html('16.7, 10, 5 &Omega;');
});

$('#p12-d-submit').click(() => {
  const R2 = Number($('#p12-d-R2').val());
  const answer = 29 + (((4809.375 * R2) + 68343.75) / ((151.875 * R2) + 5568.75));
  $('#p12-d-answer').html(`${answer} &Omega;`);
});

$('#p12-e-submit').click(() => {
  $('#p12-e-answer').html('R<sub>1</sub> - R<sub>3</sub> - R<sub>4</sub><br/>R<sub>1</sub> - R<sub>2</sub> - R<sub>3</sub>');
});

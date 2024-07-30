$('.toggle-button').each(function () {
  $(this).click(function () {
    const content = $(this).parent().next();
    content.toggleClass('hidden');
  });
});

$('#p1-a-submit').click(function () {
  const I = Number($('#p1-a-I').val());
  const R1 = Number($('#p1-a-R1').val());
  const R2 = Number($('#p1-a-R2').val());
  const alpha = Number($('#p1-a-alpha').val());
  $('#p1-a-answer').html(`${((R1 + R2) - (alpha * R2)) * I} V`);
});

$('#p1-b-submit').click(function () {
  const V = Number($('#p1-b-V').val());
  const R1 = Number($('#p1-b-R1').val());
  const R2 = Number($('#p1-b-R2').val());
  const alpha = Number($('#p1-b-alpha').val());
  $('#p1-b-answer').html(`${((alpha + 1) * V) / (R1 + R2)} mA`);
});

$('#p2-a-submit').click(function () {
  const Vs = Number($('#p2-Vs').val());
  $('#p2-a-answer').html(`${(200 / 7) - ((10 * Vs) / 14)} V`);
});

$('#p2-b-submit').click(function () {
  const Vs = Number($('#p2-Vs').val());
  const stepOne = Math.pow((200 / 7) - ((10 * Vs) / 14), 2);
  const stepTwo = Math.pow((200 / 7) + ((2 * Vs) / 7), 2);
  $('#p2-b-answer').html(`${(stepOne / 5000) + (stepTwo / 2000)} W`);
});

$('#p2-c-submit').click(function () {
  const Vs = Number($('#p2-Vs').val());
  const stepOne = Math.pow((200 / 7) - ((10 * Vs) / 14), 2);
  const stepTwo = Math.pow((200 / 7) + ((2 * Vs) / 7), 2);
  $('#p2-c-answer').html(`${(stepOne / 5000) + (stepTwo / 2000)} W`);
});

$('#p3-a-submit').click(function () {
  const Vg = Number($('#p3-Vg').val());
  const Rg = Number($('#p3-Rg').val());
  const Ra = Number($('#p3-Ra').val());
  const Rb = Number($('#p3-Rb').val());
  $('#p3-a-answer').html(`${(Vg * Rb) / ((Ra * Rb) + (Ra * Rg) + (Rb * Rg))} A`);
});

$('#p3-b-submit').click(function () {
  const Vg = Number($('#p3-Vg').val());
  const Rg = Number($('#p3-Rg').val());
  const Ra = Number($('#p3-Ra').val());
  const Rb = Number($('#p3-Rb').val());
  $('#p3-b-answer').html(`${(Vg * Ra) / ((Ra * Rb) + (Ra * Rg) + (Rb * Rg))} A`);
});

$('#p3-c-submit').click(function () {
  const Vg = Number($('#p3-Vg').val());
  const Rg = Number($('#p3-Rg').val());
  const Ra = Number($('#p3-Ra').val());
  const Rb = Number($('#p3-Rb').val());
  $('#p3-c-answer').html(`${(Vg * Ra * Rb) / ((Ra * Rb) + (Ra * Rg) + (Rb * Rg))} V`);
});

$('#p3-d-submit').click(function () {
  const Vg = Number($('#p3-Vg').val());
  const Rg = Number($('#p3-Rg').val());
  const Ra = Number($('#p3-Ra').val());
  const Rb = Number($('#p3-Rb').val());
  const Ia = (Vg * Rb) / ((Ra * Rb) + (Ra * Rg) + (Rb * Rg));
  const Ib = (Vg * Ra) / ((Ra * Rb) + (Ra * Rg) + (Rb * Rg));
  $('#p3-d-answer').html(`${Math.pow((Ia + Ib), 2) * Rg}, ${Math.pow(Ia, 2) * Ra}, ${Math.pow(Ib, 2) * Rb} W`);
});

$('#p3-e-submit').click(function () {
  const Vg = Number($('#p3-Vg').val());
  const Rg = Number($('#p3-Rg').val());
  const Ra = Number($('#p3-Ra').val());
  const Rb = Number($('#p3-Rb').val());
  const Ia = (Vg * Rb) / ((Ra * Rb) + (Ra * Rg) + (Rb * Rg));
  const Ib = (Vg * Ra) / ((Ra * Rb) + (Ra * Rg) + (Rb * Rg));
  $('#p3-e-answer').html(`${(Math.pow((Ia + Ib), 2) * Rg) + (Math.pow(Ia, 2) * Ra) + (Math.pow(Ib, 2) * Rb)} W`);
});

$('#p4-a-submit').click(function () {
  const Ia = Number($('#p4-Ia').val());
  $('#p4-a-answer').html(`${Ia * 4} A`);
});

$('#p4-b-submit').click(function () {
  const Ia = Number($('#p4-Ia').val());
  $('#p4-b-answer').html(`${Ia * 5} A`);
});

$('#p4-c-submit').click(function () {
  const Ia = Number($('#p4-Ia').val());
  $('#p4-c-answer').html(`${200 * (Ia * Ia)} W`);
});

$('#p5-a-submit').click(function () {
  const Vg = Number($('#p5-Vg').val());
  $('#p5-a-answer').html(`${0.0875 * Vg} A`);
});

$('#p5-b-submit').click(function () {
  const Vg = Number($('#p5-Vg').val());
  const Vg2 = Vg * Vg;
  $('#p5-b-answer').html(`${0.0325 * Vg2}, ${0.03125 * Vg2}, ${0.030625 * Vg2}, ${0.0125 * Vg2}, ${0.005625 * Vg2} W`);
});

$('#p5-c-submit').click(function () {
  const Vg = Number($('#p5-Vg').val());
  $('#p5-c-answer').html(`${0.1125 * (Vg * Vg)} W`);
});

$('#p6-a-submit').click(function () {
  const Vg = Number($('#p6-Vg').val());
  const Vg2 = Vg * Vg;
  $('#p6-a-answer').html(`${0.015625 * Vg2}, ${0.003125 * Vg2}, ${(5 / 192) * Vg2}, ${0.028125 * Vg2}, ${(1 / 160) * Vg2} W`);
});

$('#p6-b-submit').click(function () {
  const Vg = Number($('#p6-Vg').val());
  const Vg2 = Vg * Vg;
  $('#p6-b-answer').html(`${(19 / 240) * Vg2} W`);
});

$('#p7-a-submit').click(function () {
  const Ia = Number($('#p7-Ia').val());
  const Ib = Number($('#p7-Ib').val());
  const Va = Number($('#p7-Va').val());
  $('#p7-a-answer').html(`${(-1 * (Va + (35 * Ia) + (30 * Ib)) / 20)} A`);
});

$('#p7-b-submit').click(function () {
  const Ia = Number($('#p7-Ia').val());
  const Ib = Number($('#p7-Ib').val());
  const Va = Number($('#p7-Va').val());
  const Ib2 = Math.pow(Ib, 2);
  $('#p7-b-answer').html(`${9 * Ib2}, ${10 * Ib2}, ${0.075 * Math.pow((Va + (15 * Ia) + (50 * Ib)), 2)}, ${0.04 * Math.pow((Va + (15 * Ia) + (38 * Ib)), 2)}, ${11 * Ib2}, ${5 * Math.pow((Ib - Ia), 2)}, ${0.01 * Math.pow((Va + (15 * Ia) + (30 * Ib2)), 2)}, ${15 * Math.pow(Ia, 2)} W`);
});

$('#p7-c-submit').click(function () {
  const Ia = Number($('#p7-Ia').val());
  const Ib = Number($('#p7-Ib').val());
  const Va = Number($('#p7-Va').val());
  $('#p7-c-answer').html(`${Va + (20 * Ia) - (5 * Ib)} V`);
});

$('#p7-d-submit').click(function () {
  const Ia = Number($('#p7-Ia').val());
  const Ib = Number($('#p7-Ib').val());
  const Va = Number($('#p7-Va').val());
  $('#p7-d-answer').html(`${(((Va + (35 * Ia) + (30 * Ib)) / 20) * (Va + (20 * Ia) - (5 * Ib)))} W`);
});

$('#p8-a-submit').click(function () {
  const R = Number($('#p8-R').val());
  $('#p8-a-answer').html(`${(60 * R) / (R + 450)} V`);
});

$('#p8-b-submit').click(function () {
  const R = Number($('#p8-R').val());
  $('#p8-b-answer').html(`${((12 * Math.pow(R, 2)) + (400 * R) + 180000) / Math.pow((R + 450), 2)} W`);
});

$('#p9-a-submit').click(function () {
  const Is = Number($('#p9-Is').val());
  $('#p9-a-answer').html(`${0.25 * Is} mA`);
});

$('#p9-b-submit').click(function () {
  const Is = Number($('#p9-Is').val());
  $('#p9-b-answer').html(`${0.0045 * Math.pow(Is, 2)} W`);
});

$('#p9-c-submit').click(function () {
  const Is = Number($('#p9-Is').val());
  $('#p9-c-answer').html(`${0.0045 * Math.pow(Is, 2)} W`);
});

$('#p10-a-submit').click(function () {
  const V = Number($('#p10-V0').val());
  $('#p10-a-answer').html(`${(-0.25 * V)}, ${(0.2 * V)} V`);
});

$('.toggle-button').each(function () {
  $(this).click(function () {
    const content = $(this).parent().next();
    content.toggleClass('hidden');
  });
});

$('#p1-a-submit').click(() => {
  const R = Number($('#p1-R').val());
  $('#p1-a-answer').html(`${(80 * Math.pow((R + 4), 2)) / ((R + 44) * (R + 12))} %`);
});

$('#p2-a-submit').click(() => {
  const percent = Number($('#p2-a-percent').val());
  $('#p2-a-answer').html(`${-125 * Math.log(1 - (0.06 * percent))} &mu;s`);
});

$('#p2-b-submit').click(() => {
  const percent = Number($('#p2-a-percent').val());
  const stepOne = (-125 * Math.pow(10, -6)) * Math.log(1 - (0.06 * percent));
  const stepTwo = 100 - (100 * Math.pow(Math.E, -8000 * stepOne));
  $('#p2-b-answer').html(`${stepTwo} %`);
});

$('#p3-a-submit').click(() => {
  const V = Number($('#p3-V').val());
  const I = Number($('#p3-I').val());
  $('#p3-a-answer').html(`${V / I} &Omega;`);
});

$('#p3-b-submit').click(() => {
  const E1 = Number($('#p3-e1').val()) * -1;
  $('#p3-b-answer').html(`${1000 / E1} ms`);
});

$('#p3-c-submit').click(() => {
  const V = Number($('#p3-V').val());
  const I = Number($('#p3-I').val());
  const E1 = Number($('#p3-e1').val()) * -1;
  const answer = ((V / I) * (1000 / E1) / 1000);
  $('#p3-c-answer').html(`${answer} H`);
});

$('#p3-d-submit').click(() => {
  const V = Number($('#p3-V').val());
  const I = Number($('#p3-I').val());
  const E1 = Number($('#p3-e1').val()) * -1;
  const c = ((V / I) * (1000 / E1) / 1000);
  const answer = 0.5 * c * Math.pow(I, 2);
  $('#p3-d-answer').html(`${answer} J`);
});

$('#p3-e-submit').click(() => {
  const E2 = Number($('#p3-e1').val());
  const percent = Number($('#p3-e-percent').val());
  const answer = (500 * Math.log(1 - (percent / 100))) / E2;
  $('#p3-e-answer').html(`${answer} ms`);
});

$('#p4-a-submit').click(() => {
  $('#p4-a-answer').html('300e<sup>-2500t</sup>');
});

$('#p5-a-submit').click(() => {
  $('#p5-a-answer').html('-0.75e<sup>-25000t</sup>');
});

$('#p6-a-submit').click(() => {
  const V = Number($('#p6-V').val());
  const I = Number($('#p6-I').val());
  $('#p6-a-answer').html(`${(1000 * V) / I} &Omega;`);
});

$('#p6-b-submit').click(() => {
  const V = Number($('#p6-V').val());
  const I = Number($('#p6-I').val());
  const E1 = Number($('#p6-e1').val()) * -1;
  const partA = (1000 * V) / I;
  const answer = Math.pow(10, 6) / (partA * E1);
  $('#p6-b-answer').html(`${answer} &mu;F`);
});

$('#p6-c-submit').click(() => {
  const E1 = Number($('#p6-e1').val()) * -1;
  $('#p6-c-answer').html(`${1000 / E1} ms`);
});

$('#p6-d-submit').click(() => {
  const V = Number($('#p6-V').val());
  const I = Number($('#p6-I').val());
  const E1 = Number($('#p6-e1').val()) * -1;
  const partA = (1000 * V) / I;
  const answer = 0.5 * ((Math.pow(10, 6) / (partA * E1))) * Math.pow(V, 2);
  $('#p6-d-answer').html(`${answer} &mu;J`);
});

$('#p6-e-submit').click(() => {
  const V = Number($('#p6-V').val());
  const I = Number($('#p6-I').val());
  const E1 = Number($('#p6-e1').val()) * -1;
  const percent = Number($('#p6-e-t').val());
  const partA = (1000 * V) / I;
  const answer = ((-500 * Math.pow(V, 2)) / (partA * E1)) * ((Math.pow(Math.E, -2 * E1 * (percent * Math.pow(10, - 3)))) - 1);
  $('#p6-e-answer').html(`${answer} mJ`);
});

$('#p7-a-submit').click(() => {
  $('#p7-a-answer').html('v<sub>0</sub>(t) = -80e<sup>-4000t</sup> mV');
});

$('#p8-a-submit').click(() => {
  $('#p8-a-answer').html('-50 V');
});

$('#p8-b-submit').click(() => {
  $('#p8-b-answer').html('0.1 s');
});

$('#p8-c-submit').click(() => {
  $('#p8-c-answer').html('-24 V');
});

$('#p8-d-submit').click(() => {
  $('#p8-d-answer').html('6.5 A');
});

$('#p8-e-submit').click(() => {
  $('#p8-e-answer').html('-24 - 26e<sup>-10t</sup> V');
});

$('#p8-f-submit').click(() => {
  $('#p8-f-answer').html('6.5<sup>-10t</sup> A');
});

$('#p9-a-submit').click(() => {
  const V = Number($('#p9-a-V').val());
  $('#p9-a-answer').html(`${0.75 * V} V`);
});

$('#p9-b-submit').click(() => {
  const I = Number($('#p9-a-I').val());
  $('#p9-b-answer').html(`${-40 * I} V`);
});

$('#p9-c-submit').click(() => {
  $('#p9-c-answer').html(`0.001 s`);
});

$('#p9-d-submit').click(() => {
  const I = Number($('#p9-a-I').val());
  const V = Number($('#p9-a-V').val());
  const answer = -Math.log((40 * I) / ((40 * I) + (0.75 * V)));
  $('#p9-d-answer').html(`${answer} ms`);
});

$('#p10-a-submit').click(() => {
  $('#p10-a-answer').html('v<sub>0</sub>(t) = -45 + 90e-<sup>800t</sup> V');
});

$('#p11-a-submit').click(() => {
  $('#p11-a-answer').html('v<sub>0</sub>(t) = 30 + 90e<sup>-1250t</sup> V');
});

$('#p11-b-submit').click(() => {
  $('#p11-b-answer').html('v<sub>1</sub>(t)=30 - 30e<sup>-1250t</sup> V');
});

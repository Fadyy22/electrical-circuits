$('.toggle-button').each(function () {
  $(this).on('click', function () {
    const content = $(this).parent().next();
    content.toggleClass('hidden');
  });
});

$('#p1-a-submit').on('click', () => {
  $('#p1-a-answer').html(`v<sub>L</sub> = 0.9e<sup>-10t</sup>(1-10t) mV`);
});

$('#p1-b-T').keyup(() => {
  const T = Number($('#p1-b-T').val());
  $('#p1-c-T').html(`${T}`);
});

$('#p1-b-submit').on('click', () => {
  const T = Number($('#p1-b-T').val()) * Math.pow(10, -3);
  const answer = 16200 * T * Math.exp(-20 * T) * (1 - 10 * T);
  $('#p1-b-answer').html(`${answer} &mu;W`);
});

$('#p1-c-submit').on('click', () => {
  const T = Number($('#p1-b-T').val()) * Math.pow(10, -3);
  const bAnswer = 16200 * T * Math.exp(-20 * T) * (1 - 10 * T);
  const answer = bAnswer > 0 ? 'absorbing power' : 'delivering power';
  $('#p1-c-answer').html(`${answer}`);
});

$('#p1-d-submit').on('click', () => {
  const T = Number($('#p1-d-T').val()) * Math.pow(10, -3);
  const answer = 8100 * Math.pow(T, 2) * Math.exp(-20 * T);
  $('#p1-d-answer').html(`${answer} &mu;J`);
});

$('#p1-e-submit').on('click', () => {
  $('#p1-e-answer').html('100 ms');
});

$('#p1-f-submit').on('click', () => {
  $('#p1-f-answer').html('11 &mu;J');
});

$('#p2-a-submit').on('click', () => {
  $('#p2-a-answer').html('0 A');
});

$('#p2-b-submit').on('click', () => {
  $('#p2-b-answer').html('50t A');
});

$('#p2-c-submit').on('click', () => {
  $('#p2-c-answer').html('0.5 - 50t A');
});

$('#p2-d-submit').on('click', () => {
  $('#p2-d-answer').html('0 A');
});

$('#p2-e-submit').on('click', () => {
  $('#p2-e-answer').html('0 V');
});

$('#p2-f-submit').on('click', () => {
  $('#p2-f-answer').html('1 V');
});

$('#p2-g-submit').on('click', () => {
  $('#p2-g-answer').html('-1 V');
});

$('#p2-h-submit').on('click', () => {
  $('#p2-h-answer').html('0 V');
});

$('#p2-i-submit').on('click', () => {
  $('#p2-i-answer').html('0 W');
});

$('#p2-j-submit').on('click', () => {
  $('#p2-j-answer').html('50t W');
});

$('#p2-k-submit').on('click', () => {
  $('#p2-k-answer').html('-0.5 + 50t W');
});

$('#p2-l-submit').on('click', () => {
  $('#p2-l-answer').html('0 W');
});

$('#p2-m-submit').on('click', () => {
  $('#p2-m-answer').html('0 J');
});

$('#p2-n-submit').on('click', () => {
  $('#p2-n-answer').html('25t<sup>2</sup> J');
});

$('#p2-o-submit').on('click', () => {
  $('#p2-o-answer').html('25t<sup>2</sup> - 0.5t + 0.0025 J');
});

$('#p2-p-submit').on('click', () => {
  $('#p2-p-answer').html('0 J');
});

$('#p3-a-submit').on('click', () => {
  $('#p3-a-answer').html('-20e-<sup>10,000t</sup> + 48e<sup>-40,000t</sup> V');
});

$('#p3-b-submit').on('click', () => {
  $('#p3-b-answer').html('29.2 &mu;s');
});

$('#p4-a-submit').on('click', () => {
  const T = Number($('#p4-a-T').val()) * Math.pow(10, -3);
  console.log(T);
  const I = (0.075 * Math.cos((11459.1559 * T) * (Math.PI / 180))) + (0.125 * Math.sin((11459.1559 * T) * (Math.PI / 180)));
  console.log(I);
  const V = (4.25 * Math.cos((11459.1559 * T) * (Math.PI / 180))) - (4.25 * Math.sin((11459.1559 * T) * (Math.PI / 180)));
  console.log(V);
  const answer = V * I * Math.exp(-100 * T);
  $('#p4-a-answer').html(`${answer} W`);
});

$('#p4-b-submit').on('click', () => {
  const T = Number($('#p4-a-T').val()) * Math.pow(10, -3);
  const I = (0.075 * Math.cos((11459.1559 * T) * (Math.PI / 180))) + (0.125 * Math.sin((11459.1559 * T) * (Math.PI / 180)));
  const V = (4.25 * Math.cos((11459.1559 * T) * (Math.PI / 180))) - (4.25 * Math.sin(11459.1559 * T));
  const P = V * I * Math.exp(-100 * T);
  const answer = P > 0 ? 'absorbing power' : 'delivering power';
  $('#p4-b-answer').html(`${answer}`);
});

$('#p5-a-submit').on('click', () => {
  $('#p5-a-answer').html('2.77 ms');
});

$('#p5-b-submit').on('click', () => {
  const L = Number($('#p5-L').val()) * Math.pow(10, -3);
  $('#p5-b-answer').html(`${2564 * L} V`);
});

$('#p6-a-submit').on('click', () => {
  $('#p6-a-answer').html('2.5e<sup>-2500t</sup>(1 - 2500t) mA');
});

$('#p6-b-submit').on('click', () => {
  const T = Number($('#p6-b-T').val()) * Math.pow(10, -6);
  const answer = 1250 * T * Math.exp(-5000 * T) * (1 - 2500 * T);
  $('#p6-b-answer').html(`${answer} &mu;W`);
});

$('#p6-b-T').keyup(() => {
  const T = Number($('#p6-b-T').val());
  $('#p6-b-T-answer').html(`${T}`);
  $('#p6-c-T').html(`${T}`);
});

$('#p6-c-submit').on('click', () => {
  const T = Number($('#p6-b-T').val()) * Math.pow(10, -6);
  const bAnswer = 1250 * T * Math.exp(-5000 * T) * (1 - 2500 * T);
  const answer = bAnswer > 0 ? 'absorbing power' : 'delivering power';
  $('#p6-c-answer').html(`${answer}`);
});

$('#p6-d-T').keyup(() => {
  const T = Number($('#p6-d-T').val());
  $('#p6-d-T-answer').html(`${T}`);
});

$('#p6-d-submit').on('click', () => {
  const T = Number($('#p6-d-T').val()) * Math.pow(10, -6);
  const answer = 625 * Math.pow(10, 6) * Math.pow(T, 2) * Math.exp(-5000 * T);
  $('#p6-d-answer').html(`${answer} nJ`);
});

$('#p6-e-submit').on('click', () => {
  $('#p6-e-answer').html('13.5 nJ');
});

$('#p6-f-submit').on('click', () => {
  $('#p6-f-answer').html('0.4 ms');
});

$('#p7-a-submit').on('click', () => {
  const T = Number($('#p7-a-T').val()) * Math.pow(10, -6);
  const answer = 0.25 * Math.pow(10, -3) * Math.pow((-50 * Math.exp(-2000 * T) + 30), 2);
  $('#p7-a-answer').html(`${answer} &mu;J`);
});

$('#p7-b-submit').on('click', () => {
  $('#p7-b-answer').html('225 &mu;J');
});

$('#p8-a-submit').on('click', () => {
  const L1 = Number($('#p8-L1').val());
  const answer = 8 + ((18 * L1) / (18 + L1));
  $('#p8-a-answer').html(`${answer} mH`);
});

$('#p8-b-submit').on('click', () => {
  const L2 = Number($('#p8-L2').val());
  const answer = 25 + ((60 * (15 + L2)) / (75 + L2));
  $('#p8-b-answer').html(`${answer} &mu;H`);
});

$('#p9-a-submit').on('click', () => {
  $('#p9-a-answer').html('5 A');
});

$('#p9-b-submit').on('click', () => {
  $('#p9-b-answer').html('5e<sup>-100t</sup> A');
});

$('#p9-c-submit').on('click', () => {
  $('#p9-c-answer').html('-4e<sup>-100t</sup> - 2 A');
});

$('#p9-d-submit').on('click', () => {
  $('#p9-d-answer').html('-e<sup>-100t</sup> + 2 A');
});

$('#p9-e-submit').on('click', () => {
  $('#p9-e-answer').html('60 J');
});

$('#p9-f-submit').on('click', () => {
  $('#p9-f-answer').html('50 J');
});

$('#p9-g-submit').on('click', () => {
  $('#p9-g-answer').html('10 J');
});

$('#p10-a-submit').on('click', () => {
  $('#p10-a-answer').html('5 A');
});

$('#p10-b-submit').on('click', () => {
  $('#p10-b-answer').html('5e<sup>-100t</sup> A');
});

$('#p10-c-submit').on('click', () => {
  $('#p10-c-answer').html('-4e<sup>-100t</sup> - 2 A');
});

$('#p10-d-submit').on('click', () => {
  $('#p10-d-answer').html('-e<sup>-100t</sup> + 2 A');
});

$('#p10-e-submit').on('click', () => {
  $('#p10-e-answer').html('60 J');
});

$('#p10-f-submit').on('click', () => {
  $('#p10-f-answer').html('50 J');
});

$('#p10-g-submit').on('click', () => {
  $('#p10-g-answer').html('10 J');
});

$('#p11-a-submit').on('click', () => {
  $('#p11-a-answer').html('8.05 ms');
});

$('#p12-a-submit').on('click', () => {
  const C1 = Number($('#p12-a-C1').val());
  const answer = (20 * C1) / (3 * C1 + 20);
  $('#p12-a-answer').html(`${answer} nF`);
});

$('#p12-b-submit').on('click', () => {
  $('#p12-b-answer').html('-15 V');
});

$('#p12-c-submit').on('click', () => {
  const C2 = Number($('#p12-c-C2').val());
  const answer = ((C2 + 5) * 15) / (C2 + 20);
  $('#p12-c-answer').html(`${answer} &mu;F`);
});

$('#p12-d-submit').on('click', () => {
  $('#p12-d-answer').html('-25 V');
});

$('#p13-a-submit').on('click', () => {
  $('#p13-a-answer').html('v<sub>o</sub> (t) = 10e<sup>-t</sup> V');
});

$('#p13-b-submit').on('click', () => {
  $('#p13-b-answer').html('v<sub>1</sub> (t) = 6.67e<sup>-t</sup> - 2.67 V');
});

$('#p13-c-submit').on('click', () => {
  $('#p13-c-answer').html('v<sub>2</sub> (t) = 3.33e<sup>-t</sup> + 2.67 V');
});

$('#p13-d-submit').on('click', () => {
  $('#p13-d-answer').html('100 &mu;J');
});

$('#p13-e-submit').on('click', () => {
  $('#p13-e-answer').html('132 &mu;J');
});

$('#p13-f-submit').on('click', () => {
  $('#p13-f-answer').html('32 &mu;J');
});

$('#p14-a-submit').on('click', () => {
  $('#p14-a-answer').html('-200e<sup>-50t</sup> V');
});

$('#p14-b-submit').on('click', () => {
  $('#p14-b-answer').html('20e<sup>-50t</sup> - 40 V');
});

$('#p14-c-submit').on('click', () => {
  $('#p14-c-answer').html('80e<sup>-50t</sup> - 110 V');
});

$('#p14-d-submit').on('click', () => {
  $('#p14-d-answer').html('100e<sup>-50t</sup> + 150 V');
});

$('#p14-e-submit').on('click', () => {
  $('#p14-e-answer').html('-e<sup>-50t</sup> mA');
});

$('#p14-f-submit').on('click', () => {
  $('#p14-f-answer').html('-4e<sup>-50t</sup> mA');
});

$('#p15-a-submit').on('click', () => {
  $('#p15-a-answer').html('0.0328125 J');
});

$('#p15-b-submit').on('click', () => {
  $('#p15-b-answer').html('0.0228125 J');
});

$('#p15-c-submit').on('click', () => {
  $('#p15-c-answer').html('0.01 J');
});

$('#p15-d-submit').on('click', () => {
  $('#p15-d-answer').html('30.48 %');
});

$('#p15-e-submit').on('click', () => {
  const E = Number($('#p15-e-E').val());
  const answer = -10 * Math.log(1 - (E / 10));
  $('#p15-e-answer').html(`${answer} ms`);
});

$('#p16-a-submit').on('click', () => {
  $('#p16-a-answer').html('v<sub>o</sub> = 750e<sup>-16,000t</sup> - 750e<sup>-4000t</sup> V');
});

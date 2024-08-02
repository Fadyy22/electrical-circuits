$('.toggle-button').each(function () {
  $(this).on('click', function () {
    const content = $(this).parent().next();
    content.toggleClass('hidden');
  });
});

$('#p1-a-submit').on('click', () => {
  $('#p1-a-answer').html('12 dozen');
});

$('#p1-b-submit').on('click', () => {
  $('#p1-b-answer').html('12500');
});

$('#p1-c-submit').on('click', () => {
  $('#p1-c-answer').html('1.06*10<sup>-10</sup> m');
});

$('#p1-d-submit').on('click', () => {
  $('#p1-d-answer').html('35.0,66.0 m, m<sup>2</sup>');
});

$('#p2-a-submit').on('click', () => {
  $('#p2-a-answer').html('48.0 m');
});

$('#p2-b-submit').on('click', () => {
  $('#p2-b-answer').html('5*10<sup>-3</sup> g');
});

$('#p2-c-submit').on('click', () => {
  $('#p2-c-answer').html('98 <sup>kg⋅m</sup>&frasl;<sub>s<sup>2</sup></sub>');
});

$('#p2-d-submit').on('click', () => {
  $('#p2-d-answer').html('2.1*10<sup>-2</sup> <sup>km</sup>&frasl;<sub>s</sub>');
});

$('#p2-e-submit').on('click', () => {
  $('#p2-e-answer').html('30 N⋅m');
});

$('#p3-a-submit').on('click', () => {
  $('#p3-a-answer').html('12 cm<sup>2</sup>');
});

$('#p3-b-submit').on('click', () => {
  $('#p3-b-answer').html('11.76 cm<sup>2</sup>');
});

$('#p3-c-submit').on('click', () => {
  $('#p3-c-answer').html('78 cm<sup>3</sup>');
});

$('#p3-d-submit').on('click', () => {
  $('#p3-d-answer').html('Yes.');
});

$('#p4-a-submit').on('click', () => {
  $('#p4-a-answer').html('kΩ,mW,kA,Ω,μA,μW,mV,kΩ,μA,mW,V,kW,μV,μA');
});

$('#p4-b-submit').on('click', () => {
  $('#p4-b-answer').html('280 V');
});

$('#p5-a-submit').on('click', () => {
  $('#p5-a-answer').html('5.0*10<sup>-2</sup> V');
});

$('#p5-b-submit').on('click', () => {
  $('#p5-b-answer').html('1.050 nJ');
});

$('#p5-c-submit').on('click', () => {
  $('#p5-c-answer').html('9.3 A');
});

$('#p5-d-submit').on('click', () => {
  $('#p5-d-answer').html('63.0');
});

$('#p6-c-submit').on('click', () => {
  $('#p6-c-answer').html('421 mW');
});

$('#p7-a-submit').on('click', () => {
  $('#p7-a-answer').html('17.3 kJ');
});

$('#p8-b-submit').on('click', () => {
  $('#p8-b-answer').html('20.0 μJ');
});

$('#p8-c-submit').on('click', () => {
  $('#p8-c-answer').html('0 J');
});

$('#p8-d-submit').on('click', () => {
  $('#p8-d-answer').html('7.20 μJ');
});

$('#p8-e-submit').on('click', () => {
  $('#p8-e-answer').html('0 J');
});

$('#p9-a-submit').on('click', () => {
  $('#p9-a-answer').html('q(t) = 160(1 - 500te<sup>-500t</sup> - e<sup>-500t</sup>) μC');
});

$('#p9-b-submit').on('click', () => {
  $('#p9-b-answer').html('33.5 μC');
});

$('#p10-a-submit').on('click', () => {
  $('#p10-a-answer').html('6.06 mW');
});

$('#p10-b-submit').on('click', () => {
  $('#p10-b-answer').html('1.80 mJ');
});

$('#p11-a-submit').on('click', () => {
  $('#p11-a-answer').html('4.74 W');
});

$('#p11-b-submit').on('click', () => {
  $('#p11-b-answer').html('7.92 J');
});

$('#p12-a-submit').on('click', () => {
  $('#p12-a-answer').html('2640 mW');
});

$('#p13-a-submit').on('click', () => {
  $('#p13-a-answer').html('2.50,2.50 kW');
});

$('#p13-b-submit').on('click', () => {
  $('#p13-b-answer').html('yes');
});

$('#p13-c-submit').on('click', () => {
  $('#p13-c-answer').html('1.36 A');
});

$('#p13-d-submit').on('click', () => {
  $('#p13-d-answer').html('0.455 A');
});

$('#p13-e-submit').on('click', () => {
  $('#p13-e-answer').html('1.82 A');
});

$('#p13-f-submit').on('click', () => {
  $('#p13-f-answer').html('-1.82 A');
});

$('#p13-g-submit').on('click', () => {
  $('#p13-g-answer').html('-0.455 A');
});

$('#p13-h-submit').on('click', () => {
  $('#p13-h-answer').html('-3.64 A');
});

$('#p13-i-submit').on('click', () => {
  $('#p13-i-answer').html('2.27 A');
});

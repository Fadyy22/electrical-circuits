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
  $('#p1-c-answer').html('1.06x10<sup>-10</sup> m');
});

$('#p1-d-submit').on('click', () => {
  $('#p1-d-answer').html('35.0,66.0 m, m<sup>2</sup>');
});

$('#p2-a-submit').on('click', () => {
  $('#p2-a-answer').html('48.0 m');
});

$('#p2-b-submit').on('click', () => {
  $('#p2-b-answer').html('5x10<sup>-3</sup> g');
});

$('#p2-c-submit').on('click', () => {
  $('#p2-c-answer').html('98 <sup>kg⋅m</sup>&frasl;<sub>s<sup>2</sup></sub>');
});

$('#p2-d-submit').on('click', () => {
  $('#p2-d-answer').html('2.1x10<sup>-2</sup> <sup>km</sup>&frasl;<sub>s</sub>');
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
  $('#p5-a-answer').html('5.0x10<sup>-2</sup> V');
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

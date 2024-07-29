$('.toggle-button').each(function () {
  $(this).click(function () {
    const content = $(this).parent().next();
    content.toggleClass('hidden');
  });
});

$('#p2-a-submit').click(() => {
  $('#p2-a-answer').html('1000 &Omega;');
});

$('#p2-b-submit').click(() => {
  $('#p2-b-answer').html('1 &mu;F');
});

$('#p2-c-submit').click(() => {
  $('#p2-c-answer').html('6000 V/s');
});

$('#p2-d-submit').click(() => {
  $('#p2-d-answer').html('8 V');
});

$('#p2-e-submit').click(() => {
  $('#p2-e-answer').html('i<sub>C</sub> (t) = (-3000t + 2)e<sup>-500t</sup> mA');
});

$('#p3-a-submit').click(() => {
  $('#p3-a-answer').html('v<sub>o</sub> (t) = 5e<sup>-2000t</sup> + 10e<sup>-8000t</sup> V');
});

$('#p4-a-submit').click(() => {
  $('#p4-a-answer').html('20e<sup>-1250t</sup>cos(938t) - 26.67e<sup>-1250t</sup>sin(938t) V');
});

$('#p5-a-submit').click(() => {
  const R = Number($('#p5-a-R').val());
  const alpha = 125000 / R;
  let answer;
  if (alpha < 5000) {
    answer = 'underdamped';
  } else if (alpha === 5000) {
    answer = 'critically damped';
  } else {
    answer = 'overdamped';
  }
  $('#p5-a-answer').html(answer);
});

$('#p5-b-submit').click(() => {
  const R = Number($('#p5-b-R').val());
  const alpha = 125000 / R;
  const S = Math.sqrt(Math.pow(5000, 2) - Math.pow(alpha, 2));
  $('#p5-b-answer').html(`-${alpha} + j${S}, -${alpha} - j${S} rad/s`);
});


$('#p5-c-submit').click(() => {
  const R = Number($('#p5-c-R').val());
  const alpha = 125000 / R;
  let answer;
  if (alpha < 5000) {
    answer = 'underdamped';
  } else if (alpha === 5000) {
    answer = 'critically damped';
  } else {
    answer = 'overdamped';
  }
  $('#p5-c-answer').html(answer);
});

$('#p5-d-submit').click(() => {
  const R = Number($('#p5-d-R').val());
  const alpha = 125000 / R;
  const S1 = -alpha + Math.sqrt(Math.pow(alpha, 2) - Math.pow(5000, 2));
  const S2 = -alpha - Math.sqrt(Math.pow(alpha, 2) - Math.pow(5000, 2));
  $('#p5-d-answer').html(`${S1}, ${S2} rad/s`);
});

$('#p6-a-submit').click(() => {
  $('#p6-a-answer').html('v<sub>o</sub> (t) = 12,000te<sup>-1000t</sup> + 12e<sup>-1000t</sup> V');
});

$('#p7-a-submit').click(() => {
  $('#p7-a-answer').html('0.1 + 0.5e<sup>-200t</sup> - 0.5e<sup>-800t</sup> A');
});

$('#p7-b-submit').click(() => {
  $('#p7-b-answer').html('-25e<sup>-200t</sup> + 100e<sup>-800t</sup> V');
});

$('#p8-a-submit').click(() => {
  $('#p8-a-answer').html('i<sub>L</sub> (t) = 20 + 80e<sup>-800t</sup> cos(600t) + 127.5e<sup>-800t</sup> sin(600t) mA');
});

$('#p9-a-submit').click(() => {
  $('#p9-a-answer').html('8 k&Omega;');
});

$('#p9-b-submit').click(() => {
  $('#p9-b-answer').html('2 H');
});

$('#p9-c-submit').click(() => {
  const I = Number($('#p9-I').val());
  $('#p9-c-answer').html(`${I} mA`);
});

$('#p9-d-submit').click(() => {
  const I = Number($('#p9-I').val());
  const V = Number($('#p9-V').val());
  const answer = (((2000 * (I * Math.pow(10, -3))) + (0.5 * V)) / 1500) * 1000;
  $('#p9-d-answer').html(`${answer} mA`);
});

$('#p10-a-submit').click(() => {
  $('#p10-a-answer').html('<sup>2</sup>&frasl;<sub>3</sub>e<sup>-250t</sup> + <sup>4</sup>&frasl;<sub>3</sub>e<sup>-1000t</sup> A');
});

$('#p10-b-submit').click(() => {
  $('#p10-b-answer').html('-267e<sup>-250t</sup> - 133e<sup>-1000t</sup> V');
});

$('#p11-a-submit').click(() => {
  $('#p11-a-answer').html('-72 V');
});

$('#p11-b-submit').click(() => {
  $('#p11-b-answer').html('144000 V/s');
});

$('#p11-c-submit').click(() => {
  $('#p11-c-answer').html('v<sub>a</sub> (t) = -48e<sup>-1000t</sup> - 24e<sup>-4000t</sup> V');
});

$('#p12-a-submit').click(() => {
  $('#p12-a-answer').html('20 - 10,000te<sup>-500t</sup> - 20e<sup>-500t</sup> V');
});

$('#p13-a-submit').click(() => {
  $('#p13-a-answer').html('v<sub>o</sub> (t) = 25 - 33.33e<sup>-250t</sup> + 8.33e<sup>-1000t</sup>');
});

$('#p14-a-submit').click(() => {
  $('#p14-a-answer').html('60 - 150e<sup>-50t</sup> cos(50t) - 200e<sup>-50t</sup> sin(50t) V');
});
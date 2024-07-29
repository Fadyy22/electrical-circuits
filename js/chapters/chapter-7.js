$('.toggle-button').each(function () {
  $(this).click(function () {
    const content = $(this).parent().next();
    content.toggleClass('hidden');
  });
});

document.getElementById('p1-a-submit').addEventListener('click', () => {
  const R = Number(document.getElementById('p1-R').value);
  document.getElementById('p1-a-answer').innerHTML = `${(80 * Math.pow((R + 4), 2)) / ((R + 44) * (R + 12))} %`;
});

document.getElementById('p2-a-submit').addEventListener('click', () => {
  const percent = Number(document.getElementById('p2-a-percent').value);
  document.getElementById('p2-a-answer').innerHTML = `${-125 * Math.log(1 - (0.06 * percent))} &mu;s`;
});

document.getElementById('p2-b-submit').addEventListener('click', () => {
  const percent = Number(document.getElementById('p2-a-percent').value);
  const stepOne = (-125 * Math.pow(10, -6)) * Math.log(1 - (0.06 * percent));
  const stepTwo = 100 - (100 * Math.pow(Math.E, -8000 * stepOne));
  document.getElementById('p2-b-answer').innerHTML = `${stepTwo} %`;
});

document.getElementById('p3-a-submit').addEventListener('click', () => {
  const V = Number(document.getElementById('p3-V').value);
  const I = Number(document.getElementById('p3-I').value);
  document.getElementById('p3-a-answer').innerHTML = `${V / I} &Omega;`;
});

document.getElementById('p3-b-submit').addEventListener('click', () => {
  const E1 = Number(document.getElementById('p3-e1').value) * -1;
  document.getElementById('p3-b-answer').innerHTML = `${1000 / E1} ms`;
});

document.getElementById('p3-c-submit').addEventListener('click', () => {
  const V = Number(document.getElementById('p3-V').value);
  const I = Number(document.getElementById('p3-I').value);
  const E1 = Number(document.getElementById('p3-e1').value) * -1;
  const answer = ((V / I) * (1000 / E1) / 1000);
  document.getElementById('p3-c-answer').innerHTML = `${answer} H`;
});

document.getElementById('p3-d-submit').addEventListener('click', () => {
  const V = Number(document.getElementById('p3-V').value);
  const I = Number(document.getElementById('p3-I').value);
  const E1 = Number(document.getElementById('p3-e1').value) * -1;
  const c = ((V / I) * (1000 / E1) / 1000);
  const answer = 0.5 * c * Math.pow(I, 2);
  document.getElementById('p3-d-answer').innerHTML = `${answer} J`;
});

document.getElementById('p3-e-submit').addEventListener('click', () => {
  const E2 = Number(document.getElementById('p3-e1').value);
  const percent = Number(document.getElementById('p3-e-percent').value);
  const answer = (500 * Math.log(1 - (percent / 100))) / E2;
  document.getElementById('p3-e-answer').innerHTML = `${answer} ms`;
});

document.getElementById('p4-a-submit').addEventListener('click', () => {
  document.getElementById('p4-a-answer').innerHTML = `300e<sup>-2500t</sup>`;
});

document.getElementById('p5-a-submit').addEventListener('click', () => {
  document.getElementById('p5-a-answer').innerHTML = `-0.75e<sup>-25000t</sup>`;
});

document.getElementById('p6-a-submit').addEventListener('click', () => {
  const V = Number(document.getElementById('p6-V').value);
  const I = Number(document.getElementById('p6-I').value);
  document.getElementById('p6-a-answer').innerHTML = `${(1000 * V) / I} &Omega;`;
});

document.getElementById('p6-b-submit').addEventListener('click', () => {
  const V = Number(document.getElementById('p6-V').value);
  const I = Number(document.getElementById('p6-I').value);
  const E1 = Number(document.getElementById('p6-e1').value) * -1;
  const partA = (1000 * V) / I;
  const answer = Math.pow(10, 6) / (partA * E1);
  document.getElementById('p6-b-answer').innerHTML = `${answer} &mu;F`;
});

document.getElementById('p6-c-submit').addEventListener('click', () => {
  const E1 = Number(document.getElementById('p6-e1').value) * -1;
  document.getElementById('p6-c-answer').innerHTML = `${1000 / E1} ms`;
});

document.getElementById('p6-d-submit').addEventListener('click', () => {
  const V = Number(document.getElementById('p6-V').value);
  const I = Number(document.getElementById('p6-I').value);
  const E1 = Number(document.getElementById('p6-e1').value) * -1;
  const partA = (1000 * V) / I;
  const answer = 0.5 * ((Math.pow(10, 6) / (partA * E1))) * Math.pow(V, 2);
  document.getElementById('p6-d-answer').innerHTML = `${answer} &mu;J`;
});

document.getElementById('p6-e-submit').addEventListener('click', () => {
  const V = Number(document.getElementById('p6-V').value);
  const I = Number(document.getElementById('p6-I').value);
  const E1 = Number(document.getElementById('p6-e1').value) * -1;
  const percent = Number(document.getElementById('p6-e-t').value);
  const partA = (1000 * V) / I;
  const answer = ((-500 * Math.pow(V, 2)) / (partA * E1)) * ((Math.pow(Math.E, -2 * E1 * (percent * Math.pow(10, - 3)))) - 1);
  document.getElementById('p6-e-answer').innerHTML = `${answer} mJ`;
});

document.getElementById('p7-a-submit').addEventListener('click', () => {
  document.getElementById('p7-a-answer').innerHTML = `v<sub>0</sub>(t) = -80e<sup>-4000t</sup> mV`;
});

document.getElementById('p8-a-submit').addEventListener('click', () => {
  document.getElementById('p8-a-answer').innerHTML = `-50 V`;
});

document.getElementById('p8-b-submit').addEventListener('click', () => {
  document.getElementById('p8-b-answer').innerHTML = `0.1 s`;
});

document.getElementById('p8-c-submit').addEventListener('click', () => {
  document.getElementById('p8-c-answer').innerHTML = `-24 V`;
});

document.getElementById('p8-d-submit').addEventListener('click', () => {
  document.getElementById('p8-d-answer').innerHTML = `6.5 A`;
});

document.getElementById('p8-e-submit').addEventListener('click', () => {
  document.getElementById('p8-e-answer').innerHTML = `-24 - 26e<sup>-10t</sup> V`;
});

document.getElementById('p8-f-submit').addEventListener('click', () => {
  document.getElementById('p8-f-answer').innerHTML = `6.5<sup>-10t</sup> A`;
});

document.getElementById('p9-a-submit').addEventListener('click', () => {
  const V = Number(document.getElementById('p9-a-V').value);
  document.getElementById('p9-a-answer').innerHTML = `${0.75 * V} V`;
});

document.getElementById('p9-b-submit').addEventListener('click', () => {
  const I = Number(document.getElementById('p9-a-I').value);
  document.getElementById('p9-b-answer').innerHTML = `${-40 * I} V`;
});

document.getElementById('p9-c-submit').addEventListener('click', () => {
  document.getElementById('p9-c-answer').innerHTML = `0.001 s`;
});

document.getElementById('p9-d-submit').addEventListener('click', () => {
  const I = Number(document.getElementById('p9-a-I').value);
  const V = Number(document.getElementById('p9-a-V').value);
  const answer = -Math.log((40 * I) / ((40 * I) + (0.75 * V)));
  document.getElementById('p9-d-answer').innerHTML = `${answer} ms`;
});

document.getElementById('p10-a-submit').addEventListener('click', () => {
  document.getElementById('p10-a-answer').innerHTML = `v<sub>0</sub>(t) = -45 + 90e-<sup>800t</sup> V`;
});

document.getElementById('p11-a-submit').addEventListener('click', () => {
  document.getElementById('p11-a-answer').innerHTML = `v<sub>0</sub>(t) = 30 + 90e<sup>-1250t</sup> V`;
});

document.getElementById('p11-b-submit').addEventListener('click', () => {
  document.getElementById('p11-b-answer').innerHTML = `v<sub>1</sub>(t)=30 - 30e<sup>-1250t</sup> V`;
});

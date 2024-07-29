$('.toggle-button').each(function () {
  $(this).click(function () {
    const content = $(this).parent().next();
    content.toggleClass('hidden');
  });
});

document.getElementById('p1-a-submit').addEventListener('click', () => {
  const V1 = Number(document.getElementById('p1-V1').value);
  const V2 = Number(document.getElementById('p1-V2').value);
  document.getElementById('p1-a-answer').innerHTML = `${((82 * V1) + (36 * V2)) / 460} A`;
});

document.getElementById('p1-b-submit').addEventListener('click', () => {
  const V1 = Number(document.getElementById('p1-V1').value);
  const V2 = Number(document.getElementById('p1-V2').value);
  document.getElementById('p1-b-answer').innerHTML = `${((33 * V1) - (36 * V2)) / 460} A`;
});

document.getElementById('p1-c-submit').addEventListener('click', () => {
  const V1 = Number(document.getElementById('p1-V1').value);
  const V2 = Number(document.getElementById('p1-V2').value);
  document.getElementById('p1-c-answer').innerHTML = `${((3 * V1) + (3 * V2)) / 23} A`;
});

document.getElementById('p1-d-submit').addEventListener('click', () => {
  const V1 = Number(document.getElementById('p1-V1').value);
  const V2 = Number(document.getElementById('p1-V2').value);
  document.getElementById('p1-d-answer').innerHTML = `${((18 * V1) - (51 * V2)) / 345} A`;
});

document.getElementById('p1-e-submit').addEventListener('click', () => {
  const V1 = Number(document.getElementById('p1-V1').value);
  const V2 = Number(document.getElementById('p1-V2').value);
  document.getElementById('p1-e-answer').innerHTML = `${((18 * V1) + (64 * V2)) / 230} A`;
});

document.getElementById('p1-f-submit').addEventListener('click', () => {
  const V1 = Number(document.getElementById('p1-V1').value);
  const V2 = Number(document.getElementById('p1-V2').value);
  const pA = ((82 * V1) + (36 * V2)) / 460;
  const pE = ((18 * V1) + (64 * V2)) / 230;
  document.getElementById('p1-f-answer').innerHTML = `${(pA * V1) + (pE * V2)} W`;
});

document.getElementById('p2-a-submit').addEventListener('click', () => {
  const Vs = Number(document.getElementById('p2-Vs').value);
  document.getElementById('p2-a-answer').innerHTML = `${Vs / 5} V`;
});

document.getElementById('p2-b-submit').addEventListener('click', () => {
  const Vs = Number(document.getElementById('p2-Vs').value);
  document.getElementById('p2-b-answer').innerHTML = `${0.96 * Math.pow(Vs, 2)} mW`;
});

document.getElementById('p3-a-submit').addEventListener('click', () => {
  const V = Number(document.getElementById('p3-V').value);
  document.getElementById('p3-a-answer').innerHTML = `${0.25 * V} V`;
});

document.getElementById('p4-a-submit').addEventListener('click', () => {
  const Vg = Number(document.getElementById('p4-Vg').value);
  document.getElementById('p4-a-answer').innerHTML = `${(241 / 160) * Math.pow(Vg, 2)} W`;
});

document.getElementById('p5-a-submit').addEventListener('click', () => {
  const V1 = Number(document.getElementById('p5-V1').value);
  const V2 = Number(document.getElementById('p5-V2').value);
  document.getElementById('p5-a-answer').innerHTML = `${((24 * V1) + (2 * V2)) / 31} V`;
});

document.getElementById('p5-b-submit').addEventListener('click', () => {
  const V1 = Number(document.getElementById('p5-V1').value);
  const V2 = Number(document.getElementById('p5-V2').value);
  document.getElementById('p5-b-answer').innerHTML = `${(((-24 * V1) + (13.5 * V2)) / 744) * V2} W`;
});

document.getElementById('p6-a-submit').addEventListener('click', () => {
  const V = Number(document.getElementById('p6-V').value);
  document.getElementById('p6-a-answer').innerHTML = `${(2332 * Math.pow(V, 2)) / 45} W`;
});

document.getElementById('p7-a-submit').addEventListener('click', () => {
  const I = Number(document.getElementById('p7-I').value);
  document.getElementById('p7-a-answer').innerHTML = `${6 * Math.pow(I, 2)} W`;
});

document.getElementById('p8-a-submit').addEventListener('click', () => {
  const V = Number(document.getElementById('p8-V').value);
  document.getElementById('p8-a-answer').innerHTML = `${(-21 * V) / 796} A`;
});

document.getElementById('p8-b-submit').addEventListener('click', () => {
  const V = Number(document.getElementById('p8-V').value);
  document.getElementById('p8-b-answer').innerHTML = `${(37 * V) / 796} A`;
});

document.getElementById('p8-c-submit').addEventListener('click', () => {
  const V = Number(document.getElementById('p8-V').value);
  document.getElementById('p8-c-answer').innerHTML = `${(117 * V) / 3980} A`;
});

document.getElementById('p8-d-submit').addEventListener('click', () => {
  const V = Number(document.getElementById('p8-V').value);
  document.getElementById('p8-d-answer').innerHTML = `${(29 * V) / 398} A`;
});

document.getElementById('p8-e-submit').addEventListener('click', () => {
  const V = Number(document.getElementById('p8-V').value);
  document.getElementById('p8-e-answer').innerHTML = `${(17 * V) / 995} A`;
});

document.getElementById('p8-f-submit').addEventListener('click', () => {
  const V = Number(document.getElementById('p8-V').value);
  const stepOne = (18426 * Math.pow(V, 2)) / 792020;
  const stepTwo = (37 * Math.pow(V, 2)) / 796;
  const answer = stepOne + stepTwo;
  document.getElementById('p8-f-answer').innerHTML = `${answer}, ${answer} W`;
});

document.getElementById('p9-a-submit').addEventListener('click', () => {
  document.getElementById('p9-a-answer').innerHTML = `The node-voltage method`;
});

document.getElementById('p9-b-submit').addEventListener('click', () => {
  const I = Number(document.getElementById('p9-b-I').value);
  document.getElementById('p9-b-answer').innerHTML = `${((110 * (I * Math.pow(10, -3))) - 16) / 12.5} W`;
});

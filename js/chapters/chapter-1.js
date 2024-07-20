document.getElementById('p1-a-submit').addEventListener('click', function () {
  const I = document.getElementById('p1-a-I').value;
  const R1 = document.getElementById('p1-a-R1').value;
  const R2 = document.getElementById('p1-a-R2').value;
  const alpha = document.getElementById('p1-a-alpha').value;
  document.getElementById('p1-a-answer').innerHTML = `${((R1 + R2) - (alpha * R2)) * I} V`;
});

document.getElementById('p1-b-submit').addEventListener('click', function () {
  const V = document.getElementById('p1-b-V').value;
  const R1 = document.getElementById('p1-b-R1').value;
  const R2 = document.getElementById('p1-b-R2').value;
  const alpha = document.getElementById('p1-b-alpha').value;
  document.getElementById('p1-b-answer').innerHTML = `${((alpha + 1) * V) / (R1 + R2)}`;
});

document.getElementById('p2-a-submit').addEventListener('click', function () {
  const Vs = document.getElementById('p2-Vs').value;
  document.getElementById('p2-a-answer').innerHTML = `${(200 / 7) - ((10 * Vs) / 14)} V`;
});

document.getElementById('p2-b-submit').addEventListener('click', function () {
  const Vs = document.getElementById('p2-Vs').value;
  const stepOne = (200 / 7) - ((10 * Vs) / 14);
  const stepTwo = (200 / 7) + ((2 * Vs) / 7);
  document.getElementById('p2-b-answer').innerHTML = `${(stepOne / 5000) + (stepTwo / 2000)} W`;
  document.getElementById('p2-c-answer').innerHTML = `${(stepOne / 5000) + (stepTwo / 2000)} W`;
});

document.getElementById('p3-a-submit').addEventListener('click', function () {
  const Vg = document.getElementById('p3-Vg').value;
  const Rg = document.getElementById('p3-Rg').value;
  const Ra = document.getElementById('p3-Ra').value;
  const Rb = document.getElementById('p3-Rb').value;
  document.getElementById('p3-a-answer').innerHTML = `${(Vg * Rb) / ((Ra * Rb) + (Ra * Rg) + (Rb * Rg))} A`;
});

document.getElementById('p3-b-submit').addEventListener('click', function () {
  const Vg = document.getElementById('p3-Vg').value;
  const Rg = document.getElementById('p3-Rg').value;
  const Ra = document.getElementById('p3-Ra').value;
  const Rb = document.getElementById('p3-Rb').value;
  document.getElementById('p3-b-answer').innerHTML = `${(Vg * Rg) / ((Ra * Rb) + (Ra * Rg) + (Rb * Rg))} A`;
});

document.getElementById('p3-c-submit').addEventListener('click', function () {
  const Vg = document.getElementById('p3-Vg').value;
  const Rg = document.getElementById('p3-Rg').value;
  const Ra = document.getElementById('p3-Ra').value;
  const Rb = document.getElementById('p3-Rb').value;
  document.getElementById('p3-c-answer').innerHTML = `${(Vg * Ra * Rb) / ((Ra * Rb) + (Ra * Rg) + (Rb * Rg))} A`;
});

document.getElementById('p3-d-submit').addEventListener('click', function () { });

document.getElementById('p4-a-submit').addEventListener('click', function () {
  const Ia = document.getElementById('p4-Ia').value;
  document.getElementById('p4-a-answer').innerHTML = `${Ia * 4} A`;
});

document.getElementById('p4-b-submit').addEventListener('click', function () {
  const Ia = document.getElementById('p4-Ia').value;
  document.getElementById('p4-b-answer').innerHTML = `${Ia * 5} A`;
});

document.getElementById('p4-c-submit').addEventListener('click', function () {
  const Ia = document.getElementById('p4-Ia').value;
  document.getElementById('p4-c-answer').innerHTML = `${200 * (Ia * Ia)} W`;
});

document.getElementById('p5-a-submit').addEventListener('click', function () {
  const Vg = document.getElementById('p5-Vg').value;
  document.getElementById('p5-a-answer').innerHTML = `${0.0875 * Vg} A`;
});

document.getElementById('p5-b-submit').addEventListener('click', function () {
  const Vg = document.getElementById('p5-Vg').value;
  const Vg2 = Vg * Vg;
  document.getElementById('p5-b-answer').innerHTML = `${0.0325 * Vg2}, ${0.03125 * Vg2}, ${0.030625 * Vg2}, ${0.0125 * Vg2}, ${0.005625 * Vg2} W`;
});

document.getElementById('p5-c-submit').addEventListener('click', function () {
  const Vg = document.getElementById('p5-Vg').value;
  document.getElementById('p5-c-answer').innerHTML = `${0.1125 * (Vg * Vg)} V`;
});

document.getElementById('p6-a-submit').addEventListener('click', function () {
  const Vg = document.getElementById('p6-Vg').value;
  const Vg2 = Vg * Vg;
  document.getElementById('p6-a-answer').innerHTML = `${0.015625 * Vg2}, ${0.003125 * Vg2}, ${(5 / 192) * Vg2}, ${0.028125 * Vg2}, ${(1 / 160) * Vg2} W`;
});

document.getElementById('p6-b-submit').addEventListener('click', function () {
  const Vg = document.getElementById('p6-Vg').value;
  const Vg2 = Vg * Vg;
  document.getElementById('p6-b-answer').innerHTML = `${(19 / 240) * Vg2} W`;
});

document.getElementById('p7-a-submit').addEventListener('click', function () {
  const Ia = document.getElementById('p7-Ia').value;
  const Ib = document.getElementById('p7-Ib').value;
  const Va = document.getElementById('p7-Va').value;
  document.getElementById('p7-a-answer').innerHTML = `${(-1 * (Va + (35 * Ia) + (30 * Ib)) / 20)} A`;
});

document.getElementById('p7-b-submit').addEventListener('click', function () {
  const Ia = document.getElementById('p7-Ia').value;
  const Ib = document.getElementById('p7-Ib').value;
  const Va = document.getElementById('p7-Va').value;
  const Ib2 = Ib * Ib;
  document.getElementById('p7-b-answer').innerHTML = `${9 * Ib2}, ${10 * Ib2}, ${0.075 * Math.pow((Va + (15 * Ia) + (50 * Ib)), 2)}, ${0.04 * Math.pow((Va + (15 * Ia) + (38 * Ib)), 2)}, ${11 * Ib2}, ${5 * Math.pow((Ib - Ia), 2)}, ${0.01 * Math.pow((Va + (15 * Ia) + (30 * Ib2)), 2)}, ${15 * (Ia * Ia)} W`;
});

document.getElementById('p7-c-submit').addEventListener('click', function () {
  const Ia = document.getElementById('p7-Ia').value;
  const Ib = document.getElementById('p7-Ib').value;
  const Va = document.getElementById('p7-Va').value;
  document.getElementById('p7-c-answer').innerHTML = `${Va + (20 * Ia) - (5 * Ib)} V`;
});

document.getElementById('p7-d-submit').addEventListener('click', function () {
  const Ia = document.getElementById('p7-Ia').value;
  const Ib = document.getElementById('p7-Ib').value;
  const Va = document.getElementById('p7-Va').value;
  document.getElementById('p7-d-answer').innerHTML = `${(((Va + (35 * Ia) + (30 * Ib)) / 20) * (Va + (20 * Ia) - (5 * Ib)))} W`;
});

document.getElementById('p8-a-submit').addEventListener('click', function () {
  const R = document.getElementById('p8-R').value;
  document.getElementById('p8-a-answer').innerHTML = `${(60 * R) / (R + 450)} V`;
});

document.getElementById('p8-b-submit').addEventListener('click', function () {
  const R = document.getElementById('p8-R').value;
  document.getElementById('p8-b-answer').innerHTML = `${((12 * Math.pow(R, 2)) + (400 * R) + 0) / Math.pow((R + 450), 2)} W`;
});

document.getElementById('p9-a-submit').addEventListener('click', function () {
  const Is = document.getElementById('p9-Is').value;
  document.getElementById('p9-a-answer').innerHTML = `${0.25 * Is} mA`;
});

document.getElementById('p9-b-submit').addEventListener('click', function () {
  const Is = document.getElementById('p9-Is').value;
  document.getElementById('p9-b-answer').innerHTML = `${0.0045 * Math.pow(Is, 2)} W`;
});

document.getElementById('p9-c-submit').addEventListener('click', function () {
  const Is = document.getElementById('p9-Is').value;
  document.getElementById('p9-c-answer').innerHTML = `${0.0045 * Math.pow(Is, 2)} W`;
});

document.getElementById('p10-a-submit').addEventListener('click', function () {
  const V = document.getElementById('p10-V0').value;
  document.getElementById('p10-a-answer').innerHTML = `${(0.25 * V)}, ${(0.2 * V)} V`;
});
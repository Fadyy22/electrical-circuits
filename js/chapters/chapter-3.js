document.getElementById('p1-b-submit').addEventListener('click', () => {
  const V3 = Number(document.getElementById('p1-b-V3').value);
  const R1 = Number(document.getElementById('p1-b-R1').value);
  const R2 = Number(document.getElementById('p1-b-R2').value);
  const R3 = Number(document.getElementById('p1-b-R3').value);
  const R4 = Number(document.getElementById('p1-b-R4').value);
  const R5 = Number(document.getElementById('p1-b-R5').value);

  document.getElementById('p1-b-answer').innerHTML = `${(V3 * ((R1 + R2 + R3 + R4 + R5) / (R3)))} V`;
});

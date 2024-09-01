import attackCalc from '../Attak.js'

test('attack is calculated according to distance impact', () => {
  const Magician = new attackCalc(2);
  Magician.attack = 100;
  expect(Magician.attack).toEqual(90);
})

test('attack is calculated according to distance and stoned impact', () => {
  const Magician = new attackCalc(2);
  Magician.stoned = true;
  Magician.attack = 100;
  const attackTarget = 85;
  const attackActual = Magician.attack;
  expect(attackActual).toEqual(attackTarget);
})

test('stoned getter', () => {
  const Magician = new attackCalc(2);
  Magician.stoned = true;
  Magician.attack = 100;
  const stonedTarget = true;
  const stonedActual = Magician.stoned;
  expect(stonedActual).toEqual(stonedTarget);
})
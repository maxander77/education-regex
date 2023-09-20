import Validator from "../Validator";

test('should validate a valid username', () => {
  const validator = new Validator();

  expect(validator.validateUsername('John77Pon')).toBe(true);
});

test('should not validate username starting with a digital', () => {
  const validator = new Validator();

  expect(validator.validateUsername('123JohnDon123')).toBe(false);
});

test('should not validate with more than 3 digits', () => {
  const validator = new Validator();

  expect(validator.validateUsername('JohnDon1234')).toBe(false);
});

test('should not validate username with invalid characters', () => {
  const validator = new Validator();

  expect(validator.validateUsername('John@Don123')).toBe(false);
});

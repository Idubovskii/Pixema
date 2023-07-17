import { test, expect } from 'vitest';

import { getRandomInt } from '~/shared/helpers/getRandomInt';

test('getRandomInt returns a random integer within the specified range', () => {
  const min = 1;
  const max = 10;
  const result = getRandomInt(min, max);
  expect(result).toBeGreaterThanOrEqual(min);
  expect(result).toBeLessThanOrEqual(max);
  expect(Number.isInteger(result)).toBe(true);
});

test('getRandomInt returns 0 if NaN is encountered', () => {
  const result = getRandomInt(Number.NaN, Number.NaN);
  expect(result).toBe(0);
});

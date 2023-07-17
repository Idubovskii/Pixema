import { test, expect } from 'vitest';

import { todayDate } from '~/shared/helpers/todayDate';

test('todayDate should return the current date', () => {
  const currentDate = new Date().getDate();
  const result = todayDate();
  expect(result).toBe(currentDate);
});

test('todayDate should always return a number', () => {
  const result = todayDate();
  expect(typeof result).toBe('number');
});

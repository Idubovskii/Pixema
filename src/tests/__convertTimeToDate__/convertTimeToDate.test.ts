import { test, expect } from 'vitest';

import { convertTimeToDate } from '~/shared/helpers/convertTimeToDate';

test('convertTimeToDate should convert time to date in the specified format', () => {
  const dateString = '2022-01-01T00:00:00Z';
  const expectedDate = '01/01/2022';

  const result = convertTimeToDate(dateString);

  expect(result).toBe(expectedDate);
});

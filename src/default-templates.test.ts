// eslint-disable-next-line import/no-extraneous-dependencies
import { test, expect } from 'vitest';

import TEMPLATE_DIR from './default-templates';

test('not empty template directory', () => {
  expect(TEMPLATE_DIR).not.toEqual('');
});

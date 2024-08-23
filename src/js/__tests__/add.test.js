import getBuffer from '../add.js';
import ArrayBufferConverter from '../ArrayBufferConverter.js';

test('convert ArrayBuffer to string', () => {
  const buffer = getBuffer();
  const convert = new ArrayBufferConverter();
  convert.load(buffer);

  const result = '{"data":{"user":{"id":1,"name":"Hitman","level":10}}}';

  expect(convert.toString()).toEqual(result);
});
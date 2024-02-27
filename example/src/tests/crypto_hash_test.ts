import { crypto_hash } from 'react-native-libsodium';
import { expect, test } from '../utils/testRunner';

test('crypto_hash', () => {
  const hello_message = 'hello world';
  const hello_hash = new Uint8Array([
    48, 158, 204, 72, 156, 18, 214, 235, 76, 196, 15, 80, 201, 2, 242, 180, 208,
    237, 119, 238, 81, 26, 124, 122, 155, 205, 60, 168, 109, 76, 216, 111, 152,
    157, 211, 91, 197, 255, 73, 150, 112, 218, 52, 37, 91, 69, 176, 207, 216,
    48, 232, 31, 96, 93, 207, 125, 197, 84, 46, 147, 174, 156, 215, 111,
  ]);
  const hello_hash_out = crypto_hash(hello_message);
  expect(hello_hash_out).toEqual(hello_hash);

  const foobar_message = 'foo bar';

  const foobar_hash = new Uint8Array([
    101, 1, 146, 134, 34, 42, 206, 65, 143, 116, 37, 86, 54, 111, 155, 157, 165,
    170, 246, 121, 117, 39, 210, 240, 203, 165, 191, 230, 178, 248, 237, 36,
    116, 101, 66, 160, 242, 190, 29, 168, 214, 60, 36, 119, 246, 136, 182, 8,
    235, 83, 98, 137, 147, 175, 166, 36, 243, 120, 176, 63, 16, 9, 12, 231,
  ]);
  const foobar_hash_out = crypto_hash(foobar_message);
  expect(foobar_hash_out).toEqual(foobar_hash);

  const foobar_encoded = new TextEncoder().encode(foobar_message);
  const foobar_enc_hash_out = crypto_hash(foobar_encoded);
  expect(foobar_enc_hash_out).toEqual(foobar_hash);
});

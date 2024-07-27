import Weather from '../../src/components/Weather.tsx';

test('Weather', async () => {
  // 期待される戻り値を定義
  const expected = 'Japan';

  // Weather関数を呼び出す
  const actual = await Weather('Yokohama');

  // 期待される戻り値と実際の戻り値を比較するアサーションを行う
  expect(actual.country).toEqual(expected);
});

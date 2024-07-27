/**
* @jest-environment jsdom
*/
import React from 'react';
import { render, screen } from '@testing-library/react';
import Result from '../../src/components/Result.tsx';
import '@testing-library/jest-dom';

test('Result component', () => {
  // テスト用のダミーのresultオブジェクト
  const dummyResult = {
    country: 'Japan',
    cityName: 'Tokyo',
    localtime: '2024-07-11 12:00', // localtimeの例としてダミーの日時を設定
    temperature: '25',
    conditionText: 'Cloudy',
    icon: 'dummy-icon-url',
  };

  // Resultコンポーネントをレンダリング
  const { getByText, getByAltText } = render(<Result result={dummyResult} />);

  // コンポーネントのHTML構造を確認する
  screen.debug();

  // レンダリングされたコンポーネント内で特定の要素が存在するかを確認
  expect(getByText(dummyResult.country)).toBeInTheDocument(); // country
  expect(getByText(dummyResult.cityName)).toBeInTheDocument(); // cityName
  expect(getByText(dummyResult.localtime)).toBeInTheDocument(); // localtime
  expect(getByText(`${dummyResult.temperature}℃`)).toBeInTheDocument(); // temperature
  expect(getByText(dummyResult.conditionText)).toBeInTheDocument(); // conditionText
  expect(getByAltText('icon')).toHaveAttribute('src', dummyResult.icon); // icon
});

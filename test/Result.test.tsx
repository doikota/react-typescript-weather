/**
* @jest-environment jsdom
*/
import React from 'react';
import { render } from '@testing-library/react';
import Result from '../src/components/Result';
import '@testing-library/jest-dom';

describe('Result component', () => {
  it('renders with correct props', () => {
    // テスト用のダミーのresultオブジェクト
    const dummyResult = {
      country: 'Japan',
      cityName: 'Tokyo',
      localtime: '2024-07-11 12:00', // localtimeの例としてダミーの日時を設定
      temperature: '25',
      conditionText: 'Cloudy',
      icon: 'dummy-icon-url'
    };

    // Resultコンポーネントをレンダリング
    const { getByText, getByAltText } = render(<Result result={dummyResult} />);

    // レンダリングされたコンポーネント内で特定の要素が存在するかを確認
    expect(getByText(dummyResult.country)).toBeInTheDocument(); // country
    expect(getByText(dummyResult.cityName)).toBeInTheDocument(); // cityName
    expect(getByText(dummyResult.localtime)).toBeInTheDocument(); // localtime
    expect(getByText(`${dummyResult.temperature}℃`)).toBeInTheDocument(); // temperature
    expect(getByText(dummyResult.conditionText)).toBeInTheDocument(); // conditionText
    expect(getByAltText('icon')).toHaveAttribute('src', dummyResult.icon); // icon
  });

  // it('does not render if result prop is missing or empty', () => {
  //   // 空のresultオブジェクト
  //   const emptyResult = {};

  //   // Resultコンポーネントをレンダリング
  //   const { container } = render(<Result result={emptyResult} />);

  //   // 空のresultでは何も表示されないことを確認
  //   expect(container.firstChild).toBeNull();
  // });
});

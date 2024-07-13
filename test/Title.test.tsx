/**
* @jest-environment jsdom
*/
import React from 'react';
import Title from '../src/components/Title';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('Titleコンポーネントのテスト', () => {
  test('getBy… と queryBy… を用いて', () => {

    // Titleコンポーネントをレンダリング<body><div><Title /></div></body>
    render(<Title />);
    const getByText1 = screen.getByText("React 世界の天気");
    const queryByText1 = screen.queryByText("React 世界の天気");

    // コンポーネントのHTML構造を確認する queryByText1!の"!"ではnullチェックを無視している
    screen.debug(getByText1);
    screen.debug(queryByText1!);

    // レンダリングされたコンポーネント内で特定の要素が存在するかを確認
    expect(getByText1).toBeInTheDocument();
    expect(queryByText1).toBeInTheDocument();
  });

  test('findBy… を用いるため、async/awaitでテスト', async () => {
    // Titleコンポーネントをレンダリング<body><div><Title /></div></body>
    render(<Title />);
    const findByText1 = await screen.findByText("React 世界の天気");
    screen.debug(findByText1);
    expect(findByText1).toBeInTheDocument();
  });
});

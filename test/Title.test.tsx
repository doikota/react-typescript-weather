/**
* @jest-environment jsdom
*/
import React from 'react';
import Title from '../src/components/Title';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

test('Title component', () => {

  // Titleコンポーネントをレンダリング<body><div><Title /></div></body>
  const { getByText } = render(<Title />);

  // コンポーネントのHTML構造を確認する
  screen.debug();

  // レンダリングされたコンポーネント内で特定の要素が存在するかを確認
  expect(getByText("React 世界の天気")).toBeInTheDocument();
});

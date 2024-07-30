/**
* @jest-environment jsdom
*/
import React, { useState, useEffect } from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import type { ResultState } from '../../src/App.tsx';
import Form from '../../src/components/Form.tsx';
import '@testing-library/jest-dom';
import 'cross-fetch/polyfill';

// テスト用のダミーのresultオブジェクト
const emptyResultState: ResultState = {
  country: '',
  cityName: '',
  localtime: '',
  temperature: '',
  conditionText: '',
  icon: '',
};

test('Formコンポーネントのテスト cityに値がセットされることを試験する', async () => {
  let resultState: ResultState = emptyResultState; // resultを保持するための変数
  function FormTestComponent() {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [result, setResult] = useState<ResultState>(emptyResultState);
    // Formコンポーネントを操作した後にresultの値を参照できるようにする
    useEffect(() => {
      resultState = result; // テスト外の変数にresultの値を代入
    }, [result]);
    return <Form setResult={setResult} />;
  }

  // Formコンポーネントをレンダリング
  render(<FormTestComponent />);

  // コンポーネントのHTML構造を確認する
  screen.debug();
  const textbox = screen.getByRole('textbox');
  const button = screen.getByRole('button');

  await waitFor(async () => {
    await userEvent.type(textbox, 'Tokyo');
    await userEvent.tab();
    await userEvent.click(button);
  });

  await waitFor(() => {
    console.info(resultState);
    expect(resultState.cityName).toEqual('Tokyo'); // cityName
  });
});

/**
* @jest-environment jsdom
*/
import React, { useState } from "react"
import { render, screen } from '@testing-library/react';
import type { ResultState } from '../src/App'
import Form from '../src/components/Form';
import '@testing-library/jest-dom';
import userEvent from "@testing-library/user-event";
import 'cross-fetch/polyfill'

test('Formコンポーネントのテスト cityに値がセットされることを試験する', async () => {
  const FormTestComponent = () => { 
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [result, setResult] = useState<ResultState>({
      country : "",
      cityName : "",
      localtime : "",
      temperature : "",
      conditionText : "",
      icon : ""
    })
    return <Form setResult={setResult}  />
  };
  
  // Formコンポーネントをレンダリング
  render(<FormTestComponent />);

  // コンポーネントのHTML構造を確認する
  screen.debug();
  const textbox = screen.getByRole("textbox");
  screen.debug(textbox);

  const button = screen.getByRole("button");
  const user = userEvent.setup();
  await user.click(button);
  screen.debug(textbox);

  // expect(city).toEqual("Yokohama"); // city
});

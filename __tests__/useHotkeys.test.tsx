import React from 'react';
import { act, render } from 'react-testing-library';
import useHotkeys from '../src';

function triggerKeyboardEvent(el: HTMLElement, keyCode: number) {
  const eventObj = document.createEvent('Events');
  if (eventObj.initEvent) eventObj.initEvent('keydown', true, true);
  //@ts-ignore
  eventObj.keyCode = keyCode;
  el.dispatchEvent(eventObj);
}

const Counter = () => {
  const [count, setCount] = React.useState(0);

  useHotkeys(
    key => {
      switch (key) {
        case 'up':
          return setCount(count + 1);
        case 'down':
          return setCount(count - 1);
        default:
          return setCount(count);
      }
    },
    ['up', 'down']
  );

  return <div>{count}</div>;
};

test('state filled properly', () => {
  const { container } = render(<Counter />);

  expect(container.firstChild.textContent).toBe('0');

  act(() => {
    triggerKeyboardEvent(document.body, 38);
  });

  expect(container.firstChild.textContent).toBe('1');

  act(() => {
    triggerKeyboardEvent(document.body, 40);
  });

  expect(container.firstChild.textContent).toBe('0');
});

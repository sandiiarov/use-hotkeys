# Use Hotkeys

![npm](https://img.shields.io/npm/dt/use-hotkeys.svg)
![npm](https://img.shields.io/npm/v/use-hotkeys.svg)
![NpmLicense](https://img.shields.io/npm/l/use-hotkeys.svg)

React wrapper around [Hotkeys.js](https://github.com/jaywcjlove/hotkeys).

```shell
╭┈┈╮          ╭┈┈╮  ╭┈┈╮
┆  ├┈┈..┈┈┈┈┈.┆  └┈╮┆  ├┈┈..┈┈┈┈┈..┈┈.┈┈..┈┈┈┈┈.
┆     ┆┆  □  ┆┆   ┈┤┆    < ┆  -__┘┆  ┆  ┆┆__ ┈┈┤
╰┈┈┴┈┈╯╰┈┈┈┈┈╯╰┈┈┈┈╯╰┈┈┴┈┈╯╰┈┈┈┈┈╯╰┈┈┈  ┆╰┈┈┈┈┈╯
                                  ╰┈┈┈┈┈╯
```

**Use Hotkeys** - React hook that listen to keyboard events, defining and dispatching keyboard shortcuts.

Read about [Hooks](https://reactjs.org/docs/hooks-intro.html) feature.

# Install

> Note: React 16.8+ is required for Hooks.

### With npm

```sh
npm i use-hotkeys
```

### Or with yarn

```sh
yarn add use-hotkeys
```

# Usage

[![Edit 0qmp2q2n2l](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/0qmp2q2n2l?fontsize=14)

```jsx
import useHotkeys from 'use-hotkeys';
```

```jsx
const Counter = () => {
  const [count, setCount] = React.useState(0);

  useHotkeys(
    (key, event, handle) => {
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
```

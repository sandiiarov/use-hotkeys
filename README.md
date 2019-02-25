# Use Hotkeys

![npm](https://img.shields.io/npm/dt/use-hotkeys.svg)
![npm](https://img.shields.io/npm/v/use-hotkeys.svg)
![NpmLicense](https://img.shields.io/npm/l/use-hotkeys.svg)

**Use Hot Keys** - React hook that listen to keyboard events, defining and dispatching keyboard shortcuts.
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

```jsx
import useHotkeys from 'use-hotkeys';
```

```jsx
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
```

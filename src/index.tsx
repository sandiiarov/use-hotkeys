import hotkeys, { HotkeysEvent } from 'hotkeys-js';
import React from 'react';

function useHotkeys(
  cb: (key: string, event: KeyboardEvent, handle: HotkeysEvent) => void,
  keys: string[]
) {
  React.useEffect(() => {
    hotkeys(keys.join(','), (event, handle) => cb(handle.key, event, handle));

    return () => {
      keys.forEach(key => hotkeys.unbind(key));
    };
  }, [keys]);
}

export default useHotkeys;

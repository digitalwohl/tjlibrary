**TJ library**

The library currently only partially exposes the native chrome [tabs](https://developer.chrome.com/docs/extensions/reference/tabs/) and [windows](https://developer.chrome.com/docs/extensions/reference/windows/) APIs.
Library comes packaged three different ways depending on how it is imported:
- [cjs](https://digitalwohl.github.io/tjlibrary/dist/tj-comm.js) (https://digitalwohl.github.io/tjlibrary/dist/tj-comm.js)
- [esm](https://digitalwohl.github.io/tjlibrary/tj-comm.module.js) (https://digitalwohl.github.io/tjlibrary/tj-comm.module.js)
- [umd](https://digitalwohl.github.io/tjlibrary/tj-comm.umd.js) (https://digitalwohl.github.io/tjlibrary/tj-comm.umd.js)

----------

To call native methods or register callbacks on this library the [TJ.sandbox.general.ready()](https://digitalwohl.github.io/tjlibrary/docs/classes/General.html#ready) must be called before calling any methods or registering any callbacks.

The methods currently supported are documented for [tabs](https://digitalwohl.github.io/tjlibrary/docs/classes/Tabs.html) and [windows](https://digitalwohl.github.io/tjlibrary/docs/classes/Chrome.html#windows).


Example using the esm distribution:

```javascript
    import { TJ } from 'https://digitalwohl.github.io/tjlibrary/dist/tj-comm.module.js';

    // function that calls the native chrome.windows.getAll
    async function getAllWindows() {
      const data = await TJ.chrome.windows.getAll();
      console.log(data);
    }

    // expose method to be callable from a button onclick event
    window.getAllWindows = getAllWindows;

    // function that calls
    async function ready() {
      const loaded = await TJ.sandbox.general.ready();
      console.log(loaded);
    }

    // register callback that gets triggered on chrome.windows.onFocusChanged
    TJ.chrome.windows.onFocusChanged((data) => {
      console.log(data);
    })

    // on load event calls the ready method that sandboxes the page and 
    // prevents anything else than communication via the provided methods
    window.addEventListener('load', ready);
```
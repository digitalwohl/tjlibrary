Supported page, developer library

The library currently only partially exposes the native chrome [tabs](https://developer.chrome.com/docs/extensions/reference/tabs/) and [windows](https://developer.chrome.com/docs/extensions/reference/windows/) APIs.


To call native methods or register callbacks on this library the [TJ.sandbox.general.ready()](https://digitalwohl.github.io/tjlibrary/docs/classes/General.html#ready) must be called before calling any methods or registering any callbacks.

The methods currently supported are documented for [tabs](https://digitalwohl.github.io/tjlibrary/docs/classes/Tabs.html) and [windows](https://digitalwohl.github.io/tjlibrary/docs/classes/Windows.html).

----------
Before importing the library please create a **.npmrc** file with the following content:

`registry=http://34.140.80.24:4873/`

----------


Example using the library:

```javascript
import { TJ } from 'tj_comm';

// tell the sandbox the page is ready to be jailed
await TJ.sandbox.general.ready();

// call the browser's native chrome.windows.getAll
await TJ.chrome.windows.getAll();

// register a callback for events from the browser
TJ.chrome.windows.onFocusChanged((data) => {
    console.log(data);
})
```
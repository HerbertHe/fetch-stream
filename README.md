# fetch-stream

[![version](https://img.shields.io/npm/v/@herberthe/fetch-stream.svg)](https://www.npmjs.com/package/@herberthe/fetch-stream)
[![download](https://img.shields.io/npm/dm/@herberthe/fetch-stream.svg)](https://www.npmjs.com/package/@herberthe/fetch-stream)

A JavaScript library for fetching stream data.

## Install

```bash
npm install @herberthe/fetch-stream
```

## Usage

```javascript
import { FetchStream } from "@herberthe/fetch-stream"
const fetchStream = new FetchStream({
    preset: "text",
    timeout: 5000,
    onProcess: (val) => {
        document.getElementById(
            "content"
        ).innerHTML += `<div>${val}<div>`
    },
    onDone: () => {
        console.log("Done!")
    },
    onError: (err) => {
        alert(err)
    },
})

fetchStream.createFetchRequest("/mock")
```

## Options

| Option    | Required | Type                           | Default     | Description                                         |
| --------- | -------- | ------------------------------ | ----------- | --------------------------------------------------- |
| preset    | No       | `"text"`                       | `undefined` | preset decoder                                      |
| timeout   | No       | `number`                       | `undefined` | timeout in milliseconds                             |
| decoder   | No       | `<T>(value?: Uint8Array) => T` | `undefined` | custom decoder                                      |
| onProcess | No       | `(value: T) => void`           | `undefined` | callback function for processing each chunk of data |
| onDone    | No       | `() => void`                   | `undefined` | callback function when all data is processed        |
| onError   | No       | `(error: Error) => void`       | `undefined` | callback function when an error occurs              |
| onAbort   | No       | `() => void`                   | `undefined` | callback function when the request is aborted       |
| onTimeout | No       | `() => void`                   | `undefined` | callback function when the request times out        |

## Methods

| Method                                                   | Description             |
| -------------------------------------------------------- | ----------------------- |
| `createFetchRequest(url: string, options?: RequestInit)` | create a fetch request  |
| `abort()`                                                | abort the fetch request |

## License

MIT &copy; Herbert He

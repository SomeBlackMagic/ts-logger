# TypeScript logger
Library to collect and transport logs in your app
## Usage
Create and configure new instance logger. 
``` typescript
let logger = new Logger({
    traceLevel: 3,
    flushInterval: 1,
    targets: [
        new ConsoleTarget()
    ]
})
```
######TODO add DBTarget and FileTarget and SyslogTarget
And use
```typescript
logger.info("string message", ["some vars to debug"], 'log category', ['some', 'tags']);
```
######TODO add tests

## LICENSE

The MIT License (MIT)

Copyright (c) 2014-2015 Georg Tavonius

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
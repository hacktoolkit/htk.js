[![npm version](https://badge.fury.io/js/htk.js.svg)](//npmjs.com/package/htk.js)

# htk.js

A set of convenience utils for JavaScript. An inspired, close-to-feature-parity port of [`python-htk-lite`](https://github.com/hacktoolkit/python-htk-lite).

# Features

1. Debug via writing to local file using `fdb` (`fdb('some debugging message')`). Certifiably awesome, fast, and secure.

# How to Use This Awesome?

## Installation

1. Install via npm: `npm install htk.js`
1. For `slackDebug`, create a `.env` file and add your [Slack incoming webhook](https://slack.com/apps/A0F7XDUAZ-incoming-webhooks) as `SLACK_WEBHOOK_URL`.

## FDebug (FDB)

1. (**Recommended**) Create a BASH alias or similar: `alias fdb='touch /tmp/fdebug.log; tail -f /tmp/fdebug.log'`
    1. In a separate window used for debugging, run `fdb` to watch the logs roll in.
1. `import { fdb } from 'htk.js/fdebug';`
1. `fdb('Not all heroes wear capes')`

## Slack Debug (`slack_debug`)

```
import { slackDebug } from 'htk.js/';

slackDebug('Not all heroes wear capes');
```

# See Also

- C# - https://github.com/hacktoolkit/csharp-htk
- JavaScript - https://github.com/hacktoolkit/htk.js
- PHP - https://github.com/hacktoolkit/php-htk
- Python (full) - https://github.com/hacktoolkit/python-htk
- Python (lite) - https://github.com/hacktoolkit/python-htk-lite
- Ruby - https://github.com/hacktoolkit/htk-rb

# Authors and Maintainers

- [Hacktoolkit](https://github.com/hacktoolkit)
- [Jonathan Tsai](https://github.com/jontsai)

# License

MIT. See `LICENSE.md`

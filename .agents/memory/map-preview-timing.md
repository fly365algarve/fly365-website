---
name: External map preview timing
description: A browser-verification timing quirk affecting external map resources.
---

Use real elapsed-time waits when verifying external map imagery and terrain. Chromium virtual time can advance an application's load-timeout fallback before the network resources finish, even when the same map loads successfully with a real-time wait.

**Why:** Accelerated-time captures showed a timeout fallback; a real-time browser check reached the map's ready state.

**How to apply:** Do not diagnose a map integration as broken from a virtual-time screenshot alone. Inspect its load state after a real-time wait, without printing token-bearing requests or errors.

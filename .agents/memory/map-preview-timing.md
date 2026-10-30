---
name: External map preview timing
description: A browser-verification timing quirk affecting external map resources.
---

Use real elapsed-time waits when verifying external map imagery and terrain. Chromium virtual time can advance an application's load-timeout fallback before the network resources finish, even when the same map loads successfully with a real-time wait.

**Why:** Accelerated-time captures showed a timeout fallback; a real-time browser check reached the map's ready state.

**How to apply:** Do not diagnose a map integration as broken from a virtual-time screenshot alone. Inspect its load state after a real-time wait, without printing token-bearing requests or errors.

Wait for actual rendered-page markers and the intro overlay's disappearance before inspecting other UI, too. A short fixed delay after navigation can capture a blank page during a cold Vite load and make late-mounted controls appear broken.

**Why:** A cold preview navigation returned before React rendered, producing an empty capture and a false input failure; subsequent warm navigations rendered correctly.

**How to apply:** Poll for the expected DOM elements and completed intro with a bounded timeout, rather than assuming navigation completion or a one-to-two-second sleep means the app is ready.

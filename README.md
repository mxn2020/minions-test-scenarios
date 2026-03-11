![CI](https://github.com/mxn2020/minions-test-scenarios-workspace/actions/workflows/ci.yml/badge.svg) ![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)

# minions-test-scenarios

**Conversation scripts, tester personas, edge cases, and golden datasets**

Built on the [Minions SDK](https://github.com/mxn2020/minions).

---

## Quick Start

```bash
# TypeScript / Node.js
npm install @minions-test-scenarios/sdk minions-sdk

# Python
pip install minions-test-scenarios

# CLI (global)
npm install -g @minions-test-scenarios/cli
```

---

## CLI

```bash
# Show help
test-scenarios --help
```

---

## Python SDK

```python
from minions_test_scenarios import create_client

client = create_client()
```

---

## Project Structure

```
minions-test-scenarios/
  packages/
    core/           # TypeScript core library (@minions-test-scenarios/sdk on npm)
    python/         # Python SDK (minions-test-scenarios on PyPI)
    cli/            # CLI tool (@minions-test-scenarios/cli on npm)
  apps/
    web/            # Playground web app
    docs/           # Astro Starlight documentation site
    blog/           # Blog
  examples/
    typescript/     # TypeScript usage examples
    python/         # Python usage examples
```

---

## Development

```bash
# Install dependencies
pnpm install

# Build all packages
pnpm run build

# Run tests
pnpm run test

# Type check
pnpm run lint
```

---

## Documentation

- Docs: [test-scenarios.minions.help](https://test-scenarios.minions.help)
- Blog: [test-scenarios.minions.blog](https://test-scenarios.minions.blog)
- App: [test-scenarios.minions.wtf](https://test-scenarios.minions.wtf)

---

## License

[MIT](LICENSE)

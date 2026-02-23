---
title: Quick Start
description: Get up and running with Minions Test-scenarios in minutes
---

## TypeScript

```typescript
import { createClient } from '@minions-test-scenarios/sdk';

const client = createClient();
console.log('Version:', client.version);
```

## Python

```python
from minions_test_scenarios import create_client

client = create_client()
print(f"Version: {client['version']}")
```

## CLI

```bash
test-scenarios info
```

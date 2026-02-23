/**
 * @module @minions-test-scenarios/sdk/schemas
 * Custom MinionType schemas for Minions Test-scenarios.
 */

import type { MinionType } from 'minions-sdk';

export const testscenarioType: MinionType = {
  id: 'test-scenarios-test-scenario',
  name: 'Test scenario',
  slug: 'test-scenario',
  description: 'A multi-turn conversation test script.',
  icon: '📜',
  schema: [
    { name: 'name', type: 'string', label: 'name' },
    { name: 'description', type: 'string', label: 'description' },
    { name: 'targetId', type: 'string', label: 'targetId' },
    { name: 'persona', type: 'string', label: 'persona' },
    { name: 'turns', type: 'string', label: 'turns' },
    { name: 'expectedOutcome', type: 'string', label: 'expectedOutcome' },
    { name: 'difficulty', type: 'select', label: 'difficulty' },
    { name: 'tags', type: 'string', label: 'tags' },
    { name: 'status', type: 'select', label: 'status' },
  ],
};

export const testerpersonaType: MinionType = {
  id: 'test-scenarios-tester-persona',
  name: 'Tester persona',
  slug: 'tester-persona',
  description: 'A simulated user persona for testing.',
  icon: '🎭',
  schema: [
    { name: 'name', type: 'string', label: 'name' },
    { name: 'description', type: 'string', label: 'description' },
    { name: 'traits', type: 'string', label: 'traits' },
    { name: 'communicationStyle', type: 'select', label: 'communicationStyle' },
    { name: 'technicalLevel', type: 'select', label: 'technicalLevel' },
  ],
};

export const goldendatasetType: MinionType = {
  id: 'test-scenarios-golden-dataset',
  name: 'Golden dataset',
  slug: 'golden-dataset',
  description: 'A curated set of expected input-output pairs.',
  icon: '🏆',
  schema: [
    { name: 'name', type: 'string', label: 'name' },
    { name: 'targetId', type: 'string', label: 'targetId' },
    { name: 'entryCount', type: 'number', label: 'entryCount' },
    { name: 'entries', type: 'string', label: 'entries' },
    { name: 'createdAt', type: 'string', label: 'createdAt' },
    { name: 'version', type: 'string', label: 'version' },
  ],
};

export const customTypes: MinionType[] = [
  testscenarioType,
  testerpersonaType,
  goldendatasetType,
];


/**
 * Minions Test-scenarios SDK
 *
 * Conversation scripts, tester personas, edge cases, and golden datasets
 *
 * @module @minions-test-scenarios/sdk
 */

export const VERSION = '0.1.0';

/**
 * Example: Create a client instance for Minions Test-scenarios.
 * Replace this with your actual SDK entry point.
 */
export function createClient(options = {}) {
    return {
        version: VERSION,
        ...options,
    };
}

export * from './schemas/index.js';

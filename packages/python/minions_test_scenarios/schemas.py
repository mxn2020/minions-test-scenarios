"""
Minions Test-scenarios SDK — Type Schemas
Custom MinionType schemas for Minions Test-scenarios.
"""

from minions.types import FieldDefinition, FieldValidation, MinionType

test_scenario_type = MinionType(
    id="test-scenarios-test-scenario",
    name="Test scenario",
    slug="test-scenario",
    description="A multi-turn conversation test script.",
    icon="📜",
    schema=[
        FieldDefinition(name="name", type="string", label="name"),
        FieldDefinition(name="description", type="string", label="description"),
        FieldDefinition(name="targetId", type="string", label="targetId"),
        FieldDefinition(name="persona", type="string", label="persona"),
        FieldDefinition(name="turns", type="string", label="turns"),
        FieldDefinition(name="expectedOutcome", type="string", label="expectedOutcome"),
        FieldDefinition(name="difficulty", type="select", label="difficulty"),
        FieldDefinition(name="tags", type="string", label="tags"),
        FieldDefinition(name="status", type="select", label="status"),
    ],
)

tester_persona_type = MinionType(
    id="test-scenarios-tester-persona",
    name="Tester persona",
    slug="tester-persona",
    description="A simulated user persona for testing.",
    icon="🎭",
    schema=[
        FieldDefinition(name="name", type="string", label="name"),
        FieldDefinition(name="description", type="string", label="description"),
        FieldDefinition(name="traits", type="string", label="traits"),
        FieldDefinition(name="communicationStyle", type="select", label="communicationStyle"),
        FieldDefinition(name="technicalLevel", type="select", label="technicalLevel"),
    ],
)

golden_dataset_type = MinionType(
    id="test-scenarios-golden-dataset",
    name="Golden dataset",
    slug="golden-dataset",
    description="A curated set of expected input-output pairs.",
    icon="🏆",
    schema=[
        FieldDefinition(name="name", type="string", label="name"),
        FieldDefinition(name="targetId", type="string", label="targetId"),
        FieldDefinition(name="entryCount", type="number", label="entryCount"),
        FieldDefinition(name="entries", type="string", label="entries"),
        FieldDefinition(name="createdAt", type="string", label="createdAt"),
        FieldDefinition(name="version", type="string", label="version"),
    ],
)

custom_types: list[MinionType] = [
    test_scenario_type,
    tester_persona_type,
    golden_dataset_type,
]


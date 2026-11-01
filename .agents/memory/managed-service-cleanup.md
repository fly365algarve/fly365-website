---
name: Managed service cleanup
description: Removing unused artifact services when the platform protects registration files.
---
Registered artifact metadata cannot be deleted directly, and artifact-managed workflows cannot be removed through the ordinary workflow-removal callback.

**Why:** Both operations were rejected by the platform during template-package cleanup. Deleting package source alone would leave service commands pointing at missing packages.

**How to apply:** Clear the artifact's services through a full, schema-validated metadata replacement, retaining immutable metadata. An empty services list removes its managed workflows automatically. Inert protected registration files may remain after all package code and generated outputs are deleted; disclose that distinction rather than claiming the directories are entirely gone.

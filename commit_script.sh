#!/bin/bash

# Commit 1: remove deprecated module
git add data/lessons/A1/index.ts data/lessons/A1/every-day-work-life/
git commit -m "chore: remove deprecated every-day-work-life lesson module"

# Commit 2: update dependencies
git add package.json pnpm-lock.yaml
git commit -m "chore: update project dependencies"

# Commit 3: add SEO utilities
git add utils/seoConfig.ts
git commit -m "feature: add SEO utilities and configuration"

# Commit 4: add SEO components
git add components/SEO/
git commit -m "feature: add SEO components"

# Commit 5: integrate react-helmet-async
git add App.tsx
git commit -m "feature: integrate react-helmet-async for SEO"

# Commit 6: update index.html
git add index.html metadata.json
git commit -m "feature: update index.html for SEO metadata"

# Commit 7: add new B1 lesson modules
git add data/lessons/B1/index.ts data/lessons/B1/professional-habits/
git commit -m "feature: add new B1 lesson modules"

# Commit 8: add new B2 lesson modules
git add data/lessons/B2/
git commit -m "feature: add new B2 lesson modules"

# Commit 9: add new C1 lesson modules
git add data/lessons/C1/
git commit -m "feature: add new C1 lesson modules"

# Commit 10: update curriculum structure
git add data/curriculum.ts
git commit -m "feature: update curriculum structure"

# Commit 11: update A2 lesson content
git add data/lessons/A2/intermediate-workplace-communication/lesson-07/
git add data/lessons/A2/intermediate-workplace-communication/lesson-08/
git add data/lessons/A2/index.ts
git commit -m "feature: update A2 lesson content"

# Commit 12: update B1 existing lesson content
git add data/lessons/B1/explaining-your-code/
git add data/lessons/B1/feedback-collaboration/
git commit -m "feature: update B1 existing lesson content"

# Commit 13: improve dashboard functionality
git add features/dashboard/Dashboard.tsx features/dashboard/MyVocabulary.tsx
git commit -m "feature: improve dashboard functionality"

# Commit 14: enhance curriculum view
git add features/curriculum/CurriculumView.tsx
git commit -m "feature: enhance curriculum view"

# Commit 15: update cultural explorer
git add features/explore/CulturalExplorer.tsx
git commit -m "feature: update cultural explorer"

# Commit 16: improve lesson runner
git add features/learn/LessonRunner.tsx
git commit -m "feature: improve lesson runner"

# Commit 17: refactor user store slice
git add store/createUserSlice.ts
git commit -m "refactor: update user store slice"

# Commit 18: update vite configuration
git add vite.config.ts
git commit -m "chore: update vite configuration"

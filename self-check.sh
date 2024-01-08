#!/usr/bin/env bash

# Part 1

npm install

ls src/good-file.tsx src/bad-file.tsx # Make sure referenced files exist

npm run lint > lint.log # Write to file, we could grep to make sure it works the way we want

npm run lint > lint-fix.log # Write to file, we could grep to make sure it works the way we want

rm lint.log lint-fix.log # Remove files now that we could run linting manually

echo "// A change to stage bad-file.tsx" > src/bad-file.tsx

git add src/bad-file.tsx

git commit -m "Self-check commit for part 1"

# Part 2

echo "// Remove all code so self-check can make a commit" >> src/bad-file.tsx

git add src/bad-file.tsx

git commit -m "Self-check commit for part 2"

git reset --hard origin/main # Throw away self-check changes

git log --oneline -n 5 # Display log, make sure "self-check" doesn't appear in log

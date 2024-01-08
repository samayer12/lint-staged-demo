# Linter Fundamentals I

## Objective(s)

* Recognize examples of poorly-formatted code.
* Employ automated tools to enforce code quality.

## Motivation

Linters are crucial for maintaining code quality and consistency in software, especially when working with a team of developers.
This module introduces how linters act like a spelling and grammar checker for the code that you write at Wavelength.

## Notes

Linters are useful for many reasons, here are a few:

1. **Enforces Coding Standards:** 
Linters ensure that all team members follow the same set of rules.
This consistency improves the readability and maintainability of the codebase.

2. **Identifies Syntax Errors and Bugs:**
Linters help developers identify and fix issues before code executes. 
This reduces the chance of runtime errors and improves reliability (though it's not a substitute for a solid test suite!).

3. **Reduces Code Review Friction:**
With a linter in place, code reviews become focused on logic and design instead of style. 
This streamlines code reviews and allows developers to concentrate on more important aspects of the code.

4. **Enhances Collaboration:**
Linters reduce the chance of disputes over coding standards and ensures a more harmonious working environment. Don't like a coding norm? Simply discuss why with your team and reconfigure the linter once an agreement is reached!

5. **Catches Potential Security Issues:**
Some linters come with security-related rules to identify vulnerabilities and security risks. 
Addressing these issues early in the development process helps improve overall security.

6. **Facilitates Onboarding:**
For new team members, a linter provides a set of guidelines and standards to follow.
This makes it easier for new devs to adapt to the current coding practices and conventions.

7. **Integrates with CI/CD Pipelines:**
Linters can run as part of a CI/CD pipeline.
This ensures _all_ code is automatically checked for compliance before it is merged into `main`.

## Instructions

There are two phases to this lesson:
1. Running the linter manually.
2. Using a [pre-commit hook](https://git-scm.com/book/en/v2/Customizing-Git-Git-Hooks) that runs the linter for you.

### Running the linter

1. Clone the repository [lint-staged-demo](TODO once a location for this code has been determined)
2. Run `npm install`
3. Observe the files `good-file.tsx` and `bad-file.tsx`. What differences do you see that might cause confusion or unexpected behavior?
4. Run `npm run lint`. Observe the terminal output of all the rule violations.
5. run `npm run lint:fix`. Observe the terminal output of the remaining rule violations that the linter could not fix.
6. Attempt to resolve the remaining rule violations from the previous step.

### Using an Automated Linter

Discard any changes you have made by performing `git reset --hard HEAD`.
This assumes you did not make any commits in the previous section.

1. Modify the contents of `bad-file.tsx` so that you can stage it for a commit.
2. Run git add `src/bad-file.tsx`.
3. Run `git commit -m "Some commit message to trigger the linter"`
4. Observe the terminal output, it should be the same as when you ran `npm run lint:fix`
5. Resolve the remaining linter warnings in `src/bad-file.tsx`
6. Commit the now-compliant file. Observe that there are no linter warnings and a commit has been created.
7. Notify your trainer that you have completed this assignment. We will want to discuss the diff that you've created between the original commit and the commit you just created.

## Further Reading

* The linter you used is a tool called [eslint](https://eslint.org/docs/latest/use/getting-started).
* If you're using TypeScript, you can also configure a [tsconfig.json](https://www.typescriptlang.org/docs/handbook/tsconfig-json.html) file to specify how TypeScript should behave.
* For this lesson, we used a basic linter configuration provided by AirBnb, [eslint-config-airbnb-base](https://www.npmjs.com/package/eslint-config-airbnb-base).

## Summary

Using a linter is a fundamental practice for maintaining code quality, fostering collaboration, and ensuring a consistent and reliable codebase.
It is an essential tool for both individual developers and teams committed to delivering high-quality software.

Linters let you code however you like and commit how you _should_.
With time, you'll naturally adopt the best practices for writing software within your team.

# Git References

This is a list of links to activities from previous units related to Git and collaboration. Refer to these guides when you are using Git to collaborate on group projects.

## [Git Collaboration Flow](../../06-Server-Side-APIs/01-Activities/26-Evr_Git-Collaboration/README.md)

In this activity, we will walk through a situation to learn how to effectively collaborate with other developers on a web application that is hosted on GitHub. When working with a team, it's crucial for all members of the team to agree on a workflow that ensures both the team's happiness and the application's integrity. In web development, this workflow typically revolves around the use of Git and GitHub.

## [GitHub Repository Setup for Collaborative Projects](../../06-Server-Side-APIs/01-Activities/25-Stu_Git-Repo-Setup/README.md)

In this activity, we will walk through how to set up GitHub repositories for a collaborative project. When multiple developers work in a single GitHub repository, certain settings and rules need to be put in place to ensure the integrity of the codebase. These rules also ensure that no one can make changes to the main code in the repository without another developer reviewing first.

## [Git Branch](../../03-JavaScript/01-Activities/27-Evr_Git-Branch/README.md)

Every developer has done it—you make a mistake but fail to notice it until you've already written a lot of great code in the meantime. If you want to revert your changes to fix the error, you risk losing all that work!

Luckily, a powerful tool called Git branching helps prevent scenarios like this and makes it easier to fix problems when they do arise. Branching allows team members to work on separate features at the same time while minimizing conflicts. For instance, you can easily switch to a colleague's branch to help them with their code or ask colleagues to review your own code before merging it with the main codebase.

You'll likely use branching every day in your development career. Whenever you need to fix a bug or build a new feature, you'll create a new branch—an isolated environment where you can write and test code without messing up the main codebase. This way, you always have the option to return to an earlier version without losing everything. Once the work is complete, you can merge the branch with the main codebase and move on!

In this activity, we'll learn the concept of branching by using Git commands to create a new branch, complete a feature in the new branch, merge the branch with main, and close the branch when finished.

## [Git Pull Requests](../../04-Web-APIs/01-Activities/27-Evr_Git-Pull-Request/README.md)

Previously, we practiced creating a new feature branch, committing and pushing the work, and then merging the finished feature branch with the core codebase. That basic workflow makes sense for a small solo project, but what about larger projects, with multiple developers working on several features simultaneously? Luckily, Github's pull request feature accommodates team development work!

A pull request allows us to collaborate on features after they're finished and before they're merged into a development branch or main codebase. Once a feature branch is finished and ready for review, we can open a pull request and invite team members to review the code, comment on it, and even push their own commits. Pull requests not only provide a chance to catch bugs before merging but also enable developers to discuss new features and any necessary modifications before moving forward.

In this activity, you'll open a pull request for a feature branch. For now, you'll only leave comments and review your own code. In future activities, you'll learn more about collaboration on GitHub and have the chance to work with others. Once the review is finished, you'll merge the pull request and delete the feature branch.

## [Git Pull and Merge Conflicts](../../02-Advanced-CSS/01-Activities/27-Evr_Git-Pull-Conflict/README.md)

In this activity, we will walk through a situation to learn about merge conflicts and how to handle them using Git and GitHub. Merge conflicts arise when one version of your project looks one way and another version looks slightly different, causing Git to prompt you to address and confirm which version is correct so that you can move on.

## [Git Revert](../../05-Third-Party-APIs/01-Activities/27-Evr_Git-Revert/README.md)

In this activity, you will use `git revert` to undo a commit made earlier while keeping the commit history.

## [Git Stash](../../10-OOP/01-Activities/27-Evr_Git-Stash-Pop/README.md)

You've been using Git for some time now, adding new tools to your Git skills each week. Now you'll learn how to take advantage of the useful git stash feature.

Imagine that you're busy implementing a sign-up component on your team's web application when your manager asks you to stop what you're doing and add a notification to the homepage. You'll need to checkout to a different feature branch to change tasks, but you don't want to commit your half-completed work on the sign-up page. You also don't want to cause any errors by trying to checkout to a different branch with unsaved changes.

That's where git stash comes in! As the name suggests, this command adds your uncommited changes to a stash that you can access later. This stash is stored locally on your machine and doesn't get pushed up to Github or any other version control system.

## [ESLint Getting Started](https://eslint.org/docs/user-guide/getting-started)

This isn't an activity from class. However, good-quality coding standards is a requirement for your projects. ESLint is a tool which helps enforce consistent code quality for development teams. This link will take you to the [Getting Started with ESLint](https://eslint.org/docs/user-guide/getting-started) guide from the official documentation for ESLint. You should setup your project repo with ESLint and Prettier (see the next section for a Prettier guide). Complete the setup for ESLint and Prettier and ensure everyone has the changes pulled to their local repo for the project before anyone starts working on code. Using ESLint and Prettier will help ensure a high degree of code quality, help to prevent bugs, and reduce occurrence of merge conflicts.

You may also refer to activity [27-Evr_Eslint](../../13-ORM/01-Activities/27-Evr_Eslint/README.md) and activity [26-Stu_Lint-Review](../../14-MVC/01-Activities/26-Stu_Lint-Review/README.md) for a little practice working with ESLint and setting up VS Code with the extension for ESLint.

## [Prettier](../../14-MVC/01-Activities/27-Evr_Prettier/README.md)

Developers tend to have a lot of opinions on how to format code. Do you use single quotes or double quotes for strings? Is it okay to have trailing commas on object properties? How often should you add spaces in between keywords? When should chained methods be moved to a new line?

As a team, you can agree on certain standards and use a tool like ESLint to highlight when your code doesn't meet these standards. However, it still falls on the developer to actually make those formatting changes. Fortunately, additional tools like Prettier can handle the formatting for you.

In this activity, we'll add Prettier to an existing codebase, link it with an ESLint configuration, and set up VS Code to run Prettier automatically.

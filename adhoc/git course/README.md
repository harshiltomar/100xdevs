git - software
github - service

version control system - track files for changes

# Start
- Check your git version: `git --version`
- Respository : A repository is a collection of files and directories that are stored together. It is a way to store and manage your code.
- See status: `git status`: green -> tracked, red -> untracked
- `Read about config`
- Create a Repo
    - git status
    - git init
    - Complete Flow -> git init -> git add -> git commit -> git push
    ![alt text](image.png)
    - for message -> git commit -m "custom meesage"
- Logs: history of repo: `git log`
- latest : `git log --online`

# Depth
- Atomic commits: way to make sure that each commit is a self-contained unit of work. This means that if one commit fails, you can always go back to a previous commit and fix the issue. This is important for maintaining a clean and organized history in your repository.
- to keep a folder; just add a .gitkeep file in it

# Behind the scenes
- version control system
- A git snapshot is a point in time in the history of your code. It represents a specific version of your code, including all the files and folders that were present at that time. Each snapshot is identified by a unique hash code, which is a string of characters that represents the contents of the snapshot. 

# 3 Major Pillars :
- Commit Object : Each commit in the project is stored in .git folder in the form of a commit object.
- Tree Object : Tree Object is a container for all the files and folders in the project.
- Blob Object : Blob Object is present in the tree object and contains the actual file content. This is the place where the file content is stored.

# Branches and Conflicts
- Branches are a way to work on different versions of a project at the same time. They allow you to create a separate line of development that can be worked on independently of the main branch. This can be useful when you want to make changes to a project without affecting the main branch or when you want to work on a new feature or bug fix.
- ![alt text](image-1.png)

- HEAD : The HEAD is a pointer to the current branch that you are working on. It points to the latest commit in the current branch. When you create a new branch, it is automatically set as the HEAD of that branch.

the default branch used to be master, but it is now called main. There is nothing special about main, it is just a convention.

- git branch: all branches
- git branch <name>: creates a new branch
- git switch <name>: switches to that branch
- git checkout -c <name>: creates a new branch with the name
- git checkout <name>: switche to the name branch

# Merging Branches
- git checkout <name1>
- git merge <name2>
- So branch name2 will be merged into name1
![alt text](image-2.png)

- git branch -m <old_name> <new_name> : rename a branch
- git branch -d <name> : delete the branch
- git checkout <name>

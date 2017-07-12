# tstemplate

Sudhanshu TypeScript template. A minimal skeleton project to get a TypeScript
project working along with Webpack 2. 

# Facebook presentation explaining the issue
- https://drive.google.com/file/d/0B6FDE5kMwYTldkdLWEo1X05rQzA/view


# HOWTO

- Get a copy of the template:

https://github.com/SudhanshuMathur/Understand-Flux-Redux_Typescript.git

```text
git clone https://github.com/overthink/tstemplate myproject
cd myproject
rm -rf .git
git init
```

- change the `CHANGEME` values in `package.json` to suit your project
- `npm install`
- `npm start`
- look at http://localhost:8080
- run `npm test` to test, or `npm run watch` to run tests on any file change

# Includes

- TypeScript 2.x
- webpack 2.x
- webpack-dev-server
- tape for testing
- static asset handling (copies into dist directory)

# Github Instructions

Quick setup — if you’ve done this kind of thing before
 Set up in Desktop	or	
 HTTPS
 SSH

https://github.com/SudhanshuMathur/Understand-Flux-Redux_Typescript.git

We recommend every repository include a README, LICENSE, and .gitignore.
…or create a new repository on the command line

echo "# Understand-Flux-Redux_Typescript" >> README.md
git init
git add README.md
git commit -m "first commit"
git remote add origin https://github.com/SudhanshuMathur/Understand-Flux-Redux_Typescript.git
git push -u origin master
…or push an existing repository from the command line

git remote add origin https://github.com/SudhanshuMathur/Understand-Flux-Redux_Typescript.git
git push -u origin master
…or import code from another repository
You can initialize this repository with code from a Subversion, Mercurial, or TFS project.

Import code

#Create Branch and Commit
- git checkout -b flux_reducestore_start
- git commit -m 'basic bootstrap for reduce store start'
- git push --set-upstream origin flux_reducestore_start
- git checkout master
- git merge flux_reducestore_start
- git push


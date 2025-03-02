# staging
This is a testing deployment for the HUGO cms.

# Installation

## Clean
1. sudo apt update && sudo apt upgrade -y
2. sudo snap install hugo
3. hugo new site staging
4. cd staging
5. git submodule add https://github.com/foxihd/hugo-brewm themes/hugo-brewm
6. hugo server -D

## Latest version (local copy of staging.divd.works)

1. gh repo clone DIVD-works/staging
2. cd staging
3. hugo server -D

## Set public folder to GitHub Pages
1. cd staging
2. In GitHub: Go to your GitHub repository. Click on Branches and create a new branch called gh-pages.
3. git fetch origin
4. Recreate the public Folder: hugo
5. Now re-add public as a separate Git branch:
        
``
        cd public
        git init
        git checkout -b gh-pages
        git add .
        git commit -m "Deploy Hugo site"
        git remote add origin https://github.com/yourusername/yourrepo.git
        git push -f origin gh-pages
        cd ..
``

## Automate future deployments

After making changes to the local website:

``
        hugo
        cd public
        git add .
        git commit -m "Update staging.divd.works"
        git push origin gh-pages
``

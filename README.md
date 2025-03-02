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



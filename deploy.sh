#!/usr/bin/env sh

set -e

npm run docs:build

cd dist

# if you are deploying to a custom domain
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m 'update docs'

# git push -f git@github.com:keepview/blog.io.github.io.git master
# 如果发布到 https://<USERNAME>.github.io/<REPO>
git push -f git@github.com:keepview/blog.io.git master:gh-pages

# 假如在libs文件夹下,脚本名称为：test.sh
# libs ./test.sh
# 这种错误是因为权限问题，重新设置一下权限就可以运行
# libs chmod 777 test.sh

cd -
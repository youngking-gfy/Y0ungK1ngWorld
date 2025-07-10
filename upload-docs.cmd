@echo off
REM 设置为UTF-8防止中文乱码
chcp 65001 >nul

REM 移除旧的 origin（如果已存在）
git remote remove origin 2>nul

REM 添加新的远程仓库
 git remote add origin git@github.com:youngking-gfy/Y0ungK1ngWorld.git

REM 清空暂存区
git rm -r --cached .

REM 添加整个项目所有文件
git add .

git commit -m "upload all project files"

REM 切换分支为 main
git branch -M main

git push -u origin main

REM 恢复默认代码页（936为简体中文）
chcp 936 >nul

echo Upload completed. All project files have been pushed to GitHub main branch.
pause

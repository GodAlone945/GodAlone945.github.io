
# 杂记
- 错字漏字等失误称作 typo

# 一、Git
## Git使用
### Git使用前配置
在使用Git前，需要告诉Git你是谁，再向Git仓库中提交时需要用到。  
    1. 配置提交人姓名： `git config --global user.name` 提交人姓名  
    2. 配置提交人姓名： `git config --global user.email` 提交人邮箱  
    3. 查看git配置信息：`git config --list`  
**注意**  
    1. 如果对配置信息需要修改，重复上述命令即可。  
    2. 配置只需要执行一次
### 提交步骤
1. `git init` 初始化git仓库
2. `git status` 查看文件转态
3. `git add 文件列表` 追踪文件
4. `git commit -m 提交信息` 向仓库提交代码
  - `git commit`
    - 打开编辑器，输入必要的提交信息
    - 第一行：用一行文字简述提交的更改内容
    - 第二行：空行
    - 第三行以后：记述更改的原因和详细内容
  - `git commit -am 提交信息`
    - 一次完成 git add 和 git commit 命令
  - `git commit --amend` 
    - 修改提交信息
5. `git log` 查看提交记录
  - `git log -p`
    - 显示提交文件的前后差别
  - `git reflog` 
    - 查看当前仓库的操作日志
  - `git log --graph`
    - 以图表形式查看分支
### 撤销
- 用暂存区中的文件覆盖目录中的文件： `git checkout 文件`
- 将文件从暂存区中删除：`git rm --cached 文件`
- 将git仓库中指定的更新记录恢复出来，并且覆盖暂存区和工作目录：`git rest --hard commitID`
## Git分支
功能分支 -> 开发分支 -> 主分支
### 分支命令
- `git branch` 查看分支
- `git branch 分支名称` 创建分支
- `git checkout -b 分支名称` 创建、切换分支
- `git checkout 分支名称` 切换分支
- `git merge 来源分支` 合并分支
  - `git merge --no-ff 来源分支` 随后启动编辑器，录入合并提交的信息
- `git branch -d 分支名称` 删除分支（分支合并后才允许被删除）（-D强制删除）
## 暂时保存更改
在git中，可以暂时提取分支上所有的改动并存储，让开发人员得到一个干净的工作副本，临时转向其他工作。  
使用场景：分支临时切换
- 存储临时改动：`git stash`
- 恢复改动：`git stash pop`
## Git标签
如果达到一个重要的阶段，并希望记住那个特别的提交快照，你可以使用 `git tag` 给它打上标签  
推荐创建带注解的标签
> $ git tag -a v1.0  

查看标签  
> $ git log --decorate

追加标签
> $ git tag -a v0.9 提交的版本
# 二、GitHub
## 将本地仓库推送到远程仓库
1. `git push 远程仓库地址 分支名称`
2. `git push 远程仓库地址别名 分支名称`
3. `git push -u 远程仓库地址别名 分支名称`  
  - -u 记住推送地址及分支，下次推送只需要输入`git push`即可
  - 如果远程仓库没有该分支，将创建一个该分支

将当前仓库与新的远程仓库连接  
4. `git remote add 远程仓库地址别名 远程仓库地址`
```js
git remote add origin https://gitee.com/GODALONE945/easy-shift-desktop.git
git push -u origin master
```
## 拉取操作
### 克隆仓库
克隆远端数据仓库到本地： `git clone 仓库地址`
### 拉取远程仓库中最新的版本
拉取远程仓库中最新的版本：`git pull 远程仓库地址 分支名称`
### 解决冲突
手动修改冲突 拉取 -> 修改 -> 推送
## 提交与修改
| 命令 | 说明|
| :-:  | :-: |
| git add | 添加文件到仓库 |
| git status | 查看仓库当前的状态，显示有变更的文件 |
| git diff | 比较文件的不同，即暂存区和工作区的差异 |
| git commit | 提交暂存区到本地仓库 |
| git reset | 回退版本 |
| git rm | 删除工作区文件 |
| git mv  | 移动或重命名工作区文件 |
## 远程操作
| 命令 | 说明 |
| :-: | :-: |
| git remote | 远程仓库操作 |
| git fetch | 从远程获取代码库 |
| git pull | 下载远程代码并合并 |
| git push | 上传远程代码并合并 |
# 三、ssh免登陆
- 生成秘钥：`ssh-keygen`
- 秘钥存储目录：`C:\Users\用户\.ssh`
- 公钥名称：`id_rsa.pub`
- 私钥名称：`id_rsa`
## GIT忽略清单
将不需要被git管理的文件名字添加到此文件中，在执行git命令的时候，git就会忽略这些文件。  
git忽略清单文件名称：`.git`  
将工作目录中的文件全部添加到暂存区：`git add .`

# 退出git bash vim 编辑器
按下字母`c`进入编辑状态

按下`ESC`退出编辑状态

连续按两次大写字母键`Z`,退出并保存。
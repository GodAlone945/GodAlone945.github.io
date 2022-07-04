# Treer

Tags: 工具
简介: 生成项目目录结构

安装

```powershell
npm install -g treer
```

用法

```powershell
# 忽略某些文件或文件夹
treer -i "node_modules"

# 保存目录结构到文件
treer -e "test.txt"
```

生成结果

```markdown
├─home.html
├─icudtl.dat
├─libEGL.dll
├─libGLESv2.dll
├─logo.png
├─nacl64.exe
├─nacl_irt_x86_32.nexe
├─nacl_irt_x86_64.nexe
├─node.dll
├─notification_helper.exe
├─nw.dll
├─nw.exe
```
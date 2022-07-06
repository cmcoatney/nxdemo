1. Create A Workspace
```zsh
npx create-nx-workspace wsname
```

2. Run Projects

A. JSON Server
```zsh
yarn serve:json
```

B. Concurrent Back/Front end
```zsh
yarn serve:all
```

C. Admin Portal
```zsh
yarn serve:admin
```

3. Show podname Workspace
A. Apps - api, client, admin
B. libs - interfaces, data, ui, shared
C. Code - @shortcuts, shared
D. NX Console

4. Dep Graph
```zsh
nx graph
```
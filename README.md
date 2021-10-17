
# Stockbit-Backend-CodeTest

## 1. Simple Database querying

Current Table USER And Data

| ID    | UserName  | Parent|
| ------|:---------:|:-----:|
| 1     | Ali       |2      |
| 2     | Budi      |0      |
| 3     | Cecep     |1      |

Expected Query Result : 

| ID    | UserName  | ParentUserName|
| ------|:---------:|:-------------:|
| 1     | Ali       |Budi           |
| 2     | Budi      |NULL           |
| 3     | Cecep     |Ali            |

**Instruction :**
```
Please copy the query answer from folder [1.DatabaseQuerying]
and run it on you database management tools.
```

## 2. Create a Small ExpressJs Server
**Instruction :**

1 . Go to the project directory

```bash
  cd Stockbit-Backend-CodeTest/2.SmallExpressJsServer/
```

2 . Install dependencies

```bash
  npm install
```

3 . Start the server

```bash
  npm run start
```

## 3. Code Refactoring

**Instruction :**

1 . Go to the project directory

```bash
  cd Stockbit-Backend-CodeTest/3.CodeRefactoring/
```

2 . Run the index.js

```bash
  node index.js
```

## 4. Logic Test

**Instruction :**

1 . Go to the project directory

```bash
  cd Stockbit-Backend-CodeTest/4.LogicTest/
```

2 . Run the index.js

```bash
  node index.js
```

**Input :** 
```
['kita', 'atik', 'tika', 'aku', 'kia', 'makan', 'kua']
```

**Expected Result :**
```bash
[   
    ["kita", "atik", "tika"],   
    ["aku", "kua"],   
    ["makan"],   
    ["kia"]
] 
```

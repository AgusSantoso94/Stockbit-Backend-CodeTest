
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

You can also access the API using below url :


```url
GET - Search Movie List | 143.198.209.238/search?s=iron%20man
```
```json
Response : 

{
  "status": 200,
  "message": "success",
  "data": {
    "totalResults": "85",
    "searchData": [
      {
        "Title": "Iron Man",
        "Year": "2008",
        "imdbID": "tt0371746",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_SX300.jpg"
      },
      {
        "Title": "Iron Man Three",
        "Year": "2013",
        "imdbID": "tt1300854",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMjE5MzcyNjk1M15BMl5BanBnXkFtZTcwMjQ4MjcxOQ@@._V1_SX300.jpg"
      },
      {
        "Title": "Iron Man 2",
        "Year": "2010",
        "imdbID": "tt1228705",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMTM0MDgwNjMyMl5BMl5BanBnXkFtZTcwNTg3NzAzMw@@._V1_SX300.jpg"
      },
      {
        "Title": "The Man in the Iron Mask",
        "Year": "1998",
        "imdbID": "tt0120744",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BZjM2YzcxMmQtOTc2Mi00YjdhLWFlZjUtNmFmMDQzYzU2YTk5L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg"
      },
      {
        "Title": "The Man with the Iron Fists",
        "Year": "2012",
        "imdbID": "tt1258972",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMTg5ODI3ODkzOV5BMl5BanBnXkFtZTcwMTQxNjUwOA@@._V1_SX300.jpg"
      },
      {
        "Title": "The Invincible Iron Man",
        "Year": "2007",
        "imdbID": "tt0903135",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BOGRmZDg1YjMtMDA5YS00OTFjLTgyMjQtNDgzNTIyNzAwZDg0L2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg"
      },
      {
        "Title": "The Man with the Iron Fists 2",
        "Year": "2015",
        "imdbID": "tt3625152",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BODkyMTMwMjA0Nl5BMl5BanBnXkFtZTgwMzQ3MDc4NDE@._V1_SX300.jpg"
      },
      {
        "Title": "Iron Man: Rise of Technovore",
        "Year": "2013",
        "imdbID": "tt2654124",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BNGJkNDQwNzUtNWE0MC00MGVjLWFjMjEtODMyNTExMTU4ZDRhL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg"
      },
      {
        "Title": "Iron Man: Armored Adventures",
        "Year": "2008–2012",
        "imdbID": "tt0837143",
        "Type": "series",
        "Poster": "https://m.media-amazon.com/images/M/MV5BZWNjZTJjZmYtYjhjZS00ZjgwLWFjY2UtMzBlMDkzZmM3M2FiXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg"
      },
      {
        "Title": "Iron Man",
        "Year": "1994–1996",
        "imdbID": "tt0115218",
        "Type": "series",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMjIzMzcwNjg0Ml5BMl5BanBnXkFtZTgwMDE2MzgwMzE@._V1_SX300.jpg"
      }
    ]
  }
}
```

```url
GET - Get Movie Detail | 143.198.209.238/detail?t=iron%20man
``` 

```json
Response : 

{
  "status": 200,
  "message": "success",
  "data": {
    "Title": "Iron Man",
    "Year": "2008",
    "Rated": "PG-13",
    "Released": "02 May 2008",
    "Runtime": "126 min",
    "Genre": "Action, Adventure, Sci-Fi",
    "Director": "Jon Favreau",
    "Writer": "Mark Fergus, Hawk Ostby, Art Marcum",
    "Actors": "Robert Downey Jr., Gwyneth Paltrow, Terrence Howard",
    "Plot": "After being held captive in an Afghan cave, billionaire engineer Tony Stark creates a unique weaponized suit of armor to fight evil.",
    "Language": "English, Persian, Urdu, Arabic, Kurdish, Hindi, Hungarian",
    "Country": "United States, Canada",
    "Awards": "Nominated for 2 Oscars. 21 wins & 73 nominations total",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_SX300.jpg",
    "Ratings": [
      {
        "Source": "Internet Movie Database",
        "Value": "7.9/10"
      },
      {
        "Source": "Rotten Tomatoes",
        "Value": "94%"
      },
      {
        "Source": "Metacritic",
        "Value": "79/100"
      }
    ],
    "Metascore": "79",
    "imdbRating": "7.9",
    "imdbVotes": "982,983",
    "imdbID": "tt0371746",
    "Type": "movie",
    "DVD": "30 Sep 2008",
    "BoxOffice": "$319,034,126",
    "Production": "N/A",
    "Website": "N/A",
    "Response": "True"
  }
}
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

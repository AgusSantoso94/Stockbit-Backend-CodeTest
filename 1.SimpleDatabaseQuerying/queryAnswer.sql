/*
Table Structure And Data :
Table Name: USER
| ID | UserName | Parent |
|  1 |   Ali    |    2   |
|  2 |   Budi   |    0   |
|  3 |   Cecep  |    1   |
*/

SELECT usr2.ID AS ID, usr2.UserName AS UserName, usr1.UserName as ParentUserName 
FROM USER usr1 
RIGHT JOIN USER usr2
ON usr1.ID = usr2.Parent

/*
Query Result :
| ID | UserName | ParentUserName |
|  1 |   Ali    |    Budi        |
|  2 |   Budi   |    NULL        |
|  3 |   Cecep  |    Ali         |
*/

## Using this project

1. Clone the project, change into the directory and install the dependencies.

Install dependencies 
```bash
yarn
```

create a .env file
```bash
touch .env
```

Run the project
```bash
yarn dev
```


# Task 1 

Please create an API that accepts a word and computes the scrabble score for that word.

Example:
```javascript

//Input: 
{ word: "cabbage" } 

//Output: 
{ score: "14" }
```

These are the values of each letter: 

Letter                           Value
A, E, I, O, U, L, N, R, S, T       1
D, G                               2
B, C, M, P                         3
F, H, V, W, Y                      4
K                                  5
J, X                               8
Q, Z                               10

How this should work:
"cabbage" should be scored as worth 14 points:

3 points for C
1 point for A, twice
3 points for B, twice
2 points for G
1 point for E
And to total:

3 + 2*1 + 2*3 + 2 + 1
= 3 + 2 + 6 + 3
= 5 + 9
= 14


# Task 2 

Hook up the react app to your API so that you have an input and a submit button that send an entered word to the endpoint. 
The response should then be shown along with the word in a table. 
This should allow you to do multiple requests for different words adding each to the table.
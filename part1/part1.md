## 1a
1. values added: 20
2. final result: 20
3. values added: 20
4. error since "result" will not be accesible outside the if statement
5. error since you cannot reassign a constant and result is already assigned to zero in line 5
6. error since you cannot reassign a constant and result is already assigned to zero in line 5

## 1b
1. Since i is declared as a var in the declaration for the for loop, we still have access to it and it will print 3, the length of prices
2. Since discountedPrice is declared as a var in the for loops, we still have access to it outside of the for loop and it will print 150, the discounted price for the last element of prices accessed in the for loop.
3. Since finalPrice is initialized before the for loop as a var its value assigned in the for loop will still hold outside the for loop and it will print 150.
4. This function will return an array discounted containing discounted values [50, 100, 150] as the function scales the value in prices by the discount argument.
5. Because let is used to define i in the declaration of the for loop, it will not be accessible outside the for loop and therefore gives an error.
6. Since let is used to define discountedPrice inside the for loop, it will not be accessible outside the for loop so it will give an error.
7. Since let is used to define finalPrice before the for loop, it will still be accessible after the for loop, so it will print 150.
8. This function will return [50,100,150] which are the scaled/discounted values since discounted is assigned using let and it is still accessible after the for loop.
9. Since i is declared in the declaration of the for loop, it is not accessible outside the for loop and will therefore cause an error.
10. Length is assigned as a constant before the for loop. The constant is still accessible after the for loop, so it will print 3, the length of prices.
11. This function will return the array [50,100,150] because even though discounted is declared as a const array, you can still push to it because you are simply manipulating it instead or reassigning it.
12. Data Types
    A. student.name
    B. student["Grad Year"]
    C. student.greeting()
    D. student["Favorite Teacher"].name
    E. student.courseLoad[0]
13. Arithmetic
    A. '32': it appends the number 2 to the character '3'
    B. 1: Since it is subtraction, it will take the integer value of '3' and subtract 2 from it
    C. 3: Null is treated as 0 so 3+0 = 3
    D. "3null": Since it is addition, the '3' and the null will be concatenated
    E. 4: True is treated as 1, so 3+1 = 4
    F. 0: false is treated as an integer 0 so 0 + null will be 0
    G. "3undefined": the undefined is cast to a string and concatenated with '3'
    H. NaN: it is not possible to subtract '3' - undefined since it is not possible to properly type cast.
14. Comparison
    A. True since the '2' is cast to an integer and 2 > 1
    B. False since they are both strings they are compared as strings character by character and '2' < '1' will return false
    C. True since we are using == the '2' will be cast to the integer 2 and compared to 2
    D. False since we are using === we don't cast any types and they are not the same types so it will return false
    E. False since True is treated as integer 1 and 1 != 2
    F. True since boolean(2) will be true and true === true
15. The == operator checks for integer equality, allowing for type casting/conversion while the === operator checks for both same type and same value.
16. part1b-question16.js
17. The result will return [2,4,6] since modifyArray uses the callback function provided in its arguments on each element of the array passed in. The callback function, doSomething, returns each value doubled and in the end modifyArray will return this array.
18. part1b-question18.js
19. The output will be 1, 4, 3, 2
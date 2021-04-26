## 1a
1. values added: 20
2. final result: 20
3. values added: 20;
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
8. 
# asindia-assignment

## Task 1
 ### To run the program in file Task1.cpp:
 - Use the following link to run the code online: https://www.programiz.com/cpp-programming/online-compiler/
 - Delete all content on the left and copy-paste the content of Task1.cpp.
 - Run the code from the 'Run' button, enter your input as first n and on second line space separated 1 to n with a missing number.
 ### Solution:
 - Program takes a single input(n) at first line then n-1 space separated integers i.e., 1 to n with a missing number.
 - The n-1 integers are stored in a vector data structure.
 - Vector containing the numbers is passed to a function getMissingNo along with its size.
 - The function works as follow: it takes the size of vector to calculate the sum of n numbers, then subtracts the sum of numbers in vector to obtain the missing value.
 - Lastly, the missing number is returned to print it on the console.

## Task 2
 ### To run the webpages which are in folder named 'webpages':
 - The copy of this task's project is here on this link: https://codesandbox.io/s/eloquent-sanderson-8td3s, once the page load completely the webpages can be seen at large by
   open in new window icon at the right upper corner. 
 - For the ease of running the webpages without any setup on local system use the link above.
 - Or to run on local system:
    - Use vs-code with nodejs intalled in the system.
    - Open a new terminal, navigate to the webpages folder then run "npm install", then run "npm start" command it will open the webpage in the browser.
 ### Solution:
 - The Login page takes email and password as credentials, at the moment any random email-password pair can be entered to log in.
 - The movielist page at the top contains a slider with top rated movies, the slider can be slided with the Next and Prev 
    buttons at the top corners to slide through the movie list slider.
 - After the top slider, there is the section where user can see the average rating and other users' comment and also comment themself.
 - Each movie card or row contain an image, average rating, write a comment button, synopsis, other users' comment and their rating.
 - The Write a Comment button hide the synopsis and expose a form to rate by stars and write a comment on a movie.

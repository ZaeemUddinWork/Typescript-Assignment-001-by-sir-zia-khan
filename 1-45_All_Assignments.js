//1.Install Node.js, TypeScript and VS Code on your computer.
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
console.log("Installation done!!");
//2.Personal Message: Store a person’s name in a variable, and print a message to that person. Your message should be simple, such as, “Hello Eric, would you like to learn some Python today?”
var nam = 'zaeem uddin';
console.log("Hello " + nam + ", would like to learn some python today?");
//3. Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
var name1 = 'Zaeem uddin';
console.log("\n\nName into Lower case  \n");
console.log(name1.toLowerCase());
console.log("\n\nName into Upper case \n");
console.log(name1.toUpperCase());
var titel_name = name1[0].toUpperCase() + name1[1].toLowerCase();
var word = name1.split(' ');
console.log("\n\nName into Titel case \n");
console.log(word[0].slice(0.5, 1.5).toUpperCase() + word[0].slice(1).toLowerCase() + " " + word[1].slice(0.5, 1.5).toUpperCase() + word[1].slice(1).toLowerCase());
/*4. Famous Quote: Find a quote from a famous person you admire.
    Print the quote and the name of its author.
    Your output should look something like the following,
    including the quotation marks:*/
/* Albert Einstein once said,
     “A person who never made a mistake never tried anything new.” */
console.log('Prophet Muhammad (PBUH) says, “When you see a person who has been given more than you in money and beauty, then look to those who have been given less.”');
/*5. Famous Quote 2: Repeat Exercise 4,
     but this time store the famous person’s name in a variable called famous_person.
     Then compose your message and store it in a new variable called message.
     Print your message.
 */
var famous_person = 'Prophet Muhammad (PBUH)';
var message = "“Hearts melt when the Beloved of Allah is mentioned.”";
console.log(famous_person + ' says,' + message);
/*6. Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name. Make sure you use each character combination, "\t" and "\n", at least once.
    Print the name once, so the whitespace around the name is displayed. Then print the name after striping the white spaces. */
var Name = "zaeem uddin";
console.log('ggggg \t fffff' + Name + 'fffff\n gggggg');
/*7. Number Eight: Write addition, subtraction, multiplication, and division operations that each result in the number 8. Be sure to enclose your operations in print statements to see the results. */
console.log('addition 6+2 = ' + (6 + 2));
console.log('subtraction 12-4 = ' + (12 - 4));
console.log('multiplication 2*4 = ' + (2 * 4));
console.log('division 40/5 = ' + (40 / 5));
/*8. You should create four lines that look like this:

       console.log(5 + 3)

       Your output should simply be four lines with the number 8 appearing once on each line.  */
console.log(6 + 2);
console.log(12 - 4);
console.log(2 * 4);
console.log(40 / 5);
/*9. Favorite Number: Store your favorite number in a variable. Then, using that variable, create a message that reveals your favorite number.Print that message. */
var favorite_number = 27;
var message1 = 'My favorite number is ';
console.log(message1 + favorite_number);
/*10. Adding Comments: Choose two of the programs you’ve written, and add at least one comment to each. If you don’t have anything specific to write because your programs are too simple at this point, just add
 your name and the current date at the top of each program file. Then write one sentence describing what the program does. */
// program for multiplication table of 9
var table = 9;
console.log('multiplication table of 9');
for (var num_1 = 0; num_1 < 11; num_1++) {
    console.log(table + ' x ' + num_1 + ' = ' + (table * num_1));
}
// Today date and time
console.log(Date());
/*11. Names: Store the names of a few of your friends in a array called names. Print each person’s name by accessing each element in the list, one at a time.  */
var namess = ['Taha', 'Zaeem', 'Ali', 'Najam'];
console.log(namess[0]);
console.log(namess[1]);
console.log(namess[2]);
console.log(namess[3]);
/*12.Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them.
 The text of each message should be the same, but each message should be personalized with the person’s name.  */
for (var i = 0; i <= 3; i++) {
    var message_1 = "\n Hi ".concat(namess[i], ", How are you ? \n I am inviting you to my birthday party!!");
    console.log(message_1);
}
/*13. Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples.
    Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.” */
var transportation = ['Tesla Model Y', 'Toyota Prius', 'Honda Accord', 'BMW 5 Series', 'BMW i5', 'Toyota Crown', 'Toyota Prius Prime'];
for (var i = 0; i <= 6; i++) {
    var message_2 = "I would like to own a ".concat(transportation[i], ".");
    console.log(message_2);
}
/*14. Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner.
 Then use your list to print a message to each person, inviting them to dinner. */
var names = ['Zaeem Uddin', 'Kamran Tessori', 'Sir Zia Khan', 'Taha Najam'];
for (var i = 0; i <= 3; i++) {
    var message_3 = "Hi Mr. ".concat(names[i], ", We are inviting you to our dinner party");
    console.log(message_3);
}
/*15. Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite. */
/* Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.

• Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.

• Print a second set of invitation messages, one for each person who is still in your list. */
for (var i = 0; i <= 3; i++) {
    var message_4 = "\n Hi Mr. ".concat(names[i], ", We are inviting you to our dinner party");
    console.log(message_4);
}
console.log("\n unfortunately ".concat(names[0], " will'not come to dinner party."));
names[0] = 'Elon musk';
for (var i = 0; i <= 3; i++) {
    var message_5 = "\n Hi Mr. ".concat(names[i], ", We are inviting you to our dinner party");
    console.log(message_5);
}
/*16. More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
    • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
    • Add one new guest to the beginning of your array.
    • Add one new guest to the middle of your array.
    • Use append() to add one new guest to the end of your list.
    • Print a new set of invitation messages, one for each person in your list. */
//loop for printing message
for (var i = 0; i <= 3; i++) {
    var message_6 = "Hi Mr. ".concat(names[i], ", We are inviting you to our dinner party /n");
    console.log(message_6);
}
console.log("\n unfortunately ".concat(names[0], " will'not come to dinner party."));
names[0] = 'Elon musk';
//loop for printing message
for (var i = 0; i <= 3; i++) {
    var message_7 = "Hi Mr. ".concat(names[i], ", We are inviting you to our dinner party \n");
    console.log(message_7);
}
console.log("!! Fortunately I found a Big table for dinner party so we can invite more guest to our dinner party !! \n");
// for beginning
names.unshift('mark zuckerberg');
// founction for Middle array
var additem = function (arry, index, add_new_name) { return __spreadArray(__spreadArray(__spreadArray([], arry.slice(0, index), true), [
    add_new_name
], false), arry.slice(index), true); };
var add_new_name = additem(names, 2, 'Imran Uddin');
// for end of Array
add_new_name.push('Ali Imran');
//loop for printing message
for (var i = 0; i <= 6; i++) {
    var message_8 = "Hi Mr. ".concat(add_new_name[i], ", We are inviting you to our dinner party \n");
    console.log(message_8);
}
/*17. Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
        • Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.
        • Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.
        • Print a message to each of the two people still on your list, letting them know they’re still invited.
        • Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program. */
//loop for printing message
for (var i = 0; i <= 3; i++) {
    var message_9 = "Hi Mr. ".concat(names[i], ", We are inviting you to our dinner party /n");
    console.log(message_9);
}
console.log("\n unfortunately ".concat(names[0], " will'not come to dinner party."));
names[0] = 'Elon musk';
//loop for printing message
for (var i = 0; i <= 3; i++) {
    var message_10 = "Hi Mr. ".concat(names[i], ", We are inviting you to our dinner party \n");
    console.log(message_10);
}
console.log("!! Fortunately I found a Big table for dinner party so we can invite more guest to our dinner party !! \n");
// for beginning
names.unshift('mark zuckerberg');
// founction for Middle array
var additemss = function (arry, index, add_new_name) { return __spreadArray(__spreadArray(__spreadArray([], arry.slice(0, index), true), [
    add_new_name
], false), arry.slice(index), true); };
var add_new_nam = additemss(names, 2, 'Imran Uddin');
// for end of Array
add_new_name.push('Ali Imran');
//loop for printing message
for (var i = 0; i <= 6; i++) {
    var message_11 = "Hi Mr. ".concat(add_new_nam[i], ", We are inviting you to our dinner party \n");
    console.log(message_11);
}
console.log('Unfortunately my new dinner table won’t arrive in time for the dinner, and I have space for only two guests. \n');
for (var i = 0; i <= 4; i++) {
    //deleting 4 person from name list
    var message_12 = "Hi Mr. ".concat(add_new_nam[i], ", We are really sorry that you are not invited to party. \n");
    console.log(message_12);
    add_new_nam.pop();
}
//invitation to two person 
console.log("Hi Mr. ".concat(add_new_nam[5], ", We telling you that you still invited to our dinner party!! \n"));
console.log("Hi Mr. ".concat(add_new_nam[6], ", We telling you that you still invited to our dinner party!! \n"));
//detele to more name now inventry is empty
add_new_nam.pop();
add_new_nam.pop();
// checking the empty list
for (var i = 0; i <= 6; i++) {
    console.log(add_new_nam);
}
/*18. Seeing the World: Think of at least five places in the world you’d like to visit.
    • Store the locations in a array. Make sure the array is not in alphabetical order.
    • Print your array in its original order.
    • Print your array in alphabetical order without modifying the actual list.
    • Show that your array is still in its original order by printing it.
    • Print your array in reverse alphabetical order without changing the order of the original list.
    • Show that your array is still in its original order by printing it again.
    • Reverse the order of your list. Print the array to show that its order has changed.
    • Reverse the order of your list again. Print the list to show it’s back to its original order.
    • Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
    • Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
    */
console.log('List of my favorite places in the world :');
//array of my favorite places
var place = ['Tokyo', 'Amazon', 'Antarctica', 'Atacama Desert', 'Banff National Park', 'Cappadocia', 'Etretat', 'Finnish Lapland'];
//printing place array  
console.log("\nIn original order\n");
console.log(place);
//printing place array  sorting in Alphabetical arranging 
console.log("\nIn Alphabetical order\n");
console.log(__spreadArray([], place, true).sort());
//.sort((a,b) => a.localeCompare(b))
console.log("\nIn Original order\n");
console.log(place);
console.log("\nIn Reverse Alphabetical order by useing sort()\n");
console.log(__spreadArray([], place, true).sort(function (a, b) { return b.localeCompare(a); }));
console.log("\nIn Original order\n");
console.log(place);
console.log("\nIn Reverse Alphabetical order by useing Reverse()\n");
//printing place array  sorting in reverse Alphabetical arranging 
console.log(__spreadArray([], place, true).sort().reverse());
console.log("\nIn Original order\n");
console.log(place);
/*19. Seeing the World: Think of at least five places in the world you’d like to visit.
        • Store the locations in a array. Make sure the array is not in alphabetical order.
        • Print your array in its original order.
        • Print your array in alphabetical order without modifying the actual list.
        • Show that your array is still in its original order by printing it.
        • Print your array in reverse alphabetical order without changing the order of the original list.
        • Show that your array is still in its original order by printing it again.
        • Reverse the order of your list. Print the array to show that its order has changed.
        • Reverse the order of your list again. Print the list to show it’s back to its original order.
        • Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
        • Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
*/
//loop for printing message
for (var i = 0; i <= 3; i++) {
    var message_13 = "Hi Mr. ".concat(names[i], ", We are inviting you to our dinner party /n");
    console.log(message_13);
}
console.log("\n unfortunately ".concat(names[0], " will'not come to dinner party."));
names[0] = 'Elon musk';
//loop for printing message
for (var i = 0; i <= 3; i++) {
    var message_14 = "Hi Mr. ".concat(names[i], ", We are inviting you to our dinner party \n");
    console.log(message_14);
}
console.log("!! Fortunately I found a Big table for dinner party so we can invite more guest to our dinner party !! \n");
// for beginning
names.unshift('mark zuckerberg');
// founction for Middle array
var additems = function (arry, index, add_new_name) { return __spreadArray(__spreadArray(__spreadArray([], arry.slice(0, index), true), [
    add_new_name
], false), arry.slice(index), true); };
var add_new_names = additems(names, 2, 'Imran Uddin');
// for end of Array
add_new_names.push('Ali Imran');
//loop for printing message
for (var i = 0; i <= 6; i++) {
    var message_15 = "Hi Mr. ".concat(add_new_names[i], ", We are inviting you to our dinner party \n");
    console.log(message_15);
}
console.log('Unfortunately my new dinner table won’t arrive in time for the dinner, and I have space for only two guests. \n');
for (var i = 0; i <= 4; i++) {
    //deleting 4 person from name list
    var message_16 = "Hi Mr. ".concat(add_new_name[i], ", We are really sorry that you are not invited to party. \n");
    console.log(message_16);
    delete add_new_name[i];
}
//invitation to two person 
console.log("Hi Mr. ".concat(add_new_name[5], ", We telling you that you still invited to our dinner party!! \n"));
console.log("Hi Mr. ".concat(add_new_name[6], ", We telling you that you still invited to our dinner party!! \n"));
var no_name = add_new_names.length;
console.log("".concat(no_name, " people will come to party"));
/*20. Think of something you could store in a array.
    For example, you could make a list of mountains,rivers, countries, cities, languages, or anything  else you’d like. Write a program that creates a list containing these items. */
var Countries_name = ['Japan', 'Pakistan', 'Canada', 'America', 'India'];
// program for printing Country name list
console.log('Countries name list \n');
for (var _i = 0, Countries_name_1 = Countries_name; _i < Countries_name_1.length; _i++) {
    var country = Countries_name_1[_i];
    console.log(country);
}
/*21. They think of something you could store in a TypeScript Object.  Write a program that creates Objects containing these items.*/
var person_identity = {
    Name: 'Taha Khan',
    Age: 23,
    Dob: '2/24/2001',
    nationality: 'Pakistani',
};
var person_identity_2 = {
    Name: 'Ali Khan',
    Age: 13,
    Dob: '3/14/2011',
    nationality: 'American',
};
var person_identity_3 = {
    Name: 'Najam Uddin',
    Age: 38,
    Dob: '12/07/1988',
    nationality: 'Canadian',
};
var Identity = [];
Identity.push(person_identity);
Identity.push(person_identity_2);
Identity.push(person_identity_3);
console.log("Air Port Recent suspicious person Data");
function Print_data(Identity) {
    for (var _i = 0, Identity_1 = Identity; _i < Identity_1.length; _i++) {
        var i = Identity_1[_i];
        console.log("   \n        Name: ".concat(i.Name, "\n        Age: ").concat(i.Age, "\n        Date ofBirth: ").concat(i.Dob, "\n        Pationality : ").concat(i.nationality, "\n        -x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-"));
    }
}
Print_data(Identity);
/*22. Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen. Change an index in one of your programs to produce an index error.
    Make sure you correct the error before closing the program. */
function person(name, age, nationality) {
    return {
        name: name,
        age: age,
        nationality: nationality,
    };
}
var person_data = [
    person('Taha', 18, 'Pakistani'),
    person('Ali', 13, 'Canadian'),
    person('Najam', 40, 'American'),
    person('Waleed', 20, 'Pakistani'),
    person('Ahmed', 28, 'Russian'),
    person('Zaeem', 22, 'Japan')
];
// for index error printing 
console.log("Printing index errpr of index 15: \n" + person_data[15]);
person_data.forEach(function (person_data) {
    console.log("\n    Person name: ".concat(person_data.name, "\n    Age: ").concat(person_data.age, "\n    Nationality: ").concat(person_data.nationality));
});
/*23. Conditional Tests: Write a series of conditional tests. Print a statement describing each test and your prediction for the results of each test. Your code should look something like this:
    let car = 'subaru';
    console.log("Is car == 'subaru'? I predict True.")
    console.log(car == 'subaru')
    • Look closely at your results, and make sure you understand why each line evaluates to True or False.
    • Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.
*/
var car = 'subaru';
console.log("Is car == 'subaru'? I predict True.");
console.log(car == 'subaru'); // Ture
console.log("Is car == 'Honda'? I predict false.");
console.log(car == 'Honda'); // false
console.log("Is car === 'subaru'? I predict True.");
console.log(car === 'subaru'); // Ture
console.log("Is car === 'Prius'? I predict false.");
console.log(car === 'Prius'); // false
console.log("Is car !== 'Toyota'? I predict Ture.");
console.log(car !== 'Toyota'); // Ture
console.log("Is car == 'Subaru'? I predict false.");
console.log(car == 'Subaru'); // false
console.log("Is car !== 'subaru'? I predict false.");
console.log(car !== 'subaru'); // false
console.log("Is car != 'BMW'? I predict Ture.");
console.log(car != 'BMW'); // Ture
console.log("Is car != 'Subaru'? I predict Ture.");
console.log(car != 'Subaru'); // Ture
console.log("Is car === 'Yamaha'? I predict false.");
console.log(car === 'Yamaha'); // false
/*24. More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests.
    Have at least one True and one False result for each of the following:
    • Tests for equality and inequality with strings

    • Tests using the lower case function Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
    • Tests using "and" and "or" operators
    • Test whether an item is in a array
    • Test whether an item is not in a array
*/
//• Tests for equality and inequality with strings
var str1 = 'Hi this is Zaeem!';
var str2 = 'hi this is zaeem!';
console.log('Comparing str1 to str2 :');
console.log(str1 == str2); // false
console.log(str1 !== str2); // True
//• Tests using the lower case function
console.log('Comparing str1 to str2 by converting str1 into Lowwer Case :');
console.log(str1.toLocaleLowerCase() !== str2); // false
console.log(str1.toLocaleLowerCase() === str2); // True
//• Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
var class_1 = 20;
var class_2 = 30;
var class_3 = 15;
var class_4 = 25;
var class_5 = 40;
var class_6 = 20;
console.log('Comparing number of students in class 1 and class 2 :');
console.log(class_1 == class_2); // false
console.log('Comparing number of students in class 1 and class 6 :');
console.log(class_1 == class_6); // True
console.log('Comparing number of students in class 4 greter than 20 or not:');
console.log(class_4 > 20); // True
console.log('Comparing number of students in class 4  less than 20 or not:');
console.log(class_4 < 20); // false
console.log('Is class greater or equal to 40 or not:');
console.log(class_5 >= 40); // True
console.log('Is class less or equal to 30 or not:');
console.log(class_5 <= 40); // false
//including Tests using "and" and "or" operators
console.log('Comparing number of students in class 3 and class 5 greter than 20 or not : ');
console.log(class_3 > 20 && class_5 > 20); // false
console.log('Comparing number of students in class 1 or class 3 greter than 20 or not : ');
console.log(class_3 > 20 || class_5 > 20); // True
//• Test whether an item is in a array
var car_brand = ['Toyota', 'Subaru', 'BMW', 'Honda', 'Tesla'];
console.log('Is car array has brand Toyota or not :');
if (car_brand.indexOf('Toyota') == 0) {
    console.log('ture'); //true
}
else {
    console.log('false'); //false
}
console.log('Is car array has brand Lamborghini or not :');
if (car_brand.indexOf('Lamborghini') == 0) {
    console.log('ture'); //true
}
else {
    console.log('false'); //false
}
//• Test whether an item is not in a array
if (car_brand.indexOf('Toyota') !== -1) {
    console.log('ture'); //true
}
else {
    console.log('false'); //false
}
if (car_brand.indexOf('Lamborghini') !== -1) {
    console.log('ture'); //true
}
else {
    console.log('false'); //false
}
/*25. Alien Colors #1: Imagine an alien was just shot down in a game. Create a variable called alien_color and assign it a value of 'green', 'yellow', or 'red'.
• Write an if statement to test whether the alien’s color is green. If it is, print a message that the player just earned 5 points.
• Write one version of this program that passes the if test and another that fails. (The version that fails will have no output.)
*/
// array for alien color
var alien_color = ['Green', 'Red', 'Yellow'];
//lopp for if statement
for (var i = 0; i < alien_color.length; i++) {
    // if condition for chaking alien color
    if (alien_color[i] === 'Green') {
        // if alien color is green so it will print this
        console.log('Player Just earn 5% points');
    }
    else {
        // else for nothing
    }
}
/*26. Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and write an if-else chain.
    • If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien.
    • If the alien’s color isn’t green, print a statement that the player just earned 10 points.
    • Write one version of this program that runs the if block and another that runs the else block.
*/
var alien_colors = ['Green', 'Red', 'Yello', 'Blue', 'White'];
//loop for array 
for (var i = 0; i < alien_colors.length; i++) {
    if (alien_colors[i] == 'Green') {
        //it will print this if alien is green color
        console.log("The player just earned 5 points for shooting the  ".concat(alien_colors[i], " color alien."));
    }
    else {
        // it will print this if alien isn't green color
        console.log("The player just earned 10 points for shooting the  ".concat(alien_colors[i], " color alien."));
    }
}
/*27. Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
    • If the alien is green, print a message that the player earned 5 points.
    • If the alien is yellow, print a message that the player earned 10 points.
    • If the alien is red, print a message that the player earned 15 points.
    • Write three versions of this program, making sure each message is printed for the appropriate color alien.

*/
for (var i = 0; i < alien_colors.length; i++) {
    if (alien_colors[i] == 'Green') {
        console.log("".concat(alien_colors[i], " color alien Earn 5 points"));
    }
    else if (alien_colors[i] == 'Yellow') {
        console.log("".concat(alien_colors[i], " color alien Earn 10 points"));
    }
    else if (alien_colors[i] == 'Red') {
        console.log("".concat(alien_colors[i], " color alien Earn 15 points"));
    }
    else {
        console.log("".concat(alien_colors[i], " color alien Earn 0 points"));
    }
}
/*28. Stages of Life: Write an if-else chain that determines a person’s stage of life. Set a value for the variable age, and then:
    • If the person is less than 2 years old, print a message that the person is a baby.
    • If the person is at least 2 years old but less than 4, print a message that the person is a toddler.
    • If the person is at least 4 years old but less than 13, print a message that the person is a kid.
    • If the person is at least 13 years old but less than 20, print a message that the person is a teenager.
    • If the person is at least 20 years old but less than 65, print a message that the person is an adult.
    • If the person is age 65 or older, print a message that the person is an elder.
*/
var age = [1, 2, 7, 15, 25, 80];
for (var i = 0; i < age.length; i++) {
    if (age[i] < 2) {
        console.log("This person is baby.");
    }
    else if (age[i] < 4) {
        console.log("This person is toddler.");
    }
    else if (age[i] < 13) {
        console.log("This person is kid.");
    }
    else if (age[i] < 20) {
        console.log("This person is teenager.");
    }
    else if (age[i] < 65) {
        console.log("This person is adult.");
    }
    else {
        console.log("This person is elder.");
    }
}
/*29. Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.
        • Make a array of your three favorite fruits and call it favorite_fruits.
        • Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement, such as You really like bananas!
*/
// list of mr favorite furits
var favorite_fruits = ['Orage', 'Banana', 'Apple', 'Mango'];
//loop for array condition checking
for (var i = 0; i < favorite_fruits.length; i++) {
    if (favorite_fruits[i] == 'Apple') {
        console.log("I really like ".concat(favorite_fruits[i]));
    }
    else if (favorite_fruits[i] == 'Strawberry') {
        console.log("I really like ".concat(favorite_fruits[i]));
    }
    else if (favorite_fruits[i] == 'Banana') {
        console.log("I really like ".concat(favorite_fruits[i]));
    }
    else if (favorite_fruits[i] == 'pineapple') {
        console.log("I really like ".concat(favorite_fruits[i]));
    }
    else if (favorite_fruits[i] == 'Mango') {
        console.log("I really like ".concat(favorite_fruits[i]));
    }
    else if (favorite_fruits[i] == 'Watermelon') {
        console.log("I really like ".concat(favorite_fruits[i]));
    }
    else if (favorite_fruits[i] == 'Orage') {
        console.log("I really like ".concat(favorite_fruits[i]));
    }
    else {
        console.log("......");
    }
}
/*30. Hello Admin: Make a array of five or more usernames, including the name 'admin'. Imagine you are writing code that will print a greeting to each user after they log in to a website.
    Loop through the array, and print a greeting to each user:
    • If the username is 'admin', print a special greeting, such as Hello admin, would you like to see a status report?
    • Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again.

*/
// admin data
var Admin = {
    user_name: 'Admin',
    password: 'Admin',
};
// marketing data
var Marketing = {
    user_name: 'Marketing',
    password: 'Marketing123',
};
//accountant data
var Accountant = {
    user_name: 'Accountant',
    password: 'Accountant123',
};
// other users data
var Mark = {
    user_name: 'Mark',
    password: 'Mark123',
};
var Taha = {
    user_name: 'Taha',
    password: 'Taha123',
};
var Kaito = {
    user_name: 'Kaito',
    password: 'Kaito123',
};
// assigning data into array
var data = [];
data.push(Admin);
data.push(Marketing);
data.push(Accountant);
data.push(Mark);
data.push(Taha);
data.push(Kaito);
// creating a function for condition checking for login user and passwords.
function login_function(data) {
    for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
        var i = data_1[_i];
        if (i.user_name == 'Admin' && i.password == 'Admin') {
            console.log("Hello ".concat(i.user_name, ", Would like to see a Status reports ?"));
        }
        else if (i.user_name == 'Marketing' && i.password == 'Marketing123') {
            console.log("Hello ".concat(i.user_name, ", Would like to see a Marketing Status ?"));
        }
        else if (i.user_name == 'Accountant' && i.password == 'Accountant123') {
            console.log("Hello ".concat(i.user_name, ", Would like to see a Financial reports or Management Reports ?"));
        }
        else {
            console.log("Hello ".concat(i.user_name, ", Thanks For login again."));
        }
    }
}
// calling function for working.
login_function(data);
/*31. No Users: Add an if test to Exercise 30 to make sure the list of users is not empty.
    • If the list is empty, print the message We need to find some users!
    • Remove all of the usernames from your array, and make sure the correct message is printed.
*/
// creating a function for condition checking for login user and passwords.
function login_function2(data) {
    for (var _i = 0, data_2 = data; _i < data_2.length; _i++) {
        var i = data_2[_i];
        if (i.user_name == 'Admin' && i.password == 'Admin') {
            console.log("Hello ".concat(i.user_name, ", Would like to see a Status reports ?"));
        }
        else if (i.user_name == 'Marketing' && i.password == 'Marketing123') {
            console.log("Hello ".concat(i.user_name, ", Would like to see a Marketing Status ?"));
        }
        else if (i.user_name == 'Accountant' && i.password == 'Accountant123') {
            console.log("Hello ".concat(i.user_name, ", Would like to see a Financial reports or Management Reports ?"));
        }
        else {
            console.log("Hello ".concat(i.user_name, ", Thanks For login again."));
        }
    }
}
// calling function for working.
login_function2(data);
var num = data.length;
for (var i = 0; i < num; i++) {
    data.pop();
}
console.log("Now Deeting all data in Array");
console.log('The data in Array is :   ' + data.length);
// checking if data is empty thant print this statement
if (data.length == 0) {
    console.log("We need to find some users");
}
/*32. Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
    • Make a list of five or more usernames called current_users.
    • Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.
    • Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a new username.
    If a username has not been used, print a message saying that the username is available.

    • Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.
*/
// current user list
var current_users = ['Ahmed', 'Taha', 'Mark', 'Ali', 'Elon'];
// new user list
var new_users = ['Raza', 'TAHA', 'Khan', 'Elon', 'Rameez', 'Mark'];
// converting all users name into lower case
var current_user_l = current_users.map(function (element) {
    return element.toLowerCase();
});
var new_users_l = new_users.map(function (element) {
    return element.toLowerCase();
});
// loop for checking current users name with new user names
for (var i = 0; i < new_users_l.length; i++) {
    switch (new_users_l[i]) {
        case current_user_l[0]:
            console.log("The user name ".concat(new_users_l[i], " has already taken !!"));
            break;
        case current_user_l[1]:
            console.log("The user name ".concat(new_users_l[i], " has already taken !!"));
            break;
        case current_user_l[2]:
            console.log("The user name ".concat(new_users_l[i], " has already taken !!"));
            break;
        case current_user_l[3]:
            console.log("The user name ".concat(new_users_l[i], " has already taken !!"));
            break;
        case current_user_l[4]:
            console.log("The user name ".concat(new_users_l[i], " has already taken !!"));
            break;
        case current_user_l[5]:
            console.log("The user name ".concat(new_users_l[i], " has already taken !!"));
            break;
        case current_user_l[6]:
            console.log("The user name ".concat(new_users_l[i], " has already taken !!"));
            break;
        default:
            //if name is not taken by any other person it will print this
            console.log("The user name ".concat(new_users_l[i], " is  available!!"));
            break;
    }
}
/*33. Ordinal Numbers: Ordinal numbers indicate their position in a array, such as 1st or 2nd. Most ordinal numbers end in th, except 1, 2, and 3.
    • Store the numbers 1 through 9 in a array.
    • Loop through the array.
    • Use an if-else chain inside the loop to print the proper ordinal ending for each number. Your output should read "1st 2nd 3rd 4th 5th 6th 7th 8th 9th", and each result should be on a separate line.
*/
//array for numbers
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//loop for checkin condition
for (var i = 0; i < numbers.length; i++) {
    if (numbers[i] == 1) {
        console.log("".concat(numbers[i], "st"));
    }
    else if (numbers[i] == 2) {
        console.log("".concat(numbers[i], "nd"));
    }
    else if (numbers[i] == 3) {
        console.log("".concat(numbers[i], "rd"));
    }
    else {
        console.log("".concat(numbers[i], "th"));
    }
}
/*34. Pizzas: Think of at least three kinds of your favorite pizza. Store these pizza names in a array, and then use a for loop to print the name of each pizza.
    • Modify your for loop to print a sentence using the name of the pizza instead of printing just the name of the pizza.
    For each pizza you should have one line of output containing a simple statement like I like pepperoni pizza.

    • Add a line at the end of your program, outside the for loop, that states how much you like pizza.
    The output should consist of three or more lines about the kinds of pizza you like and then an additional sentence, such as I really love pizza!
*/
var my_favorite_pizza = ['Fajita', 'Margherita', 'Chicken tikka'];
for (var i = 0; i < my_favorite_pizza.length; i++) {
    console.log("My favorite Pizza flavour is ".concat(my_favorite_pizza[i]));
}
console.log("!!!!! I really really really love pizza !!!!!");
/*35. Animals: Think of at least three different animals that have a common characteristic. Store the names of these animals in a list, and then use a for loop to print out the name of each animal.
    • Modify your program to print a statement about each animal, such as A dog would make a great pet.
    • Add a line at the end of your program stating what these animals have in common.
    You could print a sentence such as Any of these animals would make a great pet!
*/
//array of name of animals
var animal = ['Chimpanzees', 'Gorillas', 'Orangutans'];
// places where we can found this animals
var places = ['Burundi', 'Uganda', 'Sumatra'];
//loop for printing these all animals
for (var i = 0; i < animal.length; i++) {
    console.log("".concat(animal[i], " found on ").concat(places[i]));
}
//last statement
console.log("These all animal and their extinct ancestors form a family of organisms known as the Hominidae.");
console.log("\n\n\n Another methode \n\n\n");
// by doing with another methoes
//2nd methode
// all animals name with their places
var Chimpanzees = {
    animal: 'Chimpanzees',
    places: 'Burundi'
};
var Gorillas = {
    animal: 'Gorillas',
    places: 'Uganda'
};
var Orangutans = {
    animal: 'Orangutans',
    places: 'Sumatra'
};
// now puting all these into array
var animals = [];
animals.push(Chimpanzees);
animals.push(Gorillas);
animals.push(Orangutans);
//making a function for anima lopp for printing
function Animal_loop(animals) {
    for (var _i = 0, animals_1 = animals; _i < animals_1.length; _i++) {
        var i = animals_1[_i];
        console.log("Animal Name: ".concat(i.animal, " is found on ").concat(i.places, " place."));
    }
}
Animal_loop(animals);
//last statement
console.log("These all animal and their extinct ancestors form a family of organisms known as the Hominidae.");
/*36. T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message that should be printed on the shirt.
    The function should print a sentence summarizing the size of the shirt and the message printed on it.
    Call the function.
*/
//data for array
var blue_shirt = {
    color: 'Blue',
    Size: 'Large',
    message: '!! Break The Rules !!'
};
var green_shirt = {
    color: 'Green',
    Size: 'Small',
    message: '!! I am the King !!'
};
var red_shirt = {
    color: 'Red',
    Size: 'Medium',
    message: "!! I don't trust in love !!"
};
var yellow_shirt = {
    color: 'Yellow',
    Size: 'Extra Large',
    message: '!! Be the King not slave !!'
};
var white_shirt = {
    color: 'White',
    Size: 'Extra Small',
    message: '!! give respect and take respect !!'
};
// putting data into array
var shirt = [];
shirt.push(blue_shirt);
shirt.push(green_shirt);
shirt.push(red_shirt);
shirt.push(yellow_shirt);
shirt.push(white_shirt);
console.log("Special Order List:");
// function for print order list
function make_shirt(shirt) {
    for (var _i = 0, shirt_1 = shirt; _i < shirt_1.length; _i++) {
        var i = shirt_1[_i];
        console.log(" \n            Shirt color: ".concat(i.color, "\n            Shirt Size: ").concat(i.Size, "\n            Message to be Printing on shirt: \"").concat(i.message, "\"\n            x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x\n\n        "));
    }
}
// calling function
make_shirt(shirt);
/*37. Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript.
      Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.

*/
//data for array
var blueshirt = {
    color: 'Blue',
    Size: 'Large',
    message: '!! T love TypeScript !!'
};
var redshirt = {
    color: 'Red',
    Size: 'Medium',
    message: "!! T love TypeScript !!"
};
var greenshirt = {
    color: 'Green',
    Size: 'Small',
    message: '!! I am the King !!'
};
var yellowshirt = {
    color: 'Yellow',
    Size: 'Extra Large',
    message: '!! Be the King not slave !!'
};
var whiteshirt = {
    color: 'White',
    Size: 'Extra Small',
    message: '!! give respect and take respect !!'
};
// putting data into array
var shirts = [];
shirt.push(blueshirt);
shirt.push(redshirt);
shirt.push(greenshirt);
shirt.push(yellowshirt);
shirt.push(whiteshirt);
console.log("Special Order List:");
// function for print order list
function make_shirts(shirts) {
    for (var _i = 0, shirts_1 = shirts; _i < shirts_1.length; _i++) {
        var i = shirts_1[_i];
        console.log(" \n            Shirt color: ".concat(i.color, "\n            Shirt Size: ").concat(i.Size, "\n            Message to be Printing on shirt: \"").concat(i.message, "\"\n            x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x\n\n        "));
    }
}
// calling function
make_shirts(shirts);
/*38. Cities: Write a function called describe_city() that accepts the name of a city and its country.
        The function should print a simple sentence, such as Karachi is in Pakistan.
        Give the parameter for the country a default value.
        Call your function for three different cities, at least one of which is not in the default country.
*/
//data of cities and countries
var city_1 = {
    city: 'Karachi',
    Country: 'Pakistan'
};
var city_2 = {
    city: 'Tokyo',
    Country: 'Japan'
};
var city_3 = {
    city: 'New York',
    Country: 'America'
};
var city_4 = {
    city: 'London',
    Country: 'United Kingdom'
};
var city_5 = {
    city: 'Toyama',
    Country: 'Japan'
};
//array
var cities = [];
// pushing data into array
cities.push(city_1);
cities.push(city_2);
cities.push(city_3);
cities.push(city_4);
cities.push(city_5);
//creating function for describe city
function describe_city(cities) {
    for (var _i = 0, cities_1 = cities; _i < cities_1.length; _i++) {
        var i = cities_1[_i];
        console.log("".concat(i.city, " is city of ").concat(i.Country, "."));
    }
}
//calling function
describe_city(cities);
/*39. City Names: Write a function called city_country() that takes in the name of a city and its country.
        The function should return a string formatted like this:
        "Lahore, Pakistan"
        Call your function with at least three city-country pairs, and print the value that’s returned.
*/
var city1 = {
    city: 'Karachi',
    Country: 'Pakistan'
};
var city2 = {
    city: 'Tokyo',
    Country: 'Japan'
};
var city3 = {
    city: 'New York',
    Country: 'America'
};
var city4 = {
    city: 'London',
    Country: 'United Kingdom'
};
var city5 = {
    city: 'Toyama',
    Country: 'Japan'
};
//array
var city_countries = [];
// pushing data into array
city_countries.push(city1);
city_countries.push(city2);
city_countries.push(city3);
city_countries.push(city4);
city_countries.push(city5);
//creating function for describe city
function city_country(city_countries) {
    for (var _i = 0, city_countries_1 = city_countries; _i < city_countries_1.length; _i++) {
        var i = city_countries_1[_i];
        console.log("\"".concat(i.city, ", ").concat(i.Country, "\""));
    }
}
//calling function
city_country(city_countries);
/*40.    Album: Write a function called make_album() that builds a Object describing a music album.
    The function should take in an artist name and an album title, and it should return a Object containing these two pieces of information.
    Use the function to make three dictionaries representing different albums.
    Print each return value to show that Objects are storing the album information correctly.
    Add an optional parameter to make_album() that allows you to store the number of tracks on an album.
    If the calling line includes a value for the number of tracks, add that value to the album’s Object.
    Make at least one new function call that includes the number of tracks on an album.

*/
function make_album(name, Album_titel, tracks) {
    var albums = {
        name: name,
        Album_titel: Album_titel,
        tracks: tracks,
    };
    if (tracks !== undefined) {
        albums.tracks = tracks;
    }
    return albums;
}
var artist_1 = make_album('Saieen Zahoor', 'Toomba', 10);
var artist_2 = make_album('Raheem Shah', 'Ghum');
var artsit_3 = make_album('Qayaas', 'Heal', 22);
var artist_4 = make_album('Sajjad Ali', 'Goldies Not Oldies', 12);
var artist_5 = make_album('Pathanay Khan', 'Mera Ishq Vi Toon');
console.log(artist_1);
console.log(artist_2);
console.log(artsit_3);
console.log(artist_4);
console.log(artist_5);
/*41. Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.
*/
var Magicians = ['Abbot, David', 'Carney, John', 'Burlingame, H. J', 'Dietrich, Dorothy'];
//function to show magicians
function show_magicians(Names) {
    for (var _i = 0, Magicians_1 = Magicians; _i < Magicians_1.length; _i++) {
        var i = Magicians_1[_i];
        console.log("".concat(i, "."));
    }
}
show_magicians(Magicians);
/*42. Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name.
        Call show_magicians() to see that the list has actually been modified.
*/
// to show names with out great
show_magicians(Magicians);
// function for adding great in names
function make_great(Names) {
    for (var i = 0; i < Magicians.length; i++) {
        Magicians[i] = 'The Great ' + Magicians[i];
    }
}
// calling the function of adding great
make_great(Magicians);
// to show names with  great
show_magicians(Magicians);
/*43. Unchanged Magicians: Start with your work from Exercise 40.Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array.
    Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.

*/
//The array that will change
var Magicians2 = ['Abbot, David', 'Carney, John', 'Burlingame, H. J', 'Dietrich, Dorothy'];
console.log("\n \nList one of the best magicians without Great!! \n");
// to show names with out great
show_magicians(Magicians);
// calling the function of adding great
make_great(Magicians2);
console.log("\n \nList one of the best magicians with Great!! \n");
// to show names with  great
show_magicians(Magicians2);
/*44. Sandwiches: Write a function that accepts a array of items a person wants on a sandwich.
        The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered.
        Call the function three times, using a different number of arguments each time.

        */
function lets_make_sandwich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log('!!Sandwich ingredients Summary!!\n');
    if (items.length === 0) {
        console.log("!!!Please Add Items in your Sandwich!!!");
    }
    else {
        items.forEach(function (item, index) {
            console.log("".concat(index + 1, ". ").concat(item, ". \n"));
        });
    }
}
lets_make_sandwich('Bread slice', 'Lettuce', 'Tomatoes', 'Onions', 'Peppers', 'Pickles', 'Olives', 'Bread slice');
/*45. Cars: Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a model name.
        It should then accept an arbitrary number of keyword arguments. Call the function with the required information and two other name-value pairs, such as a color or an optional feature.
        Print the Object that’s returned to make sure all the information was stored correctly.
*/
function manufacturer_car(manufacturer, model) {
    var other_properties = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        other_properties[_i - 2] = arguments[_i];
    }
    var cars = {
        manufacturer: manufacturer,
        model: model,
    };
    for (var _a = 0, other_properties_1 = other_properties; _a < other_properties_1.length; _a++) {
        var _b = other_properties_1[_a], key = _b[0], value = _b[1];
        cars[key] = value;
    }
    return cars;
}
var Bwm_e5 = manufacturer_car('BMW', 'E5', ['Auto/Manual', 'Manual'], ['Color', 'White'], ['Wheels', 6]);
var Toyota_prius = manufacturer_car('Toyota', 'Prius', ['Color', 'Green']);
var Tesla = manufacturer_car('Tesla', 'Pro Max', ['Auto Drive (Yes or No)', 'Yes'], ['Color', 'White']);
var Honda = manufacturer_car('Honda', 'Future Xli', ['Color', 'Silver'], ['Flying model (yes or no)', 'Yes'], ['Tyres less (Yes or No)', 'Yes']);
console.log("\nWelseme to Asawa Japan Showroom !!\n");
console.log("List of the cars that we have rigt now \n");
console.log(Bwm_e5);
console.log(Toyota_prius);
console.log(Tesla);
console.log(Honda);

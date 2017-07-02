var array = [1,2,3]

/**
 
for(var i=0; i<array.length; i++) {
    var value = array[i];
    doSomethingWith(value);
}


lindsay loop
for(var i=0, value; value=array[i]; i++) {
    doSomethingWith(value);
}

function count(n) {
    for(var i=0; i==n; i++) {
        console.log("The number is %o", i);
    }
}

pass a function to another function
EXAMPLE

function double(x) {
    return(x*2);
}

function operate(f) {
    var nums = [1, 2, 4];
    for(var i=0; i<nums.length; i++) {
        var num = nums[i];
        console.log("Operations on %o is %o"; num, f(num));
    }
}

calling it:

operate(double);

returning function from function 

EXAMPLE (suppose you 
have 2 functions double and square)

function randomFunc() {
    if (Math.random() < 0.5 {
        return(square);
    } else {
        return(double);
    }
}

calling it
f = randomFunct();
f(10);


ANYMOUS FUNCTION
Example 1:

function flipCoin() {
    if (Math.random() < 0.5) {
        return("heads");
    } else {
        return("tails");
    }
}

EXAMPLE 2)

function randomFunc() {
    if (Math.random() < 0.5 {
        return(function(x) { return(x * x); });
    } else {
        return(function(x) { return(x * 2); });
    }
}

calling it
var f = randomFunct();
f(100);


OBJECTS
Example Objects are functions. Build a constructor (a function) use 'this' keyword, 
and use capital name for function name.

function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
}

creating a new object
var p = new Person("Kyle", "Roberts");

changing an object's field
p.middleName = "Carlyle";

creating an object method 
(functions that belong to objects)
p.fullName = function() {
    return(this.firstName + " " + this.lastName);
};

EXAMPLE 
function Circle(radius) {
    this.radius = radius;
    
    this.getArea =
    function() {
        return(Math.PI * this.radius * this.radius);
    };
}

var c = new Circle(10)
c.radius -> 10
c.getArea(); -> 314.1592..

Since functions are properties of each object,
to save on space (instead of making a
seperate copy of each function for each 
instance of an object, make a certain 
functions shared properties by- protype)

syntaz:: Classname.prototype.propertyName = value;
EXAMPLE

Circle.propotytpe.getArea = 
    function() {
        return(Math.PI * this.radius * this.radius);
    };

ANOTHER OPTION: GROUP METHODS BY TYPE
related functions are grouped together
for example the Math. functions

EXAMPLE
var MathUtils = {};

MathUtils.double = function(x) {
    return(x * 2);
}

MathUtils.double(6);

CREATE ANONYMOUS OBJECT
var person = { 
    firstName: "Kyle", lastName: "Roberts"
};

**/

function flipTest() {
    var count = 0;
    var total = 0;
    while(count < 5) {
        flipCoin();
        count++;
        console.log("The count is %o", count);
    }
}

function flipCoin() {
    if (Math.random() < 0.5) {
        return("Heads");
    } else {
        return("Tails");
    }
}

function test(a) {
    if (a == true) {
        return("Yes");
    } else {
        return("No");
    }
}
/**
 
 JSON 
 older way (REPL - Read-Eval-Print-Loop)
 now JSON.parse
 
 EVAL
 -eval can parse anything
 -for object literals you enclose in 
    ("") before eval
JSON.parse
 -only strict JSON
 -no extra parens
JSON.stringify 
-sending object the other way
    (turn it string)
 
OBJECT LITERAL 
(like a hash inside a string)
example of using .parse
var s = '{ "firstName": "Jane" }';
var p1 = JSON.parse(s);
p1.firstName -> "Jane";

Using objects
4 main POINTS
    1.make constructor functions
        use 'this' 
        call with 'new"
        start with capitable letter
        
    2. Use prototype function
    
    3. U can have anynous objects
    
    4. JSON 

Determine if left side is member of class
    with 'instanceof'
    
    'typeof' 

Add methods to existing classes
    using "Classname.prototype.yourMethod"
    and use "this" to refer to existing 
    properties
ex. 
    String.prototype.describeLength =
        function() {
            return("My lenght is " + this.length);
        };


jQuery

BASIC SYNTAX
$("css selector").operation1("operation1's property")operation2("property");
example
$("div h1").addClass("yellow").hide("slow");
::find all h1's in a div, add CSS class "yellow",
    then slowly make disappear
    
Simple selecting is jQuery

    $(".classname")
    $("#idsname")
    $("div")
    $("li b span.blah") <-returns all <span class="blah" inside b elements

The Basics jQuery functions:
    $("#some-id").val() 
        -> returns value of input
    $("selector").each(function)
        -> Calls function on each element
    $("selector").addClass("name")
        -> Add CSS class name to each 
    $("selector").hide()
        -> makes invisible (also show, fadeOut, fadeIn, etc)
    $("selector").click(function)
        -> Adds onclick handler. (Also change, focus, mouseover)
    $("selector").html("<tag>some html</tag>")
        -> Sets the innerHTML of each element. (Also append, prepend)

Array methods
const inventors = [
    { first: "Albert", last: "Einstein", year: 1879 },
    { first: "Isaad", last: "Newton", year: 1727 },
    { first: "Galileo", last: "Galilei", year: 1564 },
];

const people = [ "Beck, Glen", "Becker, Carl", "Roberts, Kyle" ];
]

const fifteen = inventors.filter(function(inventor) {
    if(inventor.year >= 1500 && inventor.year <1600) {
        return true; //keep it
    }
});

const fullNames = inventors.map(inventor => inventor.first + ' ' + inventor.last);

const ordered = inventors.sort(function(a,b) {
    if(a.year > b.year) {
        return 1;
    } else {
        return -1;
    }
});

const totalYears = inventors.reduce((total, inventor) => {
    return total + (inventor.passed - inventor.year);   
}, 0);

const oldest = inventors.sort(function(a, b) {
    const lastGuy = a.passed - a.year;
    const nextGuy = b.passed - b.year;
    if(lastGuy > nextGuy) {
        return -1;
    } else {
        return 1;
    }
    
    or in one line 
    return lastGuy > nextGuy ? -1 : 1;
});

**/

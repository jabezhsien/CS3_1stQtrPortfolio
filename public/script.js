    let x;
    x = 100; // Assigning a number to x
    x = "Hi."; // Reassigning a string to x
    x = 5; // Reassigning a number to x again

    window.alert("Welcome To \nRara's Web Development")
    document.write("Welcome to<br> Rara's Web Development<br>"); // This will write "Welcome to Rara's Web Development" to the document
    console.log("Welcome to\n Rara's Web Development" + "<br>") 

    document.write(x + 10 + "<br>"); // This will alert 15
    document.write(x + 10 + "<br>"); // This will write 15 to the document

    document.write(x + "10" + "<br>"); // This will alert "510"
    document.write(x + "10" + "<br>"); // This will write "510" to the document

    document.write("10" + x * 2 + "<br>"); // This will alert "10100"
    document.write("100" * 10 + "<br>"); // This will write 1000 to the document

    document.write("10" - x + "<br>"); // This will write 5 to the document    

    document.write(x == "10"); // This will write false to the document
    document.write("<br>");
    document.write(x = "10" + "<br>"); // This will write "10" to the document
    document.write(x == "10"); // This will write true to the document
    document.write("<br>");    
    document.write(x === "10"); // This will write false to the document
    document.write("<br>");
    document.write(x === 10); // This will write true to the document
    document.write("<br>");

    document.write(++x + "<br>"); // This will write 11 to the document
    document.write(!x); // This will write false to the document
    document.write("<br>");

    let y = 10;
    document.write(`Hello 5${y}`); // This will write "Hello 510" to the document
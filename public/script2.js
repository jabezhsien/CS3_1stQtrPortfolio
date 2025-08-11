let confirm = window.confirm("You sure of your answers??"); // confirm the inputs
        // boolean data type, true or false
        // if the user clicks "OK", confirm is true, else false

        if (confirm) { // you can also put "if (confirm == true)" but it's not necessary
            let totalRequired = (Number(NumPerDay) * 365) * (Number(MaxAge) - Number(age)); // the number of biscuits I eat per year
            // display on browser
            // "Number" converts input (string) to a number value
            document.write("You will need " + totalRequired + " biscuits to last you until the ripe old age of " + MaxAge + ".");
            // pop-up dialog box
            alert(`You will need ${totalRequired} biscuits to last you until the ripe old age of ${MaxAge}.`);
            // browser's inspect console
            console.log("You will need " + totalRequired + "biscuits to last you until the ripe old age of " + MaxAge + ".");

        } else {
            window.alert("Please click run again and enter your age, maximum age, and number of snacks daily correctly.");


        }
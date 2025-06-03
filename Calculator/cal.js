let string = ""; // This will hold the entire expression like "5+9*2"
let buttons = document.querySelectorAll('button');
let screen = document.getElementById("screen");

for(let i=0;i<buttons.length;i++)
{
    let button=buttons[i];

    button.addEventListener("click", () => {
        let value = button.innerText;
        console.log(value);
         if (value === "=") {
            try {
                string = eval(string);
                screen.innerText = string;
            } catch (error) {
                screen.innerText = "Error";
                string = "";
            }
        } 
        else if(value==="AC"){
            string="";
            screen.innerText="";
        }
        else if (value === "NAN") {
            screen.innerText = "NaN";
            string = "";
        } 
        else {
            string += value;
            screen.innerText = string;
        }
    
    });

};


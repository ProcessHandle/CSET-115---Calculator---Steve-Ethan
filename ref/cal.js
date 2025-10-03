const calculator = () => 
{
    const prompt = require('prompt-sync')();
    const add = () =>{
        console.log(`What is the first number you want to add?`)
        let x = Number(prompt(">  "))
        while(isNaN(x))
        {
            console.log("Thaat is not a computable number!")
            console.log(`What is the first number you want to add?`)
           x = Number(prompt(">  "))
        }
        console.log(`What is the Second number you want to add?`)
        let y = Number(prompt(">  "))
        while(isNaN(y))
        {
            console.log("Thaat is not a computable number!")
            console.log(`What is the Second number you want to add?`)
            y = Number(prompt(">  "))
        }
        return x+y;
    }
    //----------------------------------------------------------------------------------------------------
    const subtract = () =>{
        
        console.log(`What is the first number you want to subtract?`)
        let x = Number(prompt(">  "))
        while(isNaN(x))
        {
            console.log("Thaat is not a computable number!")
            console.log(`What is the first number you want to subtract?`)
            x = Number(prompt(">  "))
            i}
        }
        console.log(`What is the Second number you want to subtract?`)
        let y = Number(prompt(">  "))
        while(isNaN(y))
        {
            console.log("Thaat is not a computable number!")
            console.log(`What is the Second number you want to subtract?`)
            y = Number(prompt(">  "))
            if(y !== NaN){
                break;
            }
            else{continue;}
        }
        return x-y;
    }
    //----------------------------------------------------------------------------------------------------
    const multiply = () =>{
        
        console.log(`What is the first number you want to multiply?`)
        let x = Number(prompt(">  "))
        while(isNaN(x))
        {
            console.log("Thaat is not a computable number!")
            console.log(`What is the first number you want to multiply?`)
            x = Number(prompt(">  "))
           
        }
        console.log(`What is the Second number you want to multiply?`)
        let y = Number(prompt(">  "))
        while(isNaN(y))
        {
            console.log("Thaat is not a computable number!")
            console.log(`What is the Second number you want to multiply?`)
            y = Number(prompt(">  "))
           
        }
        return x*y;
    }
    //----------------------------------------------------------------------------------------------------
    const divide = () =>{
        
        console.log(`What is the first number you want to divide?`)
        let x = Number(prompt(">  "))
        while(isNaN(x))
        {
            console.log("Thaat is not a computable number!")
            console.log(`What is the first number you want to divide?`)
            x = Number(prompt(">  "))
           
        }
        console.log(`What is the Second number you want to divide?`)
        let y = Number(prompt(">  "))
        while(isNaN(y))
        {
            console.log("Thaat is not a computable number!")
            console.log(`What is the Second number you want to divide?`)
            y = Number(prompt(">  "))
        }
        return x/y;
    }
    //----------------------------------------------------------------------------------------------------
    console.log(`Would you like to\n[1.]Add\n[2.]Subtract\n[3.]Multiply\n[4.]Divide`);
    let choice = prompt("> ");
    if(choice === "1"){console.log(add()) 
        calculator()}
    else if(choice === "2"){console.log(subtract())
         calculator()
    }
    else if(choice === "3"){console.log(multiply())
         calculator()
    }
    else if(choice === "4"){console.log(divide())
         calculator()
    }
    else{
        console.log(`Please input the number corresponding to the action you want to take!`) 
        calculator()
        }

calculator()
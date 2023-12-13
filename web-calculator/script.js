let buttons = document.querySelectorAll('.button');
string = ""
Array.from(buttons).forEach((button)=>{
    button.addEventListener('click', (e)=>{
        console.log(e.target.innerHTML)
        if(e.target.innerHTML == '='){
            document.querySelector('input').value = eval(string);
            string = eval(string);
        }
        else if(e.target.innerHTML == ' RESET '){
            document.querySelector('input').value = "";
            string = document.querySelector('input').value;
        }
        else if(e.target.innerHTML== 'DEL' ){
            document.querySelector('input').value = document.querySelector('input').value.slice(0,-1);
            string = string.substr(0, -1);
        }
        else if(e.target.innerHTML== '√' ){
            string = string+"**0.5";
            document.querySelector('input').value  += "^0.5" ;
            
        } 
        else if(e.target.innerHTML== '^' ){
            string = string+"**"
            document.querySelector('input').value += "^";
        }      
        else if(e.target.innerHTML== 'tan'){
            console.log(e.target.innerHTML)
            if(string != ""){
                string = (Math.tan(+string)).toString();
                document.querySelector('input').value  =  "tan("+document.querySelector('input').value +")";
            }
        } 
        else if(e.target.innerHTML== 'sin'){
            if(string != ""){
                string = (Math.sin(+string)).toString();
                document.querySelector('input').value  =  "sin("+document.querySelector('input').value +")";
            }
        } 
        else if(e.target.innerHTML== 'cos'){
            if(string != ""){
                string = (Math.cos(+string)).toString();
                document.querySelector('input').value  =  "cos("+document.querySelector('input').value +")";
                console.log(string)
            }
        } 
        else if(e.target.innerHTML== 'ln'){
            if(string != ""){
                string = (Math.log(+string)).toString();
                document.querySelector('input').value  =  "ln("+document.querySelector('input').value +")";
            }
        } 
        else if(e.target.innerHTML== 'log'){
            if(string != ""){
                string = ((Math.log(+string))/Math.log(10)).toString();
                document.querySelector('input').value  =  "log("+document.querySelector('input').value +")";
            }
        } 
        else if(e.target.innerHTML=='π'){
            if(string==""){
                string = (Math.PI).toString();
            }
            else{
                string = string + (Math.PI).toString();
                document.querySelector('input').value  +="π";
            }
        }
        else{
            document.querySelector('input').value +=e.target.innerHTML;
            string = string+=e.target.innerHTML
        }
    })
})
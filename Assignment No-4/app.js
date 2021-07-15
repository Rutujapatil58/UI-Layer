/*var no1=0;
document.getElementById("result").innerText=no1;
function button1(){
    no1=no1-1;
    document.getElementById("result").innerText=no1;
}
function button2(){
    no1=no1+1;
    document.getElementById("result").innerText=no1;
}
*/








const counter = (
    function () {
        var counterValue = 0;
        // change By a particular value => 1,2,3
        function changeBy(val) {
            console.log("changeBy called");
            counterValue = counterValue + val;
        }
        return {
            increment: function () {
                console.log("increment called");
                changeBy(1);
            },
            decrement: function () {
                console.log("decrement called");
                changeBy(-1);
            },
            value: function () {
                return counterValue;
            }
        };
    })();
function onClick(event) {
    console.log("onclick called on"+event.target.id);
    const result = document.getElementById("result");
    switch (event.target.id) {
        case "button1":
            counter.decrement()
            break;
        case "button2":
            counter.increment()
            break;
        default:
            console.log("default is called");
            break;
    }
    result.innerHTML = counter.value();
}


//console.log(counter.value);
console.log("Befor change " + counter.value());
console.log(counter.increment());
console.log(counter.increment());
console.log(counter.increment());
console.log("After 3 increment " + counter.value());
console.log(counter.decrement());
console.log("After decrement " + counter.value());



/*const app=(
    function (){
        console.log("app is loading ...");
        let userName="Tanay";
        let email="tanay.bhandarkar@mastek.com";
        let dob="12/12/1999";
    
        function display(){
            console.log(userName+ " "+email+" "+dob);
        }
    
        display();
    }   
)();*/


/*const app=(
    function (){
        console.log("app is loading ...");
        let userName="Ajit";
        let email="Ajit.Sing@mastek.com";
        let dob="12/12/1999";
    
        function display(){
            console.log(userName+ " "+email+" "+dob);
        }
    
        display();
    }   
);
app(); */
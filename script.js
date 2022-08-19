function BmI ( weight,height){
  let resutl =   weight / (height * height)
return resutl;


}
console.log(BmI(10,10));
console.log(BmI(10,10));
console.log(BmI(10,10));
console.log(BmI(10,10));
console.log(BmI(10,10));


function Status (BmI){

    if (BmI < 18.5) {
    document.getElementById("result").style.color="orange";
        return"نقص بالوزن ";

    
    }else if (BmI>=18.5 && BmI<=25 ) {
      document.getElementById("result").style.color="green";
    return "وزنك صحي";

    
    }else if(BmI>=25) {
      document.getElementById("result").style.color="orange";
    return "لديك زياده بالوزن";
    
    
    
    }















}

function calculate() {
let weight= document.getElementById("weight").value;
let height= document.getElementById("height").value;
let bmi = BmI(weight,height)
let desc = Status (bmi);
let div = document.getElementById('result');
 div.innerText = bmi + " == " + desc;

}




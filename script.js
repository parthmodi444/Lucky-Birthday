const dateOfBirth=document.querySelector("#date-of-birth");
const luckyNumber=document.querySelector("#lucky-number");
const checkNumberButton=document.querySelector("#check-number");
const outputBox=document.querySelector("#output-box");
checkNumberButton.addEventListener("click",function checkBirthDateIsLucky()
{
const sum=calculateSum(dateOfBirth.value);
if((dateOfBirth.value.length === 0) || luckyNumber.value==="")
{
    outputBox.innerHTML="U should enter the values";

}
else if(sum%(luckyNumber.value)===0)
{
outputBox.innerHTML="Your Birthday is lucky";
}
else{
    outputBox.innerHTML="Your Birthday is not lucky";

}

}
);

function calculateSum(date)
{
    var sum=0;
     var dob=date.replaceAll("-","");
     for(let index=0;index<dob.length;index++)
     {
        sum=sum+Number(dob.charAt(index));
        console.log(sum);
     }
    return sum;


}
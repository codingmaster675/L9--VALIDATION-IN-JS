function validate(){
         var y=document.getElementById("Name").value;
                  if (y == ""){
           //document.getElementById("name").innerHTML="Bior";
        alert("Please put your name")
            return false;
         };      
         if(y.length < 5 ){
            alert("Your name is less then 5 characters")
         }
};
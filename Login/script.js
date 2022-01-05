//Déclaration
let check = document.querySelector('#example')
let pass = document.querySelector('#password')
let mail = document.querySelector('#mail')
let button = document.querySelector('#submit')
let forme = document.querySelector('#forme')
//SHOW PASSWORD
function toggleClicked ()
{
      if(this.checked) {
          pass.type = "text";
      } else {
          pass.type = "password";
      }
}
check.addEventListener("click", toggleClicked);

//Model LOGIN 
// document.addEventListener("DOMContentLoaded", function() {
//     var myModal = new bootstrap.Modal(document.getElementById("myModal"));
//     myModal.show();
// });

//LOGIN
forme.addEventListener('submit',(e)=>{
    e.preventDefault();
    var pas=  /^[A-Za-z]\w{7,14}$/;
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail.value) && password.value.match(pas))
    {
            window.location.href='../Index.html'
    }
    else
    {
        alert("Sorry !! You have entered an invalid email address or password!")
        window.location.href='../Login/Index.html'
    }
});



//EMAIL&REGEX
function ValidateEmail(mail) 
{
 if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail.value))
  {
    return (true)
  }
    alert("Sorry !! You have entered an invalid email address!")
    return (false)
}

//PASSWORD&REGEX
function ValidatePassword(password) 
{
    var pas=  /^[A-Za-z]\w{7,14}$/;
    if(password.value.match(pas)) 
    {
        return true;
    }   
    else
    { 
        alert('Wrong...!')
        window.location.href='../Login/Index.html'
        return false;
    }
}

let check = document.querySelector('#check')
check.addEventListener('click',()=>
{
    var x = document.getElementById("pasword");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
})

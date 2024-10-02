function checkemail(){
    let emailcheck=document.getElementById("email").value
    let para1=document.querySelector('#message1')

    if(emailcheck.length>3 && emailcheck.includes('@') && emailcheck.includes('.')){
         para1.style.display=`none`
         return true
    }
    else {
        para1.style.display=`block`
        return false
    }
}
function checkpass(){
    let pass=document.getElementById("password").value
    let para2=document.querySelector('#message2')

    if(pass.length>8 ){
        para2.style.display=`none`
        return true
   }
   else {
       para2.style.display=`block`
       return false
   }
}

function good(){
    let right1=checkemail()
    let right2=checkpass()

    if(right1 && right2){

      let paragraph=document.getElementById('right')
       paragraph.innerText=`All Good To Go`
      
    }
    
}

function confirmfirst(){
  let confirm=window.confirm("Are you sure you want to submit?")
  if (confirm===true){
    alert("successful signup")
    
  }
  else {
    location.reload()
    return false 
  }
 }

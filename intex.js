// function sendMail(){
//     var prams = {
//         name:document.getElementById("name").value,
//         email:document.getElementById("email").value,
//         message:document.getElementById("messge").value,
//     }
//     const serviceID = "service_ij9sjgi"
//     const templateID = "template_9vuwfer"
    
    
//     emailjs
//     .send(serviceID,templateID,prams).then(
//     res => {
//         document.getElementById("name").value = "";
//         document.getElementById("email").value = "";
//         document.getElementById("message").value = "";
//         console.log(res);
//         alert("your message sent succesfuly")
        
//     }).catch((err) => console.log(err))
// }
function sendMail() {
    var params = {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      message: document.getElementById("message").value,
    };
  
    const serviceID = "service_ij9sjgi";
    const templateID = "template_9vuwfer";
  
      emailjs.send(serviceID, templateID, params)
      .then(res=>{
          document.getElementById("name").value = "";
          document.getElementById("email").value = "";
          document.getElementById("message").value = "";
          console.log(res);
          alert("Your message sent successfully!!")
  
      })
      .catch(err=>console.log(err));
  
  }
  
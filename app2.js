
 import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
 import { getFirestore , addDoc , collection } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";
 
 
  const firebaseConfig = {
    apiKey: "AIzaSyD4rJbr8LS2Ut-PoI-0TzyQfcuRiiWoA10",
    authDomain: "hackathonproject-37952.firebaseapp.com",
    projectId: "hackathonproject-37952",
    storageBucket: "hackathonproject-37952.appspot.com",
    messagingSenderId: "1085036460611",
    appId: "1:1085036460611:web:51ada7e4b6d4a94d37f2f6",
    measurementId: "G-ZRT149Y4V2"
  };

  
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);


  const inp1 = document.querySelector("#inp1")
const inp2 = document.querySelector("#inp2")
const inp3 = document.querySelector("#inp3")
const inp4 = document.querySelector("#inp4")
const inp5 = document.querySelector("#inp5")

let adminbtn = document.querySelector(".adminbtn")
if(adminbtn){
    adminbtn.addEventListener("click" , async() =>{
      if(inp1.value == ""){
        alert("please Fill the field")
      }  
      else if(inp2.value == ""){
        alert("please Fill the field")
      }
      else if(inp3.value == ""){
        alert("please Fill the field")
      }
      else if(inp4.value == ""){
        alert("please Fill the field")
      } 
      else if(inp5.value == ""){
        alert("please Fill the field")
      }
      
      else{
        const docRef = await addDoc(collection(db, "Admin data"), {
        
            Restaurant: inp1.value,
            Email: inp2.value,
            Password: inp3.value,
            City : inp4.value,
            Phone_Number: inp5.value
    
        })
   
    console.log("Your Information is written in :" , docRef.id)
    alert("Confirm?")
    location.href = "adminsignin.html"
    
   

    }
    })
    
}




  

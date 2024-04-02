import type { User } from "./User";
import {jwtDecode} from "jwt-decode"; 

export class UserRepository{
    
  public async LoginControl(user : User){
    const response=await fetch("http://localhost:5217/api/User/login",{
        method: "POST", 
        headers: {
            "Content-Type":"application/json",
        },
        body:JSON.stringify(user),
    });
      if(response.ok){
          const data=await response.json();
          const decoded = jwtDecode(data.token);
          console.log("Decoded Token:", decoded);
          sessionStorage.setItem('token', data.token);

          return response;
      }
      else{

        console.log("giriÅŸ baÅŸarÄ±sÄ±z",user);
      }
    }

    public async Register(user : User) {
        try {
            const response=await fetch("http://localhost:5217/api/User",{
        method: "POST", 
        mode:"cors",
        headers: {
            "Content-Type":"application/json",
        },
        body:JSON.stringify(user),
        
    });
    console.log("res",response);
            if (response.status === 200) {
              console.log("kayÄ±t baÅŸarÄ±lÄ±",user);
              const data=await response.json();
              const decoded = jwtDecode(data.token);
              console.log("Decoded Token:", decoded);
              sessionStorage.setItem('token', data.token);
              sessionStorage.setItem('name',user.displayname);
              return response;
 
            } else {
              console.log("response",response);
              console.log("kayÄ±t baÅŸarÄ±sÄ±z", user, response);
              throw new Error("kayÄ±t olunamadÄ±");
            }
          } catch (error) {
            console.error("Bir hata oluÅŸtu:", error);
            throw error; 
          }
        }
    }

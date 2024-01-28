 export const checkvalidata=(email,password,name)=>{
 const isemailvalid= /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(email);
 const ispasswordvalid=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
 const isname=/^[\\p{L} .'-]+$/.test(name);
 if(!isemailvalid) return "please enter vaild email";
 if(!ispasswordvalid) return "please enter vaild password";
 if(! isname) return "please enter valid name !!";
 return null
}
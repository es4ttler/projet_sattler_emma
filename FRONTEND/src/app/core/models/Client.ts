export class Client{
  civility: string="";
  name: string="";
  firstname: string="";
  tel: string="";
  email: string="";
  address: string="";
  city: string="";
  cp: string="";
  country: string="";
  login: string="";
  password: string="";
  passwordConfirm:string="";
    
  isEmpty (){
    return (this.civility.length===0)&&
    (this.name.length===0)&&
    (this.firstname.length===0)&&
    (this.tel.length===0)&&
    (this.email.length===0)&&
    (this.address.length===0)&&
    (this.city.length===0)&&
    (this.cp.length===0)&&
    (this.country.length===0)&&
    (this.login.length===0)&&
    (this.password.length===0)&&
    (this.passwordConfirm.length===0) as boolean
  }
  isComplete(){
    return (this.civility.length>0)&&
    (this.name.length>0)&&
    (this.firstname.length>0)&&
    (this.tel.length>0)&&
    (this.email.length>0)&&
    (this.address.length>0)&&
    (this.city.length>0)&&
    (this.cp.length>0)&&
    (this.country.length>0)&&
    (this.login.length>0)&&
    (this.password.length>0)&&
    (this.passwordConfirm.length>0) as boolean
  }
}
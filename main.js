let userArr =[];
let cusArr = [];
class user{
    constructor(fullName,email,password){
        this.fullName=fullName;
        this.email = email;
        this.password =password;
    }
}
class customer{
    constructor(name,address,salary,nic){
        this.name=name;
        this.address = address;
        this.salary =salary;
        this.nic =nic;
    }
}






//============ user management================

const createUser = ()=>{
    const fullName =$('#full-name').val();
    const email =$('#register-email').val();
    const password =$('#register-password').val();

    // const hash = bcrypt.hashSync(password,bcrypt.genSaltSync(10));
    // console.log(hash);
    

    let createdUser = new user(fullName,email,password);
    let existUser = userArr.find(e=>e.email === email);
    if(existUser){
        alert('user email already exist!')
        return;
    }
    userArr.push(createdUser);
    console.log(userArr);
    
}

const login =()=>{

    const email =$('#email').val();
    const password = $('#password').val();

    let existUser = userArr.find(e=>e.email ===email);
    if(existUser){
        if(existUser.password === password){
            //login dashboard
        }else{
            alert('password invalid');
            return;
        }
    }else{
        alert('invalid email');
    }
}

const createCustomer=()=>{}
const findCustomer=(id)=>{}
const updateCustomer=(id)=>{}
const deleteCustomer=(id)=>{}
const getAllCustomer=()=>{}

const clearAndLoad = (element)=>{}



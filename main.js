let userArr =[];
let cusArr = [];
class user{
    constructor(fullName,email,password){
        this.fullName=fullName;
        this.email = email;
        this.password =password;
    }
}
class Customer{
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

const createCustomer=()=>{
    const customer = new Customer(
        $('#name').val(),
        $('#address').val(),
        parseFloat($('#salary').val()),
        $('#nic').val()
    )
    let exist = cusArr.find(e=>e.nic ===Customer.nic);
    if(exist){
        alert('nic already exist')
        return;
    }
    cusArr.push(customer);
}
const findCustomer=(id)=>{
    let selectedCustomer = cusArr.find(e=>e.nic === Customer.nic );
    if(selectedCustomer){
        return selectedCustomer;
    }
    return null;
}
const updateCustomer=(id)=>{
let customer = findCustomer(id);
if(customer){
    $('#name').val(Customer.name),
    $('#address').val(Customer.address),
    $('#salary').val(Customer.salary),
    $('#nic').val(Customer.nic)
}else{
    alert('Customer not found');
}
}
const deleteCustomer=(id)=>{
    for(let i = 0; i < cusArr.length; i++){
        if(cusArr[i].nic === id){
            cusArr.splice(i,1);
            alert('deleted');
            return;
        }
    }
}
const getAllCustomer=()=>{
    let tbody =$('#t-body');
    $.each(cusArr,function(i,item){
        let row = $('<tr>');
        let colName = $('<td>').text(item,name);
        let colAddress = $('<td>').text(item,address);
        let colSalary = $('<td>').text(item,salary);
        let colnic = $('<td>').text(item,nic);

        row.append(colName,colAddress,colSalary,colSalary);
        tbody.append(row);
    })
}

const clearAndLoad = (element)=>{}



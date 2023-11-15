import React, {useState} from 'react'
import "./signup.css"
import { signup } from '../../http/auth';

function Signup() {

    const inputDataStructure = {
        username : {
            key: "username",
            label: "username",
            data: "",
            type: "username",
            isValid: true,
            error: "",
        },
        email : {
            key: "email",
            label: "email",
            data: "",
            type: "email",
            isValid: true,
            error: "",
        },
        password : {
            key: "password",
            label: "password",
            data: "",
            type: "password",
            isValid: true,
            error: "",
        }
    }

    const [inputs, setInput] = useState(inputDataStructure);

    const handleChange = (data, input) => {
        //console.log(input);
        input.data = data;
        //console.log(input);
        let input_list = {...inputs};
        //console.log(input_list);
        input_list[input.key] = input;
        //console.log(input_list);
        setInput(input_list);
        //console.log(inputs);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = {
            email: inputs.email.data,
            username: inputs.username.data,
            password: inputs.password.data,
        }
        const response = await signup(data);
        console.log(response);
    }



  return (
    <div className='login'>
      <div className='loginContainer'>
        <div className="left">
            <h1 className="text-2xl font-bold mb-3">Sign UP</h1>
            <input className="username" placeholder="  Username" 
                input={inputs.username} onChange={(e) => handleChange(e.target.value, inputs.username)}>
            </input>
            <input className="email" placeholder="  Email" 
                input={inputs.email} onChange={(e) => handleChange(e.target.value, inputs.email)}>
            </input>
            <input className="password" placeholder="  Password"
                input={inputs.password} onChange={(e) => handleChange(e.target.value, inputs.password)}>
            </input>
            <button className="btnSignIn text-black" onClick={(e) => handleSubmit(e)}>Sign Up</button>
        </div>
        <div className="right">
            <h1 className="text-2xl font-bold mb-3 text-black">Hello Friend!</h1>
            <p className="text">Enter Your personal details and start journey with us</p>
        </div>
      </div>
    </div>
  )
}

export default Signup

import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import style from './home.module.css'
const Createusers = () => {
    let [name, setName] = useState("")
    let [salary, setsalary] = useState("")
    let [company, setCompany] = useState("")
    let navigate = useNavigate()
    let formHandle = () => {
        let payload = { name, salary, company }
        axios.post("http://localhost:3000/Emplyoee", payload)
            .then(() => { console.log("Data Fetched..."); })
            .catch(() => { console.log("Something Went Wrong !!"); })
        // console.log(name, salary, company);
        navigate("/users")
    }
    return (
        <div id={style.myForm}>
            <table>
                <tr>
                    <th colSpan="2"><h2> User Details </h2></th>
                </tr>
                <tr>
                    <td><label>Name : </label></td>
                    <td><input type="text" value={name} onChange={(e) => setName(e.target.value)} /></td>
                </tr>
                <tr>
                    <td><label>Salary : </label></td>
                    <td><input type="text" value={salary} onChange={(e) => setsalary(e.target.value)} /></td>
                </tr>
                <tr>
                    <td><label>Company : </label></td>
                    <td><input type="text" value={company} onChange={(e) => setCompany(e.target.value)} /></td>
                </tr>
                <tr>
                    <th colSpan="2"><button onClick={formHandle}>Submit</button></th>
                </tr>
            </table>
        </div>
    )
}

export default Createusers
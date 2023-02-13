import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import style from './home.module.css'
const Edit = () => {
    let [name, setName] = useState()
    let [salary, setSalary] = useState()
    let [company, setCompany] = useState()
    let { index } = useParams();
    let navigate = useNavigate()
    useEffect(() => {
        axios.get(`http://localhost:3000/Emplyoee/${index}`)
            .then((respon) => {
                setName(respon.data.name)
                setSalary(respon.data.salary)
                setCompany(respon.data.company)
            })
    }, [index])
    let Changes = () => {
        let details = { name, salary, company }
        axios.put(`http://localhost:3000/Emplyoee/${index}`, details)
            .then(() => {
                console.log("Data updated!!")
            })
        navigate('/users')
    }
    return (
        <div id={style.myForm}>
            <table style={{ backgroundColor: "#fff" }}>
                <tr>
                    <th colSpan="2"><h2 style={{ color: "crimson" }} > Update User Details </h2></th>
                </tr>
                <tr>
                    <td><label >Name : </label></td>
                    <td><input type="text" value={name} onChange={(e) => setName(e.target.value)} /></td>
                </tr>
                <tr>
                    <td><label >Salary : </label></td>
                    <td><input type="text" value={salary} onChange={(e) => setSalary(e.target.value)} /></td>
                </tr>
                <tr>
                    <td><label >Company : </label></td>
                    <td><input type="text" value={company} onChange={(e) => setCompany(e.target.value)} /></td>
                </tr>
                <tr>
                    <th colSpan="2"><button onClick={Changes}> Save</button></th>
                </tr>
            </table>
        </div>
    )
}

export default Edit
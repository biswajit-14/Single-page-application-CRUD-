import axios from 'axios'
import React, { useEffect, useState } from 'react'
import style from './home.module.css'
import { Link } from 'react-router-dom'
const Users = () => {
  let [data, setData] = useState([])
  useEffect(() => {
    axios.get("http://localhost:3000/Emplyoee")
      .then((fulfilled) => {
        setData(fulfilled.data);
      })
      .catch(() => {
        console.log(`Something went wrong!!`);
      })
  }, [])
  let deleteData = (id) => {
    axios.delete(`http://localhost:3000/Emplyoee/${id}`)
    window.location.assign("/users")
  }
  return (
    <div id={style.myUser}>
      {data.map((x) => {
        return (
          <div id={style.card}>
            <table>
              <tr><th colSpan="2">Emplyoee {x.id}</th></tr>
              <tr>
                <td>Name: </td>
                <td>{x.name}</td>
              </tr>
              <tr>
                <td>Salary: </td>
                <td>{x.salary}</td>
              </tr>
              <tr>
                <td>Company: </td>
                <td>{x.company}</td>
              </tr>
              <tr>
                <td><button> <Link to={`/edit/${x.id}`}>Edit</Link></button></td>
                <td><button onClick={() => { deleteData(x.id) }}>Delete</button></td>
              </tr>
            </table>
          </div>
        )
      })}
    </div>
  )
}

export default Users
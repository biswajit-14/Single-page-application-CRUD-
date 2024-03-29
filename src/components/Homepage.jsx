import React from 'react'
import style from './home.module.css'
import { Link } from 'react-router-dom'
const Homepage = () => {
    return (
        <section id={style.nav}>
            <Link className={style.link} to='/'>Create-Users</Link>
            <Link className={style.link} to='/users'>Users</Link>
        </section>
    )
}

export default Homepage
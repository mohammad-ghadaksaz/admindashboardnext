"use client"
import Link from 'next/link'
import Image from 'next/image'
import avatarpic from './/avatar.png'
import chart from './/charts-1.png'
import Head from 'next/head';
import { useEffect, useState } from 'react'

const UserFetch = () => {
  fetch('https://randomuser.me/api/?results=1')
    .then(res => res.json())
    .then((data) => setRevalidateHeaders)
}


export default function page() {
  const [data, setData] = useState([])
  useEffect(() => {
    fetch('https://randomuser.me/api/?results=1')
      .then(res => res.json())
      .then(myData => {
        setData(myData.results)
      })
  }, [])
  return (
    <>
      <div className="main w-full bg-slate-100">
        {/* header  */}
        <header className='w-full h-[80px] flex flex-wrap bg-white '>
          <div className="logo w-2/4 h-full lg:w-1/4 ">
            <figure className='w-full h-full flex flex-wrap justify-center items-center'>
              <Link href='https://bardiaghadaksaz.ir/' className='h-full w-full'
              ><Image
                  src={avatarpic}
                  alt="Picture of the author"
                  className='h-full object-contain p-[15px]'
                /></Link>
            </figure>
          </div>


          <nav className="navbar w-2/4 h-full lg:w-3/4 flex flex-wrap justify-end">

            <div className='w-[50%] lg:w-[40%] h-full flex flex-wrap justify-start items-center '>
              <button className=' button bg-red-600 rounded-[10px] w-[50%] h-[40%] text-sm lg:w-[30%] lg:text-base '>LogOut</button>
            </div>


            <ul className="menu list-none w-[50%] lg:w-[60%] h-full p-0 m-0 flex flex-wrap justify-around items-center ">
              <li className="h-full p-0 m-0 justify-center items-center hidden lg:flex flex-wrap mx-1 lg:mx-10">
                <Link href='#' className='flex flex-wrap justify-center items-center h-full text-slate-900'>Home</Link>
              </li>
              <li className="h-full p-0 m-0 justify-center items-center mx-1 lg:mx-10">
                <Link href='#' className='flex flex-wrap justify-center items-center h-full text-slate-900'>Emails</Link>
              </li>
              <li className="h-full p-0 m-0 justify-center items-center mx-1 lg:mx-10">
                <Link href='#' className='flex flex-wrap justify-center items-center h-full text-slate-900'>Chats</Link>
              </li>
            </ul>

          </nav>
        </header>


        {/* main */}

        <section className='w-full h-[100vh] flex flex-wrap md:flex-col'>
          <div className='w-1/3 hidden md:flex h-full flex-wrap content-evenly justify-center'>

            <section className='w-[70%] boxdiv  h-[22%] rounded-[15px] '>
              <h2 className='w-full h-[40%] flex  flex-wrap text-white justify-center items-center'>124</h2>
              <p className='w-full h-[30%] flex  flex-wrap justify-center items-center text-white'> profile views</p>
              <h3 className='w-full h-[30%] flex flex-wrap justify-center text-white items-center'>avarage views this month</h3>
            </section>
            <section className='w-[70%]  boxdiv h-[22%] rounded-[15px] '>
              <h2 className='w-full h-[40%] flex  flex-wrap text-white justify-center items-center'>21</h2>
              <p className='w-full h-[30%] flex  flex-wrap justify-center items-center text-white'>New messages</p>
              <h3 className='w-full h-[30%] flex flex-wrap justify-center text-white items-center'>Messages from audience</h3>
            </section>
            <section className='w-[70%]  boxdiv h-[22%] rounded-[15px] '>
              <h2 className='w-full h-[40%] flex  flex-wrap text-white justify-center items-center'>2137</h2>
              <p className='w-full h-[30%] flex  flex-wrap justify-center items-center text-white'>Registered </p>
              <h3 className='w-full h-[30%] flex flex-wrap justify-center text-white items-center'>Resgistered users</h3>
            </section>
            <section className='w-[70%]  boxdiv h-[22%] rounded-[15px] '>
              <h2 className='w-full h-[40%] flex  flex-wrap text-white justify-center items-center'>98</h2>
              <p className='w-full h-[30%] flex  flex-wrap justify-center items-center text-white'>Subscribers </p>
              <h3 className='w-full h-[30%] flex flex-wrap justify-center text-white items-center'>Subscribed you</h3>
            </section>


          </div>
          <div className='w-full h-2/4 md:hidden  flex flex-wrap items-center justify-evenly'>

            <section className='w-[42%] boxdiv  h-[30%] rounded-[15px] '>
              <h2 className='w-full h-[40%] flex  flex-wrap text-white justify-center items-center'>124</h2>
              <p className='w-full h-[30%] flex  flex-wrap justify-center items-center text-white'>profile views </p>
              <h3 className='w-full h-[30%] flex flex-wrap justify-center text-white items-center'>avarage views this month</h3>
            </section>
            <section className='w-[42%]  boxdiv h-[30%] rounded-[15px] '>
              <h2 className='w-full h-[40%] flex  flex-wrap text-white justify-center items-center'>21</h2>
              <p className='w-full h-[30%] flex  flex-wrap justify-center items-center text-white'>New messages</p>
              <h3 className='w-full h-[30%] flex flex-wrap justify-center text-white items-center'>Messages from audience</h3>
            </section>
            <section className='w-[42%]  boxdiv h-[30%] rounded-[15px] '>
              <h2 className='w-full h-[40%] flex  flex-wrap text-white justify-center items-center'>2137</h2>
              <p className='w-full h-[30%] flex  flex-wrap justify-center items-center text-white'>Registered </p>
              <h3 className='w-full h-[30%] flex flex-wrap justify-center text-white items-center'>Resgistered users</h3>
            </section>
            <section className='w-[42%]  boxdiv h-[30%] rounded-[15px] '>
              <h2 className='w-full h-[40%] flex  flex-wrap text-white justify-center items-center'>98</h2>
              <p className='w-full h-[30%] flex  flex-wrap justify-center items-center text-white'>Subscribers </p>
              <h3 className='w-full h-[30%] flex flex-wrap justify-center text-white items-center'>Subscribed you</h3>
            </section>


          </div>
          <div className='hidden lg:flex w-1/3 h-2/4 '>
            {data.map((val) => {
              return (
                <section className="w-full mapbox flex flex-wrap justify-center items-center mb-2 text-black h-full p-3" id='articlesection'>
                  <article className="w-[70%] h-[80%]  flex flex-wrap items-center">
                    <figure className="w-[50%] lg:w-[40%] h-full flex flex-wrap justify-center items-between">
                      <img className="flex flex-wrap justify-center items-center h-[50%] lg:h-[80%] rounded-[15px]" src={val.picture.large} alt="" />
                      <figcaption className="w-full h-[20%] flex flex-wrap justify-center items-center">
                        <h2 className="w-2/4 h-full flex flex-wrap justify-end p-1 items-center text-red-600">
                          {val.name.first}
                        </h2>
                        <h2 className="w-2/4 h-full flex flex-wrap justify-start  items-center text-green-500">
                          {val.name.last}
                        </h2>
                      </figcaption>
                    </figure>
                    <div className="w-[50%] lg:w-[55%] h-full flex flex-wrap justify-end items-center p-1 mx-1 bg-slate-300 rounded-[10px]">
                      <div className="w-[90%] mapbox h-[90%] ">
                        <h2 className="w-full h-[20%] p-1">City : {val.location.city}</h2>
                        <h2 className="w-full h-[20%] p-1"> State : {val.location.state}</h2>
                        <h2 className="w-full h-[20%] p-1">Postcode : {val.location.postcode}</h2>
                        <h2 className="w-full h-[20%] p-1">Registered : {val.registered.date}</h2>
                      </div>
                    </div>
                  </article>
                </section>
              )
            })}
          </div>
          <div className='hidden textdiv lg:flex flex-wrap w-1/3 h-[48%]'>
            <h1 className='w-full h-2/4 flex flex-wrap justify-start items-center text-slate-800'>Reminders :</h1>
            <p className='w-full h-2/4 flex flex-wrap justify-start items-start text-slate-800'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore vel non nam sequi animi fuga delectus repellendus provident placeat aperiam.</p>
          </div>
          <div className='w-full md:w-2/3 lg:w-1/3 md:h-full h-2/4 '>
            <figure className='w-full h-full'>
            <figcaption className='w-full h-[20%] flex flex-wrap justify-center items-center'>
                  <h2 className='w-full h-full flex flex-wrap justify-center items-center'>
                    Sample Chart
                  </h2>
                </figcaption>
            <Image
                  src={chart}
                  alt="Chart"
                  className='h-[80%] object-contain p-[20px] contrast-[90%]'
                />

            </figure>
          </div>
        </section>

      </div>
    </>
  )
}
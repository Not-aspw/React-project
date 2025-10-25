import {Link} from 'react-router'

function Home() {
  return (
    <>
      <section className='grow flex items-center bg-gray-100'>
        <div className='text-center p-8 lg:text-left lg:p-16'>
          <h1 className='text-3xl font-bold lg:text-4xl'>Welcome to Our Fashion Shop </h1>
          <p className='text-lg my-6 lg:text-xl'>This is a simple page built with React, typescript and tailwind CSS.</p>
          <Link to = "/shop" className='bg-blue-400 text-white py-3 px-6 rounded-md hover:bg-blue-500'>Get Started</Link>
        </div>
      </section>
    </>
  )
}

export default Home

import Head from 'next/head'
import Image from 'next/image'
import { useRef } from 'react'
import { useRouter } from 'next/dist/client/router'

import Avatar from '../components/avatar'
import Footer from '../components/footer'

import { ViewGridIcon } from '@heroicons/react/solid'
import { SearchIcon, MicrophoneIcon } from '@heroicons/react/outline'

export default function Home() {

  const router = useRouter();
  const searchInputReference = useRef(null);

  const search = (e) => {
    e.preventDefault();

    const term = searchInputReference.current.value;

    if (!term) return;

    router.push(`search?term=${term}`)

  };

  



  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <Head>
        <title>Google-xerox</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="googleTitleIcon.ico" />
      </Head>

      <header className="flex w-full justify-between p-5 text-md text-gray-700">
        
        {/*left*/}
        <div className="flex space-x-4 items-center">
          <p className="link">About</p>
          <p className="link">Store</p>
        </div>

        {/*right*/}
        <div className="flex space-x-4 items-center">
          <p className="link">Gmail</p>
          <p className="link">Images</p>

        {/* grid Icon */}
        <ViewGridIcon className="h-10 w-10 p-2 rounded-full  hover:bg-gray-100" />

        {/* user avatar */}
        <Avatar url={"https://avatars.githubusercontent.com/u/81512294?s=60&v=4"}/>
        </div>

      </header>

      {/*body*/}

      <form className="flex flex-col items-center mt-20 px-0 flex-grow w-4/5">
        <Image 
        src="https://cdn.pixabay.com/photo/2015/09/14/04/19/
        google-939112_960_720.png"
        width={300}
        height={100}
        />

        <div className="flex w-full items-center mt-5 px-5 py-3 max-w-md rounded-full hover:shadow-lg 
        focus-within:shadow-lg border border-gray-200
        sm:max-w-xl lg:max-w-2xl">

        <SearchIcon className="h-5 mr-3 text-gray-500"/>
        
        <input ref={searchInputReference} type="text" className="flex flex-grow focus:outline-none"></input>
        
        <MicrophoneIcon className="h-5 ml-3 text-gray-500"/>

        </div>

        <div className="flex flex-col w-1/2 space-y-2 justify-center mt-8
      md:flex-row md:space-x-4 md:space-y-0   
      ">
        <button className="btn" onClick={search}>Google Search</button>
        <button className="btn" onClick={search}>I'm feeling lucky</button>

      </div>

      </form>

      <Footer/>

      
    </div>
  )
}

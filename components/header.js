import Image from 'next/image'
import { SearchIcon, MicrophoneIcon, XIcon, BookmarkIcon, NewspaperIcon, VideoCameraIcon, DotsVerticalIcon, CogIcon, ViewGridIcon } from '@heroicons/react/outline'
import { useRouter } from 'next/dist/client/router';
import { useRef } from 'react';
import Avatar from '../components/avatar';

function Header() {

    const router = useRouter();
    const searchInputRef = useRef(null);

    const search = e => {

        e.preventDefault();
        const term = searchInputRef.current.value;
        
        if (!term) return;

        router.push(`search/?term=${term}`);

    };

    return <div>

        <header className="sticky top-0 bg-white ">

            <div className="flex w-full p-6 items-center">
                <Image src='https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png'
                alt='google image'

                width={120} height={40}
                onClick={() => router.push("/")} 

                className="cursor-pointer"
                />

                <form className="flex flex-grow border px-6 py-3 mr-5 ml-10 border-gray-200 shadow-lg rounded-full max-w-3xl items-center">
                    <input ref={searchInputRef} 
                    type="text" 
                    className="flex flex-grow w-full focus:outline-none"></input>


                    <XIcon className="h-7 text-gray-500 cursor-pointer transition-duration-100 transform hover:scale-125"
                    
                    onClick={() => searchInputRef.current.value = ""}
                    />

                    <MicrophoneIcon className="h-6 mr-3 hidden sm:inline-flex text-blue-500 border-l-2 pl-4 border-gray-300" />
                    <SearchIcon className="h-6 text-blue-500 hidden sm:inline-flex" />

                    <button hidden type="submit" onClick={search}></button>

                </form>

                <Avatar url="https://avatars.githubusercontent.com/u/81512294?s=60&v=4" className="ml-auto" />

            </div>

        </header>

    </div>
}

export default Header;
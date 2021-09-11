import { GlobeIcon } from "@heroicons/react/solid";

function Footer() {
    return <footer className="flex flex-col text-sm bg-gray-100 
    divide-y-2 divide-solid-gray-300 w-full text-gray-700">
        
        <div className="flex items-center space-x-2 p-3">
            <GlobeIcon className="ml-1 h-4" />

            <p>India</p>
        </div>

        <div className="flex flex-col md:flex-row md:justify-center lg:justify-between">

            <div className="p-5 flex justify-center space-x-6 lg:justify-center">
            <p className="link">About</p>
            <p className="link">Advertising</p>
            <p className="link">Business</p>
            <p className="link">How Search works</p>
            
            </div>

            <div className="p-5 flex justify-center space-x-6 lg:justify-center">
            <p className="link">Privacy</p>
            <p className="link">Terms</p>
            <p className="link">Settings</p>
            
            </div>

        </div>
    </footer>
}

export default Footer;
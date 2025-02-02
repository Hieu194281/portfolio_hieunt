import { useState } from 'react'
import avatar from '../assets/images/avatar.jpg'
import github from '../assets/images/github.png'
import gmail from '../assets/images/gmail.png'
import instagram from '../assets/images/instagram.png'
import linkedin from '../assets/images/linkedin.png'
// import twitterx from '../assets/images/twitterx.png'
// import { Mail } from "lucide-react";


const SideBar = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const iconList = [
        {
            component: github,
            href: 'https://github.com/Hieu194281'
        },
        {
            component: linkedin,
            href: 'https://www.linkedin.com/in/hieunt115/'
        },
        // {
        //     component: twitterx,
        //     href: 'https://twitter.com/Sachin_Mittal98'
        // },
        {
            component: instagram,
            href: 'https://www.instagram.com/immmhieeuu/'
        },
        {
            component: gmail,
            href: 'mailto:trunghieu220801@gmail.com'
        }
    ];

    const handleMailto = () => {
        window.location.href = "mailto:trunghieu220801@gmail.com"
    }
    return (
        <div className='w-64 h-screen'>
            <button onClick={() => setIsSidebarOpen(!isSidebarOpen)} data-drawer-target="default-sidebar" data-drawer-toggle="default-sidebar" aria-controls="default-sidebar" type="button" className=" fixed top-2 left-2 z-50 p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
                <span className="sr-only">Open sidebar</span>
                <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path clip-rule="evenodd" fill-rule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
                </svg>
            </button>

            <aside id="default-sidebar" className={`h-full scrollbar-vertical fixed left-0 z-40 transition-transform ${isSidebarOpen ? 'translate-x-0 top-15' : '-translate-x-full top-0'
                } sm:translate-x-0`} aria-label="Sidebar">
                <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
                    <div className="hashtag my-5">
                        <p className="text-center font-serif text-lg"># programmer_life</p>
                        <p className="text-center font-serif text-lg"># hello_world</p>
                        <p className="text-center font-serif text-lg"># coding</p>
                    </div>
                    <h1 className='text-center text-3xl font-serif my-4'>
                        Nguyen Hieu
                    </h1>
                    <div className='flex justify-center '>

                        <img src={avatar} className="w-40 rounded-full "></img>
                    </div>

                    <div className="flex gap-1 items-center justify-center my-4">
                        <img src={gmail} className="w-6 cursor-pointer" onClick={handleMailto}></img>
                        <p>trunghieu220801@gmail.com</p>
                    </div>

                    <ul className="space-y-2 font-medium">
                        <li>
                            <a href="#" className="flex items-center justify-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group transition-transform duration-200">
                                <svg className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 21">
                                    <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z" />
                                    <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z" />
                                </svg>
                                <span className="ms-3 font-mono">Project</span>
                            </a>
                        </li>
                        <li>
                            <a href="#about" className="flex items-center justify-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group transition-transform duration-200">
                                <svg className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 18">
                                    <path d="M6.143 0H1.857A1.857 1.857 0 0 0 0 1.857v4.286C0 7.169.831 8 1.857 8h4.286A1.857 1.857 0 0 0 8 6.143V1.857A1.857 1.857 0 0 0 6.143 0Zm10 0h-4.286A1.857 1.857 0 0 0 10 1.857v4.286C10 7.169 10.831 8 11.857 8h4.286A1.857 1.857 0 0 0 18 6.143V1.857A1.857 1.857 0 0 0 16.143 0Zm-10 10H1.857A1.857 1.857 0 0 0 0 11.857v4.286C0 17.169.831 18 1.857 18h4.286A1.857 1.857 0 0 0 8 16.143v-4.286A1.857 1.857 0 0 0 6.143 10Zm10 0h-4.286A1.857 1.857 0 0 0 10 11.857v4.286c0 1.026.831 1.857 1.857 1.857h4.286A1.857 1.857 0 0 0 18 16.143v-4.286A1.857 1.857 0 0 0 16.143 10Z" />
                                </svg>
                                <span className="ms-3 font-mono">About</span>
                            </a>
                        </li>
                        <li>
                            <a href="#interest" className="flex items-center justify-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group active:scale-90 transition-transform duration-200">
                                <svg className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="m17.418 3.623-.018-.008a6.713 6.713 0 0 0-2.4-.569V2h1a1 1 0 1 0 0-2h-2a1 1 0 0 0-1 1v2H9.89A6.977 6.977 0 0 1 12 8v5h-2V8A5 5 0 1 0 0 8v6a1 1 0 0 0 1 1h8v4a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-4h6a1 1 0 0 0 1-1V8a5 5 0 0 0-2.582-4.377ZM6 12H4a1 1 0 0 1 0-2h2a1 1 0 0 1 0 2Z" />
                                </svg>
                                <span className="ms-3 font-mono">Interest</span>
                            </a>
                        </li>
                        <li>
                            <a href="#education" className="flex items-center justify-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group transition-transform duration-200">
                                <svg className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
                                    <path d="M14 2a3.963 3.963 0 0 0-1.4.267 6.439 6.439 0 0 1-1.331 6.638A4 4 0 1 0 14 2Zm1 9h-1.264A6.957 6.957 0 0 1 15 15v2a2.97 2.97 0 0 1-.184 1H19a1 1 0 0 0 1-1v-1a5.006 5.006 0 0 0-5-5ZM6.5 9a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9ZM8 10H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5Z" />
                                </svg>
                                <span className="ms-3 font-mono">Education</span>
                            </a>
                        </li>

                    </ul>
                    <div className="social-icon flex flex-col gap-3 items-center m-5">
                        {
                            iconList.map((val) => {
                                return <img
                                    onClick={() => {
                                        window.open(val.href, '_blank');
                                    }}
                                    src={val.component}
                                    className='icon-img w-8 rounded-md hover:scale-125 transition-transform duration-200 cursor-pointer'
                                />
                            })
                        }
                    </div>
                    <div>
                        <p className='text-center'>@Made by NguyenHieu</p>
                    </div>
                </div>
            </aside>
        </div>
    )
}

export default SideBar
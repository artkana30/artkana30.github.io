"use client";
import {
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaGithubAlt,
} from "react-icons/fa";

export default function Home() {

const links = [
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/benjamin4k",
    icon: <FaLinkedinIn />,
    target: "_blank",
  },
  {
    name: "GitHub",
    url: "https://github.com/sleepy4k",
    icon: <FaGithubAlt />,
    target: "_blank",
  },
  {
    name: "Twitter",
    url: "https://twitter.com/artkana30",
    icon: <FaTwitter />,
    target: "_blank",
  },
  {
    name: "Instagram",
    url: "http://instagram.com/artkana30",
    icon: <FaInstagram />,
    target: "_blank",
  },
];

  return (
    <main className=" pb-2 max-w-4xl mx-auto">
      <div class="flex flex-col mx-auto p-10 text-center">
        <h1 className='font-bold pt-3 text-xl sm:text-4xl md:text-5xl'>Apri Pandu Wicaksono</h1>
        <h2 className='text-slate-500 pt-2 font-medium text-md md:text-lg'>Backend Developer</h2>
        <div className="mt-6 sm:mt-8 flex justify-center  gap-2">
          {links.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target={link.target}
              className="h-14 w-14 sm:h-16 sm:w-16 lg:h-20 lg:w-20 text-slate-500 bg-white shadow-sm hover:text-red-500 text-2xl sm:text-3xl rounded-xl flex items-center justify-center border border-slate-200 hover:shadow-md duration-200"
            >
              {link.icon}
            </a>
          ))}
        </div> 
        <span className="mt-12 mx-auto bg-white hover border-slate-200 p-4  font-medium text-sm md:text-lg max-w-xl text-gray-600 text-center rounded-xl shadow-sm hover:shadow-md duration-200">
        Fresh graduated from SMK Telkom majoring in Software Engineering who has work experience in developing web and mobile based applications for 8 months. Active in the developer community and training on application development
        </span>
      </div>
    </main>
  )
}

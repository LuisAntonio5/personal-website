import Link from '@/node_modules/next/link';
import Navbar from '@/components/navbar';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

export default function Home() {
  return (
    <>
    <div className="grid grid-rows-[auto, 1fr, 1fr] min-h-screen">
      <Navbar/>
      <main className="flex flex-col items-center justify-center px-10 pb-20 text-center">
        <img 
          src={"/portrait.jpg"}
          width='320'
          height='320'
          alt='a picture of me'
          className="self-center rounded-2xl mb-10">
        </img>
        <h1 className="text-2xl font-semibold mb-2">Hey there, I'm Luís!</h1>
        <h2 className=''>I'm a Software Engineer that's currently looking for a new challenge.</h2>
        <div>
          <h2>Read more{" "}
            <Link 
              href="/about"
              className="font-semibold italic relative underline-animation">
              about me
            </Link> 
              {" "}and my{" "}
            <Link
              href="/projects"
              className="font-semibold italic relative underline-animation">
              projects
            </Link>
              .
          </h2>
        </div>
      </main>
      <footer className="flex justify-center items-center">
        <a href="https://www.linkedin.com/in/luisantoniolds/" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon size="2x" icon={faLinkedin} className="mr-3"/>
        </a>
        <a href="https://github.com/LuisAntonio5" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon size="2x" icon={faGithub}/>
        </a>
      </footer>
    </div>
    </>
  );
}

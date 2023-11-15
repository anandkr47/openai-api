import Link from "next/link";
import Image from "next/image";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export const LandingFooter = () => {
    
  return (
    <footer className="p-4 bg-gray-800 text-white flex items-center justify-between">
      <div className="flex items-center">
        {/* Your Logo */}
        <Link href="/" className="flex items-center">
          {/* Replace "/logo.png" with the actual path to your logo */}
          <h1 className=" text-zinc-400"> All Rights Reserved @</h1>
            <Image
                alt="Logo"
                src="/logo.png"
                width={32}
                height={32}
                className="rounded-full"
                ></Image>
          <h1 className="text-xl font-bold hover:text-blue-400">MasterAI</h1>
        </Link>
      </div>

      <div className="flex items-center space-x-4">
        {/* GitHub Icon */}
        <Link href="https://github.com/your-github-username" passHref>
          
            <FaGithub className="text-2xl hover:text-gray-500" />
          
        </Link>

        {/* LinkedIn Icon */}
        <Link href="https://www.linkedin.com/in/your-linkedin-username" passHref>
          
            <FaLinkedin className="text-2xl hover:text-gray-500" />
          
        </Link>

        {/* Your Portfolio Link */}
        <Link href="/your-portfolio-path" passHref>
          Portfolio
        </Link>
      </div>
    </footer>
  );
};

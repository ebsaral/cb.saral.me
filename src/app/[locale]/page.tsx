import Image from "next/image"
import { HiMenuAlt2 } from "react-icons/hi";

export async function generateMetadata() {
 
  return {
    title: "Coming Soon",
    description: "",
    openGraph: {
      images: [
      ]
    }
  };
}

export default function Home() {
  return (
    <div className="flex flex-col h-screen">
      <div className="sticky top-0 navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
              <HiMenuAlt2 className="text-xl" />
            </div>
            <ul
              tabIndex={0}
              className="menu menu-lg dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
              <li><a>Home</a></li>
              <li><a>Projects</a></li>
              <li><a>Articles</a></li>
              <li><a>Stories</a></li>
              <li><a>About</a></li>
            </ul>
          </div>
        </div>
        <div className="navbar-center">
          <a className="btn btn-ghost text-base sm:text-xl">cb.saral.me</a>
          <div className="ml-4 sm:ml-10 text-base sm:text-xl text-gray-600">main</div>
        </div>
        <div className="navbar-end">
          <button className="btn btn-ghost btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>
        </div>
      </div>

      <div className="grow artboard artboard-horizontal p-5 bg-slate-200">
        <div className="flex flex-col items-center m-10 gap-10">
          <h1>Hello</h1>
          <div>This website is under construction.</div>
          <div>most likely to be online between February - March &apos;25</div>
          <div>
            <Image
                className="rounded-3xl"
                src="/main.png"
                alt="ebs breaking a wall"
                width={350}
                height={350}
                priority
            />
          </div>
          <div>
            <b>To-do(s):</b>
            <ul>
              <li>- design home page</li>
              <li>- add pages to display projects (ideas), theories, articles (essays) and stories</li>
              <li>- add functionality to search in content</li>
              <li>- add rss support</li>
            </ul>
          </div>
        </div>
      </div>

      <footer className="footer footer-center bg-foreground text-background text-base-content p-4">
        <aside>
          <p>Copyright © {new Date().getFullYear()} - All rights & donuts are reserved by <a href="https://saral.me">me</a>.</p>
        </aside>
      </footer>
    </div>
  )
}

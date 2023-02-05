import Link from 'next/link'

const NavMenuLargeScreen = () => {
  return (
    <div className="w-full z-50 top-0 py-3 sm:py-5  absolute">
              <div className="container flex items-center justify-between">
                <div>
                  <a href="/">
                    <img
                      src="/assets/img/whitelogo.png"
                      className="w-24 lg:w-48"
                      alt="logo image"
                    />
                  </a>
                </div>
                <div className="hidden lg:block">
                  <ul className="flex items-center">
                    <li className="group pl-6">
                      <Link href="#about">
                        <span className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white">
                          About
                        </span>

                        <span className="block h-0.5 w-full bg-transparent group-hover:bg-yellow"></span>
                      </Link>
                    </li>

                    <li className="group pl-6">
                      <Link href="#services">
                        <span className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white">
                          Services
                        </span>

                        <span className="block h-0.5 w-full bg-transparent group-hover:bg-yellow"></span>
                      </Link>
                    </li>

                    <li className="group pl-6">
                      <Link href="#portfolio">
                        <span className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white">
                          Portfolio
                        </span>

                        <span className="block h-0.5 w-full bg-transparent group-hover:bg-yellow"></span>
                      </Link>
                    </li>

                    <li className="group pl-6">
                      <Link href="#clients">
                        <span className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white">
                          Clients
                        </span>

                        <span className="block h-0.5 w-full bg-transparent group-hover:bg-yellow"></span>
                      </Link>
                    </li>

                    <li className="group pl-6">
                      <Link href="#work">
                        <span className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white">
                          Work
                        </span>

                        <span className="block h-0.5 w-full bg-transparent group-hover:bg-yellow"></span>
                      </Link>
                    </li>

                    <li className="group pl-6">
                      <Link href="#statistics">
                        <span className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white">
                          Statistics
                        </span>

                        <span className="block h-0.5 w-full bg-transparent group-hover:bg-yellow"></span>
                      </Link>
                    </li>

                    <li className="group pl-6">
                      <Link href="#blog">
                        <span className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white">
                          Blog
                        </span>

                        <span className="block h-0.5 w-full bg-transparent group-hover:bg-yellow"></span>
                      </Link>
                    </li>

                    <li className="group pl-6">
                      <Link href="#contact">
                        <span className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white">
                          Contact
                        </span>
                        <span className="block h-0.5 w-full bg-transparent group-hover:bg-yellow"></span>
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="block lg:hidden">
                  <button>
                    <i className="bx bx-menu text-4xl text-white"></i>
                  </button>
                </div>
              </div>
            </div>
  )
}

export default NavMenuLargeScreen

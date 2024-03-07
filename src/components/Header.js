import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import { PiShoppingCartSimpleBold } from "react-icons/pi";
import { CgProfile } from "react-icons/cg";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Products", href: "/products" },
  { name: "About", href: "/about" },
];

export default function Header() {
  return (
    <Disclosure as="nav" className="bg-black">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true"/>
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center font-serif text-2xl cursor-pointer">
                  ReactStore
                </div>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        to={item.href}
                        className="text-gray-300 hover:bg-gray-800 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2 text-2xl pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <Link to="/profile">
                  <PiShoppingCartSimpleBold />
                </Link>
                <Link to="/cart">
                  <CgProfile />
                </Link>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="relative sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2 flex flex-col absolute top-1 left-1 backdrop-blur-md right-1 bg-[#0000005a]">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="text-gray-300 hover:bg-gray-800 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}

import { Dialog } from "@headlessui/react";
import { ReactNode, useState } from "react";
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import TrendingHits from "../trending-hits";
import { setIsLoggedIn } from "../../store/reducers/ui";
import store from "../../store";

const navigation = [
    { name: 'MUSIC', href: '#', active:true },
    { name: 'PODCASTS', href: '#' },
    { name: 'LIVE', href: '#' },
  ]

const Body = (props:Props) => {
    const dispatch = store.dispatch;
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    
    
  return (
    <div className="h-screen relative bg-gradient-to-b from-[#050505] from-40% via-[#101012] via-50% to-[#19181d] to-60% overflow-y-auto">
      
      <div className="">
        <header className="top-0 z-50 text-white">
          <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
            <div className="flex lg:hidden">
              <button
                type="button"
                className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(true)}
              >
                <span className="sr-only">Open main menu</span>
                <Bars3Icon className="h-6 w-6 text-white" aria-hidden="true" />
              </button>
            </div>
            <div className="hidden lg:flex lg:gap-x-12">
              {navigation.map((item) => (
                <a key={item.name} href={item.href} className={`text-sm font-semibold leading-6 text-gray-200 ${item?.active ? 'text-emerald-600' : ''}`}>
                  {item.name}
                </a>
              ))}
              {/* <input type="text" name="search" id="search" className="w-96 rounded-md focus:outline-none" /> */}
            </div>
            <div className="hidden lg:flex lg:flex-1 lg:justify-end">
              <a href="" className="text-sm font-semibold leading-6 text-gray-200" onClick={() => {dispatch(setIsLoggedIn(false))}}>
                Log out <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </nav>
          <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
            <div className="fixed inset-0 z-50" />
            <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
              <div className="flex items-center justify-between">
                <a href="#" className="-m-1.5 p-1.5">
                  <span className="sr-only">Your Company</span>
                  <img
                    className="h-8 w-auto"
                    src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                    alt=""
                  />
                </a>
                <button
                  type="button"
                  className="-m-2.5 rounded-md p-2.5 text-gray-700"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="sr-only">Close menu</span>
                  <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>
              <div className="mt-6 flow-root">
                <div className="-my-6 divide-y divide-gray-500/10">
                  <div className="space-y-2 py-6">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                  <div className="py-6">
                    <a
                      href="#"
                      className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    >
                      Log out
                    </a>
                  </div>
                </div>
              </div>
            </Dialog.Panel>
          </Dialog>
        </header>
      </div>
        

      <div className="px-8">
        <TrendingHits/>
        <div className="h-full animate-content-box overflow-y-auto">
          {props?.children}
        </div>
      </div>

    </div>
  )
};

interface Props {
    children: ReactNode |  Array<ReactNode>;
}

export default Body;

import React from "react";
import { useState } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import {
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { StyledLink } from "./index.style";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header> 
      <nav
        aria-label="Global"
        className="mx-auto flex  items-center justify-between p-3 lg:px-12 bg-transparen"
      >
        <div className="flex flex-1 lg:px-6 ">
          <a href="#" className="text-lg font-semibold">
           MarianaDev.
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12 lg:items-center lg:px-12">
          <StyledLink href="#home">Home</StyledLink>
          <StyledLink href="#aboutme">About me</StyledLink>
          <StyledLink href="#projects">Projects</StyledLink>
          <StyledLink href="#footer">Curriculum</StyledLink>
        </div>
      </nav>
      <Dialog
        open={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        className="lg:hidden"
      >
        <div className="fixed inset-0 z-10" />
        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10" style={{ backgroundColor: '#292929' }}>
          <div className="flex items-center justify-between">
            <a href="#" className="text-lg font-semibold">
              ManrianaDev.
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-white"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-white">
              <div className="space-y-2 py-6">
                <a
                  href="/home"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 hover:bg-gradient-custom"
                >
                  Home
                </a>
                <a
                  href="/shop"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 hover:bg-gradient-custom"
                >
                  About me 
                </a>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 hover:bg-gradient-custom"
                >
                  Projects
                </a>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 hover:bg-gradient-custom"
                >
                  Curriculum
                </a>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
};

export default Navbar;

"use client";

import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@nextui-org/navbar";
import { Button } from "@nextui-org/button";
import { Switch } from "@nextui-org/switch";
import { Link } from "@nextui-org/link";
import { useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";

export default function PortfolioNavbar() {
  const [isDark, setIsDark] = useState(true);
  const [isOpen, setIsOpen] = useState(false);

  const toggleTheme = () => {
    setIsDark(!isDark);
    if (!isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  return (
    <Navbar onMenuOpenChange={setIsOpen} isBordered position="sticky">
      <NavbarContent>
        <NavbarMenuToggle
          className="sm:hidden"
          aria-label="Toggle navigation menu"
        />
        <NavbarBrand>
          <Link href="/" className="text-4xl font-serif">
            <span className="text-gray-500">{"{"}</span>
            <span className="font-bold">G</span>
            <span className="text-gray-500">{"}"}</span>
          </Link>
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent className="hidden sm:flex gap-2" justify="end">
        <Button
          href="#projects"
          as={Link}
          radius="sm"
          variant="light"
          color="primary"
          className="text-[16px]"
        >
          Projects
        </Button>
        <Button
          href="#experience"
          as={Link}
          radius="sm"
          variant="light"
          color="primary"
          className="text-[16px]"
        >
          Experience
        </Button>
        <Button
          href="/about"
          as={Link}
          radius="sm"
          variant="light"
          color="primary"
          className="text-[16px]"
        >
          About
        </Button>
        <Button
          href="/contact"
          as={Link}
          radius="sm"
          variant="light"
          color="primary"
          className="text-[16px]"
        >
          Contact
        </Button>
        {/* <Switch
          isSelected={isDark}
          onChange={toggleTheme}
          size="lg"
          startContent={<FaSun className="w-5 h-5" />}
          endContent={<FaMoon className="w-5 h-5" />}
        /> */}
      </NavbarContent>
      {/* <NavbarContent justify="end">
        <Switch
          isSelected={isDark}
          onChange={toggleTheme}
          size="lg"
          startContent={<SunIcon className="w-5 h-5" />}
          endContent={<MoonIcon className="w-5 h-5" />}
        />
        <Button as={Link} href="/resume.pdf" color="primary">
          Resume
        </Button>
        <NavbarMenuToggle
          className="sm:hidden"
          aria-label="Toggle navigation menu"
        />
      </NavbarContent> */}
      <NavbarMenu>
        <NavbarMenuItem>
          <Link href="/about">About</Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link href="/projects">Projects</Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link href="/contact">Contact</Link>
        </NavbarMenuItem>
      </NavbarMenu>
    </Navbar>
  );
}

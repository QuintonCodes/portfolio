import { linksData } from "@/data/info-data";
import { AlignRight } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "./ui/sheet";

const Header = () => {
  return (
    <header className="py-8 xl:py-12 text-white">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link href="/">
          <h1 className="text-4xl font-semibold">
            Quinton<span className="text-accent">.</span>
          </h1>
        </Link>
        {/* Desktop Nav & Hire me Button */}
        <div className="hidden xl:flex items-center gap-8">
          <Nav />
          <Link href="/contact">
            <Button>Hire Me</Button>
          </Link>
        </div>

        {/* Mobile Nav */}
        <div className="xl:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

const Nav = () => {
  const pathname = usePathname();

  return (
    <nav className="flex gap-8">
      {linksData.map((link, index) => {
        return (
          <Link
            href={link.path}
            key={index}
            className={`${
              link.path === pathname && "text-accent border-b-2 border-accent"
            } capitalize font-medium hover:text-accent transition-all`}
          >
            {link.name}
          </Link>
        );
      })}
    </nav>
  );
};

const MobileNav = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => setIsOpen(false);

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger className="flex justify-center items-center">
        <AlignRight className="text-[32px] text-accent" />
      </SheetTrigger>
      <SheetContent
        className="flex flex-col"
        aria-describedby="mobile-nav-description"
      >
        <div id="mobile-nav-description" className="sr-only">
          This is the mobile navigation menu. Use the links to navigate the
          site.
        </div>

        <div className="mt-32 mb-15 text-center text-2xl">
          <Link href="/" onClick={handleClose}>
            <SheetTitle className="text-4xl font-semibold text-white">
              Quinton<span className="text-accent">.</span>
            </SheetTitle>
          </Link>
        </div>

        <nav className="flex flex-col justify-center items-center gap-8">
          {linksData.map((link, index) => (
            <Link
              href={link.path}
              key={index}
              onClick={handleClose}
              className={`${
                link.path === pathname && "text-accent border-b-2 border-accent"
              } text-xl capitalize hover:text-accent transition-all`}
            >
              {link.name}
            </Link>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default Header;

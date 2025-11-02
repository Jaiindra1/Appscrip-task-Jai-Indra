import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";
import Vector from "@/assets/Vector.png";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="border-b border-border sticky top-0 bg-background z-50">
      <div className="container mx-auto px-2">
        {/* Top Bar */}
        <div className="flex items-center justify-between py-4">
          <div className="flex-1 flex justify-start items-center">
            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <Menu className="h-5 w-5" />
            </Button>
            <img src={Vector} alt="Vector" className="h-5 w-5 md:h-9 md:w-9" />
          </div>
          {/* Logo (Figma specs: width:107px, height:44px, top:36px, left:667px) */}
          <div className="absolute left-1/2 -translate-x-1/2">
            <div className="font-extrabold leading-none tracking-[1px] text-center flex items-center justify-center w-[61px] h-[24px] text-xl md:w-[107px] md:h-[44px] md:text-[36px]">
              LOGO
            </div>
          </div>

          {/* Icons */}
          <div className="flex-1 flex justify-end items-center">
            <Button variant="ghost" size="icon">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
              >
                <path
                  d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z"
                  stroke="black"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M22 22L20 20"
                  stroke="black"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Button>
            <Button variant="ghost" size="icon">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
              >
                <path
                  d="M12.62 20.81C12.28 20.93 11.72 20.93 11.38 20.81C8.48 19.82 2 15.69 2 8.68998C2 5.59998 4.49 3.09998 7.56 3.09998C9.38 3.09998 10.99 3.97998 12 5.33998C13.01 3.97998 14.62 3.09998 16.44 3.09998C19.51 3.09998 22 5.59998 22 8.68998C22 15.69 15.52 19.82 12.62 20.81Z"
                  stroke="black"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Button>
            <Button variant="ghost" size="icon">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
              >
                <path
                  d="M19.5 22C20.9045 22 22.0712 20.8333 22 19.4288L20.6667 8.5712C20.519 7.42877 19.5787 6.5 18.4288 6.5H5.5712C4.42125 6.5 3.48102 7.42877 3.33333 8.5712L2 19.4288C1.92885 20.8333 3.09553 22 4.5 22H19.5Z"
                  stroke="black"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M8 6.5V5.5C8 3.567 9.567 2 11.5 2V2C13.433 2 15 3.567 15 5.5V6.5"
                  stroke="black"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Button>
            <Button variant="ghost" size="icon" className="hidden md:flex">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
              >
                <path
                  d="M12 12C14.7614 12 17 9.76142 17 7C17 4.23858 14.7614 2 12 2C9.23858 2 7 4.23858 7 7C7 9.76142 9.23858 12 12 12Z"
                  stroke="black"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M20.59 22C20.59 18.13 16.74 15 12 15C7.26 15 3.41 18.13 3.41 22"
                  stroke="black"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Button>
            <Select defaultValue="eng">
              <SelectTrigger className="hidden md:flex w-auto gap-1 border-none focus:ring-0 bg-transparent text-base font-bold leading-none tracking-[1px]">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="eng">ENG</SelectItem>
                <SelectItem value="de">DE</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center justify-center gap-8 py-4 font-bold">
          <a href="#" style={{ font: "Simplon Norm" , fontSize: "20px"}} className="text-black border-b-2 border-transparent hover:border-black transition-colors pb-1 tracking-[1px] leading-none">
            SHOP
          </a>
          <a href="#" style={{ font: "Simplon Norm" , fontSize: "20px"}} className="text-black border-b-2 border-transparent hover:border-black transition-colors pb-1 tracking-[1px] leading-none">
            SKILLS
          </a>
          <a href="#" style={{ font: "Simplon Norm" , fontSize: "20px"}} className="text-black border-b-2 border-transparent hover:border-black transition-colors pb-1 tracking-[1px] leading-none">
            STORIES
          </a>
          <a href="#" style={{ font: "Simplon Norm" , fontSize: "20px"}} className="text-black border-b-2 border-transparent hover:border-black transition-colors pb-1 tracking-[1px] leading-none">
            ABOUT
          </a>
          <a href="#" style={{ font: "Simplon Norm" , fontSize: "20px"}} className="text-black border-b-2 border-transparent hover:border-black transition-colors pb-1 tracking-[1px] leading-none">
            CONTACT US
          </a>
        </nav>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden flex flex-col gap-4 py-4 justify-space-between border-t border-border">
            <a href="#" className="text-sm font-medium hover:opacity-70 transition-opacity">
              SHOP
            </a>
            <a href="#" className="text-sm font-medium hover:opacity-70 transition-opacity">
              SKILLS
            </a>
            <a href="#" className="text-sm font-medium hover:opacity-70 transition-opacity">
              STORIES
            </a>
            <a href="#" className="text-sm font-medium hover:opacity-70 transition-opacity">
              ABOUT
            </a>
            <a href="#" className="text-sm font-medium hover:opacity-70 transition-opacity">
              CONTACT US
            </a>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;

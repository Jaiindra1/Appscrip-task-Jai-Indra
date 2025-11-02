import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import United from "@/assets/United States of America (US).png";
import pay from "@/assets/Group 136195.png";
import master from "@/assets/Group 136190.png";
import Paypal from "@/assets/Group 136192.png";
import amex from "@/assets/Group 136193.png";
import apple from "@/assets/Group.png";
import Frame from "@/assets/Frame 28.png";
import { useState } from "react";

const PaymentMethods = () => {
  return (
    <div className="pb-4">
      <h4 className="text-lg font-bold mb-4">mettā muse ACCEPTS</h4>
      <div className="flex flex-wrap gap-3">
        <img src="data:image/png;base64,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" alt="Google Pay" className="h-8 bg-white p-1 rounded" />
        <img src={master} alt="Mastercard" className="h-8 bg-white p-1 rounded" />
        <img src={Paypal} alt="PayPal" className="h-8 bg-white p-1 rounded" />
        <img src={amex} alt="American Express" className="h-8 bg-white p-1 rounded" />
        <img src={apple} alt="Apple Pay" className="h-8 bg-white p-1 rounded" />
        <img src={pay} alt="OPay" className="h-8 bg-white p-1 rounded" />
      </div>
    </div>
  );
};

const AccordionSection = ({ title, children }: { title: string; children: React.ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-white pb-4 mt-5">
      <button
        className="w-full flex justify-between items-center"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h4 className="text-lg font-bold">{title}</h4>
        <svg
          className={`w-4 h-4 transform transition-transform duration-200 ${isOpen ? 'rotate-180' : 'rotate-0'}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      <div className={`mt-4 ${isOpen ? 'block' : 'hidden'}`}>
        {children}
      </div>
    </div>
  );
};

const Newsletter = () => {
  return (
    <div className="flex flex-col gap-5 md:mt-[7%] border-b border-white pb-4 md:border-b-0">
      <h3 className="text-lg font-bold">BE THE FIRST TO KNOW</h3>
      <p className="text-sm text-white/70 hidden sm:block">
      Sign up for updates from mettā muse.  
      </p>
      <p className="text-sm text-white/70 md:hidden">
        Lorem Ipsum is simply dummy text of the printing and type setting industry. this is simply dummy text
      </p>
      <div className="flex flex-row sm-flex-row mt-5 gap-4 ">
        <Input
          type="email"
          placeholder="Enter your e-mail..."
          className="bg-white border-white/30 text-black placeholder:text-gray-500 md:w-[60%] rounded-none sm:w[300px]"
        />
        <Button variant="outline" className="shrink-0 border-white/30 bg-transparent text-[#FFFFFF]  text-hover:bg-white/10 hover:text-white
        md:w-[35%] sm:w-auto rounded-[10px]">
          SUBSCRIBE
        </Button>
      </div>
    </div>
  );
};

const ContactAndCurrency = () => {
  return (
    <div className="flex flex-col gap-4">
      <h3 className="text-lg font-bold hidden sm:block">CONTACT US</h3>
      <h3 className="text-lg font-bold md:hidden">CALL US</h3>
      <div className="flex flex-wrap items-center gap-5">
        <div className="flex flex-col gap-4">
          <span className="text-white">+44 221 133 5360</span>
          <p className="text-white">customercare@mettamuse.com</p>
        </div>
      </div>
      <div className="mt-4">
        <h3 className="text-lg font-bold mb-2">CURRENCY</h3>
        <div className="flex items-center gap-2 mb-5">
          <img src={United} alt="USD Flag" className="w-[24px] h-[24px] radius-24px" />
          <span className="text-white/90">•</span>
          <span className="text-white font-medium"> USD</span>
        </div>
        <p className="text-wrap hidden sm:block">transactions will be completed in Euros and a currency references is available on hover.</p>
      </div>
    </div>
  );
};

const Footer = () => {
  return (
    <footer className="bg-black text-white">
      {/* Top Section: Newsletter, Contact, Currency */}
      <div className="border-b border-white md:w-[1200px] md:ml-[16%] md:mt-[3%] md:h-[300px] mt-[3%]">
        <div className="container mx-auto px-4 flex flex-col md:grid md:grid-cols-2 gap-6 md:gap-[120px] items-start">
          <Newsletter />
          <ContactAndCurrency />
        </div>
      </div>

      {/* Footer Links */}
      <div className="container mx-auto px-[9%] py-6">
        {/* Mobile: Accordion */}
        <div className="flex flex-col space-y-4 md:hidden">
          <AccordionSection title="mettā muse">
            <ul className="space-y-2 text-sm text-white/70">
              <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Stories</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Artisans</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Boutiques</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">EU Compliances Docs</a></li>
            </ul>
          </AccordionSection>

          <AccordionSection title="QUICK LINKS">
            <ul className="space-y-2 text-sm text-white/70">
              <li><a href="#" className="hover:text-white transition-colors">Orders & Shipping</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Join/Login as a Seller</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Payment & Pricing</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Return & Refunds</a></li>
              <li><a href="#" className="hover:text-white transition-colors">FAQs</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms & Conditions</a></li>
            </ul>
          </AccordionSection>

          <AccordionSection title="FOLLOW US">
            <img src={Frame} alt="image"/>
          </AccordionSection>

          <PaymentMethods />
        </div>

        {/* Desktop: Grid */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 ml-[1%] md:gap-3">
          <div className="md:col-span-2 lg:col-span-1">
            <h4 className="text-lg font-bold mb-4">mettā muse</h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Stories</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Artisans</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Boutiques</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">EU Compliances Docs</a></li>
            </ul>
          </div>
          <div className="md:col-span-2 lg:col-span-1">
            <h4 className="text-lg font-bold mb-4">QUICK LINKS</h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li><a href="#" className="hover:text-white transition-colors">Orders & Shipping</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Join/Login as a Seller</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Payment & Pricing</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Return & Refunds</a></li>
              <li><a href="#" className="hover:text-white transition-colors">FAQs</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms & Conditions</a></li>
            </ul>
          </div>
          <div className="space-y-8">
            <div>
              <h4 className="text-lg font-bold mb-4">FOLLOW US</h4>
              <img src={Frame} alt="image"/>
            </div>
            <PaymentMethods />
          </div>
        </div>

        <div className="mt-6 pt-4 border-t border-white/10 text-center text-sm text-white/70">
          Copyright © 2023 mettamuse. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;

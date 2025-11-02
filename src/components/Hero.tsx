const Hero = () => {
  return (
    <section>
      {/* Navigation links */}
      <div className="container mx-auto px-4 py-3 md:hidden">
        <nav className="text-sm text-[#252020]">
          <a href="#" className="hover:opacity-80">HOME</a>
          <span className="mx-2">|</span>
          <a href="#" className="hover:opacity-80">SHOP</a>
        </nav>
      </div>

      {/* Main hero content */}
      <div className="container mx-auto px-4 py-8 md:py-16 text-center border-b border-border">
        <h1 className="text-[32px] md:text-[50px] font-Simplon font-normal leading-tight md:leading-none tracking-[1px] uppercase text-[#252020] mb-6 md:mb-4 mx-auto">
          DISCOVER OUR PRODUCTS
        </h1>
        <div className="space-y-4 md:space-y-0">
          <p className="text-[#252020] max-w-[721px] mx-auto font-normal text-base md:text-[22px] leading-relaxed md:leading-[40px] tracking-normal opacity-80">
            Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus scelerisque.
            Dolor integer scelerisque nibh amet mi ut elementum dolor.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;

function Header() {
  return (
    <header className="flex-col items-center md:relative md:flex">
      <h1 className="font-bold text-center text-6xl md:text-left md:text-7xl lg:text-8xl">
        La tambouille <br /> végétale
      </h1>
      <p className="text-center mt-10 text-stone-500 text-2xl md:mt-0 md:text-left md:text-xl md:absolute sm:right-20 md:right-30 md:-bottom-10 lg:right-20 lg:text-3xl lg:-bottom-10">
        💡 Recettes intuitives <br />
        🫶 100% vegan <br />
        ⚖️ Sans dosages
      </p>
    </header>
  );
}

export default Header;

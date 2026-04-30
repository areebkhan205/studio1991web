function Navbar({ currentView, setCurrentView, isAdmin, isMenuOpen, setIsMenuOpen }) {

  const [isPricesOpen, setIsPricesOpen] = useState(false);

  return (
    <nav className="fixed md:left-16 top-0 z-[100] w-full bg-white/95 backdrop-blur-md border-b border-stone-100">
      <div className="max-w-7xl mx-auto px-4 h-24 grid grid-cols-3 items-center">
        
        <div className="hidden md:flex items-center gap-8 justify-start">
          
          <button 
            onClick={() => {
              setCurrentView('home'); 
              window.scrollTo({top: 0, behavior: 'smooth'});
            }} 
            className={`text-[10px] font-bold uppercase tracking-[0.3em] transition-all hover:text-amber-600 ${currentView === 'home' ? 'text-stone-900' : 'text-stone-400'}`}
          >
            Gallery
          </button>

          {/* Prices Dropdown */}
          <div 
            className="relative"
            onMouseEnter={() => setIsPricesOpen(true)}
            onMouseLeave={() => setIsPricesOpen(false)}
          >
            <button className="text-[10px] font-bold uppercase tracking-[0.3em] text-stone-400 hover:text-amber-600">
              Prices
            </button>

            {isPricesOpen && (
              <div className="absolute top-6 left-0 bg-white border border-stone-100 shadow-xl p-5 w-64 space-y-3 text-[10px] uppercase tracking-[0.2em]">
                <p className="text-stone-600">Haircut — ₹2000 (wash + styling)</p>
                <p className="text-stone-600">Global Colour — ₹6000 onward</p>
                <p className="text-stone-600">Balayage / Highlights — ₹8000 onward</p>
                <p className="text-stone-600">Protein Treatment — ₹6000 onward</p>
              </div>
            )}
          </div>

        </div>

        {/* Logo */}
        <div 
          className="flex flex-col relative md:right-20 text-center cursor-pointer justify-center col-span-2 md:col-span-1" 
          onClick={() => {
            setCurrentView('home'); 
            window.scrollTo({top: 0, behavior: 'smooth'});
          }}
        >
          <span className="text-lg md:text-2xl font-serif tracking-[0.3em] text-stone-900 leading-none uppercase">
            STUDIO1999
          </span>
          <span className="text-[9px] font-bold text-amber-600 tracking-[0.5em] mt-2 uppercase">
            BYUBAID
          </span>
        </div>

        <div className="hidden md:flex items-center gap-8 justify-end">
          <a 
            href="https://www.instagram.com/hairtransformation_78" 
            target="_blank" 
            rel="noreferrer" 
            className="text-stone-400 hover:text-stone-900 transition-colors"
          >
            <InstagramIcon className="w-5 h-5" />
          </a>
        </div>

        <div className="md:hidden flex items-center justify-end">
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)} 
            className="text-stone-900 p-2"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-white border-b border-stone-100 p-8 flex flex-col items-center gap-6 text-center animate-in slide-in-from-top-2">
          
          <button 
            onClick={() => {
              setCurrentView('home'); 
              setIsMenuOpen(false);
            }} 
            className="text-[10px] font-bold uppercase tracking-[0.3em]"
          >
            Gallery
          </button>

          <div className="text-[10px] uppercase tracking-[0.3em] text-stone-600 space-y-2">
            <p>Haircut — ₹2000</p>
            <p>Global Colour — ₹6000+</p>
            <p>Balayage / Highlights — ₹8000+</p>
            <p>Protein Treatment — ₹6000+</p>
          </div>

          <a 
            href="https://www.instagram.com/hairtransformation_78" 
            className="text-[10px] font-bold uppercase tracking-[0.3em] text-amber-600"
          >
            Instagram
          </a>
        </div>
      )}
    </nav>
  );
}
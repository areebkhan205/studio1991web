import {
  CheckCircle,
  Menu,
  Quote,
  Scissors
} from 'lucide-react';
import { useCallback, useEffect, useState } from 'react';
import vid1 from "./assets/1.mp4";
import { FaWhatsapp } from "react-icons/fa";
import vid2 from "./assets/2.mp4";
import vid3 from "./assets/3.mp4";
import vid4 from "./assets/4.mp4";
import vid5 from "./assets/5.mp4";
import vid6 from "./assets/6.mp4";
import vid7 from "./assets/7.mp4";
import vid8 from "./assets/8.mp4";
import vid9 from "./assets/9.mp4";
import hair1 from "./assets/hair1.jpg";
import hair10 from "./assets/hair10.jpg";
import hair2 from "./assets/hair2.jpg";
import hair3 from "./assets/hair3.jpg";
import hair4 from "./assets/hair4.jpg";
import hair5 from "./assets/hair5.jpg";
import hair6 from "./assets/hair6.jpg";
import hair7 from "./assets/hair7.jpg";
import hair8 from "./assets/hair8.jpg";
import hair9 from "./assets/hair9.jpg";
import bg from "./assets/bg.avif"
import ubaid from "./assets/ubaid.jpeg";
import TextType from './TextType';
import VoicesSection from './VoicesSection';

const InstagramIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);



const Navbar = ({ currentView, setCurrentView, isAdmin, isMenuOpen, setIsMenuOpen }) => (
  <nav className="fixed md:left-16 top-0 z-[100] w-full bg-white/95 backdrop-blur-md border-b border-stone-100">
    <div className="max-w-7xl mx-auto px-4 h-24 grid grid-cols-3 items-center">
      
      <div className="hidden md:flex items-center gap-8 justify-start">
        <button onClick={() => {setCurrentView('home'); window.scrollTo({top: 0, behavior: 'smooth'});}} className={`text-[10px] font-bold uppercase tracking-[0.3em] transition-all hover:text-amber-600 ${currentView === 'home' ? 'text-stone-900' : 'text-stone-400'}`}>Gallery</button>

      </div>

      <div className="flex flex-col relative  md:right-20  text-center cursor-pointer justify-center col-span-2 md:col-span-1" onClick={() => {setCurrentView('home'); window.scrollTo({top: 0, behavior: 'smooth'});}}>
        <span className="text-lg md:text-2xl font-serif tracking-[0.3em] text-stone-900 leading-none uppercase">STUDIO1999</span>
        <span className="text-[9px] font-bold text-amber-600 tracking-[0.5em] mt-2 uppercase">BYUBAID</span>
      </div>

      <div className="hidden md:flex items-center gap-8 justify-end">
        <a href="https://www.instagram.com/hairtransformation_78" target="_blank" rel="noreferrer" className="text-stone-400 hover:text-stone-900 transition-colors">
           <InstagramIcon className="w-5 h-5" />
        </a>
      </div>

      <div className="md:hidden flex items-center justify-end">
        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-stone-900 p-2"><Menu className="w-6 h-6" /></button>
      </div>
    </div>

    {isMenuOpen && (
      <div className="md:hidden bg-white border-b border-stone-100 p-8 flex flex-col items-center gap-6 text-center animate-in slide-in-from-top-2">
        <button onClick={() => {setCurrentView('home'); setIsMenuOpen(false);}} className="text-[10px] font-bold uppercase tracking-[0.3em]">Gallery</button>
        <a href="https://www.instagram.com/hairtransformation_78" className="text-[10px] font-bold uppercase tracking-[0.3em] text-amber-600">Instagram</a>
      </div>
    )}
  </nav>
);

const HomeView = ({ services, reviews, setView, onAddReview }) => {
  const [newReview, setNewReview] = useState({ name: '', text: '' });

  return (
    <div className="w-full flexSflex-col items-center bg-[#FDFCFB]">
    <section className="w-full max-w-10xl mx-auto px-4 md:px-9 py-8 md:py-12 mt-4 flex justify-center">
  <div className="relative md:left-30 w-full aspect-[4/5] md:aspect-[21/9] overflow-hidden rounded-[2.5rem] md:rounded-[4rem] shadow-2xl flex items-center justify-center text-center">

    {/* Background Image */}
    <img 
      src={bg} 
      className="absolute inset-0 w-full h-full object-cover brightness-[0.45]" 
      alt="Studio Background" 
    />

    {/* Ubaid Image Overlay */}
    <img 
      src={ubaid} 
      className="absolute bottom-[-89px] right-10 md:right-[-78px]  h-[120%] object-contain z-10 drop-shadow-2xl"
      alt="Ubaid"
    />

    {/* Content */}
    <div className="relative z-20 p-6 flex flex-col items-center">
      <span className="text-[9px] font-bold tracking-[0.6em] text-amber-400 mb-4 uppercase">
        Private Studio Portfolio
      </span>

      <h1 className="text-2xl md:text-4xl font-serif text-white mb-6 md:mb-10 tracking-tight leading-[1.1]">
        Hey I'm Ubaid Ansari <br/>
        <TextType 
          text={["Haircut","Haircolor","Specialist","Experienced Hair Artist"]}
          typingSpeed={75}
          pauseDuration={1500}
          showCursor
        />
      </h1>

      <button 
        onClick={() => setView('book')} 
        className="bg-white text-stone-900 px-10 md:px-14 py-4 md:py-5 rounded-full text-[10px] font-bold uppercase tracking-[0.3em] hover:bg-stone-100 transition-all hover:scale-105 shadow-2xl"
      >
        WELCOME TO MY STUDIO
      </button>
      <h6 className='text-white font-mono'>Contact:+91 9022483243</h6>
    </div>

  </div>
</section>



<section className="w-full max-w-7xl mx-auto px-6 py-24 md:py-40 flex flex-col items-center text-center">

  <div className="w-14 h-14 flex items-center justify-center border border-stone-200 rounded-full mb-12">
    <Scissors className="w-5 h-5 text-stone-900" />
  </div>

  <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-stone-400 mb-6">
    Signature Sessions
  </span>

  <h2 className="text-5xl md:text-7xl font-serif mb-24 md:mb-32 text-stone-900 tracking-tight">
    The Catalog.
  </h2>

  {/* 🌿 WRAPPER */}
  <div className="relative md:left-17 w-full">

    {/* 🌸 ABSTRACT LEAF FLOWER */}
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
      <svg
        className="w-[130%] md:w-[150%] opacity-15"
        viewBox="0 0 800 800"
        fill="none"
      >
        <defs>
          <radialGradient id="leafGrad" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#EADBC8" />
            <stop offset="100%" stopColor="#D6C2A1" />
          </radialGradient>
        </defs>

        <g transform="translate(400,400)">
          {[...Array(16)].map((_, i) => (
            <path
              key={i}
              d="M0,-220 
                 C80,-180 120,-60 0,0 
                 C-120,-60 -80,-180 0,-220 Z"
              fill="url(#leafGrad)"
              transform={`rotate(${i * 22.5})`}
            />
          ))}
        </g>
      </svg>
    </div>

    {/* GRID */}
    <div className="relative grid grid-cols-1 md:grid-cols-4 gap-x-17 gap-y-20 w-full">

      {/* CARD 1 */}
      <div className="group cursor-pointer flex flex-col items-center text-center" onClick={() => setView("book")}>
        <div className="aspect-[3/4] w-full overflow-hidden mb-10 bg-stone-100 rounded-3xl shadow-sm">
          <img src={hair1} className="w-full h-full object-cover grayscale opacity-90 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-1000" />
        </div>
        <span className="text-[9px] font-bold text-amber-600 uppercase tracking-[0.4em] mb-4">Hair Service</span>
        <h3 className="text-2xl md:text-3xl font-serif mb-6 text-stone-900">Mushroom Brown Moneypeace Hair Color</h3>
      </div>

      {/* CARD 2 */}
      <div className="group cursor-pointer flex flex-col items-center text-center" onClick={() => setView("book")}>
        <div className="aspect-[3/4] w-full overflow-hidden mb-10 bg-stone-100 rounded-3xl shadow-sm">
          <img src={hair2} className="w-full h-full object-cover grayscale opacity-90 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-1000" />
        </div>
        <span className="text-[9px] font-bold text-amber-600 uppercase tracking-[0.4em] mb-4">Hair Service</span>
        <h3 className="text-2xl md:text-3xl font-serif mb-6 text-stone-900">Matt,Violet,Beige Brown </h3>
      </div>

      {/* CARD 3 */}
      <div className="group cursor-pointer flex flex-col items-center text-center" onClick={() => setView("book")}>
        <div className="aspect-[3/4] w-full overflow-hidden mb-10 bg-stone-100 rounded-3xl shadow-sm">
          <img src={hair3} className="w-full h-full object-cover grayscale opacity-90 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-1000" />
        </div>
        <span className="text-[9px] font-bold text-amber-600 uppercase tracking-[0.4em] mb-4">Hair Service</span>
        <h3 className="text-2xl md:text-3xl font-serif mb-6 text-stone-900">Matt blond highlight </h3>
      </div>

      {/* CARD 4 */}
      <div className="group cursor-pointer flex flex-col items-center text-center" onClick={() => setView("book")}>
        <div className="aspect-[3/4] w-full overflow-hidden mb-10 bg-stone-100 rounded-3xl shadow-sm">
          <img src={hair4} className="w-full h-full object-cover grayscale opacity-90 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-1000" />
        </div>
        <span className="text-[9px] font-bold text-amber-600 uppercase tracking-[0.4em] mb-4">Hair Service</span>
        <h3 className="text-2xl md:text-3xl font-serif mb-6 text-stone-900"> Smokey Ash Hair Color</h3>
      </div>

      {/* CARD 5 */}
      <div className="group cursor-pointer flex flex-col items-center text-center" onClick={() => setView("book")}>
        <div className="aspect-[3/4] w-full overflow-hidden mb-10 bg-stone-100 rounded-3xl shadow-sm">
          <img src={hair5} className="w-full h-full object-cover grayscale opacity-90 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-1000" />
        </div>
        <span className="text-[9px] font-bold text-amber-600 uppercase tracking-[0.4em] mb-4">Hair Service</span>
        <h3 className="text-2xl md:text-3xl font-serif mb-6 text-stone-900">Violet Omre</h3>
      </div>

      {/* CARD 6 */}
      <div className="group cursor-pointer flex flex-col items-center text-center" onClick={() => setView("book")}>
        <div className="aspect-[3/4] w-full overflow-hidden mb-10 bg-stone-100 rounded-3xl shadow-sm">
          <img src={hair6} className="w-full h-full object-cover grayscale opacity-90 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-1000" />
        </div>
        <span className="text-[9px] font-bold text-amber-600 uppercase tracking-[0.4em] mb-4">Hair Service</span>
        <h3 className="text-2xl md:text-3xl font-serif mb-6 text-stone-900"> Red,Brown,Mocha,Magenta Red</h3>
      </div>

      {/* CARD 7 */}
      <div className="group cursor-pointer flex flex-col items-center text-center" onClick={() => setView("book")}>
        <div className="aspect-[3/4] w-full overflow-hidden mb-10 bg-stone-100 rounded-3xl shadow-sm">
          <img src={hair7} className="w-full h-full object-cover grayscale opacity-90 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-1000" />
        </div>
        <span className="text-[9px] font-bold text-amber-600 uppercase tracking-[0.4em] mb-4">Hair Service</span>
        <h3 className="text-2xl md:text-3xl font-serif mb-6 text-stone-900">Balayage Violet</h3>
      </div>

      {/* CARD 8 */}
      <div className="group cursor-pointer flex flex-col items-center text-center" onClick={() => setView("book")}>
        <div className="aspect-[3/4] w-full overflow-hidden mb-10 bg-stone-100 rounded-3xl shadow-sm">
          <img src={hair8} className="w-full h-full object-cover grayscale opacity-90 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-1000" />
        </div>
        <span className="text-[9px] font-bold text-amber-600 uppercase tracking-[0.4em] mb-4">Hair Service</span>
        <h3 className="text-2xl md:text-3xl font-serif mb-6 text-stone-900">Beige Blond Highlight</h3>
      </div>

      {/* CARD 9 */}
      <div className="group cursor-pointer flex flex-col items-center text-center" onClick={() => setView("book")}>
        <div className="aspect-[3/4] w-full overflow-hidden mb-10 bg-stone-100 rounded-3xl shadow-sm">
          <img src={hair9} className="w-full h-full object-cover grayscale opacity-90 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-1000" />
        </div>
        <span className="text-[9px] font-bold text-amber-600 uppercase tracking-[0.4em] mb-4">Hair Service</span>
        <h3 className="text-2xl md:text-3xl font-serif mb-6 text-stone-900">Beige Choclate Brown</h3>
      </div>

      {/* CARD 10 */}
      <div className="group cursor-pointer flex flex-col items-center text-center" onClick={() => setView("book")}>
        <div className="aspect-[3/4] w-full overflow-hidden mb-10 bg-stone-100 rounded-3xl shadow-sm">
          <img src={hair10} className="w-full h-full object-cover grayscale opacity-90 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-1000" />
        </div>
        <span className="text-[9px] font-bold text-amber-600 uppercase tracking-[0.4em] mb-4">Hair Service</span>
        <h3 className="text-2xl md:text-3xl font-serif mb-6 text-stone-900">Beige Brown</h3>
      </div>

      {/* CARD 11 */}
      <div className="group cursor-pointer flex flex-col items-center text-center" onClick={() => setView("book")}>
        <div className="aspect-[3/4] w-full overflow-hidden mb-10 bg-stone-100 rounded-3xl shadow-sm">
          <img src={hair1} className="w-full h-full object-cover grayscale opacity-90 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-1000" />
        </div>
        <span className="text-[9px] font-bold text-amber-600 uppercase tracking-[0.4em] mb-4">Hair Service</span>
        <h3 className="text-2xl md:text-3xl font-serif mb-6 text-stone-900">Mushroom Brown</h3>
      </div>

       

    </div>
  </div>

</section>


{/* reels */}


<section className="w-full relative md:left-26  bg-[#0A0A0A] py-24 md:py-40 flex flex-col items-center text-center">

  <span className="text-[10px] font-bold uppercase tracking-[0.6em] text-amber-500/40 mb-10">
    Studio Ledger
  </span>

  <h2 className="text-4xl sm:text-5xl md:text-7xl font-serif text-white mb-20 md:mb-28 tracking-tighter">
    Live <span className="italic text-stone-600">Transformations.</span>
  </h2>

  {/* VIDEOS GRID */}
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 w-full max-w-6xl px-4 sm:px-6">

    {[vid1, vid2, vid3, vid4, vid5,vid6,vid7,vid8,vid9].map((video, i) => (
      <div
        key={i}
        className="w-full aspect-[9/16] rounded-3xl overflow-hidden shadow-xl bg-stone-900 relative border border-white/5 group hover:border-amber-500/30 transition-all"
      >
        <video
          src={video}
          className="w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
        />
      </div>
    ))}

  </div>

  <a
    href="https://www.instagram.com/hairtransformation_78"
    target="_blank"
    rel="noreferrer"
    className="mt-20 flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.5em] text-stone-500 hover:text-amber-400 transition-all"
  >
    <InstagramIcon className="w-5 h-5" /> @hairtransformation_78
  </a>

</section>





     
     <section className="w-full max-w-7xl mx-auto px-6 py-32 md:py-48 flex flex-col items-center text-center">
  
     <VoicesSection/>
</section>

        <div className='md:w-[118%]'>
         <footer className="w-full bg-[#050505] text-stone-600 py-16 md:py-20 flex flex-col items-center text-center">

  {/* INNER CONTAINER */}
  <div className="w-full max-w-7xl px-6 flex flex-col items-center">

    {/* BRAND */}
    <span className="text-lg md:text-xl font-serif tracking-[0.3em] text-white uppercase mb-3">
      Studio1999
    </span>

    <span className="text-[9px] md:text-[10px] font-bold text-amber-600 tracking-[0.5em] uppercase mb-10">
      BYUBAID
    </span>

    {/* LINKS */}
    <div className="flex flex-wrap justify-center gap-6 md:gap-10 mb-10">
      
      <a href="https://www.instagram.com/hairtransformation_78" target="_blank" rel="noreferrer"
        className="text-[10px] uppercase tracking-[0.3em] hover:text-white transition-colors">
        Instagram
      </a>

      {/* WhatsApp (added) */}
    <a 
  href="https://wa.me/919022483243" 
  target="_blank" 
  rel="noreferrer"
  className="text-[10px] uppercase tracking-[0.3em] hover:text-white transition-colors flex items-center justify-center"
>
  <FaWhatsapp size={16} />
</a>

      <a href="#" className="text-[10px] uppercase tracking-[0.3em] hover:text-white transition-colors">
        Portfolio
      </a>

      <a href="#" className="text-[10px] uppercase tracking-[0.3em] hover:text-white transition-colors">
        Legal
      </a>
    </div>

    {/* COPYRIGHT */}
    <p className="text-[9px] md:text-[10px] font-bold uppercase tracking-[0.3em] text-stone-700">
      Designed By • © 2026 Areeb Khan • All Rights Reserved
    </p>

  </div>

</footer>
        </div>
    </div>

  );
};






export default function App() {
  const [currentView, setCurrentView] = useState('home');
  const [isAdmin, setIsAdmin] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [services, setServices] = useState([]);
  const [bookings, setBookings] = useState([]);
  const [reviews, setReviews] = useState([
    { name: "Sanya M.", text: "The transformation was technical yet soulful. An absolute mastery of form and texture reset." },
    { name: "Rohit K.", text: "A premium session like no other. The precision is unmatched in the modern industry." }
  ]);
  const [toast, setToast] = useState(null);

  const fetchServices = useCallback(async () => {
    try {
      const res = await fetch(`${API_BASE}/services`);
      const data = await res.json();
      setServices(data);
    } catch {
      setServices([
        { id: 1, name: "Signature Design", price: 95, duration: "75m", category: "Artistry", image: "https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&q=80&w=1200" },
        { id: 2, name: "Technical Color", price: 180, duration: "150m", category: "Scientific", image: "https://images.unsplash.com/photo-1620331311520-246422fd82f9?auto=format&fit=crop&q=80&w=1200" },
        { id: 3, name: "Editorial Reset", price: 210, duration: "180m", category: "Technical", image: "https://images.unsplash.com/photo-1522337660859-02fbefca4702?auto=format&fit=crop&q=80&w=1200" }
      ]);
    }
  }, []);

  const fetchBookings = async () => {
    try {
      const res = await fetch(`${API_BASE}/bookings`);
      const data = await res.json();
      setBookings(data);
    } catch {
      setBookings([{id: 1, customer: "Guest #082", service: "Signature Design", date: "2026-05-15", time: "11:30 AM", status: "Pending"}]);
    }
  };

  useEffect(() => { fetchServices(); }, [fetchServices]);
  useEffect(() => { if (isAdmin) fetchBookings(); }, [isAdmin]);

  const showToast = (msg) => {
    setToast(msg);
    setTimeout(() => setToast(null), 3000);
  };

  const handleAddReview = (newReview) => {
    setReviews([newReview, ...reviews]);
    showToast("Record Accepted");
  };

  return (
    <div className="min-h-screen bg-[#FDFCFB] text-stone-900 pt-24 font-sans flex flex-col items-center selection:bg-stone-900 selection:text-white ">
      <Navbar 
        currentView={currentView} 
        setCurrentView={setCurrentView} 
        isAdmin={isAdmin} 
        isMenuOpen={isMenuOpen} 
        setIsMenuOpen={setIsMenuOpen} 
      />
      <main className="w-full flex flex-col items-center">
        {currentView === 'home' && <HomeView services={services} reviews={reviews} setView={setCurrentView} onAddReview={handleAddReview} />}
        {currentView === 'book' && <BookingView onBack={() => setCurrentView('home')} services={services} showToast={showToast} />}
        {currentView === 'adminLogin' && <AdminLogin onAuth={() => {setIsAdmin(true); setCurrentView('admin');}} onCancel={() => setCurrentView('home')} />}
        {currentView === 'admin' && <AdminDashboard bookings={bookings} onLogout={() => {setIsAdmin(false); setCurrentView('home');}} showToast={showToast} />}
      </main>

      {toast && (
        <div className="fixed bottom-10 left-1/2 -translate-x-1/2 bg-stone-900 text-white px-10 py-5 shadow-2xl animate-in slide-in-from-bottom-10 z-[200] flex items-center border border-white/10 rounded-full">
          <CheckCircle className="w-4 h-4 text-amber-500 mr-4" />
          <span className="text-[10px] font-bold uppercase tracking-[0.3em] whitespace-nowrap">{toast}</span>
        </div>
      )}
    </div>
  );
}
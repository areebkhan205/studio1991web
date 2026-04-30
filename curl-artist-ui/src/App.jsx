import {
  CheckCircle,
  Menu,
  Quote,
  Scissors,
  Shield,
  XCircle
} from 'lucide-react';
import { useCallback, useEffect, useState } from 'react';
import hair1 from "./assets/hair1.jpeg";
import hair2 from "./assets/hair2.jpeg";
import hair3 from "./assets/hair3.jpeg";
import TextType from './TextType';
const API_BASE = "http://localhost:18080/api";
const TIME_SLOTS = ["10:00 AM", "11:30 AM", "01:00 PM", "02:30 PM", "04:00 PM", "05:30 PM"];
const INSTA_REELS = ["Czq4AyLL19G", "DXrl6IxE2JS", "DXRxQVbExAS", "DXFFB3RE_FO"];

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
        <button onClick={() => setCurrentView('book')} className={`text-[10px] font-bold uppercase tracking-[0.3em] transition-all hover:text-amber-600 ${currentView === 'book' ? 'text-stone-900' : 'text-stone-400'}`}>Reserve</button>
      </div>

      <div className="flex flex-col relative  md:right-20  text-center cursor-pointer justify-center col-span-2 md:col-span-1" onClick={() => {setCurrentView('home'); window.scrollTo({top: 0, behavior: 'smooth'});}}>
        <span className="text-lg md:text-2xl font-serif tracking-[0.3em] text-stone-900 leading-none uppercase">HAIRTRANSFORMATION</span>
        <span className="text-[9px] font-bold text-amber-600 tracking-[0.5em] mt-2 uppercase">_78BYUBAID</span>
      </div>

      <div className="hidden md:flex items-center gap-8 justify-end">
        <a href="https://www.instagram.com/hairtransformation_78" target="_blank" rel="noreferrer" className="text-stone-400 hover:text-stone-900 transition-colors">
           <InstagramIcon className="w-5 h-5" />
        </a>
        <button onClick={() => isAdmin ? setCurrentView('admin') : setCurrentView('adminLogin')} className="text-stone-400 hover:text-stone-900 transition-colors">
          {isAdmin ? <Shield className="w-4 h-4 text-amber-600" /> : <div className="text-[10px] font-bold uppercase tracking-[0.3em]">Portal</div>}
        </button>
      </div>

      <div className="md:hidden flex items-center justify-end">
        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-stone-900 p-2"><Menu className="w-6 h-6" /></button>
      </div>
    </div>

    {isMenuOpen && (
      <div className="md:hidden bg-white border-b border-stone-100 p-8 flex flex-col items-center gap-6 text-center animate-in slide-in-from-top-2">
        <button onClick={() => {setCurrentView('home'); setIsMenuOpen(false);}} className="text-[10px] font-bold uppercase tracking-[0.3em]">Gallery</button>
        <button onClick={() => {setCurrentView('book'); setIsMenuOpen(false);}} className="text-[10px] font-bold uppercase tracking-[0.3em]">Reserve</button>
        <a href="https://www.instagram.com/hairtransformation_78" className="text-[10px] font-bold uppercase tracking-[0.3em] text-amber-600">Instagram</a>
        <button onClick={() => {isAdmin ? setCurrentView('admin') : setCurrentView('adminLogin'); setIsMenuOpen(false);}} className="text-[10px] font-bold uppercase tracking-[0.3em]">Portal</button>
      </div>
    )}
  </nav>
);

const HomeView = ({ services, reviews, setView, onAddReview }) => {
  const [newReview, setNewReview] = useState({ name: '', text: '' });

  return (
    <div className="w-full flexSflex-col items-center bg-[#FDFCFB]">
      <section className="w-full max-w-10xl mx-auto px-4 md:px-9 py-8 md:py-12 mt-4  flex justify-center">
        <div className="relative md:left-30 w-full aspect-[4/5] md:aspect-[21/9] overflow-hidden rounded-[2.5rem] md:rounded-[4rem] shadow-2xl flex items-center justify-center text-center">
          <img src="https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&q=80&w=2000" className="absolute inset-0 w-full h-full object-cover brightness-[0.45]" alt="Ubaid Studio" />
          <div className="relative z-10 p-6 flex flex-col items-center">
            <span className="text-[9px] md:text-[9px] font-bold tracking-[0.6em] text-amber-400 mb-4 md:mb-6 uppercase">Private Studio Portfolio</span>
            <h1 className="text-2xl md:text-4xl font-serif text-white mb-6 md:mb-10 tracking-tight leading-[1.1] md:leading-none">The Art of <br/><TextType 
  text={["Elegant ","Transformative"," Bespoke"]}
  typingSpeed={75}
  pauseDuration={1500}
  showCursor
  cursorCharacter="_"
  texts={["Elegant ","Transformative"," Bespoke"]}
  deletingSpeed={50}
  variableSpeedEnabled={false}
  variableSpeedMin={60}
  variableSpeedMax={120}
  cursorBlinkDuration={0.5}
/> </h1>
            <button onClick={() => setView('book')} className="bg-white text-stone-900 px-10 md:px-14 py-4 md:py-5 rounded-full text-[10px] font-bold uppercase tracking-[0.3em] hover:bg-stone-100 transition-all hover:scale-105 shadow-2xl">
              Begin Your Journey
            </button>
          </div>
        </div>
      </section>
<section className="w-full max-w-6xl mx-auto px-6 py-24 md:py-40 flex flex-col items-center text-center">
  <div className="w-14 h-14 flex items-center justify-center border border-stone-200 rounded-full mb-12">
    <Scissors className="w-5 h-5 text-stone-900" />
  </div>

  <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-stone-400 mb-6">
    Signature Sessions
  </span>

  <h2 className="text-5xl md:text-7xl font-serif mb-24 md:mb-32 text-stone-900 tracking-tight">
    The Catalog.
  </h2>

  <div className="grid grid-cols-1 md:grid-cols-3 gap-x-12 gap-y-20 w-full">

    {/* CARD 1 */}
    <div className="group cursor-pointer flex flex-col items-center text-center" onClick={() => setView("book")}>
      <div className="aspect-[3/4] w-full overflow-hidden mb-10 bg-stone-100 rounded-3xl shadow-sm">
        <img
          src={hair1}
          className="w-full h-full object-cover grayscale opacity-90 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-1000"
          alt="Chocolate Almond Finish"
        />
      </div>
      <span className="text-[9px] font-bold text-amber-600 uppercase tracking-[0.4em] mb-4">
        Hair Color
      </span>
      <h3 className="text-2xl md:text-3xl font-serif mb-6 text-stone-900 tracking-tight">
        Chocolate Almond Finish
      </h3>
      <div className="flex items-center gap-6 text-stone-400 text-[10px] font-bold uppercase tracking-widest border-t border-stone-100 w-full pt-8 justify-center">
        <span>2 hrs</span>
        <span className="text-stone-200">|</span>
        <span className="text-stone-900 text-sm font-serif">$120</span>
      </div>
    </div>

    {/* CARD 2 */}
    <div className="group cursor-pointer flex flex-col items-center text-center" onClick={() => setView("book")}>
      <div className="aspect-[3/4] w-full overflow-hidden mb-10 bg-stone-100 rounded-3xl shadow-sm">
        <img
          src={hair2}
          className="w-full h-full object-cover grayscale opacity-90 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-1000"
          alt="Soft Layered Waves"
        />
      </div>
      <span className="text-[9px] font-bold text-amber-600 uppercase tracking-[0.4em] mb-4">
        Hair Styling
      </span>
      <h3 className="text-2xl md:text-3xl font-serif mb-6 text-stone-900 tracking-tight">
        Soft Layered Waves
      </h3>
      <div className="flex items-center gap-6 text-stone-400 text-[10px] font-bold uppercase tracking-widest border-t border-stone-100 w-full pt-8 justify-center">
        <span>1.5 hrs</span>
        <span className="text-stone-200">|</span>
        <span className="text-stone-900 text-sm font-serif">$90</span>
      </div>
    </div>

    {/* CARD 3 */}
    <div className="group cursor-pointer flex flex-col items-center text-center" onClick={() => setView("book")}>
      <div className="aspect-[3/4] w-full overflow-hidden mb-10 bg-stone-100 rounded-3xl shadow-sm">
        <img
          src={hair3}
          className="w-full h-full object-cover grayscale opacity-90 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-1000"
          alt="Glossy Balayage"
        />
      </div>
      <span className="text-[9px] font-bold text-amber-600 uppercase tracking-[0.4em] mb-4">
        Hair Color
      </span>
      <h3 className="text-2xl md:text-3xl font-serif mb-6 text-stone-900 tracking-tight">
        Glossy Balayage
      </h3>
      <div className="flex items-center gap-6 text-stone-400 text-[10px] font-bold uppercase tracking-widest border-t border-stone-100 w-full pt-8 justify-center">
        <span>3 hrs</span>
        <span className="text-stone-200">|</span>
        <span className="text-stone-900 text-sm font-serif">$150</span>
      </div>
    </div>

  </div>
</section>

      <section className="w-full bg-[#0A0A0A] py-32 md:py-48 flex flex-col items-center text-center">
        <span className="text-[10px] font-bold uppercase tracking-[0.6em] text-amber-500/40 mb-10">Studio Ledger</span>
        <h2 className="text-5xl md:text-8xl font-serif text-white mb-24 md:mb-32 tracking-tighter">Live <span className="italic text-stone-600">Transformations.</span></h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 w-full max-w-7xl px-6">
          {INSTA_REELS.map(reelId => (
            <div key={reelId} className="w-full aspect-[9/16] rounded-[2.5rem] overflow-hidden shadow-2xl bg-stone-900 relative border border-white/5 group hover:border-amber-500/30 transition-colors">
              <iframe
                src={`https://www.instagram.com/reel/${reelId}/embed/video`}
                className="absolute top-0 left-0 w-full h-full border-0"
                scrolling="no"
                allowtransparency="true"
                allow="encrypted-media"
                title={`Instagram Reel ${reelId}`}
              ></iframe>
            </div>
          ))}
        </div>
        <a href="https://www.instagram.com/hairtransformation_78" target="_blank" rel="noreferrer" className="mt-24 flex items-center gap-4 text-[10px] font-bold uppercase tracking-[0.5em] text-stone-500 hover:text-amber-400 transition-all">
          <InstagramIcon className="w-5 h-5" /> @hairtransformation_78
        </a>
      </section>

      <section className="w-full max-w-7xl mx-auto px-6 py-32 md:py-48 flex flex-col items-center text-center">
        <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-stone-400 mb-10">Guest Testimony</span>
        <h2 className="text-5xl md:text-8xl font-serif mb-24 md:mb-32 text-stone-900 tracking-tight leading-none">Voices.</h2>

        <div className="flex flex-col items-center w-full max-w-3xl space-y-24 md:space-y-32 mb-48">
          {reviews.map((r, i) => (
            <div key={i} className="w-full flex flex-col items-center animate-in fade-in slide-in-from-bottom-6 duration-1000">
              <Quote className="w-10 h-10 text-stone-100 mb-12" />
              <p className="text-2xl md:text-4xl font-serif text-stone-800 leading-[1.6] italic tracking-tight px-4">"{r.text}"</p>
              <div className="w-16 h-[2px] bg-amber-200 mt-12 mb-10"></div>
              <span className="text-[11px] font-bold uppercase tracking-[0.4em] text-stone-400">{r.name}</span>
            </div>
          ))}
        </div>

        <div className="w-full max-w-2xl bg-stone-950 p-12 md:p-24 rounded-[3.5rem] md:rounded-[5rem] flex flex-col items-center shadow-2xl border border-white/5">
           <h3 className="text-3xl md:text-4xl font-serif mb-4 text-white tracking-tight">Share Your Insight</h3>
           <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-stone-500 mb-16 italic">Add your session to the record</p>
           
           <form className="w-full flex flex-col items-center space-y-12" onSubmit={(e) => { e.preventDefault(); onAddReview(newReview); setNewReview({name:'', text:''}); }}>
              <input required placeholder="IDENTITY" className="w-full p-5 bg-transparent border-b border-stone-800 outline-none text-center focus:border-amber-400 text-[10px] font-bold tracking-[0.4em] uppercase text-white transition-all placeholder:text-stone-700" value={newReview.name} onChange={e => setNewReview({...newReview, name: e.target.value})} />
              <textarea required placeholder="TRANSFORMATION STORY" className="w-full p-5 bg-stone-900/50 rounded-3xl border border-stone-800 outline-none text-center focus:border-amber-400 h-40 resize-none text-[10px] font-bold tracking-[0.3em] uppercase text-stone-300 transition-all placeholder:text-stone-700" value={newReview.text} onChange={e => setNewReview({...newReview, text: e.target.value})} />
              <button className="w-full max-w-xs py-5 bg-white text-stone-900 font-bold text-[10px] tracking-[0.4em] uppercase hover:bg-amber-400 transition-all shadow-xl">
                Log Perspective
              </button>
           </form>
        </div>
      </section>
      
      <footer className="w-full bg-[#050505] text-stone-600 py-24 flex flex-col items-center text-center">
        <span className="text-xl md:text-2xl font-serif tracking-[0.4em] text-white leading-none uppercase mb-4">HAIRTRANSFORMATION</span>
        <span className="text-[10px] font-bold text-amber-600 tracking-[0.6em] uppercase mb-16">_78BYUBAID</span>
        <div className="flex gap-10 mb-12">
            <a href="#" className="text-[10px] uppercase tracking-[0.3em] hover:text-white transition-colors">Instagram</a>
            <a href="#" className="text-[10px] uppercase tracking-[0.3em] hover:text-white transition-colors">Portfolio</a>
            <a href="#" className="text-[10px] uppercase tracking-[0.3em] hover:text-white transition-colors">Legal</a>
        </div>
        <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-stone-800">Noida, India • © 2026 • Curated for Excellence</p>
      </footer>
    </div>
  );
};

const BookingView = ({ onBack, services, showToast }) => {
  const [data, setData] = useState({ customer: '', service: services[0]?.name || '', date: '', time: '' });
  return (
    <div className="flex justify-center items-center py-24 md:py-48 bg-[#FDFCFB] animate-in fade-in duration-1000 w-full px-6">
      <div className="w-full max-w-xl flex flex-col items-center text-center">
        <span className="text-[10px] font-bold uppercase tracking-[0.6em] text-stone-400 mb-10 block">Private Booking Registry</span>
        <h2 className="text-5xl md:text-8xl font-serif mb-10 text-stone-900 tracking-tight leading-none">Inquiry.</h2>
        <p className="text-stone-500 text-sm font-light leading-relaxed mb-24 max-w-sm">
          Placement in the studio ledger is by request. Please submit your details below for curation.
        </p>
        
        <form className="w-full flex flex-col items-center space-y-16" onSubmit={(e) => { e.preventDefault(); showToast("Inquiry Received"); onBack(); }}>
          <div className="w-full flex flex-col items-center">
            <input required className="w-full p-4 bg-transparent border-b border-stone-200 outline-none text-center focus:border-stone-900 text-[11px] font-bold tracking-[0.4em] uppercase transition-all placeholder:text-stone-300" placeholder="FULL NAME / IDENTITY" onChange={e => setData({...data, customer: e.target.value})} />
          </div>

          <div className="w-full flex flex-col items-center relative">
            <select className="w-full p-4 bg-transparent border-b border-stone-200 outline-none text-center appearance-none cursor-pointer focus:border-stone-900 text-[11px] font-bold tracking-[0.4em] uppercase text-stone-900" onChange={e => setData({...data, service: e.target.value})}>
              {services.map(s => <option key={s.id} value={s.name}>{s.name}</option>)}
            </select>
          </div>

          <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-16">
            <div className="flex flex-col items-center">
              <input type="date" required className="w-full p-4 bg-transparent border-b border-stone-200 outline-none text-center focus:border-stone-900 text-[11px] font-bold tracking-[0.4em] uppercase text-stone-900" onChange={e => setData({...data, date: e.target.value})} />
            </div>
            <div className="flex flex-col items-center">
              <select required className="w-full p-4 bg-transparent border-b border-stone-200 outline-none text-center appearance-none focus:border-stone-900 text-[11px] font-bold tracking-[0.4em] uppercase text-stone-900" onChange={e => setData({...data, time: e.target.value})}>
                <option value="" disabled selected>PREFERENCE</option>
                {TIME_SLOTS.map(t => <option key={t} value={t}>{t}</option>)}
              </select>
            </div>
          </div>

          <div className="w-full pt-20 flex flex-col items-center">
            <button type="submit" className="w-full py-6 bg-stone-900 text-white font-bold text-[11px] tracking-[0.4em] uppercase hover:bg-stone-800 transition-all shadow-2xl">
              Request Placement
            </button>
            <button type="button" onClick={onBack} className="mt-12 text-[10px] font-bold uppercase tracking-[0.4em] text-stone-400 hover:text-stone-900 transition-all border-b border-transparent hover:border-stone-900 pb-1">Cancel / Dismiss</button>
          </div>
        </form>
      </div>
    </div>
  );
};

const AdminDashboard = ({ bookings, onLogout, showToast }) => (
  <div className="py-32 text-center animate-in fade-in flex flex-col items-center w-full px-6 bg-[#FDFCFB]">
    <span className="text-[10px] font-bold uppercase tracking-[0.6em] text-stone-400 mb-10 block">System Oversight</span>
    <h2 className="text-5xl md:text-8xl font-serif mb-24 text-stone-900 tracking-tighter">The Ledger.</h2>

    <div className="w-full max-w-5xl bg-white border border-stone-100 shadow-sm overflow-hidden mb-16 rounded-[2rem]">
      <div className="overflow-x-auto">
        <table className="w-full text-center">
          <thead className="bg-stone-50 border-b border-stone-100">
            <tr>
              <th className="p-10 text-[10px] font-bold uppercase tracking-[0.4em] text-stone-400">Guest Identity</th>
              <th className="p-10 text-[10px] font-bold uppercase tracking-[0.4em] text-stone-400">Designation</th>
              <th className="p-10 text-[10px] font-bold uppercase tracking-[0.4em] text-stone-400">Schedule</th>
              <th className="p-10 text-[10px] font-bold uppercase tracking-[0.4em] text-stone-400">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-stone-50">
            {bookings.map(b => (
              <tr key={b.id} className="hover:bg-stone-50/50 transition-colors">
                <td className="p-10 font-serif text-2xl text-stone-900">{b.customer}</td>
                <td className="p-10 text-[10px] font-bold tracking-widest uppercase text-stone-500">{b.service}</td>
                <td className="p-10 text-sm text-stone-900 font-light">{b.date} <br/> <span className="text-[11px] font-bold text-amber-600 uppercase tracking-widest mt-2 block">{b.time}</span></td>
                <td className="p-10">
                  <div className="flex justify-center gap-8">
                    <button onClick={() => showToast("Approved")} className="text-stone-300 hover:text-emerald-500 transition-all"><CheckCircle className="w-6 h-6" /></button>
                    <button onClick={() => showToast("Removed")} className="text-stone-300 hover:text-rose-500 transition-all"><XCircle className="w-6 h-6" /></button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    <button onClick={onLogout} className="text-[11px] font-bold uppercase tracking-[0.4em] text-stone-400 hover:text-red-500 transition-all border-b border-transparent hover:border-red-500 pb-1">Secure and Exit Portal</button>
  </div>
);

const AdminLogin = ({ onAuth, onCancel }) => (
  <div className="flex justify-center py-40 animate-in fade-in w-full px-6 bg-[#FDFCFB]">
    <div className="bg-white p-16 md:p-24 rounded-[4rem] border border-stone-100 max-w-md w-full flex flex-col items-center text-center shadow-2xl">
      <Shield className="w-10 h-10 text-stone-900 mb-12" />
      <h2 className="text-3xl font-serif mb-12 text-stone-900 tracking-tight uppercase">Registry Access</h2>
      <input type="password" placeholder="STUDIO PASSKEY" className="w-full p-5 mb-14 bg-transparent border-b border-stone-200 outline-none text-center font-mono text-[11px] tracking-[0.5em] focus:border-stone-900 transition-colors" />
      <button onClick={onAuth} className="w-full py-6 bg-stone-900 text-white font-bold text-[11px] tracking-[0.4em] uppercase hover:bg-stone-800 transition-all shadow-xl">Authenticate</button>
      <button onClick={onCancel} className="mt-12 text-[10px] font-bold uppercase tracking-[0.4em] text-stone-400 hover:text-stone-900 transition-all border-b border-transparent hover:border-stone-900 pb-1">Dismiss Registry</button>
    </div>
  </div>
);

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
    <div className="min-h-screen bg-[#FDFCFB] text-stone-900 pt-24 font-sans flex flex-col items-center selection:bg-stone-900 selection:text-white overflow-x-hidden">
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
import { Quote } from "lucide-react";
import { useState } from "react";

export default function VoicesSection() {

  const [reviews, setReviews] = useState([
    {
      name: "Anaya",
      text: "Absolutely loved the styling and attention to detail. The look turned out perfect!"
    }
  ]);

  const [newReview, setNewReview] = useState({
    name: "",
    text: ""
  });

  return (
    <section className="w-full max-w-7xl mx-auto px-6 py-32 md:py-48 flex flex-col items-center text-center">
      
      <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-stone-400 mb-10">
        Guest Testimony
      </span>

      <h2 className="text-5xl md:text-8xl font-serif mb-24 md:mb-32 text-stone-900 tracking-tight leading-none">
        Voices.
      </h2>

      {/* REVIEWS */}
      <div className="flex flex-col items-center w-full max-w-3xl space-y-24 md:space-y-32 mb-48">
        {reviews.map((r, i) => (
          <div
            key={i}
            className="w-full flex flex-col items-center animate-in fade-in slide-in-from-bottom-6 duration-1000"
          >
            <Quote className="w-10 h-10 text-stone-100 mb-12" />

            <p className="text-2xl md:text-4xl font-serif text-stone-800 leading-[1.6] italic tracking-tight px-4">
              "{r.text}"
            </p>

            <div className="w-16 h-[2px] bg-amber-200 mt-12 mb-10"></div>

            <span className="text-[11px] font-bold uppercase tracking-[0.4em] text-stone-400">
              {r.name}
            </span>
          </div>
        ))}
      </div>

      {/* FORM */}
      <div className="w-full max-w-2xl bg-stone-950 p-12 md:p-24 rounded-[3.5rem] md:rounded-[5rem] flex flex-col items-center shadow-2xl border border-white/5">
        
        <h3 className="text-3xl md:text-4xl font-serif mb-4 text-white tracking-tight">
          Share Your Insight
        </h3>

        <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-stone-500 mb-16 italic">
          Add your session to the record
        </p>

        <form
          className="w-full flex flex-col items-center space-y-12"
          onSubmit={(e) => {
            e.preventDefault();

            if (!newReview.name.trim() || !newReview.text.trim()) return;

            // ✅ 1. SHOW REVIEW IN UI
            setReviews((prev) => [
              {
                name: newReview.name,
                text: newReview.text
              },
              ...prev
            ]);

            // ✅ 2. OPEN OUTLOOK (mailto)
            const subject = encodeURIComponent("New Client Review");
            const body = encodeURIComponent(
              `Name: ${newReview.name}\n\nReview:\n${newReview.text}`
            );

            window.location.href = `mailto:ubaidullah1999@icloud.com?subject=${subject}&body=${body}`;

            // ✅ 3. CLEAR FORM
            setNewReview({ name: "", text: "" });
          }}
        >
          <input
            required
            placeholder="IDENTITY"
            className="w-full p-5 bg-transparent border-b border-stone-800 outline-none text-center focus:border-amber-400 text-[10px] font-bold tracking-[0.4em] uppercase text-white transition-all placeholder:text-stone-700"
            value={newReview.name}
            onChange={(e) =>
              setNewReview({ ...newReview, name: e.target.value })
            }
          />

          <textarea
            required
            placeholder="TRANSFORMATION STORY"
            className="w-full p-5 bg-stone-900/50 rounded-3xl border border-stone-800 outline-none text-center focus:border-amber-400 h-40 resize-none text-[10px] font-bold tracking-[0.3em] uppercase text-stone-300 transition-all placeholder:text-stone-700"
            value={newReview.text}
            onChange={(e) =>
              setNewReview({ ...newReview, text: e.target.value })
            }
          />

          <button className="w-full max-w-xs py-5 bg-white text-stone-900 font-bold text-[10px] tracking-[0.4em] uppercase hover:bg-amber-400 transition-all shadow-xl">
            Log Perspective
          </button>
        </form>
      </div>

    </section>
  );
}
import { useState } from "react";

const slides = [
    {
        heading: "Eat Organic & Healthy Food",
        subheading: "Save up to 50% off on your first order",
        image: "https://img.freepik.com/premium-photo/vegetables-tomato-pepper-avocado-onion-cauliflower-lettuce_214995-7521.jpg?semt=ais_hybrid&w=740&q=80", // Update with correct path
        emailPlaceholder: "Your email address",
        buttonLabel: "Subscribe",
        bgColor: "#86DFB9", //#028776
    },
    {
        heading: "Eat Organic & Healthy Food",
        subheading: "Save up to 50% off on your first order",
        image: "https://www.pngitem.com/pimgs/m/152-1522030_fruits-and-vegetables-png-transparent-png.png", // Update with correct path
        emailPlaceholder: "Your email address",
        buttonLabel: "Subscribe",
        // bgColor: "#ccc",
    }
];

const BannerSlider = () => {
    const [current, setCurrent] = useState(0);
    const prevSlide = () => setCurrent((current - 1 + slides.length) % slides.length);
    const nextSlide = () => setCurrent((current + 1) % slides.length);

    const { heading, subheading, image, emailPlaceholder, buttonLabel, bgColor } = slides[current];

    return (
        <section className="px-1">
            <div className="w-full rounded-3xl shadow px-8 py-24 flex flex-col md:flex-row items-center justify-between relative overflow-hidden" style={{ background: bgColor }}>
                {/* LEFT: TEXT SECTION */}
                <div className="flex-1 max-w-xl z-10">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
                        {heading.split("&").map((str, idx) =>
                            idx > 0 ? <span key={idx}>&<br />{str.trim()}</span> : <span key={idx}>{str}</span>
                        )}
                    </h1>
                    <p className="text-lg text-gray-700 mb-6">{subheading}</p>
                    {/* Email input form */}
                    <form className="flex items-center bg-white rounded-full shadow p-2 max-w-md">
                        <span className="ml-3 mr-2 flex items-center text-gray-400">
                            <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26c.7.47 1.62.47 2.32 0L21 8M5 19h14a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2z" />
                            </svg>
                        </span>
                        <input
                            type="email"
                            placeholder={emailPlaceholder}
                            className="flex-1 rounded-full px-4 py-2 focus:outline-none text-base"
                        />
                        <button type="submit" className="bg-green-500 hover:bg-green-600 text-white font-semibold px-7 py-2 rounded-full shadow transition ml-2">
                            {buttonLabel}
                        </button>
                    </form>
                </div>
                {/* RIGHT: IMAGE SECTION */}
                <div className="flex-1 flex items-end justify-end z-20 mt-10 md:mt-0">
                    <img
                        src={image}
                        alt="Banner Visual"
                        className="w-full max-w-md object-contain"
                        style={{ marginBottom: '-2rem' }}
                    />
                </div>

                {/* Dot indicators */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-30">
                    {slides.map((_, idx) => (
                        <span
                            key={idx}
                            className={`w-3 h-3 rounded-full transition-all duration-300 ${idx === current ? "bg-green-700" : "bg-green-300 border border-green-700"}`}
                            onClick={() => setCurrent(idx)}
                            style={{ cursor: "pointer" }}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default BannerSlider;
import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useScroll, useTransform, useInView, animate } from "motion/react";
import { 
  TrendingUp, Users, Video, Send, Youtube, 
  MessageCircle, CheckCircle2, Menu, X, ArrowRight, 
  Zap, Moon, Sun, Mail, User, 
  MessageSquare, ChevronRight, BarChart3, Globe,
  Activity, PlayCircle, GraduationCap, Instagram,
  Twitter, Facebook, ArrowUpRight, Award, Clock,
  Crown, CheckCircle
} from "lucide-react";

// --- UI Components ---

const GoldTicker = ({ isDarkMode }: { isDarkMode: boolean }) => {
  const [price, setPrice] = useState(2158.42);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setPrice(prev => +(prev + (Math.random() - 0.5) * 0.2).toFixed(2));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const items = [
    { symbol: "XAUUSD", price: price.toLocaleString(), change: "+0.58%", up: true },
    { symbol: "BTCUSDT", price: "68,432.10", change: "+2.45%", up: true },
    { symbol: "EURUSD", price: "1.0892", change: "-0.12%", up: false },
    { symbol: "NAS100", price: "18,234.50", change: "+1.15%", up: true },
    { symbol: "GBPUSD", price: "1.2745", change: "+0.05%", up: true },
    { symbol: "ETHUSDT", price: "3,842.15", change: "+3.12%", up: true },
  ];

  return (
    <div className={`w-full py-3 px-6 overflow-hidden border-b backdrop-blur-xl flex items-center justify-between gap-8 text-[10px] font-mono tracking-widest uppercase ${isDarkMode ? "bg-black/60 border-zinc-800/50 text-zinc-500" : "bg-white/60 border-zinc-200 text-zinc-400"}`}>
      <div className="flex items-center gap-12 overflow-hidden">
        <motion.div 
          animate={{ x: [0, -1000] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="flex items-center gap-12 whitespace-nowrap"
        >
          {[...items, ...items].map((item, i) => (
            <div key={i} className="flex items-center gap-3">
              <span className={isDarkMode ? "text-zinc-400" : "text-zinc-900"}>{item.symbol}</span>
              <span className={`${isDarkMode ? "text-white" : "text-zinc-900"} font-black`}>{item.price}</span>
              <span className={item.up ? "text-emerald-500" : "text-rose-500"}>{item.change}</span>
              <span className="text-zinc-800">/</span>
            </div>
          ))}
        </motion.div>
      </div>
      <div className="hidden lg:flex items-center gap-3 text-emerald-500 font-black shrink-0">
        <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse shadow-[0_0_10px_rgba(16,185,129,0.5)]" />
        LIVE TERMINAL
      </div>
    </div>
  );
};

const VIPPopup = ({ isDarkMode }: { isDarkMode: boolean }) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsOpen(true), 5000);
    return () => clearTimeout(timer);
  }, []);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-black/60 backdrop-blur-md"
      >
        <motion.div 
          initial={{ scale: 0.9, y: 20, opacity: 0 }}
          animate={{ scale: 1, y: 0, opacity: 1 }}
          className={`max-w-lg w-full p-10 rounded-[3rem] border relative overflow-hidden ${isDarkMode ? "bg-zinc-900/60 border-amber-500/20 backdrop-blur-2xl shadow-[0_0_50px_rgba(245,158,11,0.1)]" : "bg-white/80 border-amber-200 backdrop-blur-2xl shadow-2xl"}`}
        >
          {/* Decorative glow */}
          <div className="absolute -top-24 -right-24 w-48 h-48 bg-amber-500/10 blur-[60px] rounded-full" />
          
          <button 
            onClick={() => setIsOpen(false)}
            className="absolute top-8 right-8 text-zinc-500 hover:text-amber-500 transition-colors z-20"
          >
            <X size={24} />
          </button>

          <div className="relative z-10">
            <div className="w-20 h-20 bg-amber-500/20 rounded-3xl flex items-center justify-center mb-8 shadow-[0_0_20px_rgba(245,158,11,0.2)]">
              <Crown className="text-amber-500" size={40} />
            </div>
            
            <h3 className={`text-3xl md:text-4xl font-black mb-4 tracking-tighter ${isDarkMode ? "text-white" : "text-zinc-900"}`}>
              Unlock <span className="text-amber-500">VIP</span> Excellence
            </h3>
            
            <p className="text-zinc-400 mb-8 text-lg font-medium leading-relaxed">
              Join the elite circle of traders and transform your market performance with institutional-grade insights.
            </p>

            <div className="space-y-4 mb-10">
              {[
                "87% Accuracy Trading Signals",
                "Daily Live Market Breakdowns",
                "Private SMC Mentorship",
                "24/7 Priority Support"
              ].map((benefit, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center">
                    <CheckCircle className="text-emerald-500" size={14} />
                  </div>
                  <span className={`font-bold text-sm ${isDarkMode ? "text-zinc-300" : "text-zinc-700"}`}>{benefit}</span>
                </div>
              ))}
            </div>

            <a 
              href="https://wa.me/923417447891?text=Hello%20Kevin%20Trader%2C%20I%20want%20to%20join%20your%20VIP%20trading%20group." 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Button variant="primary" className="w-full py-5 text-xl bg-amber-500 hover:bg-amber-600 shadow-[0_0_40px_rgba(245,158,11,0.4)] group">
                Join VIP Now <ArrowRight className="group-hover:translate-x-2 transition-transform" />
              </Button>
            </a>
            
            <p className="text-center mt-6 text-zinc-500 text-xs font-bold uppercase tracking-widest">
              Limited to 50 spots per month
            </p>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

const TradingViewWidget = () => {
  const container = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!container.current) return;
    const script = document.createElement("script");
    script.src = "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
    script.type = "text/javascript";
    script.async = true;
    script.innerHTML = `
      {
        "autosize": true,
        "symbol": "OANDA:XAUUSD",
        "interval": "D",
        "timezone": "Etc/UTC",
        "theme": "dark",
        "style": "1",
        "locale": "en",
        "enable_publishing": false,
        "allow_symbol_change": true,
        "calendar": false,
        "support_host": "https://www.tradingview.com"
      }`;
    container.current.appendChild(script);
  }, []);

  return (
    <div className="w-full h-[600px] rounded-[2.5rem] overflow-hidden border border-zinc-800 bg-zinc-950" ref={container}>
      <div className="tradingview-widget-container__widget"></div>
    </div>
  );
};

const TradingBackground = ({ isDarkMode }: { isDarkMode: boolean }) => {
  return (
    <div className="fixed inset-0 -z-20 overflow-hidden pointer-events-none">
      <div className={`absolute inset-0 ${isDarkMode ? "bg-black" : "bg-zinc-50"}`} />
      
      {/* Moving Grid */}
      <div 
        className={`absolute inset-0 opacity-[0.1] ${isDarkMode ? "invert" : ""}`}
        style={{
          backgroundImage: `linear-gradient(#3b82f6 1px, transparent 1px), linear-gradient(90deg, #3b82f6 1px, transparent 1px)`,
          backgroundSize: '100px 100px',
          maskImage: 'radial-gradient(ellipse at center, black, transparent 80%)'
        }}
      />

      {/* Candlestick Patterns */}
      <div className="absolute inset-0 opacity-[0.07]">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className={`absolute w-1 rounded-full ${Math.random() > 0.5 ? "bg-emerald-500" : "bg-rose-500"}`}
            style={{
              height: Math.random() * 150 + 50 + 'px',
              left: (i * 8) + 2 + '%',
              top: Math.random() * 60 + 20 + '%',
            }}
            animate={{
              height: [Math.random() * 100 + 50, Math.random() * 200 + 100, Math.random() * 100 + 50],
              y: [0, Math.random() * 20 - 10, 0],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: Math.random() * 5 + 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-[70%] bg-inherit rounded-sm opacity-40" />
          </motion.div>
        ))}
      </div>

      {/* Data Streams */}
      <div className="absolute inset-0 opacity-[0.05] font-mono text-[10px]">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-blue-500 whitespace-nowrap"
            style={{
              left: Math.random() * 100 + '%',
              top: Math.random() * 100 + '%',
            }}
            animate={{
              y: [-20, -120],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              ease: "linear",
              delay: Math.random() * 10,
            }}
          >
            {`0.${Math.floor(Math.random() * 10000)} >> ORDER_EXECUTED`}
          </motion.div>
        ))}
      </div>

      {/* Animated Lines */}
      <svg className="absolute inset-0 w-full h-full opacity-10">
        <motion.path
          d="M0 100 Q 250 50 500 150 T 1000 100 T 1500 200"
          fill="none"
          stroke="#3b82f6"
          strokeWidth="1"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ 
            pathLength: [0, 1], 
            opacity: [0, 0.5, 0],
            d: [
              "M0 100 Q 250 50 500 150 T 1000 100 T 1500 200",
              "M0 150 Q 250 100 500 50 T 1000 150 T 1500 100",
              "M0 100 Q 250 50 500 150 T 1000 100 T 1500 200"
            ]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        />
      </svg>
    </div>
  );
};

const LiveResultsCounter = ({ isDarkMode }: { isDarkMode: boolean }) => {
  const [profit, setProfit] = useState(12450);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setProfit(prev => prev + Math.floor(Math.random() * 50) + 10);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`fixed bottom-6 left-6 z-40 px-6 py-3 rounded-2xl border backdrop-blur-xl flex items-center gap-4 shadow-2xl transition-all duration-500 hover:scale-105 ${isDarkMode ? "bg-zinc-950/90 border-amber-500/30 text-white" : "bg-white/90 border-amber-200 text-zinc-900"}`}>
      <div className="relative">
        <div className="w-3 h-3 bg-emerald-500 rounded-full" />
        <div className="absolute inset-0 w-3 h-3 bg-emerald-500 rounded-full animate-ping" />
      </div>
      <div className="flex flex-col">
        <span className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-500">Live Terminal Profit</span>
        <span className="text-lg font-black text-emerald-500 font-mono leading-none">
          +${profit.toLocaleString()}
        </span>
      </div>
    </div>
  );
};

const CountUp = ({ end, duration = 2, suffix = "" }: { end: number; duration?: number; suffix?: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  useEffect(() => {
    if (isInView) {
      const controls = animate(0, end, {
        duration: duration,
        onUpdate: (value) => setCount(Math.floor(value)),
      });
      return () => controls.stop();
    }
  }, [isInView, end, duration]);

  return <span ref={ref}>{count.toLocaleString()}{suffix}</span>;
};

const Button = ({ 
  children, 
  variant = "primary", 
  className = "", 
  ...props 
}: { 
  children: React.ReactNode; 
  variant?: "primary" | "secondary" | "outline" | "ghost"; 
  className?: string;
  [key: string]: any;
}) => {
  const baseStyles = "px-6 py-3 rounded-xl font-bold transition-all duration-300 flex items-center justify-center gap-2 active:scale-95 cursor-pointer";
  const variants = {
    primary: "bg-blue-600 hover:bg-blue-500 text-white shadow-[0_0_20px_rgba(37,99,235,0.4)]",
    secondary: "bg-white text-black hover:bg-zinc-200",
    outline: "border border-blue-500/50 text-blue-400 hover:bg-blue-500/10",
    ghost: "text-zinc-400 hover:text-white",
  };

  return (
    <button className={`${baseStyles} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
};

const Card = ({ children, className = "", isDarkMode = true, variant = "blue" }: { children: React.ReactNode; className?: string; isDarkMode?: boolean; variant?: "blue" | "gold" }) => (
  <motion.div 
    whileHover={{ y: -5 }}
    className={`backdrop-blur-2xl rounded-[2.5rem] p-8 border transition-all duration-500 group relative overflow-hidden ${
    isDarkMode 
      ? `bg-zinc-950/40 border-zinc-800/50 hover:border-${variant === "gold" ? "amber" : "blue"}-500/50 shadow-2xl hover:shadow-${variant === "gold" ? "amber" : "blue"}-500/10` 
      : `bg-white/80 border-zinc-200 shadow-xl shadow-zinc-200/50`
  } ${className}`}>
    <div className={`absolute inset-0 bg-gradient-to-br ${variant === "gold" ? "from-amber-500/10" : "from-blue-500/10"} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
    <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] pointer-events-none" />
    <div className="relative z-10">{children}</div>
  </motion.div>
);

const GlassContainer = ({ children, className = "", isDarkMode = true }: { children: React.ReactNode; className?: string; isDarkMode?: boolean }) => (
  <div className={`border backdrop-blur-3xl rounded-[3rem] relative overflow-hidden ${isDarkMode ? "bg-zinc-950/40 border-zinc-800/50" : "bg-white/80 border-zinc-200 shadow-2xl shadow-blue-500/10"} ${className}`}>
    <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.05] pointer-events-none" />
    <div className="relative z-10">{children}</div>
  </div>
);

// --- Typing Animation Component ---
const TypingText = ({ texts }: { texts: string[] }) => {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);

  useEffect(() => {
    if (subIndex === texts[index].length + 1 && !reverse) {
      setTimeout(() => setReverse(true), 2000);
      return;
    }

    if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex((prev) => (prev + 1) % texts.length);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (reverse ? -1 : 1));
    }, Math.max(reverse ? 75 : subIndex === texts[index].length ? 1000 : 150, parseInt((Math.random() * 100).toString())));

    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse, texts]);

  return (
    <span className="text-blue-400 inline-block min-h-[1.5em]">
      {`${texts[index].substring(0, subIndex)}`}
      <span className="animate-pulse ml-1">|</span>
    </span>
  );
};

// --- Navbar ---
const Navbar = ({ isDarkMode, setIsDarkMode }: { isDarkMode: boolean; setIsDarkMode: (v: boolean) => void }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Signals", href: "#services" },
    { name: "Results", href: "#results" },
    { name: "VIP Group", href: "#vip" },
    { name: "Live Market", href: "#live" },
    { name: "Social", href: "#social" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? (isDarkMode ? "bg-black/80 backdrop-blur-md py-4 border-b border-zinc-800" : "bg-white/80 backdrop-blur-md py-4 border-b border-zinc-200") : "bg-transparent py-6"}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <a href="#home" className="flex items-center gap-2 group cursor-pointer">
          <div className="w-10 h-10 bg-amber-500 rounded-xl flex items-center justify-center group-hover:rotate-12 transition-transform shadow-[0_0_15px_rgba(245,158,11,0.5)]">
            <TrendingUp className="text-black w-6 h-6" />
          </div>
          <span className={`text-xl font-black tracking-tighter uppercase ${isDarkMode ? "text-white" : "text-zinc-900"}`}>KEVIN <span className="text-amber-500">TRADER</span></span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <div className="flex items-center gap-6">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className={`text-sm font-medium transition-colors ${isDarkMode ? "text-zinc-400 hover:text-amber-400" : "text-zinc-600 hover:text-blue-600"}`}>
                {link.name}
              </a>
            ))}
          </div>
          <div className="h-6 w-px bg-zinc-800 mx-2" />
          <div className="flex items-center gap-4">
            <button 
              onClick={() => setIsDarkMode(!isDarkMode)}
              className={`p-2 rounded-full transition-colors ${isDarkMode ? "bg-zinc-900 text-yellow-400 hover:bg-zinc-800" : "bg-zinc-100 text-zinc-600 hover:bg-zinc-200"}`}
            >
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <a href="https://wa.me/923417447891?text=Hello%20Kevin%20Trader%2C%20I%20want%20to%20join%20your%20VIP%20trading%20group." target="_blank" rel="noopener noreferrer">
              <Button variant="primary" className="text-sm px-6 py-2 bg-amber-500 hover:bg-amber-600 shadow-[0_0_20px_rgba(245,158,11,0.4)] relative overflow-hidden group">
                <motion.div 
                  animate={{ x: ["-100%", "200%"] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12"
                />
                <span className="relative z-10 flex items-center gap-2">Join VIP <Crown size={16} /></span>
              </Button>
            </a>
          </div>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="flex items-center gap-4 md:hidden">
          <button 
            onClick={() => setIsDarkMode(!isDarkMode)}
            className={`p-2 rounded-full transition-colors ${isDarkMode ? "bg-zinc-900 text-yellow-400 hover:bg-zinc-800" : "bg-zinc-100 text-zinc-600 hover:bg-zinc-200"}`}
          >
            {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button className={`${isDarkMode ? "text-white" : "text-zinc-900"} p-2`} onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className={`md:hidden absolute top-full left-0 w-full border-b overflow-hidden ${isDarkMode ? "bg-black border-zinc-800" : "bg-white border-zinc-200"}`}
          >
            <div className="p-6 flex flex-col gap-6">
              {navLinks.map((link) => (
                <a key={link.name} href={link.href} className={`text-lg font-medium ${isDarkMode ? "text-zinc-300" : "text-zinc-700"}`} onClick={() => setIsOpen(false)}>
                  {link.name}
                </a>
              ))}
              <a href="https://wa.me/923417447891?text=Hello%20Kevin%20Trader%2C%20I%20want%20to%20join%20your%20VIP%20trading%20group." target="_blank" rel="noopener noreferrer" className={`text-lg font-medium ${isDarkMode ? "text-zinc-300" : "text-zinc-700"}`} onClick={() => setIsOpen(false)}>
                Join VIP Group
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

// --- Hero Section ---
const Hero = ({ isDarkMode }: { isDarkMode: boolean }) => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden">
      {/* Animated Background Elements */}
      <div className={`absolute top-0 left-1/4 w-[500px] h-[500px] blur-[120px] rounded-full -z-10 animate-pulse ${isDarkMode ? "bg-blue-600/10" : "bg-blue-400/20"}`} />
      <div className={`absolute bottom-0 right-1/4 w-[600px] h-[600px] blur-[150px] rounded-full -z-10 ${isDarkMode ? "bg-blue-500/5" : "bg-blue-300/10"}`} />
      
      {/* Grid Background */}
      <div className={`absolute inset-0 opacity-20 -z-10 ${isDarkMode ? "bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" : ""}`} />
      <div className={`absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] -z-10`} />

      <div className="max-w-7xl mx-auto px-6 w-full">
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-500 text-xs font-black uppercase tracking-[0.2em] mb-8"
          >
            <Crown size={14} /> The Gold Standard of Trading
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className={`text-5xl md:text-8xl font-black tracking-tight leading-[0.9] mb-8 ${isDarkMode ? "text-white drop-shadow-[0_0_30px_rgba(255,255,255,0.1)]" : "text-zinc-900"}`}
          >
            Trade Like a <span className="text-amber-500 drop-shadow-[0_0_20px_rgba(245,158,11,0.3)]">Professional.</span><br />
            Win Like a <span className="text-blue-500 drop-shadow-[0_0_20px_rgba(59,130,246,0.3)]">Champion.</span>
          </motion.h1>

          <div className={`text-xl md:text-3xl font-bold mb-12 h-12 ${isDarkMode ? "text-zinc-400" : "text-zinc-600"}`}>
            <TypingText texts={[
              "Kevin Trader",
              "Forex & Crypto Market Expert",
              "Smart Money Concepts Trader",
              "Live Market Analysis"
            ]} />
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-6 w-full sm:w-auto"
          >
            <a href="https://wa.me/923417447891?text=Hello%20Kevin%20Trader%2C%20I%20want%20to%20join%20your%20VIP%20trading%20group." target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
              <Button variant="primary" className="w-full px-12 py-5 text-xl bg-amber-500 hover:bg-amber-600 shadow-[0_0_30px_rgba(245,158,11,0.4)] relative overflow-hidden group">
                <motion.div 
                  animate={{ x: ["-100%", "200%"] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12"
                />
                <span className="relative z-10 flex items-center gap-2">Join VIP Group <Send size={24} /></span>
              </Button>
            </a>
            <a href="#services" className="w-full sm:w-auto">
              <Button variant="outline" className="w-full px-12 py-5 text-xl border-zinc-800 hover:bg-zinc-900">
                View Live Signals <TrendingUp size={24} />
              </Button>
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-20 pt-10 border-t border-zinc-800/50 w-full"
          >
            <p className="text-zinc-500 text-[10px] font-black uppercase tracking-[0.3em] mb-8">Institutional Liquidity Providers</p>
            <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-30 grayscale hover:grayscale-0 transition-all duration-700">
              {["OANDA", "BINANCE", "BYBIT", "EXNESS", "IC MARKETS"].map((partner) => (
                <span key={partner} className="text-xl md:text-2xl font-black tracking-tighter text-zinc-400">{partner}</span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const FeaturesGrid = ({ isDarkMode }: { isDarkMode: boolean }) => {
  const features = [
    {
      title: "SMC Mastery",
      desc: "Advanced Smart Money Concepts for institutional-level precision.",
      icon: <Activity className="text-blue-500" />,
      size: "col-span-1 md:col-span-2",
      img: "https://images.unsplash.com/photo-1611974717484-788cff8fca47?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "87% Accuracy",
      desc: "Verified win rate across Forex and Crypto markets.",
      icon: <Award className="text-amber-500" />,
      size: "col-span-1",
    },
    {
      title: "24/7 Analysis",
      desc: "Round-the-clock market monitoring and signal generation.",
      icon: <Clock className="text-emerald-500" />,
      size: "col-span-1",
    },
    {
      title: "Global Community",
      desc: "Join 5,000+ traders winning together every single day.",
      icon: <Globe className="text-indigo-500" />,
      size: "col-span-1 md:col-span-2",
      img: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&q=80&w=800"
    }
  ];

  return (
    <section className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className={`text-5xl md:text-7xl font-black mb-8 ${isDarkMode ? "text-white" : "text-zinc-900"}`}>
            The <span className="text-amber-500">Edge.</span>
          </h2>
          <p className="text-zinc-500 text-xl font-medium max-w-2xl mx-auto">
            Why professional traders choose Kevin Trader for their market insights and execution.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className={`${f.size} relative group`}
            >
              <Card isDarkMode={isDarkMode} className="h-full min-h-[300px] flex flex-col justify-between p-10">
                {f.img && (
                  <div className="absolute inset-0 -z-10 opacity-20 group-hover:opacity-40 transition-opacity duration-700">
                    <img src={f.img} alt="" className="w-full h-full object-cover" />
                    <div className={`absolute inset-0 ${isDarkMode ? "bg-black/60" : "bg-white/60"}`} />
                  </div>
                )}
                <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center mb-6">
                  {f.icon}
                </div>
                <div>
                  <h3 className={`text-3xl font-black mb-4 ${isDarkMode ? "text-white" : "text-zinc-900"}`}>{f.title}</h3>
                  <p className="text-zinc-500 font-medium text-lg leading-relaxed">{f.desc}</p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// --- About Section ---
const About = ({ isDarkMode }: { isDarkMode: boolean }) => {
  return (
    <section id="about" className={`py-32 relative overflow-hidden transition-colors duration-500 ${isDarkMode ? "bg-black" : "bg-white"}`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className={`aspect-square rounded-[3rem] overflow-hidden border relative group ${isDarkMode ? "border-zinc-800" : "border-zinc-200"}`}>
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800" 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" 
                alt="Kevin Trader" 
              />
              <div className="absolute inset-0 bg-blue-600/10 mix-blend-overlay" />
            </div>
            <div className={`absolute -bottom-10 -right-10 border p-8 rounded-[2rem] shadow-2xl hidden md:block ${isDarkMode ? "bg-zinc-900 border-zinc-800" : "bg-white border-zinc-200"}`}>
              <div className="flex items-center gap-4 mb-4">
                <Award className="text-blue-500 w-8 h-8" />
                <span className={`text-2xl font-black ${isDarkMode ? "text-white" : "text-zinc-900"}`}><CountUp end={7} suffix="+" /> Years</span>
              </div>
              <p className="text-zinc-500 font-bold uppercase tracking-widest text-xs">Experience in Markets</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className={`text-4xl md:text-5xl font-black mb-8 ${isDarkMode ? "text-white" : "text-zinc-900"}`}>Who is <span className="text-blue-500">Kevin Trader?</span></h2>
            <p className={`text-xl mb-8 leading-relaxed ${isDarkMode ? "text-zinc-400" : "text-zinc-600"}`}>
              Kevin Trader is a professional Forex and Crypto trader with over 7 years of experience in the financial markets. Known for his precision and disciplined approach, he has helped thousands of traders achieve consistency through his mentorship and analysis.
            </p>
            <p className={`text-lg mb-10 ${isDarkMode ? "text-zinc-500" : "text-zinc-500"}`}>
              He provides daily market breakdowns, high-probability trading setups, and comprehensive mentorship programs designed to take traders from beginner to professional level.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div className={`p-6 rounded-2xl border ${isDarkMode ? "bg-zinc-900/50 border-zinc-800" : "bg-zinc-100 border-zinc-200"}`}>
                <h4 className={`font-bold mb-2 ${isDarkMode ? "text-white" : "text-zinc-900"}`}>Market Analysis</h4>
                <p className="text-sm text-zinc-500">Daily breakdowns of market structure and price action.</p>
              </div>
              <div className={`p-6 rounded-2xl border ${isDarkMode ? "bg-zinc-900/50 border-zinc-800" : "bg-zinc-100 border-zinc-200"}`}>
                <h4 className={`font-bold mb-2 ${isDarkMode ? "text-white" : "text-zinc-900"}`}>Mentorship</h4>
                <p className="text-sm text-zinc-500">Private coaching and advanced trading strategies.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// --- Services Section ---
const Services = ({ isDarkMode }: { isDarkMode: boolean }) => {
  const services = [
    {
      title: "Trading Signals",
      description: "Real-time Forex and Crypto trade setups with precise entry, stop loss, and take profit levels.",
      icon: <Zap className="w-8 h-8" />,
      color: "blue"
    },
    {
      title: "Live Market Analysis",
      description: "Daily breakdown of market structure, price action, and potential setups across major pairs.",
      icon: <BarChart3 className="w-8 h-8" />,
      color: "blue"
    },
    {
      title: "VIP Mentorship",
      description: "Private Telegram group with advanced strategies, live webinars, and direct access to Kevin.",
      icon: <Users className="w-8 h-8" />,
      color: "blue"
    }
  ];

  return (
    <section id="services" className={`py-32 relative transition-colors duration-500 ${isDarkMode ? "bg-zinc-950/50" : "bg-zinc-50"}`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className={`text-4xl md:text-5xl font-black mb-6 uppercase tracking-tighter ${isDarkMode ? "text-white" : "text-zinc-900"}`}>Trading <span className="text-blue-500">Services</span></h2>
          <p className="text-zinc-500 text-lg max-w-2xl mx-auto">Elevate your trading game with our professional services designed for serious traders.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <Card className={`h-full flex flex-col ${isDarkMode ? "bg-zinc-900/40 border-zinc-800/50" : "bg-white border-zinc-200 shadow-xl shadow-zinc-200/50"}`}>
                <div className="w-16 h-16 bg-blue-600/10 rounded-2xl flex items-center justify-center text-blue-500 mb-8 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500 shadow-[0_0_15px_rgba(37,99,235,0.2)]">
                  {service.icon}
                </div>
                <h3 className={`text-2xl font-bold mb-4 ${isDarkMode ? "text-white" : "text-zinc-900"}`}>{service.title}</h3>
                <p className={`leading-relaxed mb-8 flex-1 ${isDarkMode ? "text-zinc-400" : "text-zinc-600"}`}>{service.description}</p>
                <a href="#contact" className="text-blue-400 font-bold flex items-center gap-2 hover:gap-4 transition-all">
                  Learn More <ArrowRight size={18} />
                </a>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// --- Results Section ---
const Results = ({ isDarkMode }: { isDarkMode: boolean }) => {
  const results = [
    { pair: "XAUUSD", type: "BUY", status: "TP HIT", profit: "+120 Pips", date: "Today" },
    { pair: "GBPUSD", type: "SELL", status: "TP HIT", profit: "+65 Pips", date: "Yesterday" },
    { pair: "BTCUSDT", type: "BUY", status: "TP HIT", profit: "+8.5%", date: "2 days ago" },
    { pair: "NAS100", type: "BUY", status: "TP HIT", profit: "+150 Pips", date: "3 days ago" },
  ];

  return (
    <section id="results" className={`py-32 transition-colors duration-500 ${isDarkMode ? "bg-black" : "bg-white"}`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-3 gap-16 items-start">
          <div className="lg:col-span-1">
            <h2 className={`text-4xl md:text-5xl font-black mb-8 leading-tight ${isDarkMode ? "text-white" : "text-zinc-900"}`}>Proven <br /><span className="text-amber-500">Results.</span></h2>
            <p className="text-zinc-500 text-lg mb-10">Transparency is our core value. We track every trade and share our performance with the community.</p>
            
            <div className="space-y-6">
              <div className={`p-8 rounded-3xl border flex items-center justify-between ${isDarkMode ? "bg-zinc-900/50 border-zinc-800" : "bg-zinc-100 border-zinc-200"}`}>
                <div>
                  <p className="text-zinc-500 font-bold uppercase tracking-widest text-xs mb-1">Win Rate</p>
                  <p className="text-4xl font-black text-emerald-500"><CountUp end={87} suffix="%" /></p>
                </div>
                <div className="w-16 h-16 rounded-full border-4 border-emerald-500/20 border-t-emerald-500 flex items-center justify-center">
                  <span className={`text-xs font-bold ${isDarkMode ? "text-white" : "text-zinc-900"}`}>87%</span>
                </div>
              </div>
              <div className={`p-8 rounded-3xl border flex items-center justify-between ${isDarkMode ? "bg-zinc-900/50 border-zinc-800" : "bg-zinc-100 border-zinc-200"}`}>
                <div>
                  <p className="text-zinc-500 font-bold uppercase tracking-widest text-xs mb-1">Trades This Week</p>
                  <p className={`text-4xl font-black ${isDarkMode ? "text-white" : "text-zinc-900"}`}><CountUp end={31} /></p>
                </div>
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${isDarkMode ? "bg-zinc-800 text-zinc-400" : "bg-zinc-200 text-zinc-600"}`}>
                  <Activity size={24} />
                </div>
              </div>
              <div className={`p-8 rounded-3xl border flex items-center justify-between ${isDarkMode ? "bg-zinc-900/50 border-zinc-800" : "bg-zinc-100 border-zinc-200"}`}>
                <div>
                  <p className="text-zinc-500 font-bold uppercase tracking-widest text-xs mb-1">Average RR</p>
                  <p className="text-4xl font-black text-amber-500">1:3</p>
                </div>
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${isDarkMode ? "bg-zinc-800 text-amber-500" : "bg-zinc-200 text-amber-600"}`}>
                  <TrendingUp size={24} />
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2 grid sm:grid-cols-2 gap-6">
            {results.map((res, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`p-8 rounded-[2rem] border transition-all group ${isDarkMode ? "bg-zinc-900/30 border-zinc-800 hover:border-emerald-500/30" : "bg-zinc-50 border-zinc-200 shadow-lg shadow-zinc-100"}`}
              >
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h4 className={`text-2xl font-black mb-1 ${isDarkMode ? "text-white" : "text-zinc-900"}`}>{res.pair}</h4>
                    <span className={`px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest ${res.type === 'BUY' ? 'bg-emerald-500/10 text-emerald-500' : 'bg-red-500/10 text-red-500'}`}>
                      {res.type} Setup
                    </span>
                  </div>
                  <div className="bg-emerald-500 text-white px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest shadow-[0_0_15px_rgba(16,185,129,0.4)]">
                    {res.status}
                  </div>
                </div>
                <div className="flex items-end justify-between">
                  <div>
                    <p className="text-zinc-500 text-xs font-bold uppercase mb-1">Profit Secured</p>
                    <p className={`text-3xl font-black group-hover:text-emerald-400 transition-colors ${isDarkMode ? "text-white" : "text-zinc-900"}`}>{res.profit}</p>
                  </div>
                  <div className="text-zinc-600 text-xs font-bold flex items-center gap-1">
                    <Clock size={12} /> {res.date}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// --- VIP Section ---
const VIPSection = ({ isDarkMode }: { isDarkMode: boolean }) => {
  return (
    <section id="vip" className={`py-32 relative overflow-hidden transition-colors duration-500 ${isDarkMode ? "bg-black" : "bg-white"}`}>
      <div className={`absolute inset-0 -z-10 ${isDarkMode ? "bg-blue-600/5" : "bg-blue-500/5"}`} />
      <div className="max-w-7xl mx-auto px-6">
        <GlassContainer className={`p-12 md:p-20 text-center relative overflow-hidden ${isDarkMode ? "bg-zinc-950/60 border-zinc-800/50" : "bg-white/80 border-zinc-200 shadow-2xl shadow-blue-500/10"}`}>
          <div className="absolute top-0 right-0 p-10 opacity-10">
            <Send size={200} className="text-blue-500 rotate-12" />
          </div>
          
          <div className="relative z-10 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-widest mb-8">
              Exclusive Access
            </div>
            <h2 className={`text-4xl md:text-6xl font-black mb-8 tracking-tighter ${isDarkMode ? "text-white" : "text-zinc-900"}`}>Join the <span className="text-blue-500">VIP Telegram Group</span></h2>
            <p className={`text-xl mb-12 leading-relaxed ${isDarkMode ? "text-zinc-400" : "text-zinc-600"}`}>
              Get instant access to high-probability signals, live market updates, and a community of professional traders. Stop trading alone and start winning with the team.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <a 
                href="https://wa.me/923417447891?text=Hello%20Kevin%20Trader%2C%20I%20want%20to%20join%20your%20VIP%20trading%20group." 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full sm:w-auto"
              >
                <Button variant="primary" className="w-full px-12 py-5 text-xl shadow-[0_0_30px_rgba(37,99,235,0.6)] group">
                  Contact on WhatsApp <MessageCircle size={24} className="group-hover:translate-x-2 group-hover:-translate-y-1 transition-transform" />
                </Button>
              </a>
              <div className="flex items-center gap-4 text-zinc-500 font-bold">
                <div className="flex -space-x-3">
                  {[1,2,3].map(i => (
                    <img key={i} src={`https://i.pravatar.cc/100?img=${i+40}`} className="w-10 h-10 rounded-full border-2 border-zinc-900" alt="User" />
                  ))}
                </div>
                <span><CountUp end={5000} suffix="+" /> Members</span>
              </div>
            </div>
          </div>
        </GlassContainer>
      </div>
    </section>
  );
};

// --- Social Media Section ---
const SocialMedia = ({ isDarkMode }: { isDarkMode: boolean }) => {
  const [subCount, setSubCount] = useState(12450);
  const [teleCount, setTeleCount] = useState(5230);
  const [tikCount, setTikCount] = useState(8940);

  useEffect(() => {
    const interval = setInterval(() => {
      setSubCount(prev => prev + Math.floor(Math.random() * 3));
      setTeleCount(prev => prev + Math.floor(Math.random() * 2));
      setTikCount(prev => prev + Math.floor(Math.random() * 4));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const socials = [
    { 
      name: "YouTube", 
      icon: <Youtube size={32} />, 
      link: "https://www.youtube.com/@kevintrader63", 
      color: "hover:text-red-500",
      sub: `${subCount.toLocaleString()} Subscribers`,
      isYouTube: true,
      isVerified: true
    },
    { 
      name: "Telegram", 
      icon: <Send size={32} />, 
      link: "https://t.me/kavintrader63", 
      color: "hover:text-blue-400",
      sub: `${teleCount.toLocaleString()} Community Members`
    },
    { 
      name: "TikTok", 
      icon: <Video size={32} />, 
      link: "https://www.tiktok.com/@kevintrader63", 
      color: "hover:text-zinc-100",
      sub: `${tikCount.toLocaleString()} Followers`
    },
    { 
      name: "WhatsApp", 
      icon: <MessageCircle size={32} />, 
      link: "https://wa.me/923417447891?text=Hello%20Kevin%20Trader%2C%20I%20want%20to%20join%20your%20VIP%20trading%20group.", 
      color: "hover:text-emerald-500",
      sub: "Direct Contact"
    },
  ];

  return (
    <section id="social" className="py-32 relative">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className={`text-5xl md:text-7xl font-black mb-8 ${isDarkMode ? "text-white" : "text-zinc-900"}`}>
            Connect <span className="text-amber-500">Global.</span>
          </h2>
          <p className="text-zinc-500 text-xl font-medium">
            Follow our journey across all platforms for daily insights, educational content, and community updates.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {socials.map((social, i) => (
            <motion.a
              key={i}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ y: -10 }}
              transition={{ delay: i * 0.1 }}
              className="block"
            >
              <Card isDarkMode={isDarkMode} variant={social.isYouTube ? "gold" : "blue"} className={`h-full text-center group ${social.color}`}>
                <div className="flex justify-center mb-6 transition-transform duration-500 group-hover:scale-110">
                  {social.icon}
                </div>
                <h3 className={`text-2xl font-black mb-2 ${isDarkMode ? "text-white" : "text-zinc-900"}`}>{social.name}</h3>
                <div className="flex items-center justify-center gap-1">
                  <p className="text-zinc-500 font-bold uppercase tracking-widest text-[10px]">{social.sub}</p>
                  {social.isVerified && (
                    <CheckCircle2 size={12} className="text-blue-500" />
                  )}
                </div>
              </Card>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

const LiveMarket = ({ isDarkMode }: { isDarkMode: boolean }) => (
  <section id="live" className="py-32 relative">
    <div className="container mx-auto px-6">
      <div className="text-center max-w-3xl mx-auto mb-20">
        <h2 className={`text-5xl md:text-7xl font-black mb-8 ${isDarkMode ? "text-white" : "text-zinc-900"}`}>
          Live <span className="text-amber-500">Market.</span>
        </h2>
        <p className="text-zinc-500 text-xl font-medium">
          Monitor the global markets in real-time with our advanced TradingView integration.
        </p>
      </div>
      <div className="max-w-6xl mx-auto">
        <TradingViewWidget />
      </div>
    </div>
  </section>
);

const FloatingWhatsApp = () => (
  <motion.a
    href="https://wa.me/923417447891?text=Hello%20Kevin%20Trader%2C%20I%20want%20to%20join%20your%20VIP%20trading%20group."
    target="_blank"
    rel="noopener noreferrer"
    initial={{ scale: 0 }}
    animate={{ scale: 1 }}
    whileHover={{ scale: 1.1 }}
    className="fixed bottom-6 right-6 z-50 w-16 h-16 bg-emerald-500 rounded-full flex items-center justify-center text-white shadow-[0_0_30px_rgba(16,185,129,0.4)]"
  >
    <MessageCircle size={32} />
  </motion.a>
);

// --- Contact Section ---
const Contact = ({ isDarkMode }: { isDarkMode: boolean }) => {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Message sent! Kevin will get back to you soon.');
    setFormState({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className={`py-32 relative overflow-hidden transition-colors duration-500 ${isDarkMode ? "bg-zinc-950/50" : "bg-zinc-50"}`}>
      <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] blur-[150px] rounded-full -z-10 ${isDarkMode ? "bg-blue-600/5" : "bg-blue-500/10"}`} />
      
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className={`text-4xl md:text-6xl font-black mb-8 tracking-tighter ${isDarkMode ? "text-white" : "text-zinc-900"}`}>Get in <span className="text-blue-500">Touch.</span></h2>
            <p className={`text-xl mb-12 leading-relaxed ${isDarkMode ? "text-zinc-400" : "text-zinc-600"}`}>
              Have questions about our VIP group or mentorship? Send us a message and we'll get back to you within 24 hours.
            </p>
            
            <div className="space-y-8">
              <div className="flex items-center gap-6">
                <div className="w-14 h-14 bg-blue-600/10 rounded-2xl flex items-center justify-center text-blue-500">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-zinc-500 font-bold uppercase tracking-widest text-xs mb-1">Email Us</p>
                  <p className={`font-bold ${isDarkMode ? "text-white" : "text-zinc-900"}`}>contact@kevintrader.com</p>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <div className="w-14 h-14 bg-blue-600/10 rounded-2xl flex items-center justify-center text-blue-500">
                  <Send size={24} />
                </div>
                <div>
                  <p className="text-zinc-500 font-bold uppercase tracking-widest text-xs mb-1">Telegram Support</p>
                  <p className={`font-bold ${isDarkMode ? "text-white" : "text-zinc-900"}`}>@KevinTraderSupport</p>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <div className="w-14 h-14 bg-green-600/10 rounded-2xl flex items-center justify-center text-green-500">
                  <MessageCircle size={24} />
                </div>
                <div>
                  <p className="text-zinc-500 font-bold uppercase tracking-widest text-xs mb-1">WhatsApp Contact</p>
                  <a 
                    href="https://wa.me/923417447891?text=Hello%20Kevin%20Trader%2C%20I%20want%20to%20join%20your%20VIP%20trading%20group." 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className={`font-bold hover:text-green-500 transition-colors ${isDarkMode ? "text-white" : "text-zinc-900"}`}
                  >
                    +92 341 7447891
                  </a>
                </div>
              </div>
            </div>
          </div>

          <GlassContainer className={`p-8 md:p-12 ${isDarkMode ? "bg-zinc-950/60 border-zinc-800/50" : "bg-white/80 border-zinc-200 shadow-2xl shadow-zinc-200/50"}`}>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label className="text-sm font-bold text-zinc-400 uppercase tracking-widest">Full Name</label>
                <div className="relative">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-600" size={20} />
                  <input 
                    type="text" 
                    required
                    value={formState.name}
                    onChange={(e) => setFormState({...formState, name: e.target.value})}
                    placeholder="John Doe" 
                    className={`w-full border rounded-2xl py-4 pl-12 pr-4 outline-none transition-all ${isDarkMode ? "bg-black/50 border-zinc-800 text-white focus:border-blue-500" : "bg-zinc-100 border-zinc-200 text-zinc-900 focus:border-blue-600"}`}
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-zinc-400 uppercase tracking-widest">Email Address</label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-600" size={20} />
                  <input 
                    type="email" 
                    required
                    value={formState.email}
                    onChange={(e) => setFormState({...formState, email: e.target.value})}
                    placeholder="john@example.com" 
                    className={`w-full border rounded-2xl py-4 pl-12 pr-4 outline-none transition-all ${isDarkMode ? "bg-black/50 border-zinc-800 text-white focus:border-blue-500" : "bg-zinc-100 border-zinc-200 text-zinc-900 focus:border-blue-600"}`}
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-zinc-400 uppercase tracking-widest">Your Message</label>
                <div className="relative">
                  <MessageSquare className="absolute left-4 top-4 text-zinc-600" size={20} />
                  <textarea 
                    required
                    value={formState.message}
                    onChange={(e) => setFormState({...formState, message: e.target.value})}
                    placeholder="How can we help you?" 
                    rows={4}
                    className={`w-full border rounded-2xl py-4 pl-12 pr-4 outline-none transition-all resize-none ${isDarkMode ? "bg-black/50 border-zinc-800 text-white focus:border-blue-500" : "bg-zinc-100 border-zinc-200 text-zinc-900 focus:border-blue-600"}`}
                  />
                </div>
              </div>
              <Button type="submit" variant="primary" className="w-full py-5 text-lg">
                Send Message <ArrowRight size={20} />
              </Button>
            </form>
          </GlassContainer>
        </div>
      </div>
    </section>
  );
};

// --- Footer ---
const Footer = ({ isDarkMode }: { isDarkMode: boolean }) => {
  return (
    <footer className={`pt-32 pb-12 border-t transition-colors duration-500 ${isDarkMode ? "bg-black border-zinc-900" : "bg-white border-zinc-200"}`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-12 mb-20">
          <div className="flex items-center gap-2 group cursor-pointer">
            <div className="w-10 h-10 bg-amber-500 rounded-xl flex items-center justify-center group-hover:rotate-12 transition-transform shadow-[0_0_15px_rgba(245,158,11,0.5)]">
              <TrendingUp className="text-black w-6 h-6" />
            </div>
            <span className={`text-xl font-black tracking-tighter uppercase ${isDarkMode ? "text-white" : "text-zinc-900"}`}>KEVIN <span className="text-amber-500">TRADER</span></span>
          </div>
          
          <div className="flex flex-wrap justify-center gap-8">
            {["Home", "About", "Services", "Results", "VIP", "Live", "Contact"].map(item => (
              <a key={item} href={`#${item.toLowerCase()}`} className={`transition-colors font-bold uppercase tracking-widest text-[10px] ${isDarkMode ? "text-zinc-500 hover:text-amber-500" : "text-zinc-500 hover:text-zinc-900"}`}>
                {item}
              </a>
            ))}
          </div>

          <div className="flex gap-4">
            {[
              { Icon: Youtube, href: "https://www.youtube.com/@kevintrader63" },
              { Icon: Send, href: "https://t.me/kavintrader63" },
              { Icon: Video, href: "https://www.tiktok.com/@kevintrader63" },
              { Icon: MessageCircle, href: "https://wa.me/923417447891?text=Hello%20Kevin%20Trader%2C%20I%20want%20to%20join%20your%20VIP%20trading%20group." }
            ].map(({ Icon, href }, i) => (
              <a 
                key={i} 
                href={href} 
                target="_blank" 
                rel="noopener noreferrer"
                className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${isDarkMode ? "bg-zinc-900 text-zinc-400 hover:text-amber-500 hover:bg-amber-500/10" : "bg-zinc-100 text-zinc-600 hover:text-blue-600 hover:bg-blue-600/10"}`}
              >
                <Icon size={20} />
              </a>
            ))}
          </div>
        </div>
        
        <div className={`pt-12 border-t flex flex-col md:flex-row justify-between items-center gap-6 ${isDarkMode ? "border-zinc-900" : "border-zinc-200"}`}>
          <p className="text-zinc-600 text-xs font-bold uppercase tracking-widest">© 2026 Kevin Trader. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="text-zinc-600 hover:text-white text-xs font-bold uppercase tracking-widest transition-colors">Privacy Policy</a>
            <a href="#" className="text-zinc-600 hover:text-white text-xs font-bold uppercase tracking-widest transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

// --- Main App ---
export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  return (
    <div className={`min-h-screen transition-colors duration-500 ${isDarkMode ? "bg-black text-zinc-100" : "bg-zinc-50 text-zinc-900"} font-sans selection:bg-blue-500 selection:text-white scroll-smooth`}>
      <GoldTicker isDarkMode={isDarkMode} />
      <TradingBackground isDarkMode={isDarkMode} />
      <LiveResultsCounter isDarkMode={isDarkMode} />
      <VIPPopup isDarkMode={isDarkMode} />
      <FloatingWhatsApp />
      <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
      <Hero isDarkMode={isDarkMode} />
      <FeaturesGrid isDarkMode={isDarkMode} />
      <About isDarkMode={isDarkMode} />
      <Services isDarkMode={isDarkMode} />
      <Results isDarkMode={isDarkMode} />
      <LiveMarket isDarkMode={isDarkMode} />
      <VIPSection isDarkMode={isDarkMode} />
      <SocialMedia isDarkMode={isDarkMode} />
      <Contact isDarkMode={isDarkMode} />
      <Footer isDarkMode={isDarkMode} />
      
      {/* Custom Scroll Progress Bar */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-amber-500 z-[60] origin-left"
        style={{ scaleX: useScroll().scrollYProgress }}
      />
    </div>
  );
}

import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Heart,
  Users,
  Shield,
  Zap,
  Award,
  Menu,
  X,
  ArrowUp,
  Plus,
} from "lucide-react";

const Index = () => {
  const [likedItems, setLikedItems] = useState([]);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [weBillNumber, setWeBillNumber] = useState("");
  const [mobileRecharge, setMobileRecharge] = useState({
    number: "",
    network: "",
  });

  const telegramStarsPackages = [
    { stars: 75, price: "$1.28", tonPrice: "0.43537" },
    { stars: 100, price: "$1.70", tonPrice: "0.57823" },
    { stars: 150, price: "$2.55", tonPrice: "0.86735" },
    { stars: 250, price: "$4.25", tonPrice: "1.44558" },
    { stars: 350, price: "$5.95", tonPrice: "2.02381" },
    { stars: 500, price: "$8.50", tonPrice: "2.89116" },
    { stars: 750, price: "$12.75", tonPrice: "4.33673" },
    { stars: 1000, price: "$17.00", tonPrice: "5.78231" },
    { stars: 1500, price: "$25.50", tonPrice: "8.67347" },
    { stars: 2500, price: "$42.50", tonPrice: "14.45578" },
    { stars: 5000, price: "$85.00", tonPrice: "28.91156" },
    { stars: 10000, price: "$170.00", tonPrice: "57.82313" },
  ];

  const additionalServices = [
    {
      id: "service1",
      name: "تزويد إحالات لبوتات تليجرام",
      description: "إحالات حقيقية لأي بوت تليجرام",
      pricing: "8 إحالات = 1 دولار (مثال: 40 إحالة = 5 دولار)",
      execution: "خلال 12 – 24 ساعة",
      icon: "🤖",
    },
    {
      id: "service2",
      name: "استخراج بيانات رقم موبايل",
      description:
        "للشبكات: Vodafone, Orange, Etisalat, WE\nالبيانات: الاسم رباعي، الرقم القومي، العنوان (و صورة البطاقة لـ WE)",
      pricing: "200 جنيه (230 جنيه لـ WE مع صورة البطاقة)",
      execution: "تنفيذ سريع",
      icon: "📱",
    },
    {
      id: "service3",
      name: "شحن ودفع فواتير الإنترنت الأرضي (WE)",
      description: "شحن باقات WE الرسمية شاملة الضريبة + عمولة 5 جنيه",
      pricing: [
        "140 GB: 263 جنيه",
        "200 GB: 361 جنيه",
        "250 GB: 447 جنيه",
        "400 GB: 700 جنيه",
        "600 GB: 1042 جنيه",
        "1 TB: 1664 جنيه",
      ],
      execution: "تنفيذ فوري بعد الدفع",
      icon: "🌐",
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const toggleLike = (id) => {
    setLikedItems((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const handlePurchaseNFT = (productName) => {
    const message = `مرحباً، أريد شراء: ${productName}`;
    const telegramUrl = `https://t.me/AboMorsyStore?text=${encodeURIComponent(
      message
    )}`;
    window.open(telegramUrl, "_blank");
  };

  const handlePurchaseStars = (starsCount) => {
    const message = `مرحباً، أريد شراء: ${starsCount} نجمة تيليغرام`;
    const telegramUrl = `https://t.me/AboMorsyStore?text=${encodeURIComponent(
      message
    )}`;
    window.open(telegramUrl, "_blank");
  };

  const handleSuggestService = () => {
    const message = `مرحباً، أود اقتراح خدمة جديدة للمتجر`;
    const telegramUrl = `https://t.me/AboMorsyStore?text=${encodeURIComponent(
      message
    )}`;
    window.open(telegramUrl, "_blank");
  };

  const handleAdditionalService = (serviceName) => {
    const message = `مرحباً، أريد الاستفسار عن: ${serviceName}`;
    const telegramUrl = `https://t.me/AboMorsyStore?text=${encodeURIComponent(
      message
    )}`;
    window.open(telegramUrl, "_blank");
  };

  const handleWEBillPayment = () => {
    if (!weBillNumber) return;
    const message = `مرحباً، أريد دفع فاتورة الإنترنت الأرضي (WE) للرقم: ${weBillNumber}`;
    const telegramUrl = `https://t.me/AboMorsyStore?text=${encodeURIComponent(
      message
    )}`;
    window.open(telegramUrl, "_blank");
    setWeBillNumber("");
  };

  const handleMobileRecharge = () => {
    if (!mobileRecharge.number || !mobileRecharge.network) return;
    const message = `مرحباً، أريد شحن رصيد موبايل للرقم: ${mobileRecharge.number} على شبكة ${mobileRecharge.network}`;
    const telegramUrl = `https://t.me/AboMorsyStore?text=${encodeURIComponent(
      message
    )}`;
    window.open(telegramUrl, "_blank");
    setMobileRecharge({ number: "", network: "" });
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMobileMenuOpen(false);
    }
  };

  return (
    <div
      className="min-h-screen bg-gradient-to-br from-red-900 via-gray-900 to-red-800"
      dir="rtl"
    >
      {/* CSS Animations and Effects */}
      <style>{`
        @keyframes float-gentle {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-5px); }
        }
        @keyframes fade-in-up {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes fiery-glow {
          0%, 100% { box-shadow: 0 0 10px rgba(239, 68, 68, 0.3); }
          50% { box-shadow: 0 0 20px rgba(239, 68, 68, 0.5); }
        }
        .float-gentle { animation: float-gentle 4s ease-in-out infinite; }
        .fade-in-up { animation: fade-in-up 0.6s ease-out; }
        .fiery-glow { animation: fiery-glow 2s ease-in-out infinite; }
        .card-hover {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .card-hover:hover {
          transform: translateY(-8px);
          box-shadow: 0 25px 50px -12px rgba(239, 68, 68, 0.3);
        }
        .btn-gradient-hover {
          background-size: 200% auto;
          transition: background-position 0.3s ease;
        }
        .btn-gradient-hover:hover {
          background-position: right center;
        }
      `}</style>
      {/* Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-xl border-b border-red-500/30 shadow-2xl">
        <div className="container mx-auto px-3 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-14 sm:h-16">
            <div className="hidden md:flex items-center space-x-6 lg:space-x-8 space-x-reverse mx-auto"></div>
          </div>
          {mobileMenuOpen && (
            <div className="md:hidden pb-4 animate-slide-up mobile-nav-backdrop">
              <div className="flex flex-col space-y-2">
                <button
                  onClick={() => scrollToSection("nft")}
                  className="mobile-nav-item flex items-center space-x-3 space-x-reverse px-4 py-4 rounded-xl bg-gradient-to-r from-red-600/20 to-orange-600/20 text-white hover:from-red-600/30 hover:to-orange-600/30 transition-all duration-300 mobile-text-lg font-medium touch-friendly"
                >
                  <span className="text-xl">🖼️</span>
                  <span>NFT</span>
                </button>
                <button
                  onClick={() => scrollToSection("telegram-stars")}
                  className="mobile-nav-item flex items-center space-x-3 space-x-reverse px-4 py-4 rounded-xl bg-gradient-to-r from-orange-600/20 to-yellow-600/20 text-white hover:from-orange-600/30 hover:to-yellow-600/30 transition-all duration-300 mobile-text-lg font-medium touch-friendly"
                >
                  <span className="text-xl">⭐</span>
                  <span>Stars</span>
                </button>
                <button
                  onClick={() => scrollToSection("telegram-premium")}
                  className="mobile-nav-item flex items-center space-x-3 space-x-reverse px-4 py-4 rounded-xl bg-gradient-to-r from-red-700/20 to-rose-600/20 text-white hover:from-red-700/30 hover:to-rose-600/30 transition-all duration-300 mobile-text-lg font-medium touch-friendly"
                >
                  <span className="text-xl">👑</span>
                  <span>Premium</span>
                </button>
                <button
                  onClick={() => scrollToSection("additional-services")}
                  className="mobile-nav-item flex items-center space-x-3 space-x-reverse px-4 py-                  4 rounded-xl bg-gradient-to-r from-orange-500/20 to-red-600/20 text-white hover:from-orange-500/30 hover:to-red-600/30 transition-all duration-300 mobile-text-lg font-medium touch-friendly"
                >
                  <span className="text-xl">🔥</span>
                  <span>خدمات إضافية</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>
      {/* Header */}
      <header className="bg-black/90 backdrop-blur-xl border-b border-red-500/30 sticky top-14 sm:top-16 z-40 mt-14 sm:mt-16 shadow-2xl">
        <div className="container mx-auto mobile-spacing sm:px-6 lg:px-8 py-4 sm:py-6">
          <div className="flex items-center justify-center gap-4 sm:gap-6">
            <div className="flex items-center space-x-3 sm:space-x-4 space-x-reverse">
              <div className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 flex items-center justify-center">
                <img
                  src="/assets/img10.jpeg"
                  alt="ABO MORSY STORE Logo"
                  className="w-full h-full object-contain filter drop-shadow-2xl"
                  loading="lazy"
                />
              </div>
              <div className="text-center sm:text-right">
                <h1 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold bg-gradient-to-r from-red-400 to-orange-300 bg-clip-text text-transparent mobile-text-center">
                  ABO MORSY STORE
                </h1>
                <p className="text-red-300/70 text-xs sm:text-sm lg:text-base mobile-text-center">
                  متجر الهدايا الرقمية والخدمات الحصرية
                </p>
              </div>
            </div>
          </div>
        </div>
      </header>
      {/* Hero Section */}
      <section className="py-12 sm:py-16 lg:py-20 xl:py-24 mobile-spacing sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-20 sm:-top-40 -right-20 sm:-right-40 w-40 sm:w-80 h-40 sm:h-80 bg-red-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div
            className="absolute -bottom-20 sm:-bottom-40 -left-20 sm:-left-40 w-40 sm:w-80 h-40 sm:h-80 bg-orange-500/10 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "2s" }}
          ></div>
        </div>
        <div className="container mx-auto text-center relative z-10">
          <div className="mb-8 sm:mb-12">
            <div className="w-20 h-20 sm:w-24 sm:h-24 lg:w-32 lg:h-32 xl:w-40 xl:h-40 mx-auto mb-4 sm:mb-6 float-gentle relative mobile-bounce-in">
              <div className="absolute inset-0 bg-gradient-to-r from-red-500/20 to-orange-500/20 rounded-full blur-xl"></div>
              <img
                src="/assets/img10.jpeg"
                alt="ABO MORSY STORE Logo"
                className="w-full h-full object-contain filter drop-shadow-2xl relative z-10"
                loading="lazy"
              />
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-red-400 via-orange-300 to-red-500 bg-clip-text text-transparent mobile-text-center px-2">
              خدمات وهدايا رقمية حصرية 🔥
            </h2>
            <p className="text-base sm:text-lg lg:text-xl xl:text-2xl text-gray-200 max-w-2xl mx-auto leading-relaxed mobile-spacing mobile-text-center">
              اكتشف خدماتنا المتنوعة من الاحالات، بيع وشراء USDT، وخدمات شحن
              واستخراج بيانات
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 lg:gap-8 mb-8 sm:mb-12 max-w-4xl mx-auto mobile-spacing">
            <div className="flex items-center justify-center space-x-2 space-x-reverse text-red-400 mobile-p-4 sm:p-4 lg:p-6 bg-red-500/10 rounded-xl backdrop-blur-sm border border-red-500/20 hover:border-red-500/40 transition-all duration-300 hover:scale-105 mobile-card touch-friendly">
              <Shield className="w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8" />
              <span className="mobile-text-sm sm:text-base font-medium">
                معاملات مؤمنة
              </span>
            </div>
            <div className="flex items-center justify-center space-x-2 space-x-reverse text-red-400 mobile-p-4 sm:p-4 lg:p-6 bg-red-500/10 rounded-xl backdrop-blur-sm border border-red-500/20 hover:border-red-500/40 transition-all duration-300 hover:scale-105 mobile-card touch-friendly">
              <Zap className="w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8" />
              <span className="mobile-text-sm sm:text-base font-medium">
                تسليم فوري
              </span>
            </div>
            <div className="flex items-center justify-center space-x-2 space-x-reverse text-red-400 mobile-p-4 sm:p-4 lg:p-6 bg-red-500/10 rounded-xl backdrop-blur-sm border border-red-500/20 hover:border-red-500/40 transition-all duration-300 hover:scale-105 mobile-card touch-friendly">
              <Award className="w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8" />
              <span className="mobile-text-sm sm:text-base font-medium">
                خدمات حصرية
              </span>
            </div>
          </div>
          <div className="mb-8 sm:mb-12">
            <Button
              onClick={handleSuggestService}
              className="bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 text-white font-bold px-6 py-3 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-red-500/30 btn-gradient-hover touch-friendly"
            >
              <Plus className="w-5 h-5 ml-2" />
              اقترح علينا خدمة
            </Button>
          </div>
          <Button
            onClick={() => window.open("https://t.me/AboMorsyStore", "_blank")}
            className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white font-bold px-6 py-3 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-orange-500/30 btn-gradient-hover touch-friendly"
          >
            <svg
              className="w-4 h-4 ml-2"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.65.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z" />
            </svg>
            تواصل معنا @AboMorsyStore
          </Button>
        </div>
      </section>
      {/* bay USDT */}
      /* full code remains the same before the added section */
      {/* bay USDT */}
      <section
        id="usdt-trade"
        className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden"
      >
        <div className="container mx-auto text-center z-10 relative">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-green-400 to-blue-500 text-transparent bg-clip-text">
            تداول USDT معنا
          </h2>
          <p className="text-lg sm:text-xl mb-10 text-gray-300">
            نوفر لك شراء وبيع USDT بأسعار واضحة وسريعة.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            {/* زر البيع من الزبون */}
            <button
              onClick={() => {
                const message = encodeURIComponent(
                  "مرحباً، أرغب في بيع USDT (50 جنيه للدولار). من فضلك تواصل معي لتأكيد العملية."
                );
                window.open(
                  `https://t.me/AboMorsyStore?text=${message}`,
                  "_blank"
                );
              }}
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-6 py-4 rounded-xl transition-all duration-300 hover:scale-105 shadow-lg"
            >
              💵 أشتري منك USDT (50 جنيه للدولار)
            </button>

            {/* زر الشراء للزبون */}
            <button
              onClick={() => {
                const message = encodeURIComponent(
                  "مرحباً، أرغب في شراء USDT (52 جنيه للدولار). من فضلك تواصل معي لتأكيد العملية."
                );
                window.open(
                  `https://t.me/AboMorsyStore?text=${message}`,
                  "_blank"
                );
              }}
              className="bg-green-600 hover:bg-green-700 text-white font-bold px-6 py-4 rounded-xl transition-all duration-300 hover:scale-105 shadow-lg"
            >
              👛 أبيع لك USDT (52 جنيه للدولار)
            </button>
          </div>
        </div>
      </section>
      {/* coin  */}
      /* full code remains the same before the added section */
      {/* طرق الاستلام */}
      <section
        id="usdt-trade"
        className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden"
      >
        <div className="container mx-auto text-center z-10 relative">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-green-400 to-blue-500 text-transparent bg-clip-text">
            طرق الاستلام المتاحة
          </h2>

          <div className="mt-10">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 justify-center items-center">
              {[
                { name: "Binance", icon: "🟡", color: "text-yellow-400" },
                { name: "Bybit", icon: "🔵", color: "text-blue-400" },
                { name: "Bitget", icon: "🔵", color: "text-blue-500" },
                { name: "OKX", icon: "🔴", color: "text-red-500" },
                { name: "BingX", icon: "🔵", color: "text-blue-500" },
                { name: "MEXC", icon: "🟠", color: "text-orange-400" },
              ].map((platform, idx) => (
                <div
                  key={idx}
                  className={`relative group bg-gradient-to-br from-gray-800 via-gray-900 to-black border border-gray-700 hover:border-${
                    platform.color.split("-")[1]
                  }-500 rounded-2xl px-6 py-4 flex flex-col items-center text-center transition-all duration-300 hover:scale-105 shadow-md hover:shadow-lg`}
                >
                  <span className={`text-3xl mb-2 ${platform.color}`}>
                    {platform.icon}
                  </span>
                  <span className="text-white font-semibold text-lg tracking-wide">
                    {platform.name}
                  </span>
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-orange-500 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform origin-center duration-500" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* NFT Section */}
      {/* Additional Services Section */}
      <section
        id="additional-services"
        className="py-12 sm:py-16 lg:py-20 xl:py-24 mobile-spacing sm:px-6 lg:px-8 bg-gradient-to-br from-red-900/60 via-gray-900/60 to-orange-900/60 relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-red-600/10 via-orange-600/10 to-yellow-600/10 animate-pulse"></div>
        <div className="container mx-auto relative z-10">
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <div className="inline-flex items-center space-x-2 sm:space-x-3 space-x-reverse mb-4 sm:mb-6 mobile-p-4 sm:p-4 lg:p-6 bg-gradient-to-r from-orange-500/10 to-red-500/10 rounded-full backdrop-blur-sm border border-orange-500/20 mobile-bounce-in">
              <span className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl">
                🔥
              </span>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold bg-gradient-to-r from-orange-400 to-red-600 bg-clip-text text-transparent mobile-text-center">
                خدمات إضافية حصرية
              </h3>
              <span className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl">
                🔥
              </span>
            </div>
            <p className="text-gray-200 text-base sm:text-lg lg:text            xl mobile-text-center mb-4">
              خدمات متنوعة بأسعار مناسبة وتنفيذ سريع
            </p>
            <p className="text-orange-300 text-lg sm:text-xl font-bold mobile-text-center">
              🚀 استمتع بخدماتنا المميزة الآن!
            </p>
          </div>
          <div className="max-w-6xl mx-auto grid mobile-grid-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {additionalServices.map((service, index) => (
              <Card
                key={index}
                className="bg-gradient-to-br from-gray-800/90 to-gray-900/90 border-gray-700/50 hover:border-orange-500/40 transition-all duration-300 hover:scale-105 backdrop-blur-sm hover:shadow-2xl hover:shadow-orange-500/20 group mobile-card card-hover"
              >
                <CardContent className="mobile-p-4 sm:p-6 lg:p-8 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-red-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="text-center space-y-4 sm:space-y-6 relative z-10">
                    <div className="text-3xl sm:text-4xl lg:text-5xl mx-auto mb-3 sm:mb-4">
                      {service.icon}
                    </div>
                    <h4 className="text-lg sm:text-xl lg:text-2xl font-bold text-orange-300 group-hover:text-orange-200 transition-colors mobile-text-center">
                      {service.name}
                    </h4>
                    <p className="mobile-text-sm sm:text-base text-gray-200 whitespace-pre-line mobile-text-center">
                      {service.description}
                    </p>
                    <div className="space-y-2">
                      {Array.isArray(service.pricing) ? (
                        service.pricing.map((price, idx) => (
                          <p
                            key={idx}
                            className="mobile-text-sm sm:text-base text-orange-400 mobile-text-center"
                          >
                            {price}
                          </p>
                        ))
                      ) : (
                        <p className="mobile-text-sm sm:text-base text-orange-400 mobile-text-center">
                          {service.pricing}
                        </p>
                      )}
                    </div>
                    <p className="mobile-text-sm sm:text-base text-gray-300 mobile-text-center">
                      {service.execution}
                    </p>
                    <Button
                      onClick={() => handleAdditionalService(service.name)}
                      className="mobile-full-width bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white font-bold mobile-btn sm:py-3 lg:py-4 mobile-text-base sm:text-lg rounded-xl transition-all duration-300 hover:shadow-xl hover:shadow-orange-500/30 transform hover:scale-105 btn-gradient-hover touch-friendly"
                    >
                      استفسر الآن
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-8">
            <Button
              onClick={() =>
                window.open("https://t.me/AboMorsyStore", "_blank")
              }
              className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white font-bold px-6 py-3 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-orange-500/30 btn-gradient-hover touch-friendly"
            >
              <svg
                className="w-4 h-4 ml-2"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.65.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z" />
              </svg>
              تواصل معنا @AboMorsyStore
            </Button>
          </div>
        </div>
      </section>
      {/* WE Bill Payment and Mobile Recharge Section */}
      <section
        id="payment-services"
        className="py-12 sm:py-16 lg:py-20 xl:py-24 mobile-spacing sm:px-6 lg:px-8 bg-gradient-to-r from-red-900/20 to-orange-900/20 relative"
      >
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-5 sm:top-10 right-5 sm:right-10 w-20 sm:w-40 h-20 sm:h-40 bg-red-500/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-5 sm:bottom-10 left-5 sm:left-10 w-20 sm:w-40 h-20 sm:h-40 bg-orange-500/5 rounded-full blur-3xl"></div>
        </div>
        <div className="container mx-auto relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold mb-4 sm:mb-6 lg:mb-8 bg-gradient-to-r from-red-400 to-orange-300 bg-clip-text text-transparent mobile-text-center">
              خدمات الشحن والدفع
            </h3>
            <div className="grid mobile-grid-1 sm:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
              <Card className="bg-gradient-to-br from-gray-800/90 to-gray-900/90 border-gray-700/50 hover:border-red-500/40 transition-all duration-300 hover:scale-105 backdrop-blur-sm hover:shadow-2xl hover:shadow-red-500/20 group mobile-card card-hover">
                <CardContent className="mobile-p-4 sm:p-6 lg:p-8">
                  <h4 className="text-lg sm:text-xl lg:text-2xl font-bold text-red-300 group-hover:text-red-200 transition-colors mobile-text-center mb-4">
                    دفع فاتورة الإنترنت الأرضي (WE)
                  </h4>
                  <Input
                    type="text"
                    placeholder="أدخل الرقم الأرضي"
                    value={weBillNumber}
                    onChange={(e) => setWeBillNumber(e.target.value)}
                    className="mobile-text-sm sm:text-base bg-gray-900/50 border-red-500/30 text-white placeholder-gray-400 mb-4 rounded-xl"
                  />
                  <Button
                    onClick={handleWEBillPayment}
                    disabled={!weBillNumber}
                    className="mobile-full-width bg-gradient-to-r from-red-600 to-orange-700 hover:from-red-700 hover:to-orange-800 text-white font-bold mobile-btn sm:py-3 lg:py-4 mobile-text-base sm:text-lg rounded-xl transition-all duration-300 hover:shadow-xl hover:shadow-red-500/30 transform hover:scale-105 btn-gradient-hover touch-friendly disabled:opacity-50"
                  >
                    إرسال
                  </Button>
                </CardContent>
              </Card>
              <Card className="bg-gradient-to-br from-gray-800/90 to-gray-900/90 border-gray-700/50 hover:border-red-500/40 transition-all duration-300 hover:scale-105 backdrop-blur-sm hover:shadow-2xl hover:shadow-red-500/20 group mobile-card card-hover">
                <CardContent className="mobile-p-4 sm:p-6 lg:p-8">
                  <h4 className="text-lg sm:text-xl lg:text-2xl font-bold text-red-300 group-hover:text-red-200 transition-colors mobile-text-center mb-4">
                    شحن رصيد موبايل
                  </h4>
                  <Input
                    type="text"
                    placeholder="أدخل رقم الموبايل"
                    value={mobileRecharge.number}
                    onChange={(e) =>
                      setMobileRecharge((prev) => ({
                        ...prev,
                        number: e.target.value,
                      }))
                    }
                    className="mobile-text-sm sm:text-base bg-gray-900/50 border-red-500/30 text-white placeholder-gray-400 mb-4 rounded-xl"
                  />
                  <Select
                    value={mobileRecharge.network}
                    onValueChange={(value) =>
                      setMobileRecharge((prev) => ({ ...prev, network: value }))
                    }
                  >
                    <SelectTrigger className="mobile-text-sm sm:text-base bg-gray-900/50 border-red-500/30 text-white placeholder-gray-400 mb-4 rounded-xl">
                      <SelectValue placeholder="اختر الشبكة" />
                    </SelectTrigger>
                    <SelectContent className="bg-gray-900 text-white border-red-500/30">
                      <SelectItem value="Vodafone">Vodafone</SelectItem>
                      <SelectItem value="Orange">Orange</SelectItem>
                      <SelectItem value="Etisalat">Etisalat</SelectItem>
                      <SelectItem value="WE">WE</SelectItem>
                    </SelectContent>
                  </Select>
                  <Button
                    onClick={handleMobileRecharge}
                    disabled={!mobileRecharge.number || !mobileRecharge.network}
                    className="mobile-full-width bg-gradient-to-r from-red-600 to-orange-700 hover:from-red-700 hover:to-orange-800 text-white font-bold mobile-btn sm:py-3 lg:py-4 mobile-text-base sm:text-lg rounded-xl transition-all duration-300 hover:shadow-xl hover:shadow-red-500/30 transform hover:scale-105 btn-gradient-hover touch-friendly disabled:opacity-50"
                  >
                    إرسال
                  </Button>
                </CardContent>
              </Card>
            </div>
            <div className="text-center mt-8">
              <Button
                onClick={() =>
                  window.open("https://t.me/AboMorsyStore", "_blank")
                }
                className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white font-bold px-6 py-3 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-orange-500/30 btn-gradient-hover touch-friendly"
              >
                <svg
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.65.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z" />
                </svg>
                تواصل معنا @AboMorsyStore
              </Button>
            </div>
          </div>
        </div>
      </section>
      {/* Wallet Section */}
      <section className="py-12 sm:py-16 lg:py-20 xl:py-24 mobile-spacing sm:px-6 lg:px-8 bg-gradient-to-r from-red-900/20 to-orange-900/20 relative">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-5 sm:top-10 right-5 sm:right-10 w-20 sm:w-40 h-20 sm:h-40 bg-red-500/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-5 sm:bottom-10 left-5 sm:left-10 w-20 sm:w-40 h-20 sm:h-40 bg-orange-500/5 rounded-full blur-3xl"></div>
        </div>
        <div className="container mx-auto relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold mb-4 sm:mb-6 lg:mb-8 bg-gradient-to-r from-red-400 to-orange-300 bg-clip-text text-transparent mobile-text-center">
              عنوان المحفظة للدفع 🤍
            </h3>
            <div className="bg-black/60 backdrop-blur-sm border border-red-500/30 rounded-2xl mobile-p-4 sm:p-6 lg:p-8 hover:border-red-500/50 transition-colors group mobile-card">
              <div className="text-red-300 mb-3 sm:mb-4 lg:mb-6 font-bold text-base sm:text-lg lg:text-xl group-hover:text-red-200 transition-colors mobile-text-center">
                محفظة TON:
              </div>
              <div className="bg-gray-800/50 rounded-xl mobile-p-3 sm:p-4 lg:p-6 border border-red-500/20 group-hover:border-red-500/40 transition-colors">
                <code className="text-red-400 break-all mobile-text-sm sm:text-base font-mono group-hover:text-red-300 transition-colors block mobile-text-center">
                  UQAFxhd23vi_m1MZi91PBCsSwwbU6ApIpJo2hPEda7euK_2t
                </code>
              </div>
              <p className="text-gray-400 mobile-text-sm sm:text-base mt-3 sm:mt-4 lg:mt-6 group-hover:text-gray-300 transition-colors leading-relaxed mobile-text-center">
                الرجاء إرسال المبلغ إلى عنوان المحفظة أعلاه وتواصل معنا عبر
                Telegram لتأكيد الدفع واستلام الخدمة.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Back to Top Button */}
      {showBackToTop && (
        <Button
          onClick={scrollToTop}
          className="fixed bottom-4 sm:bottom-6 right-4 sm:right-6 bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 text-white rounded-full p-3 sm:p-4 shadow-lg hover:shadow-xl hover:shadow-red-500/50 transition-all duration-300 hover:scale-110 z-50 touch-friendly"
        >
          <ArrowUp className="w-5 h-5 sm:w-6 sm:h-6" />
        </Button>
      )}
      {/* Footer */}
      <footer className="bg-black/90 border-t border-red-500/30 py-8 sm:py-12 mobile-spacing sm:px-6 lg:px-8">
        <div className="container mx-auto text-center">
          <div className="mb-6 sm:mb-8">
            <img
              src="/assets/img10.jpeg"
              alt="ABO MORSY STORE Logo"
              className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 mx-auto mb-4 sm:mb-6 filter drop-shadow-xl"
              loading="lazy"
            />
            <h4 className="text-lg sm:text-xl lg:text-2xl font-bold text-red-300">
              ABO MORSY STORE
            </h4>
            <p className="text-gray-400 text-xs sm:text-sm lg:text-base max-w-2xl mx-auto mobile-text-center">
              متجرك الموثوق للخدمات الرقمية والهدايا الحصرية. نوفر لك أفضل
              التجارب بأسعار تنافسية وسرعة في التنفيذ.
            </p>
          </div>
          <div className="flex justify-center space-x-4 sm:space-x-6 space-x-reverse mb-6 sm:mb-8">
            <button
              onClick={() =>
                window.open("https://t.me/AboMorsyStore", "_blank")
              }
              className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white font-bold px-4 sm:px-6 py-2 sm:py-3 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-orange-500/30 btn-gradient-hover touch-friendly"
            >
              {/* <svg
                className="w-4 h-4 sm:w-5 sm:h-5 ml-2"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="/assets/img10.jpeg" />
              </svg> */}
              <img
                src="/assets/img10.jpeg"
                alt=""
                className="w-4 h-4 sm:w-5 sm:h-5 ml-2"
              />
              تيليغرام
            </button>
          </div>
          <p className="text-gray-500 text-xs sm:text-sm">
            © {new Date().getFullYear()} ABO MORSY STORE. جميع الحقوق محفوظة.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;

import React, { useState, useEffect, useCallback } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import img from "../components/imgs/img10.jpeg"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  SelectGroup,
  SelectLabel,
} from "@/components/ui/select";
import {
  Shield,
  Zap,
  Award,
  ArrowUp,
  Plus,
  ArrowRight,
  Clipboard,
  CircleCheck,
  Phone,
  MessageCircle,
  Smartphone,
  Check,
  CreditCard,
  Building,
  User,
} from "lucide-react";
import { toast, Toaster } from "sonner";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

// The full application code will be in this single file, as per the rules.

const App = () => {
  // Website name and logo path
  const siteName = "KORSAN";

  // State for different sections and data
  const [dollarAmount, setDollarAmount] = useState("");
  
  // Static USD prices as requested
  const buyRate = 50;
  const sellRate = 48;
  const [transactionType, setTransactionType] = useState("buy");

  // Verification services
  const platformVerificationServices = [
    { name: "MEXC", price: 3.5, icon: "🟠" },
    { name: "Bit Mart", price: 3, icon: "🟢" },
    { name: "WEEX", price: 3.5, icon: "🟣" },
    { name: "Bybit", price: 4, icon: "🔵" },
    { name: "Binance", price: 4, icon: "🟡" },
    { name: "BingX", price: 3.5, icon: "🔵" },
    { name: "Bitget", price: 4, icon: "🔷" },
  ];
  const socialVerificationServices = [
    { name: "Facebook", price: 3500, icon: "🔵" },
    { name: "Instagram", price: 3500, icon: "🟣" },
    { name: "WhatsApp Business", price: 4500, icon: "🟢" },
  ];
  const [selectedVerificationService, setSelectedVerificationService] = useState(null);

  // Mobile Recharge
  const mobileNetworks = ["Vodafone", "Orange", "Etisalat", "WE"];
  const [selectedNetwork, setSelectedNetwork] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");

  // Payment methods
  const paymentMethods = [
    { name: "BitMart", id: "14323327", icon: "🟢" },
    { name: "Binance", id: "388614335", icon: "🟡" },
    { name: "MEXC", id: "40332075", icon: "🟠" },
    { name: "Bybit", id: "263587028", icon: "🔵" },
    { name: "Bitget", id: "8587398036", icon: "🔷" },
    { name: "BingX", id: "26068554", icon: "🔵" },
    { name: "OKX", id: "623279989815158033", icon: "⚫" },
    { name: "Gate.io", id: "17960886", icon: "⚪" },
  ];
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState(null);
  const [receiptFile, setReceiptFile] = useState(null);
  const [showPaymentDialog, setShowPaymentDialog] = useState(false);

  // Back to top button visibility
  const [showBackToTop, setShowBackToTop] = useState(false);

  // Calculate EGP price based on dollar amount and transaction type
  const calculatedEgpPrice = dollarAmount 
    ? (transactionType === "buy" ? buyRate : sellRate) * Number(dollarAmount) 
    : 0;

  // Handle various form submissions to Telegram
  const sendToTelegram = (message, file = null) => {
    // Note: The file cannot be sent directly via a simple GET request.
    // The user will need to upload it manually. This opens the Telegram chat with a pre-filled message.
    const telegramUrl = `https://t.me/AboMorsyStore?text=${encodeURIComponent(message)}`;
    window.open(telegramUrl, "_blank");
    toast.info("سيتم تحويلك إلى تيليجرام لإرسال الطلب");
  };

  const handleSendUSDTRequest = () => {
    if (!dollarAmount) {
      toast.error("يرجى إدخال الكمية أولاً.");
      return;
    }
    const message = `طلب ${transactionType === 'buy' ? 'شراء' : 'بيع'} USDT: \nالكمية: ${dollarAmount}$ \nالمبلغ بالجنيه: ${calculatedEgpPrice.toFixed(2)} ج.م`;
    sendToTelegram(message);
    setDollarAmount("");
  };

  const handleSendMobileRecharge = () => {
    const message = `طلب شحن رصيد:\nالشبكة: ${selectedNetwork}\nرقم الموبايل: ${mobileNumber}`;
    sendToTelegram(message);
    setSelectedNetwork("");
    setMobileNumber("");
  };

  const handleSendVerificationRequest = () => {
    if (!selectedVerificationService) {
      toast.error("يرجى اختيار خدمة التوثيق أولاً.");
      return;
    }
    const message = `طلب توثيق هوية:\nالخدمة: ${selectedVerificationService.name}\nالسعر: ${selectedVerificationService.price}$`;
    sendToTelegram(message);
    setSelectedVerificationService(null);
  };

  const handleCopyAddress = (id) => {
    navigator.clipboard.writeText(id);
    toast.success("تم نسخ العنوان بنجاح!");
  };

  const handleSendPaymentRequest = () => {
    if (!selectedPaymentMethod) {
      toast.error("يرجى اختيار طريقة الدفع");
      return;
    }
    const message = `لقد قمت بتحويل المبلغ إلى ${selectedPaymentMethod.name}. الرجاء إرفاق الإيصال في المحادثة.`;
    sendToTelegram(message, receiptFile);
    toast.info("تم فتح المحادثة على تيليجرام. يرجى إرفاق صورة الإيصال يدوياً لإتمام الطلب.");
    setReceiptFile(null);
    setSelectedPaymentMethod(null);
    setShowPaymentDialog(false);
  };

  // Back to top button logic
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

  return (
    <div dir="rtl" className="min-h-screen relative bg-white text-gray-900 overflow-x-hidden font-sans">
      <Toaster position="bottom-center" />

      {/* --- Custom CSS for animations and gradients --- */}
      <style>{`
        .btn-gradient {
          background-image: linear-gradient(to right, #9333ea 0%, #d8b4fe 50%, #9333ea 100%);
          transition: background-position 0.5s ease;
        }
        .btn-gradient:hover {
          background-position: -100% 0;
        }
        .service-card {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .service-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
        }
        .text-gradient {
          background-image: linear-gradient(to right, #9333ea, #c084fc);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        
        /* Pure CSS animated background */
        .animated-gradient-bg {
            position: fixed;
            inset: 0;
            background: linear-gradient(-45deg, #f3e8ff, #d8b4fe, #ffffff, #f3e8ff);
            background-size: 400% 400%;
            animation: gradient-animation 15s ease infinite;
            z-index: -10;
        }
        @keyframes gradient-animation {
            0% {
                background-position: 0% 50%;
            }
            50% {
                background-position: 100% 50%;
            }
            100% {
                background-position: 0% 50%;
            }
        }
      `}</style>
      <div className="animated-gradient-bg"></div>

      {/* --- Navbar --- */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm border-b border-purple-200 shadow-xl">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2 space-x-reverse">
            <img
              src={img}
              alt={`${siteName} Logo`}
              className="w-12 h-12 rounded-full object-contain"
              loading="lazy"
            />
            <h1 className="text-3xl font-bold text-gradient">
              {siteName}
            </h1>
          </div>
          <Button
            onClick={() => window.open("https://t.me/AboMorsyStore", "_blank")}
            className="btn-gradient text-white font-bold py-2 px-6 rounded-full shadow-lg hover:shadow-xl transition-all"
          >
            تواصل معنا
          </Button>
        </div>
      </nav>

      <main className="container mx-auto pt-28 pb-12 px-4">
        {/* --- Header & Slogan --- */}
        <header className="text-center mb-16">
          <h2 className="text-5xl font-extrabold mb-4 text-gradient">
            خدمات رقمية حصرية 🔥
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-600">
            اكتشف خدماتنا المتنوعة من بيع وشراء العملات الرقمية، شحن الرصيد، وتوثيق الحسابات.
          </p>
        </header>

        {/* --- Services Section --- */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* Service Card: USDT Buy & Sell */}
          <Card className="service-card bg-purple-50 border-2 border-purple-200 rounded-xl shadow-lg hover:shadow-2xl">
            <CardContent className="p-6">
              <div className="flex items-center justify-center mb-4">
                <div className="w-16 h-16 rounded-full bg-purple-200 flex items-center justify-center">
                  <Zap className="w-8 h-8 text-purple-600" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-center text-purple-700 mb-4">USDT Buy & Sell</h3>
              <p className="text-gray-600 text-center mb-2">
                سعر الشراء: <span className="font-bold text-green-600">{buyRate} ج.م</span> | سعر البيع: <span className="font-bold text-red-600">{sellRate} ج.م</span>
              </p>
              <RadioGroup value={transactionType} onValueChange={setTransactionType} className="flex justify-center mb-4">
                <div className="flex bg-gray-100 p-1 rounded-full border border-purple-300">
                  <RadioGroupItem value="buy" id="buy-radio" className="peer sr-only" />
                  <Label
                    htmlFor="buy-radio"
                    className="cursor-pointer px-4 py-2 rounded-full text-sm font-medium transition-colors peer-data-[state=checked]:bg-green-600 peer-data-[state=checked]:text-white"
                  >
                    شراء
                  </Label>
                  <RadioGroupItem value="sell" id="sell-radio" className="peer sr-only" />
                  <Label
                    htmlFor="sell-radio"
                    className="cursor-pointer px-4 py-2 rounded-full text-sm font-medium transition-colors peer-data-[state=checked]:bg-red-600 peer-data-[state=checked]:text-white"
                  >
                    بيع
                  </Label>
                </div>
              </RadioGroup>
              <Input
                type="number"
                min="0"
                placeholder="أدخل الكمية بالدولار"
                value={dollarAmount}
                onChange={(e) => setDollarAmount(e.target.value)}
                className="bg-gray-100 border-purple-300 text-gray-900 rounded-xl mb-4"
              />
              <div className="flex justify-between items-center text-lg font-semibold text-purple-700 mb-4">
                <span>المبلغ بالج.م:</span>
                <span className="text-gradient font-extrabold">{calculatedEgpPrice.toFixed(2)} ج.م</span>
              </div>
              <Button
                onClick={handleSendUSDTRequest}
                disabled={!dollarAmount || calculatedEgpPrice === 0}
                className="w-full btn-gradient text-white rounded-xl"
              >
                إرسال الطلب
              </Button>
            </CardContent>
          </Card>

          {/* Service Card: Mobile Recharge */}
          <Card className="service-card bg-purple-50 border-2 border-purple-200 rounded-xl shadow-lg hover:shadow-2xl">
            <CardContent className="p-6">
              <div className="flex items-center justify-center mb-4">
                <div className="w-16 h-16 rounded-full bg-purple-200 flex items-center justify-center">
                  <Smartphone className="w-8 h-8 text-purple-600" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-center text-purple-700 mb-4">شحن رصيد الموبايل</h3>
              <p className="text-gray-600 text-center mb-4">
                اختر الشبكة واشحن رصيد هاتفك بسهولة.
              </p>
              <Select onValueChange={setSelectedNetwork} value={selectedNetwork}>
                <SelectTrigger className="bg-gray-100 border-purple-300 text-gray-900 rounded-xl mb-4">
                  <SelectValue placeholder="اختر الشبكة" />
                </SelectTrigger>
                <SelectContent className="bg-white text-gray-900 border-purple-300 rounded-xl">
                  {mobileNetworks.map(network => (
                    <SelectItem key={network} value={network}>
                      {network}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Input
                type="tel"
                placeholder="أدخل رقم الموبايل"
                value={mobileNumber}
                onChange={(e) => setMobileNumber(e.target.value)}
                className="bg-gray-100 border-purple-300 text-gray-900 rounded-xl mb-4"
              />
              <Button
                onClick={handleSendMobileRecharge}
                disabled={!selectedNetwork || !mobileNumber}
                className="w-full btn-gradient text-white rounded-xl"
              >
                إرسال طلب الشحن
              </Button>
            </CardContent>
          </Card>
        </section>

        {/* --- Verification Services Section --- */}
        <section className="mb-16">
          <h3 className="text-3xl font-bold text-center text-gradient mb-8">خدمات التوثيق</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Platform Verification */}
            <Card className={`service-card bg-purple-50 border-2 rounded-xl shadow-lg hover:shadow-2xl ${selectedVerificationService?.category === 'platforms' ? 'border-purple-500' : 'border-purple-200'}`}>
              <CardContent className="p-6">
                <div className="flex items-center justify-center mb-4">
                  <div className="w-16 h-16 rounded-full bg-purple-200 flex items-center justify-center">
                    <Shield className="w-8 h-8 text-purple-600" />
                  </div>
                </div>
                <h4 className="text-xl font-bold text-center text-purple-700 mb-4">توثيق المنصات</h4>
                <p className="text-gray-600 text-center mb-4">
                  احصل على توثيق هويتك (KYC) على أشهر منصات التداول.
                </p>
                <RadioGroup onValueChange={(val) => setSelectedVerificationService({ ...platformVerificationServices.find(s => s.name === val), category: 'platforms' })} value={selectedVerificationService?.name}>
                  <div className="space-y-2">
                    {platformVerificationServices.map(service => (
                      <div key={service.name} className={`flex items-center space-x-2 space-x-reverse justify-between bg-white p-3 rounded-lg border border-gray-200 cursor-pointer ${selectedVerificationService?.name === service.name ? 'bg-purple-100 border-purple-500' : ''}`}>
                        <Label htmlFor={service.name} className="flex-1 font-semibold text-gray-800">
                          {service.icon} {service.name}
                        </Label>
                        <span className="text-purple-600 font-bold ml-auto">{service.price}$</span>
                        <RadioGroupItem value={service.name} id={service.name} className="mr-2" />
                      </div>
                    ))}
                  </div>
                </RadioGroup>
              </CardContent>
            </Card>

            {/* Social Media Verification */}
            <Card className={`service-card bg-purple-50 border-2 rounded-xl shadow-lg hover:shadow-2xl ${selectedVerificationService?.category === 'social' ? 'border-purple-500' : 'border-purple-200'}`}>
              <CardContent className="p-6">
                <div className="flex items-center justify-center mb-4">
                  <div className="w-16 h-16 rounded-full bg-purple-200 flex items-center justify-center">
                    <Award className="w-8 h-8 text-purple-600" />
                  </div>
                </div>
                <h4 className="text-xl font-bold text-center text-purple-700 mb-4">توثيق السوشيال ميديا</h4>
                <p className="text-gray-600 text-center mb-4">
                  وثق حساباتك على منصات التواصل الاجتماعي الأكثر شهرة.
                </p>
                <RadioGroup onValueChange={(val) => setSelectedVerificationService({ ...socialVerificationServices.find(s => s.name === val), category: 'social' })} value={selectedVerificationService?.name}>
                  <div className="space-y-2">
                    {socialVerificationServices.map(service => (
                      <div key={service.name} className={`flex items-center space-x-2 space-x-reverse justify-between bg-white p-3 rounded-lg border border-gray-200 cursor-pointer ${selectedVerificationService?.name === service.name ? 'bg-purple-100 border-purple-500' : ''}`}>
                        <Label htmlFor={service.name} className="flex-1 font-semibold text-gray-800">
                          {service.icon} {service.name}
                        </Label>
                        <span className="text-purple-600 font-bold ml-auto">{service.price} ج.م</span>
                        <RadioGroupItem value={service.name} id={service.name} className="mr-2" />
                      </div>
                    ))}
                  </div>
                </RadioGroup>
              </CardContent>
            </Card>

            {/* General Verification Request */}
            <Card className="service-card bg-purple-50 border-2 border-purple-200 rounded-xl shadow-lg hover:shadow-2xl flex items-center">
              <CardContent className="p-6 w-full">
                <div className="text-center">
                  <h4 className="text-xl font-bold text-purple-700 mb-4">إرسال طلب التوثيق</h4>
                  <p className="text-gray-600 mb-6">
                    بعد اختيار الخدمة، اضغط على الزر أدناه لإرسال طلبك.
                  </p>
                  <Button
                    onClick={handleSendVerificationRequest}
                    disabled={!selectedVerificationService}
                    className="w-full btn-gradient text-white rounded-xl"
                  >
                    <ArrowRight className="w-4 h-4 ml-2" />
                    إرسال طلب
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* --- Payment & Receiving Methods --- */}
        <section className="mb-16">
          <h3 className="text-3xl font-bold text-center text-gradient mb-8">
            طرق الدفع والاستلام
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-6">
            {paymentMethods.map((method) => (
              <div
                key={method.name}
                onClick={() => {
                  setSelectedPaymentMethod(method);
                  setShowPaymentDialog(true);
                }}
                className="service-card cursor-pointer bg-purple-50 border-2 border-purple-200 rounded-xl p-4 text-center flex flex-col items-center justify-center space-y-2 shadow-lg hover:shadow-2xl"
              >
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-purple-200">
                  <CreditCard className="w-6 h-6 text-purple-600" />
                </div>
                <span className="text-md font-semibold text-gray-800">{method.name}</span>
              </div>
            ))}
          </div>
        </section>

      </main>

      {/* --- Payment Dialog --- */}
      <Dialog open={showPaymentDialog} onOpenChange={setShowPaymentDialog}>
        <DialogContent className="bg-purple-50 text-gray-900 rounded-xl border border-purple-300">
          <DialogHeader>
            <DialogTitle className="text-2xl text-gradient text-center">
              الدفع عبر {selectedPaymentMethod?.name}
            </DialogTitle>
            <DialogDescription className="text-gray-600 text-center">
              يرجى نسخ العنوان وإرسال الإيصال على تيليجرام بعد الدفع.
            </DialogDescription>
          </DialogHeader>
          {selectedPaymentMethod && (
            <div className="space-y-4 text-right">
              <div className="bg-white p-4 rounded-lg border border-purple-300">
                <Label htmlFor="payment-id" className="text-gray-800">
                  معرّف المحفظة
                </Label>
                <div className="flex items-center mt-2">
                  <Input
                    id="payment-id"
                    type="text"
                    value={selectedPaymentMethod.id}
                    readOnly
                    className="flex-1 bg-white border-none text-purple-700 font-mono"
                  />
                  <Button
                    onClick={() => handleCopyAddress(selectedPaymentMethod.id)}
                    className="ml-2 bg-purple-600 hover:bg-purple-700 text-white rounded-full p-2"
                    aria-label="Copy address"
                  >
                    <Clipboard className="w-4 h-4" />
                  </Button>
                </div>
              </div>
              <div>
                <Label htmlFor="receipt-file" className="block text-gray-800 mb-2">
                  إرفاق إيصال التحويل
                </Label>
                <input
                  type="file"
                  id="receipt-file"
                  accept="image/*,application/pdf"
                  onChange={(e) => setReceiptFile(e.target.files[0])}
                  className="w-full text-gray-900 file:bg-purple-600 file:text-white file:border-none file:rounded-xl file:px-4 file:py-2 file:cursor-pointer hover:file:bg-purple-700"
                />
              </div>
              <Button
                onClick={handleSendPaymentRequest}
                disabled={!receiptFile}
                className="w-full btn-gradient text-white rounded-xl mt-4"
              >
                متابعة إلى تيليجرام
              </Button>
            </div>
          )}
        </DialogContent>
      </Dialog>

      {/* --- Back to Top Button --- */}
      {showBackToTop && (
        <Button
          onClick={scrollToTop}
          className="fixed bottom-6 left-6 bg-purple-600 hover:bg-purple-700 text-white rounded-full p-3 shadow-lg hover:scale-110 transition-transform z-50"
          aria-label="العودة للأعلى"
        >
          <ArrowUp className="w-6 h-6" />
        </Button>
      )}

      {/* --- Footer --- */}
      <footer className="bg-purple-100/80 border-t border-purple-300 py-8 text-center text-gray-700">
        <div className="container mx-auto px-4">
          <img
            src={img}
            alt={`${siteName} Logo`}
            className="w-20 h-20 mx-auto mb-4 rounded-full"
            loading="lazy"
          />
          <h4 className="text-xl font-bold text-gradient mb-2">{siteName}</h4>
          <p className="max-w-xl mx-auto text-sm">
            متجرك الموثوق للخدمات الرقمية والهدايا الحصرية. نوفر لك أفضل التجارب بأسعار تنافسية وسرعة في التنفيذ.
          </p>
          <div className="mt-6 flex justify-center items-center gap-4">
            <a
              href="https://t.me/AboMorsyStore"
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-600 hover:text-purple-400 transition-colors"
            >
              <MessageCircle className="w-6 h-6" />
            </a>
          </div>
          <p className="mt-8 text-xs text-gray-500">
            © {new Date().getFullYear()} <span className="text-gradient">{siteName}</span>. جميع الحقوق محفوظة.
          </p>
          <p className="mt-2 text-xs text-gray-500">
            تم البرمجة والتطوير بواسطة{" "}
            <a
              href="https://wa.me/201091375804"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-600 hover:underline"
            >
              Habashi
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;

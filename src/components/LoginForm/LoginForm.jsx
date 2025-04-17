import React, { useState } from "react";
import { auth } from "../../firebaseConfig";
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import Header from "../Home/Header/Header";
import MobileHeader from "../Home/Header/MobileHeader";
import MobileFooter from "../Home/Footer/mobileFooter/MobileFooter";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isRegister, setIsRegister] = useState(false);
  const [error, setError] = useState("");
  const [formTransition, setFormTransition] = useState(false); // to trigger the transition

  const navigate = useNavigate(); // Initialize navigate

  const handleAuth = async () => {
    setError("");
    try {
      if (isRegister) {
        await createUserWithEmailAndPassword(auth, email, password);
        // alert("ثبت‌نام موفقیت‌آمیز بود!");
        navigate('/')
      } else {
        await signInWithEmailAndPassword(auth, email, password);
        // alert("ورود موفقیت‌آمیز بود!");
        navigate("/"); // Redirect to the homepage after successful login
      }
    } catch (err) {
      // Translate Firebase error messages to Persian
      let errorMessage = "";
      switch (err.code) {
        case "auth/invalid-email":
          errorMessage = "ایمیل وارد شده معتبر نیست.";
          break;
        case "auth/user-disabled":
          errorMessage = "این حساب کاربری غیرفعال است.";
          break;
        case "auth/user-not-found":
          errorMessage = "کاربری با این ایمیل پیدا نشد.";
          break;
        case "auth/wrong-password":
          errorMessage = "پسورد وارد شده اشتباه است.";
          break;
        case "auth/email-already-in-use":
          errorMessage = "این ایمیل قبلاً ثبت‌نام شده است.";
          break;
        default:
          errorMessage = " اطلاعات وارد شده نادرست است";
          break;
      }
      setError(errorMessage);
    }
  };

  const toggleForm = () => {
    setFormTransition(true);
    setTimeout(() => {
      setIsRegister(!isRegister);
      setFormTransition(false);
    }, 300);
  };

  return (
    <div>
      <Header />
      <MobileHeader />
      <div>
        <img className="w-screen h-screen object-fill" src="/images/LoginForm/1.png" alt="" />
        <div
          className={`w-[400px] h-[480px] mx-auto mt-40 rounded-3xl fixed top-0 right-0 left-0 bg-gray-800/50 backdrop-blur-[6px] transition-all duration-500 ${formTransition ? 'opacity-0 translate-x-[50px]' : 'opacity-100 translate-x-0'}`}
        >
          <h2 className="text-center pt-10 text-xl text-white transition-all duration-500">{isRegister ? "ثبت نام" : "ورود"}</h2>
          <div className="text-white text-center pt-6">
            {error && <p className="text-red-500">{error}</p>}
            <div>
              <label htmlFor="email">ایمیل: </label>
              <input
                id="email"
                dir="ltr"
                className="w-60 h-10 border outline-none text-center rounded-lg text-sm text-zinc-700"
                type="email"
                placeholder="ایمیل خود را وارد کنید"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <br />
            <div>
              <label htmlFor="password">پسورد: </label>
              <input
                id="password"
                dir="ltr"
                className="w-60 h-10 border outline-none text-center rounded-lg text-sm text-zinc-700"
                type={showPassword ? "text" : "password"}
                placeholder="پسورد خود را وارد کنید"
                value={password}
                onChange={(e) => setPassword(e.target.value)} 
              />
            </div>
            <div className="flex items-center gap-1 pr-[112px] pt-2">
              <input type="checkbox" id="showPassword" checked={showPassword} onChange={() => setShowPassword(!showPassword)} />
              <label htmlFor="showPassword" className="text-sm"> نمایش پسورد </label>
            </div>
            <div className="pt-5 pr-11">
              <button
                onClick={handleAuth}
                className={`w-[240px] h-10 rounded-lg transition-all duration-300 ${isRegister ? 'bg-green-500 hover:bg-green-400' : 'bg-cyan-500 hover:bg-cyan-400'}`}
              >
                {isRegister ? "ثبت نام" : "ورود"}
              </button>
            </div>
          </div>
          <div className="text-center pt-6 text-white">
            <p className="cursor-pointer text-cyan-500" onClick={toggleForm}>
              {isRegister ? <div>حساب کاربری دارید؟👈 ورود</div> : <div>حساب کاربری ندارید؟👈 ثبت نام</div>}
            </p>
          </div>
          <div className="text-center pt-4 text-white text-sm">
            {isRegister ? "لطفاً اطلاعات خود را برای ثبت‌نام وارد کنید" : "برای ورود ایمیل و پسورد خود را وارد کنید"}
          </div>
        </div>
      </div>
      <MobileFooter />
    </div>
  );
}

import { useEffect, useState } from "react";
import React from "react";
import "./App.css";
import routes from "./routes";
import { useRoutes, useLocation } from "react-router-dom";
import ScaleLoader from "react-spinners/ScaleLoader";
import { AuthProvider } from "./components/contexts/authContext";

function App() {
  const [loading, setLoading] = useState(false);
  const location = useLocation(); // برای نظارت بر تغییر مسیرها استفاده می‌شود

  // استفاده از useEffect برای نمایش لودر هنگام بارگذاری اولیه و تغییر مسیر
  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000); // اینجا زمان انتظار را برای نمایش اسپینر تنظیم کرده‌ایم (1 ثانیه)

    return () => clearTimeout(timer); // تمیز کردن تایمر برای جلوگیری از بروز خطا
  }, [location]); // زمانی که مسیر تغییر می‌کند، لودر را نمایش بده

  let router = useRoutes(routes);

  return (
    <AuthProvider>
      <div className="">
        {loading ? (
          <div className="flex items-center justify-center pt-52">
            <ScaleLoader color={"#36d7b7"} loading={loading} size={150} />
          </div>
        ) : (
          <div>{router}</div>
        )}
      </div>
    </AuthProvider>
  );
}

export default App;

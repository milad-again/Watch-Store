import React from "react";

export default function Tizer() {
  return (
    <div className="flex flex-col gap-3 items-center justify-center py-4 px-4">
      <p className="tracking-tighter text-center dark:text-gray-300 text-sm sm:text-base">
        ویدیویی از ورساچه را مشاهده می‌کنید
      </p>
      <video
        className="w-full max-w-[950px] rounded-lg"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/video/versach.mp4" type="video/mp4" />
        مرورگر شما از ویدیو پشتیبانی نمی‌کند.
      </video>
    </div>
  );
}

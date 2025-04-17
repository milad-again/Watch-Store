import React from "react";

export default function FirstBanner() {
  return (
    <div className=" w-full h-[500px] bg-zinc-300 tracking-tighter text-zinc-700">
      <div className=" md:pt-32 pr-8 pl-8">
        <div className="flex gap-3 items-center md:text-xl">
          <span className="text-black">روشگاه اینترنتی ساعت</span>
          <span>|</span>
          <span className="text-black">ساعت مچی، اکسسوری و زیورآلات</span>
          <span>|</span>
          <span className="text-sm">
            بررسی و خرید آنلاین ساعت مچی، زیور و اکسسوری
          </span>
        </div>
        <div className="flex items-center gap-56 pt-3 w-[99%]">
          <p>
            فروشگاه ساعت مرجع تخصصی نقد و بررسی و خرید اینترنتی ساعت مچی ، زیور و
            اکسسوری اصل با گارانتی معتبر شرکتی در ایران است که با ارائه
            نامدارترین برندهای جهان در زمینه ساعت مچی ، زیور و اکسسوری مانند
            اوماکس ، سیکو ( سیکو 5) ، کاسیو ( جی شاک ، ادیفایس ) ، سیتیزن ،
            اورینت ، رومانسون ، الیکسا ، کاندینو ، دنیل ولینگتون ، فستینا ، آیس
            واچ ، اسپریت ، پیر کاردین ، پوما ، اینگرسول و غیره تنوع بی‌نظیر و
            انتخاب های فراوانی را در اختیار خریداران عزیز قرار می‌دهد.
          </p>
      <div>
        <img className="w-[500px] h-[100px]" src="/images/1.png" alt="" />
      </div>
        </div>
      </div>
    </div>
  );
}

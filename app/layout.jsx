import PostalCodeform from "@/components/postalCodeform";
import "./globals.css";
import Link from "next/link";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className=" bg-gray-100">
        <div className="py-3 md:py-9 space-y-2 md:h-14 flex flex-col md:flex-row bg-slate-200 border-b-2 border-gray-300 fixed top-0 w-full items-center justify-between px-5 shadow-xl">
          <Link href={"/"}>
            <p className=" text-center  text-xl  font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-violet-500">
              Zip Code Information App
            </p>
          </Link>
          <PostalCodeform />
        </div>
        <main className=" mx-2 py-5">{children}</main>
      </body>
    </html>
  );
}

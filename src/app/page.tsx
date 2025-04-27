"use client";
import Link from "next/link";

export default function Home() {
  const handleThemeChange = (theme: string) => {
    if (typeof window !== "undefined") {
      if (theme === "dark") {
        document.documentElement.setAttribute("data-theme", "dark");
        localStorage.setItem("theme", "dark");
      } else {
        document.documentElement.setAttribute("data-theme", "light");
        localStorage.setItem("theme", "light");
      }
    }
  };
  return (
    <div className="bg-background">
      <h1 className="text-3xl font-bold underline">메인 페이지</h1>
      <div>
        <Link href="/documents">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            문서 목록
          </button>
        </Link>
        <Link href="/documents/1">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            문서 편집
          </button>
        </Link>
      </div>
      <div>
        <button onClick={() => handleThemeChange("light")}>Light</button>
        <button onClick={() => handleThemeChange("dark")}>Dark</button>
      </div>
    </div>
  );
}

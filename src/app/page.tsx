import Link from "next/link";

export default function Home() {
  return (
    <div>
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
    </div>
  );
}

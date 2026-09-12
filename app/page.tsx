import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="main">
      <h1>sasa</h1>
      <Link rel="stylesheet" href="/posts" >posts</Link> <br />
      <Link rel="stylesheet" href="/articles" >articles</Link>
    </div>
  );
}

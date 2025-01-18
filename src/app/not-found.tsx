import Image from "next/image";

export default function notFound() {
  return (
    <div className="p-7 text-center">
      <Image
        className="mx-auto pt-24"
        src={"/images/404_jam.png"}
        alt="404 Page - A bullet stuck between 2 cogs"
        width="300"
        height="200"
      />
      <h1 className="text-8xl mt-10">404</h1>
      <p className="text-dark-sub pt-8">
        Your gun has jammed. This page could not be found.
      </p>
    </div>
  );
}

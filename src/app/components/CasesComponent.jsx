import Link from "next/link";
import { KnowMoreButton } from "./KnowMore";

export function CaseComponent({ title, subtitle, titleColor, redirect, resourcesLink, knowMoreColor, backgroundColor, children }) {
  return (
    <>
      <section className="relative flex flex-col items-center">
        <h1 className={`self-start font-semibold ${titleColor}`}>{title}</h1>
        <Link href={redirect}>
          <div className={`relative my-2 text-xl font-semibold text-white transition-all duration-500 rounded-lg w-72 h-72 ${backgroundColor} hover:scale-105`}>
            <h2 className="m-3">
              {subtitle}
            </h2>
              {children}
            </div>
        </Link>
        <KnowMoreButton href={resourcesLink} color={`${knowMoreColor}`} />
      </section>
    </>
  );
}

import Link from "next/link";

const Footer = () => {
  return (
    <footer className="sticky flex bg-gray-800 text-white text-center px-4 h-[5%] bottom-0 justify-between items-center">
      <Link href={"/"} className={"hover:underline"}>
        © {new Date().getFullYear()} DTC List
      </Link>
      <div className="flex gap-x-4 flex-col md:flex-row sm:flex-col">
        <Link
          className={"hover:underline text-[8px] md:text-base"}
          href={"/terms-of-service"}
        >
          Terms of Service
        </Link>
        <Link
          className={"hover:underline text-[8px] md:text-base"}
          href={"/privacy-policy"}
        >
          Privacy Policy
        </Link>
        <a
          className={"hover:underline text-[8px] md:text-base"}
          href="mailto:daniel@hrynusiw.cz"
        >
          Contact Me
        </a>
      </div>
    </footer>
  );
};

export default Footer;

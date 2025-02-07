import Link from "next/link";

const Footer = () => {
  return (
    <footer className="sticky flex bg-gray-800 text-white text-center px-4 h-[5%] bottom-0 justify-between items-center">
      <Link href={"/"} className={"hover:underline md:text-base sm:text-xs"}>
        © {new Date().getFullYear()} DTC List
      </Link>
      <div className="flex gap-4">
        <Link
          className={"hover:underline md:text-base sm:text-xs"}
          href={"/terms-of-service"}
        >
          Terms of Service
        </Link>
        <Link
          className={"hover:underline md:text-base sm:text-xs"}
          href={"/privacy-policy"}
        >
          Privacy Policy
        </Link>
        <a
          className={"hover:underline md:text-base sm:text-xs"}
          href="mailto:daniel@hrynusiw.cz"
        >
          Contact Us
        </a>
      </div>
    </footer>
  );
};

export default Footer;

import Link from "next/link";
import links from "../../lib/linksNav";
import Logo from "../icons/facebook";

const NavDesktop = () => (
  <nav className="flex justify-start items-center content-center font-semibold text-logo2 space-x-3 z-50">
    {getLinks()}
  </nav>
);

const getLinks = () => {
  return links.map((i, index) => (
    <Link key={index} href={i.href}>
      <a alt={i.text}>
        <button className="button-new button--itzel">
          <i className="button__icon icon-new fill-current">{i.icon}</i>
          <span>{i.text}</span>
        </button>
      </a>
    </Link>
  ));
};

// const getLinks = () => {
//   return links.map((i, index) => (
//     <Link key={index} href={i.href}>
//       <a
//         className="flex items-center justify-center px-3 py-2 hover:text-green-300 hover:border-green-300 border-blue-900 border border-opacity-50 rounded-lg bg-green-600 hover:bg-teal-700"
//         alt={i.text}
//       >
//         {i.text}
//       </a>
//     </Link>
//   ));
// };

export default NavDesktop;

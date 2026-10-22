import Link from "next/link";

const NotFound = () => {
  const error = [
    " _______________________",
    "< 404: Page not found! >",
    " -----------------------",
    "        \\   ^__^",
    "         \\  (oo)\\_______",
    "            (__)\\       )\\/\\",
    "                ||----w |",
    "                ||     ||",
  ].join("\n");
  return (
    <div className="flex flex-col items-center space-y-8 font-mono text-white">
      <div className="ml-100 flex space-x-2 self-start text-lg">
        <div className="text-cyber-white font-bold">cyber@ucr:~$</div>
        <p>rm -rf /</p>
      </div>
      <div className="flex justify-center text-center">
        <div className="text-cyber-white text-left font-mono leading-none whitespace-pre">
          {error}
        </div>
      </div>
      <div className="flex justify-center">
        <Link
          href="/"
          className="border-cyber-red/50 hover:border-b-cyber-darkred rounded border px-8 py-3 font-bold text-white transition-colors"
        >
          return home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;

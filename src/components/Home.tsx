import Button from "./Button";
import logo from "../assets/images/comnica-logo.png";
import hero from "../assets/images/hero.png";

export default function Home() {
  return (
    <div className="relative flex flex-col md:flex-row h-screen w-full bg-accentGreen bg-opacity-40 overflow-hidden">
      {/* Left Side */}
      <div className="relative z-10 flex-1 flex flex-col md:flex-row items-start md:items-center justify-center p-6 md:p-8 space-y-6 md:space-y-0 md:space-x-6 md:w-2/3">
        {/* Logo */}
        <div className="absolute top-4 left-4 md:top-8 md:left-8">
          <img src={logo} alt="Logo" className="h-6 md:h-8" />
        </div>

        {/* Left Text */}
        <div className="space-y-4 pt-16 md:pt-0 flex flex-col items-start md:items-start md:ml-8 md:pb-64">
          <h1 className="text-3xl md:text-6xl font-bold text-accentGreen-dark">
            Comnica Signature
          </h1>
          <p className="text-base md:text-2xl font-bold text-primaryDark">
            Digitális aláíró szolgáltatás a Comnicától
          </p>
        </div>

        {/* Hero Image */}
        <div className="flex-1 hidden md:flex items-center justify-center">
          <img src={hero} alt="Hero" className="w-full md:w-auto" />
        </div>
      </div>

      {/* Right Side */}
      <div className="relative z-10 w-full h-full md:w-1/3 flex items-center justify-center bg-white bg-opacity-90 p-4 md:p-16">
        <div className="space-y-6 h-full flex flex-col items-center md:items-start justify-center text-center md:text-left md:pb-32">
          <h2 className="text-2xl md:text-4xl font-semibold text-accentPurple">
            Üdvözlöm a <br />
            Comnica Signature-ben!
          </h2>
          <p className="text-sm md:text-lg font-medium text-primaryDark">
            A következőkben végigvezetjük dokumentumai elfogadásán és aláírásán.
            A folyamat több percet is igénybe vehet, ezért kérjük, csak akkor
            kezdje el, ha készen áll rá.
          </p>
          <div className="flex justify-center md:justify-start w-full">
            <Button text="Kezdhetjük" />
          </div>
        </div>
      </div>
    </div>
  );
}

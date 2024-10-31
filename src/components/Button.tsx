interface ButtonProps {
  text: string;
  onClick?: () => void;
}

export default function Button({ text, onClick }: ButtonProps) {
  onClick = () => {
    console.log("Gomb Megnyomva");
  };

  return (
    <button
      onClick={onClick}
      className="px-6 py-3 bg-accentGreen text-white font-semibold rounded-full shadow-md transition duration-200 ease-in-out transform hover:scale-105 hover:bg-accentGreen-dark focus:outline-none focus:ring-2 focus:ring-accentGreen focus:ring-opacity-50 uppercase"
    >
      {text}
    </button>
  );
}

const Cancel = () => {
  return (
    <div className="bg-darkGrey w-[60px] h-[60px] rounded-full relative cursor-pointer">
      <svg
        className="absolute text-white text-3xl top-1/2 left-1/2 -translate-x-1/2
        -translate-y-1/2"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>
    </div>
  );
};

export default Cancel;

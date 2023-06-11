import Link from "next/link";


const AnimatedButton = ({text}) => {
  return (
    <Link
      className="border tap-highlight-color-transparent border-slate-200 duration-200 lg:hover:text-primary flex justify-center items-center gap-3 lg:hover:border-primary px-8 py-[16px]  rounded-full text-slate-800"
      href="/courses"
    >
      
      <div>{text}</div>
    </Link>
  );
};

export default AnimatedButton;

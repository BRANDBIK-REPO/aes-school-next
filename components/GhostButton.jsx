import Link from "next/link";

const GhostButton = ({ text , href }) => {
  return (
    <Link href={href}>
      <div className="flex  items-center">
        <div className="bg-transparent font-medium  tap-highlight-color-transparent  text-lg   text-black">
          {text}
        </div>

        <div className="bg-secondaygreen flex justify-center items-center py-[14px] px-2">
          <img width="20" height="20" src='/assets/arrow.png' alt="" />
        </div>
      </div>
    </Link>
  );
};

export default GhostButton;

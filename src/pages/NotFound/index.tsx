import { useNavigate } from "react-router-dom";
import notFound from "../../assets/image/not_found.webp";
import { path } from "../../helpers/routers";

export default function NotFound() {
  const navigate = useNavigate();
  return (
    <section>
      <div className="container flex py-[40px] items-center justify-between overflow-hidden">
        <div className=" flex flex-col gap-[10px]">
          <h3 className="text-[var(--dark-text)] text-[38px] font-bold italic">
            Oops, page does not exist <span className=" not-italic">😶‍🌫️</span>
          </h3>
          <p className=" text-[20px]">
            You provided an incorrect address or followed an incorrect link
          </p>
          <button
            type="button"
            onClick={() => navigate(path.home)}
            className=" w-[200px] bg-[var(--dark-purple)] text-[var(--second-text-color)] h-[58px] mt-[8px] rounded-[8px]"
          >
            Return to Home
          </button>
        </div>

        <img
          src={notFound}
          alt=" "
          width={300}
          height={300}
          className="relative bottom-[-40px] right-[160px] drop-shadow-[0px_5px_5px_#00000060] scale-[1.02]"
        />
      </div>
    </section>
  );
}

import notFound from "../../assets/image/not_found.webp";

export default function NotFound() {
  return (
    <section>
      <div className="container flex py-[40px] items-center justify-between overflow-hidden">
        <div className=" flex flex-col gap-[10px]">
          <h3 className="text-[#000] text-[38px] font-bold italic">
            Oops, page does not exist <span className=" not-italic">😶‍🌫️</span>
          </h3>
          <p className=" text-[20px]">
            You provided an incorrect address or followed an incorrect link
          </p>
          <button
            type="button"
            className=" w-[200px] bg-[#522b5b] text-[#fff] h-[58px] mt-[8px] rounded-[8px]"
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

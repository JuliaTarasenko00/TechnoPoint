import { useNavigate } from 'react-router-dom';
import notFound from '../../assets/image/not_found.webp';
import { path } from '../../helpers/routers';

export default function NotFound() {
  const navigate = useNavigate();
  return (
    <section>
      <div className="container flex items-center justify-between overflow-hidden py-[40px]">
        <div className="flex flex-col gap-[10px]">
          <h3 className="text-[38px] font-bold text-[var(--dark-text)] italic">
            Oops, page does not exist <span className="not-italic">😶‍🌫️</span>
          </h3>
          <p className="text-[20px]">
            You provided an incorrect address or followed an incorrect link
          </p>
          <button
            type="button"
            onClick={() => navigate(path.home)}
            className="mt-[8px] h-[58px] w-[200px] rounded-[8px] bg-[var(--dark-purple)] text-[var(--second-text-color)]"
          >
            Return to Home
          </button>
        </div>

        <img
          src={notFound}
          alt=" "
          width={300}
          height={300}
          className="relative right-[160px] bottom-[-40px] scale-[1.02] drop-shadow-[0px_5px_5px_#00000060]"
        />
      </div>
    </section>
  );
}

const mainStyle = "cursor-pointer text-[#a4a4a4] text-[16px] leading-[90%]";

export const BreadCrumbs = ({ pathnames }: { pathnames: Array<string> }) => {
  return (
    <div className=" container px-[60px] py-[25px]">
      <ul className=" flex items-center gap-1.5">
        {pathnames.map((pathname, index) => {
          const lastElement = index === pathnames.length - 1;

          return (
            <li key={pathname}>
              {!lastElement ? (
                <p className={`${mainStyle}`}>
                  {pathname} {">"}
                </p>
              ) : (
                <p
                  className={`${mainStyle} text-[var(--dark-text)] cursor-text`}
                >
                  {pathname}
                </p>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export const SeaechBar = () => {
  return (
    <div className="p-4 fixed top-[60px] left-0 w-full">
      <input
        className="px-[14px] py-[10px] shadow-[0_4px_4px_0_rgba(0,0,0,0.25)]  bg-[var(--color-bgwht)] rounded-[12px] w-full typo-semibold-s outline-none "
        placeholder="검색"
      />
    </div>
  );
};

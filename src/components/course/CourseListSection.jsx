import { CourseItemBox } from "./CouseItemBox";

const steps = [0, 0, 0, 0];

export const CourseListSection = () => {
  return (
    <div className="px-[23px] pt-2 h-[calc(100%-40px)] overflow-y-auto pb-60">
      <div className=" gap-5 flex flex-col pb-11">
        {steps.map((_, idx) => (
          <div key={idx} className="gap-5 flex items-center ">
            <div className="w-[30px] h-[30px] bg-[var(--color-yellow)] rounded-full relative">
              {idx !== steps.length - 1 ? (
                <div className="bg-[#858282] absolute w-[1px] left-[50%] h-[61px] top-[32px] " />
              ) : null}
            </div>
            <CourseItemBox />
          </div>
        ))}
      </div>
    </div>
  );
};

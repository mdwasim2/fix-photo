import HeadshotEditing from "./Haedshort";

const HeadShortWrapper = () => {
  return (
    <div className=" mt-12">
      <h2 className="mb-2 text-center text-2xl font-bold lg:mb-4 lg:text-3xl">
        Editing Headshots and Colors:
      </h2>
      {Array.from({ length: 1 }).map((_, index) => (
          
      <HeadshotEditing />
      ))}
    </div>
  );
};

export default HeadShortWrapper;

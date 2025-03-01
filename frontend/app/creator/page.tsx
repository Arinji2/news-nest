import Card from "../Article";

export default function Page() {
  return (
    <div className="flex h-[100svh] w-full flex-col items-center justify-center bg-black">
      <div className="z-10  text-center text-[50px] font-bold text-white md:mt-20 md:text-[100px]">
        <Card
          headline="Developed By Arinjii, Click to Check Portfolio"
          image="https://avatars.githubusercontent.com/u/87296817?s=400&v=4"
          newsGroup="Arinjii"
          url="https://arinji.me"
        />
      </div>
    </div>
  );
}

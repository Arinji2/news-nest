export default function WidthWrapper({
  children,
  color,
  transparent,
}: {
  children: React.ReactNode;
  color: string;
  transparent?: boolean;
}) {
  return (
    <section
      className="w-full  h-full flex flex-col items-center justify-start bg-[--bg]"
      style={
        { "--bg": transparent ? "transparent" : color } as React.CSSProperties
      }
    >
      <section className="xl:w-[90%] w-[95%] md:max-w-[1280px] h-full flex flex-col items-center justify-center">
        {children}
      </section>
    </section>
  );
}

import Article from "@/components/article";
import Button from "@/components/button";

export default function Live() {
  return (
    <section className="w-full h-full xl:py-0 py-10 xl:h-page flex flex-col items-center justify-center">
      <div className="w-full h-full flex flex-col xl:flex-row items-center justify-center gap-8">
        <div className="w-full h-fit flex flex-col items-center xl:items-start justify-center gap-4">
          <h2 className="text-h2 text-primary">LIVE</h2>
          <h3 className="text-subtitle text-text xl:text-left text-center">
            View the most recent news articles, <br /> worldwide
          </h3>
          <Button>VIEW MORE</Button>
        </div>
        <div className="w-full h-fit flex flex-row items-center justify-center gap-x-0  md:gap-x-4 gap-4">
          <Article
            image="/home/live-1.png"
            title="SpaceX poised for second launch of mega Starship Rocket"
            source="The Economic Times"
            link="https://economictimes.indiatimes.com/news/science/spacex-poised-for-second-launch-of-mega-starship-rocket/articleshow/105303222.cms"
          />

          <Article
            className={"md:flex hidden"}
            image="/home/live-2.png"
            title='Biden says Israel "starting to lose support"'
            source="Aljazeera"
            link="https://www.aljazeera.com/news/liveblog/2023/12/12/israel-hamas-war-live-palestinians-going-hungry-as-israel-pounds-gaza"
          />
        </div>
      </div>
    </section>
  );
}
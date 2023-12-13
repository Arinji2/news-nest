import Globe from "globe.gl";
import { useEffect, useRef } from "react";
import * as React from "react";
import * as d3 from "d3";

const GlobeComponent = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (containerRef.current) {
      const weightColor = d3
        .scaleSequentialSqrt(d3.interpolateYlOrRd)
        .domain([0, 1e7]);
      const world = Globe()(containerRef.current)
        .globeImageUrl("//unpkg.com/three-globe/example/img/earth-night.jpg")
        .bumpImageUrl("//unpkg.com/three-globe/example/img/earth-topology.png")
        .backgroundColor("#0D0507")
        .height(containerRef.current.clientHeight - 200)
        .width(containerRef.current.clientWidth - 200)

        .hexBinPointWeight("pop")
        .hexAltitude((d) => d.sumWeight * 6e-8)
        .hexBinResolution(4)
        .hexTopColor((d) => weightColor(d.sumWeight))
        .hexSideColor((d) => weightColor(d.sumWeight))
        .hexBinMerge(true)
        .enablePointerInteraction(false); // performance improvement

      fetch("./datasets/world_population.csv")
        .then((res) => {
          return res.text();
        })
        .then((csv) =>
          d3.csvParse(csv, ({ lat, lng, pop }) => ({
            lat: +lat,
            lng: +lng,
            pop: +pop,
          }))
        )
        .then((data) => world.hexBinPointsData(data).pointsMerge(true));

      // Add auto-rotation
      world.controls().autoRotate = true;
      world.controls().autoRotateSpeed = 0.6;
    }
  }, []);

  return (
    <div
      className="h-full overflow-hidden w-full xl:h-[700px] flex flex-col items-center justify-center no-scrollbar xl:overflow-visible xl:min-w-[400px] aspect-video"
      ref={containerRef}
    ></div>
  );
};

export default GlobeComponent;

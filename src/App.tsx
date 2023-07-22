import { allFakers } from "@faker-js/faker";
import { JSX, createEffect, createSignal, onCleanup } from "solid-js";
import lagRadar from "@gaearon/lag-radar";

import SolidStockTable from "./SolidStockTable";

const DATA_SET_SIZE = 1000;

function Market(props: any): JSX.Element {
  const [market, setMarket] = createSignal(
    Array.from({ length: DATA_SET_SIZE }, () => ({
      name: props.faker.company.name(),
      symbol: props.faker.finance.currencyCode(),
      price: Math.floor(Math.random() * 1000),
      delta: 0,
    }))
  );

  const interval = setInterval(() => {
    setMarket((prev) => {
      const copy = structuredClone(prev);

      for (const stock of copy) {
        const chance = Math.random();
        const delta = Math.floor(Math.random() * 100);
        if (chance < 0.1) {
          stock.price -= delta;
          stock.delta = -delta;
        } else if (chance > 0.9) {
          stock.price += delta;
          stock.delta = delta;
        }
      }
      copy.sort((a, b) => b.price - a.price);
      return copy;
    });
  }, 1_000);

  onCleanup(() => clearInterval(interval));

  return <SolidStockTable data={market()} />;
}

function App(): JSX.Element {
  createEffect(() => {
    const destroyLagRadar = lagRadar({
      frames: 50, // number of frames to draw, more = worse performance
      speed: 0.0017, // how fast the sweep moves (rads per ms)
      size: 100, // outer frame px
      inset: 3, // circle inset px
      parent: document.getElementById("radar"), // DOM node to attach to
    });

    return destroyLagRadar;
  });

  return (
    <div class="p-3 flex flex-col gap-2">
      <div id="radar" />
      <p>
        Currently Using:{" "}
        <span class="text-blue-500 font-bold">{"Solid <3"}</span>
      </p>
      <div class="flex">
        <Market faker={allFakers["en"]} />
        <Market faker={allFakers["es_MX"]} />
        <Market faker={allFakers["zh_CN"]} />
      </div>
    </div>
  );
}

export default App;

import { allFakers } from "@faker-js/faker";
import { createSignal, onMount } from "solid-js";

import SolidStockTable from "./SolidStockTable";

function Market(props: any) {
  const [market, setMarket] = createSignal(
    Array.from({ length: 1000 }, () => ({
      name: props.faker.company.name(),
      symbol: props.faker.finance.currencyCode(),
      price: Math.floor(Math.random() * 1000),
      delta: 0,
    }))
  );

  onMount(() => {
    const interval = setInterval(() => {
      for (const stock of market()) {
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

      market().sort((a, b) => b.price - a.price);
      setMarket((prev) => prev.slice().sort((a, b) => b.price - a.price));
    }, 1000);

    return () => clearInterval(interval);
  });

  return <SolidStockTable data={market()} />;
}

function App() {
  return (
    <div class="p-3">
      <div class="loader" />
      <p>Currently Using: Solid {"<3"}</p>
      <div class="flex">
        <Market faker={allFakers["en"]} />
        <Market faker={allFakers["es_MX"]} />
        <Market faker={allFakers["zh_CN"]} />
      </div>
    </div>
  );
}

export default App;

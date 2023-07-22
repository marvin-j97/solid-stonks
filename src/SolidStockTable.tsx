import { For, JSX } from "solid-js";

type Props = {
  data: {
    name: string;
    symbol: string;
    price: number;
    delta: number;
  }[];
};

export default function StockTable(props: Props): JSX.Element {
  return (
    <table class="border border-gray-200">
      <thead>
        <tr>
          <th class="px-3 py-0 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
            Market
          </th>
        </tr>
      </thead>
      <tbody>
        <For each={props.data}>
          {(item) => (
            <tr>
              <td class="px-3 py-1 border-b border-gray-200 bg-white text-xs">
                <p>
                  {item.name} ({item.symbol}) is at ${item.price}
                </p>
                <div
                  style={{ width: `${Math.abs(item.delta)}px`, height: "10px" }}
                  classList={{
                    rounded: true,
                    "bg-emerald-500": item.delta >= 0,
                    "bg-red-500": item.delta < 0,
                  }}
                />
              </td>
            </tr>
          )}
        </For>
      </tbody>
    </table>
  );
}

import { For } from "solid-js";

export default function StockTable(props: { data: any[] }) {
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
              <td class="px-3 py-0 border-b border-gray-200 bg-white text-xs">
                <p>
                  {item.name} ({item.symbol}) is at ${item.price}
                </p>
                <div
                  style={{ width: `${Math.abs(item.delta)}px`, height: "10px" }}
                  class={item.delta >= 0 ? "bg-green-500" : "bg-red-500"}
                ></div>
              </td>
            </tr>
          )}
        </For>
        {/* {data.map(({ name, symbol, price, delta }) => (
          <tr key={name + symbol}>
            <td class="px-3 py-0 border-b border-gray-200 bg-white text-xs">
              <p>
                {name} ({symbol}) is at ${price}
              </p>
              <div
                style={{ width: `${Math.abs(delta)}px`, height: '10px' }}
                class={delta >= 0 ? 'bg-green-500' : 'bg-red-500'}
              ></div>
            </td>
          </tr>
        ))} */}
      </tbody>
    </table>
  );
}

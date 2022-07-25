import type { NextPage } from "next";

import { Window } from "../components/window";

const Shop: NextPage = () => {
  return (
    <div className="w-full h-full grid place-items-center">
      <Window title="Shop" actions="Let's do some shopping">
        <div>Nothing here yet... </div>
      </Window>
    </div>
  );
};

export default Shop;

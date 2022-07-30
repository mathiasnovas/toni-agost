import type { NextPage } from "next";

import { Window } from "../components/window";

const Shop: NextPage = () => {
  return (
    <div className="flex flex-col items-center md:mt-[5vh] lg:mt-[15vh] p-2">
      <Window title="Shop" actions="Let's do some shopping">
        <div>Coming soon...</div>
      </Window>
    </div>
  );
};

export default Shop;

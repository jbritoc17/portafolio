import React from "react";
import Article from "../components/Arcticle";

const Home = () => {
  return (
    <main class="p-4">
      <div class="grid sm:grid-cols-2 md:grid-cols-3 max-w-7xl mx-auto gap-4 lg:grid-cols-4 mt-4">
        <Article/>
        <Article/>
        <Article/>
        <Article/>
      </div>
    </main>
  );
};
export default Home;

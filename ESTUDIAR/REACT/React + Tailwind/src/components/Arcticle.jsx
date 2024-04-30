import React from "react";

const Article = () => {
  return (
  
  <article class="bg-white shadow rounded overflow-hidden flex flex-col">
          <div class="h-52">
            <img
              class="h-full w-full object-cover object-center"
              src="/img/pexels-javon-swaby-197616-2783873.jpg"
              alt="reloj"
            />
          </div>
          <div class="p-5 space-y-3 flex-1">
            <h3 class="text-sm font-semibold text-sky-500">Accesorio</h3>
            <h2 class="text-xl font-semibold text-slate-800 leading-tight">
              Reloj Michael Kors
            </h2>
            <p class="text-slate-500 hidden md:block">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
              reprehenderit illum repellat at harum voluptas, sequi amet
              nesciunt qui aspernatur necessitatibus, minus quasi ad ipsam
              tenetur voluptatum eum doloremque delectus?
            </p>
          </div>
          <div class="flex p-5 space-x-2">
            <img
              class="w-10 h-10 rounded-full"
              src="https://ui-avatars.com/api?name=Michael"
              alt="user"
            />
            <div class="flex flex-col justify-center">
              <span class="text-sm font-semibold text-slate-600 leading-4">
                Michael Kors
              </span>
              <span class="text-sm text-slate-500">$ 1.560</span>
            </div>
          </div>
        </article>
  
  );
};
export default Article
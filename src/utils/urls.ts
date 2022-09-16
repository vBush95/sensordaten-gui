const prod = {
  url: "/",
};

const dev = {
  url: "/sensordaten/",
};

export const config =
  import.meta.env.VITE_NODE_ENV === "development" ? dev : prod;

const prod = {
  url: "/",
};

const dev = {
  url: "/sensordaten/",
};

export const config = import.meta.env.DEV ? dev : prod;

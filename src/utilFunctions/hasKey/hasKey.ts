function hasKey<O>(obj: O, key: PropertyKey): key is keyof O {
  return key in obj;
}

export default hasKey;

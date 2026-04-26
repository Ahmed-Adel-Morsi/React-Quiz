export const cn = (...classNames) =>
  classNames.filter((cl) => cl !== "").join(" ");

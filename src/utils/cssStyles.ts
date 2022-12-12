// ----------------------------------------------------------------------

export function textGradient(value: string) {
  return {
    background: `-webkit-linear-gradient(${value})`,
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  };
}

export function backgroundGradient(value: string) {
  return {
    background: `-webkit-linear-gradient(${value})`,
  };
}

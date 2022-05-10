export const getTagColor = (type: string) => {
  type = type.toLowerCase();
  if (type === "rails" || type === "ruby") {
    return "red";
  } else if (type === "react") {
    return "cyan";
  } else if (type === "javascript") {
    return "yellow";
  } else if (type === "typescript" || type === "tailwindcss") {
    return "blue";
  } else if (type === "chakraui" || type === "css") {
    return "teal";
  } else if (type === "python") {
    return "#4584b6";
  } else if (type === "php") {
    return "purple";
  }
};

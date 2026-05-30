const cleanReadme = (readme) => {
  return readme
    .replace(/^```(?:markdown|md)?\s*\n?/i, "")
    .replace(/\n?```$/i, "")
    .trim();
};

export default cleanReadme;
const productionFrontendOrigins = [
  "https://www.dipaksingh.com.np",
  "https://dipaksingh.com.np",
  "https://dipak-portfolio-eav4.vercel.app",
];

export function isAllowedFrontendOrigin(origin: string) {
  const configuredOrigins = (process.env.FRONTEND_ORIGIN ?? "")
    .split(",")
    .map((value) => value.trim())
    .filter(Boolean);

  return (
    productionFrontendOrigins.includes(origin) ||
    configuredOrigins.includes(origin) ||
    /^http:\/\/(localhost|127\.0\.0\.1)(:\d+)?$/.test(origin)
  );
}

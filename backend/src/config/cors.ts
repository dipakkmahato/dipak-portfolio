const productionFrontendOrigin = "https://dipak-portfolio-eav4.vercel.app";

export function isAllowedFrontendOrigin(origin: string) {
  const configuredOrigins = (process.env.FRONTEND_ORIGIN ?? "")
    .split(",")
    .map((value) => value.trim())
    .filter(Boolean);

  return (
    origin === productionFrontendOrigin ||
    configuredOrigins.includes(origin) ||
    /^http:\/\/(localhost|127\.0\.0\.1)(:\d+)?$/.test(origin)
  );
}

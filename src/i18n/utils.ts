import { ui, defaultLang, type Lang } from "./ui";

const base = import.meta.env.BASE_URL.replace(/\/$/, ""); // e.g. "/personal-website" or ""

export function getLangFromUrl(url: URL): Lang {
  // Strip base prefix before checking language segment
  const path = url.pathname.replace(base, "") || "/";
  const [, lang] = path.split("/");
  if (lang in ui) return lang as Lang;
  return defaultLang;
}

export function useTranslations(lang: Lang) {
  return function t(key: keyof (typeof ui)[typeof defaultLang]): string {
    return (ui[lang] as Record<string, string>)[key] ?? (ui[defaultLang] as Record<string, string>)[key] ?? key;
  };
}

export function getAlternateUrl(url: URL, targetLang: Lang): string {
  // Strip base to get the route-only path
  let route = url.pathname.replace(base, "") || "/";
  if (!route.endsWith("/")) route += "/";

  const pathMap: Record<string, string> = {
    "/": "/en/",
    "/publicaciones/": "/en/publications/",
    "/en/": "/",
    "/en/publications/": "/publicaciones/",
  };

  const target = pathMap[route] ?? (targetLang === "en" ? "/en/" : "/");
  return base + target;
}

export function getNavLinks(lang: Lang) {
  if (lang === "en") {
    return {
      home: `${base}/en/`,
      publications: `${base}/en/publications/`,
    };
  }
  return {
    home: `${base}/`,
    publications: `${base}/publicaciones/`,
  };
}

export const languages = {
  es: "Español",
  en: "English",
} as const;

export type Lang = keyof typeof languages;

export const defaultLang: Lang = "es";

export const ui = {
  es: {
    "nav.home": "Inicio",
    "nav.publications": "Publicaciones",
    "nav.cv": "Descargar CV",
    "section.about": "Sobre mí",
    "section.education": "Educación",
    "section.experience": "Experiencia",
    "section.skills": "Habilidades",
    "section.publications": "Publicaciones",
    "pub.forthcoming": "Próximamente",
    "pub.working-paper": "Documento de trabajo",
    "pub.published": "Publicado",
    "pub.read-more": "Leer más",
    "footer.rights": "Todos los derechos reservados.",
  },
  en: {
    "nav.home": "Home",
    "nav.publications": "Publications",
    "nav.cv": "Download CV",
    "section.about": "About",
    "section.education": "Education",
    "section.experience": "Experience",
    "section.skills": "Skills",
    "section.publications": "Publications",
    "pub.forthcoming": "Forthcoming",
    "pub.working-paper": "Working paper",
    "pub.published": "Published",
    "pub.read-more": "Read more",
    "footer.rights": "All rights reserved.",
  },
} as const;

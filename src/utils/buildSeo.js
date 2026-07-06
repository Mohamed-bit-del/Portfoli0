import { seoConfig } from "../config/seoConfig";

export function buildSeo({ title, description, image, path } = {}) {
  const resolvedTitle = title
    ? seoConfig.titleTemplate.replace("%s", title)
    : seoConfig.defaultTitle;

  return {
    title: resolvedTitle,
    description: description ?? seoConfig.description,
    image: image ?? seoConfig.image,
    url: path ? `${seoConfig.url}${path}` : seoConfig.url,
    twitterHandle: seoConfig.twitterHandle,
  };
}

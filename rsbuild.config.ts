import path from "node:path";
import { defineConfig } from "@rsbuild/core";
import { pluginReact } from "@rsbuild/plugin-react";
import { seo } from "./src/configurations/seo";

const canonicalUrl = `${seo.siteUrl}/`;
const coverImageUrl = new URL(seo.coverImagePath, seo.siteUrl).toString();
const coverImageExt =
  seo.coverImagePath.split(".").pop()?.toLowerCase() || "png";
const ogImageType = `image/${coverImageExt === "jpg" ? "jpeg" : coverImageExt}`;

export default defineConfig({
  plugins: [pluginReact()],
  html: {
    title: seo.pageTitle,
    favicon: "./public/favicon.ico",
    meta: {
      description: seo.description,
      keywords: seo.keywords,
      author: seo.personName,
      "google-site-verification": seo.googleSiteVerification || false,
      robots:
        "index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1",
      googlebot:
        "index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1",
      "theme-color": "#ffffff",
      "application-name": seo.siteName,
      category: seo.category,
      "og:type": {
        property: "og:type",
        content: "website",
      },
      "og:title": {
        property: "og:title",
        content: seo.pageTitle,
      },
      "og:description": {
        property: "og:description",
        content: seo.description,
      },
      "og:url": {
        property: "og:url",
        content: canonicalUrl,
      },
      "og:site_name": {
        property: "og:site_name",
        content: seo.siteName,
      },
      "og:locale": {
        property: "og:locale",
        content: seo.locale,
      },
      "og:locale:alternate": {
        property: "og:locale:alternate",
        content: seo.alternateLocale,
      },
      "og:image": {
        property: "og:image",
        content: coverImageUrl,
      },
      "og:image:type": {
        property: "og:image:type",
        content: ogImageType,
      },
      "og:image:width": {
        property: "og:image:width",
        content: "1200",
      },
      "og:image:height": {
        property: "og:image:height",
        content: "630",
      },
      "og:image:alt": {
        property: "og:image:alt",
        content: seo.coverImageAlt,
      },
      "twitter:card": "summary_large_image",
      "twitter:site": seo.twitterHandle,
      "twitter:creator": seo.twitterHandle,
      "twitter:title": seo.pageTitle,
      "twitter:description": seo.description,
      "twitter:image": coverImageUrl,
      "twitter:image:alt": seo.coverImageAlt,
    },
    tags: [
      {
        tag: "link",
        attrs: {
          rel: "canonical",
          href: canonicalUrl,
        },
        head: true,
      },
      {
        tag: "link",
        attrs: {
          rel: "alternate",
          hreflang: "vi-VN",
          href: canonicalUrl,
        },
        head: true,
      },
      {
        tag: "link",
        attrs: {
          rel: "alternate",
          hreflang: "en-US",
          href: canonicalUrl,
        },
        head: true,
      },
      {
        tag: "link",
        attrs: {
          rel: "manifest",
          href: "/site.webmanifest",
        },
        head: true,
      },
      {
        tag: "link",
        attrs: {
          rel: "apple-touch-icon",
          sizes: "180x180",
          href: "/apple-touch-icon.png",
        },
        head: true,
      },
      {
        tag: "link",
        attrs: {
          rel: "icon",
          type: "image/png",
          sizes: "32x32",
          href: "/favicon-32x32.png",
        },
        head: true,
      },
      {
        tag: "link",
        attrs: {
          rel: "icon",
          type: "image/png",
          sizes: "16x16",
          href: "/favicon-16x16.png",
        },
        head: true,
      },
      {
        tag: "link",
        attrs: {
          rel: "preload",
          as: "image",
          href: seo.imagePath,
        },
        head: true,
      },
    ],
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});

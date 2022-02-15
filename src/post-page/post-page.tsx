import React from "react";
import Box from "@material-ui/core/Box";
import { useTheme } from "@material-ui/core/styles";
import { PostInfo, PostInfoProps } from "./post-info";
import { PostSuggestions, PostSuggestionsProps } from "./post-suggestions";
import { Page, PageProps } from "../page/page";
import { isColor } from "../utils/is-color";
import { isColorDark } from "../utils/is-color-dark";

export type PostPageProps = Omit<
  PostInfoProps & PostSuggestionsProps & Omit<PageProps, "color">,
  "header"
>;

export function PostPage({
  children,
  background,
  overHeader,
  breadcrumbs,
  title,
  description,
  date,
  dateText,
  authorName,
  authorPicture,
  authorDescription,
  tags,
  titleColor,
  socialIconsText,
  tagsText,
  recommendedPosts,
  ...socialIconsProps
}: PostPageProps) {
  const theme = useTheme();
  const backgroundFallback = theme.palette.primary.main;
  const backgroundIsDark =
    background && isColor(background)
      ? isColorDark(background)
      : isColorDark(backgroundFallback);

  const pageProps = {
    background,
    overHeader,
    breadcrumbs,
    backgroundIsDark,
  };

  const postInfoProps = {
    title,
    description,
    date,
    dateText,
    authorName,
    authorPicture,
    authorDescription,
    tags,
    titleColor,
    backgroundIsDark,
    socialIconsText,
    ...socialIconsProps,
  };

  const postSuggestionsProps = {
    titleColor,
    socialIconsText,
    tagsText,
    tags,
    recommendedPosts,
    ...socialIconsProps,
  };

  return (
    <Page {...pageProps} header={<PostInfo {...postInfoProps} />}>
      <Box maxWidth="720px" marginX="auto">
        <Box>{children}</Box>
        <Box marginTop={3}>
          <PostSuggestions {...postSuggestionsProps} />
        </Box>
      </Box>
    </Page>
  );
}
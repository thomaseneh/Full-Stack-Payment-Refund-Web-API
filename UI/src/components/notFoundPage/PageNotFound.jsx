import { PageNotFoundStyle, Paragraph, H2 } from "./PageNotFoundStyle";

export function PageNotFound() {
  return (
    <PageNotFoundStyle>
      <H2>Oops!</H2>
      <Paragraph>Sorry, Unexpected error has occured.</Paragraph>
      <Paragraph>Page Not Found</Paragraph>
    </PageNotFoundStyle>
  );
}

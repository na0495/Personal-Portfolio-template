import { ReactNode } from "react";
import { Helmet } from "react-helmet-async";
import { metaData } from "../_mock/seo";

// ----------------------------------------------------------

type Props = {
  title: string;
  meta?: ReactNode;
};

export default function CustomHelmet({ meta, title }: Props) {
  return (
    <Helmet>
      <title>{`${title} | ${metaData.siteName}`}</title>
      {meta}
    </Helmet>
  );
}

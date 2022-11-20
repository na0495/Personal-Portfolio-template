import { ReactNode } from "react";
import { Helmet } from "react-helmet-async";

// ----------------------------------------------------------

type Props = {
  title: string;
  meta?: ReactNode;
};

export default function CustomHelmet({ meta, title }: Props) {
  return (
    <Helmet>
      <title>{`${title} | Saad Portfolio`}</title>
      {meta}
    </Helmet>
  );
}

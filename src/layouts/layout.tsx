import { ReactNode } from "react";
import { Helmet } from "react-helmet-async";

interface Props {
  title: string;
  children: ReactNode;
}

export function Layout({ title, children }: Props) {
  return (
    <>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      {children}
    </>
  );
}

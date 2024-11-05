import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export function Charts({children}: Props){
  return (
    <section className="flex gap-4">
      {children}
    </section>
  );
};
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

const Card = ({
  children,
  className,
}: {
  children: ReactNode;
  className: string;
}) => {
  return (
    <div>
      <div
        className={cn(
          "border border-grey-300 rounded-lg overflow-hidden shadow-sm",
          className
        )}
      >
        {children}
      </div>
    </div>
  );
};

export default Card;

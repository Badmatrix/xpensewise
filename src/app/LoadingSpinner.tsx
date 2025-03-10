import { cn } from "@/lib/utils";

export default function LoadingSpinner({
  size = 24,
  className,
}: {
  size?: number;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "animate-spin rounded-full border-2 border-grey-300 border-t-grey-500",
        className,
      )}
      style={{ width: size, height: size }}
    />
  );
}

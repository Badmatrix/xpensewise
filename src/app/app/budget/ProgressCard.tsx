import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

type Props = {
  maximum: number;
  theme: string;
  total: number;
};
function ProgressCard({ maximum, theme, total }: Props) {
  const val = (Math.abs(total )/ maximum) * 100;
  return (
    <Card className="border-0 bg-beige-100 py-1 shadow-none">
      <Progress
        value={val}
        className={`mx-auto h-5 w-[97%] rounded-sm bg-beige-100 [&>*]:bg-[var(--progress-color)]`}
        style={{ "--progress-color": theme } as React.CSSProperties}
      />
    </Card>
  );
}

export default ProgressCard;

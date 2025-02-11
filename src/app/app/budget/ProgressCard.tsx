import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";


type Props = {
  maximum: number;
    theme: string;
  total:number
};
function ProgressCard({ maximum, theme,total }: Props) {
    const val = (total / maximum) * 100;
  return (
    <Card className="bg-beige-100 border-0 py-1 shadow-none">
      <Progress
        value={val}
        className={`bg-beige-100 mx-auto h-5 w-[97%] rounded-sm [&>*]:bg-[var(--progress-color)]`}
        style={{ "--progress-color": theme } as React.CSSProperties}
      />
    </Card>
  );
}

export default ProgressCard;

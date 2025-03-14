import { Card } from "@/components/ui/card";

function EmptyBills() {
  return (
    <Card className="border-0 px-3 py-5">
      <div className="text-center text-lg font-semibold text-grey-900">
        you have no recurring bill at the moment
      </div>
    </Card>
  );
}

export default EmptyBills;

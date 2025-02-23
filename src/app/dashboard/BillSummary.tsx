import { Card } from "@/components/ui/card";

function BillSummary() {
  const bill = [];
  return (
    <Card
      className={`border-0 lg:row-span-2 ${bill.length ? "hidden" : "block"}`}
    >
      BillSummary Lorem ipsum dolor sit, amet consectetur adipisicing elit.
      Repellendus, quae! Fugit voluptas facere doloribus dolorem, reiciendis
      deleniti distinctio placeat odit, dolorum veritatis cupiditate excepturi
      quaerat voluptatum dolore blanditiis? Laborum non rem error impedit optio
      eaque? Earum consectetur labore repellendus. Eum maxime natus nesciunt
      sint molestias, esse vero eius. Eum fugiat similique culpa, corporis ab
      architecto, earum quo perferendis, quia porro sunt consequuntur placeat
      ipsa. Voluptas modi asperiores voluptate dicta iusto voluptates corrupti
      vero rerum maiores? Enim sint quod voluptate veniam aspernatur incidunt
      consequuntur ab. Labore facere qui quia natus quas, sequi voluptas magni
      repellat autem similique, maxime minus, saepe commodi?
    </Card>
  );
}

export default BillSummary;

import { Card } from "@/components/ui/card";

function BalanceSummary() {
  return (
    <div className="grid grid-flow-row gap-3 md:grid-flow-col md:gap-5">
      <Card></Card>
      <Card></Card>
      <Card></Card>
    </div>
  );
}

export default BalanceSummary;

// import SummaryCard from "./SummaryCard";

// const balance = [
//   { title: "current balance", amount: 9000, style: "bg-grey-900 text-white" },
//   { title: "income", amount: 10000 },
//   { title: "expenses", amount: 10000 },
// ];

// function SummaryList() {
//   return (
//     <ul className="grid grid-flow-row gap-3 md:grid-flow-col md:gap-5">
//       {balance.map((item) => (
//         <SummaryCard key={item.title} title={item.title} className={item.style}>
//           <h1 className="text-2xl font-bold">{item.amount}</h1>
//         </SummaryCard>
//       ))}
//     </ul>
//   );
// }
import { LayoutDashboard } from "@/layouts";
import {
  TableInfo,
  BarChartResume,
  PieCharMonthly,
  Charts,
  CalendarQuotes,
  CountClients,
} from "./components";

export function Dashboard() {
  return (
    <LayoutDashboard>
      <Charts>
        <BarChartResume />
        <PieCharMonthly />
      </Charts>
      <TableInfo />
      <Charts>
        <CalendarQuotes />
        <CountClients />
      </Charts>
    </LayoutDashboard>
  );
}

/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
export default function DashboardBarChart({
  data,
  currency = true,
}: {
  data: any;
  width?: number;
  currency?: boolean;
}) {
  return (
    <ResponsiveContainer width='100%' height={350}>
      <BarChart data={data}>
        <CartesianGrid strokeDasharray='3 3' />
        <XAxis dataKey='name' />
        <YAxis
          tickFormatter={value =>
            value > 1000
              ? `${value / 1000}K`
              : value > 1000000
              ? `${value / 1000000}M`
              : value
          }
        />
        <Tooltip
          formatter={value =>
            currency ? `N${value.toLocaleString('en')}` : value
          }
        />
        <Bar style={{ margin: 20 }} dataKey='value' fill='green' />
      </BarChart>
    </ResponsiveContainer>
  );
}

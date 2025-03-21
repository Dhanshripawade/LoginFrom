import { PieChart, Pie, Cell, Legend, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'America', value: 27.7 },
  { name: 'Asia', value: 34.7 },
  { name: 'Europe', value: 9.2 },
  { name: 'Africa', value: 28.4 },
];

const COLORS = ['#3366FF', '#00BFFF', '#FFB400', '#FF4C4C'];

export default function CurrentVisitsPieChart() {
  return (
    <div style={{ padding: '20px', background: '#fff', borderRadius: '12px', boxShadow: '0 2px 8px rgba(0,0,0,0.05)' }}>
      <h4 style={{ marginBottom: '16px', fontWeight: '600' }}>Current Visits</h4>
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="45%"
            labelLine={false}
            label={({ percent }) => `${(percent * 100).toFixed(1)}%`}
            outerRadius={100}
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend
            verticalAlign="bottom"
            iconType="circle"
            align="center"
            wrapperStyle={{ marginTop: '20px' }}
            formatter={(value) => <span style={{ color: '#555', fontSize: '14px' }}>{value}</span>}
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}

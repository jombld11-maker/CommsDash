import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { name: "Mon", users: 400 },
  { name: "Tue", users: 800 },
  { name: "Wed", users: 600 },
  { name: "Thu", users: 1000 },
  { name: "Fri", users: 1200 },
  { name: "Sat", users: 700 },
  { name: "Sun", users: 900 }
];

export default function Home() {
  return (
    <div style={{ padding: "40px" }}>
      <h1>📊 Comms Dashboard</h1>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px", marginTop: "20px" }}>
        
        <div className="card">
          <h2>Total Users</h2>
          <p style={{ fontSize: "24px", fontWeight: "bold" }}>1,240</p>
        </div>

        <div className="card">
          <h2>Active Sessions</h2>
          <p style={{ fontSize: "24px", fontWeight: "bold" }}>320</p>
        </div>

        <div className="card" style={{ gridColumn: "span 2" }}>
          <h2>User Growth</h2>
          <div style={{ width: "100%", height: 300 }}>
            <ResponsiveContainer>
              <LineChart data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="users" stroke="#8884d8" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

      </div>
    </div>
  );
}


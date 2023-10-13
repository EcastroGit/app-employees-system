import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  LineChart,
  BarChart,
  Bar,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Legend,
  Tooltip,
} from "recharts";
import "../../css/analytics.css";

function Analytics() {
  
  const [totalPayments, setTotalPayments] = useState([]);
  const [totalPaymentsDepartments, setTotalPaymentsDepartments] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:4000/dashboard/total-payroll-payments")
      .then((res) => {
        setTotalPayments(res.data.total_payments);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    axios.get("http://localhost:4000/dashboard/payroll-payments-department")
    .then((res) => setTotalPaymentsDepartments(res.data.payments_departments))
    .catch((err) => console.log(err))
  }, [])

  return (
    <div>
      <h2 className="text-center pt-5">Analytics and stats</h2>
      <div id="charts-container" className="p-5">
        <div className="chart-card shadow">
          <h3 className="text-center pb-3">Total payroll payments per month</h3>
          <LineChart width={400} height={400} data={totalPayments}>
            <Line
              type="monotone"
              dataKey="USD"
              stroke="#8884d8"
              strokeWidth={2}
            />
            <CartesianGrid stroke="#ccc" />
            <XAxis dataKey="month" />
            <YAxis />
            <Legend />
            <Tooltip />
          </LineChart>
        </div>
        <div className="chart-card shadow">
          <h3 className="text-center pb-3">Payroll payments per department</h3>
          <BarChart
            width={500}
            height={400}
            data={totalPaymentsDepartments}
            margin={{
              top: 20,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <Bar dataKey="sales" stackId="a" fill="#8884d8" />
            <Bar dataKey="IT" stackId="a" fill="#f09949" />
            <Bar dataKey="management" stackId="a" fill="#739419" />
            <CartesianGrid stroke="#ccc" />
            <XAxis dataKey="month" />
            <YAxis />
            <Legend />
            <Tooltip />
          </BarChart>
        </div>
      </div>
    </div>
  );
}

export default Analytics;

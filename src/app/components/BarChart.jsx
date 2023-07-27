"use client";
import "./chart.css";

export function BarChart({ data }) {
  return (
    <div style={{ display: "flex" }}>
      <span style={{ flexGrow: data.range[0], paddingRight: "2px" }}>
        <div className="Q9Ncgb chartSize"></div>
      </span>
      <span style={{ flexGrow: data.range[1], paddingRight: "2px" }}>
        <div className="frjPxd chartSize"></div>
      </span>
      <spa style={{ flexGrow: data.range[2], paddingRight: "2px" }}>
        <div className="BukQrf chartSize"></div>
      </spa>
    </div>
  );
}

"use client";
import "./chart.css";

export function BarChart({ data }) {
  return (
    <div className="QKDQJb ">
      <div className="cOTkPe">
        <span className="DyTaId xTnkAf">
          <span className="f49ZR">
            <span className={`Ykn2A LR2yK ${data?.time?.className}`}>
              {data?.time?.format}
            </span>
          </span>
        </span>
      </div>
      <div style={{ display: "flex" }}>
        <span style={{ flexGrow: data.range[0], paddingRight: "2px" }}>
          <div className="Q9Ncgb chartSize"></div>
        </span>
        <span style={{ flexGrow: data.range[1], paddingRight: "2px" }}>
          <div className="frjPxd chartSize"></div>
        </span>
        <span style={{ flexGrow: data.range[2], paddingRight: "2px" }}>
          <div className="BukQrf chartSize"></div>
        </span>
      </div>

      <span className="DyTaId GQ6RS">
        <img
          src="/icons/pines.svg"
          alt=""
          style={{ width: "16px", height: "16px" }}
        />
      </span>
    </div>
  );
}

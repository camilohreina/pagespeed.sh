"use client";
import "./chart.css";

export function BarChart({ data }) {
  return (
    <div className="QKDQJb ">
      <div class="cOTkPe">
        <span class="DyTaId xTnkAf">
          <span class="f49ZR">
            <span class="Ykn2A LR2yK">36&nbsp;ms</span>
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

      <span class="DyTaId GQ6RS">
        <img
          src="/icons/pines.svg"
          alt=""
          style={{ width: "16px", height: "16px" }}
        />
      </span>
    </div>
  );
}

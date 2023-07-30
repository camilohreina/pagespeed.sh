"use client";
import { motion } from "framer-motion";
import "./chart.css";

export function BarChart({ data }) {
  return (
    <div className="QKDQJb ">
      <div className="cOTkPe">
        <span className="DyTaId xTnkAf">
          <span className="f49ZR">
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { delay: 1.5 } }}
              className={`Ykn2A LR2yK ${data?.time?.className}`}
            >
              {data?.time?.format}
            </motion.span>
          </span>
        </span>
      </div>
      <motion.div
        initial={{ opacity: 0, width: 0 }}
        animate={{ opacity: 1, width: "auto" }}
        transition={{
          ease: "linear",
          duration: 1,
          x: { duration: 0.8 },
        }}
        style={{ display: "flex" }}
      >
        <span style={{ flexGrow: data.range[0], paddingRight: "2px" }}>
          <div className="Q9Ncgb chartSize"></div>
        </span>
        <span style={{ flexGrow: data.range[1], paddingRight: "2px" }}>
          <div className="frjPxd chartSize"></div>
        </span>
        <span style={{ flexGrow: data.range[2], paddingRight: "2px" }}>
          <div className="BukQrf chartSize"></div>
        </span>
      </motion.div>

      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { delay: 1.5 } }}
        className="DyTaId GQ6RS"
      >
        <img
          src="/icons/pines.svg"
          alt=""
          style={{ width: "16px", height: "16px" }}
        />
      </motion.span>
    </div>
  );
}

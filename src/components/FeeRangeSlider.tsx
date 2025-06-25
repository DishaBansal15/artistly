"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import { getTrackBackground } from "react-range";
import { useFormContext } from "react-hook-form";
import type { FC } from "react";

// ✅ Dynamically import Range component to fix SSR + JSX issues
const DynamicRange = dynamic(() =>
  import("react-range").then(mod => mod.Range as unknown as FC<any>), {
  ssr: false
});

const MIN = 5000;
const MAX = 30000;
const STEP = 1000;

export default function FeeRangeSlider() {
  const { setValue } = useFormContext();
  const [values, setValues] = useState<[number, number]>([10000, 20000]);

  useEffect(() => {
    setValue("minFee", values[0]);
    setValue("maxFee", values[1]);
  }, [values, setValue]);

  return (
    <div className="w-full">
      <label className="block font-semibold mb-2" id="fee-range-label">Fee Range (₹)</label>

      <div className="flex justify-between text-sm text-gray-600 mb-1 px-1">
        <span>₹{values[0]}</span>
        <span>₹{values[1]}</span>
      </div>

      <DynamicRange
        values={values}
        step={STEP}
        min={MIN}
        max={MAX}
        onChange={(vals: number[]) => setValues([vals[0], vals[1]])}
        direction="toRight"
        allowOverlap={false}
        draggableTrack={false}
        renderTrack={({ props, children }: { props: any; children: React.ReactNode }) => (
          <div
            {...props}
            style={{
              ...props.style,
              height: "6px",
              background: getTrackBackground({
                values,
                colors: ["#e5e7eb", "#9333ea", "#e5e7eb"],
                min: MIN,
                max: MAX,
              }),
              borderRadius: "4px",
            }}
            className="w-full rounded-full transition-colors"
          >
            {children}
          </div>
        )}
        renderThumb={({ props }: { props: any }) => (
          <div
            {...props}
            aria-label="Fee Thumb"
            className="w-5 h-5 bg-purple-600 rounded-full shadow-md transition-transform duration-200 focus:outline-none"
          />
        )}
        ariaLabel={["Minimum Fee", "Maximum Fee"]}
        ariaLabelledBy="fee-range-label"
        ariaValueText={(val: number) => `₹${val}`}
      />
    </div>
  );
}

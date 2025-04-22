
import React, { useState } from "react";
import { Square, Circle } from "lucide-react";

const COLORS = [
  { name: "Space Gray", value: "space-gray", color: "#6e6e6e" },
  { name: "Silver", value: "silver", color: "#c8c8c9" }
];
const SIZES = [
  { name: "16-inch", value: "16" },
  { name: "14-inch", value: "14" }
];

interface ProductOptionsProps {
  onChange?: (options: { color: string; size: string }) => void;
}

export const ProductOptions: React.FC<ProductOptionsProps> = ({ onChange }) => {
  const [selectedColor, setSelectedColor] = useState(COLORS[0].value);
  const [selectedSize, setSelectedSize] = useState(SIZES[0].value);

  React.useEffect(() => {
    if (onChange) onChange({ color: selectedColor, size: selectedSize });
  }, [selectedColor, selectedSize, onChange]);

  return (
    <div className="space-y-4 mb-4">
      <div>
        <div className="font-semibold text-gray-700 mb-1">Color:</div>
        <div className="flex gap-2">
          {COLORS.map((c) => (
            <button
              key={c.value}
              type="button"
              className={`flex flex-col items-center w-16 py-1 rounded border ${selectedColor === c.value ? "border-[#9b87f5]" : "border-gray-300"} bg-white hover:border-[#9b87f5] transition`}
              onClick={() => setSelectedColor(c.value)}
            >
              <Circle color={c.color} fill={c.color} className="w-6 h-6 mb-1" />
              <span className="text-xs text-gray-700">{c.name}</span>
            </button>
          ))}
        </div>
      </div>
      <div>
        <div className="font-semibold text-gray-700 mb-1">Size:</div>
        <div className="flex gap-2">
          {SIZES.map((s) => (
            <button
              key={s.value}
              type="button"
              className={`border px-3 py-1.5 rounded-full text-sm text-gray-800 ${selectedSize === s.value ? "border-[#9b87f5] bg-[#f3f3f3]" : "border-gray-300"} hover:border-[#9b87f5] transition`}
              onClick={() => setSelectedSize(s.value)}
            >
              {s.name}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

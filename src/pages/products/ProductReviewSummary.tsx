
import React from "react";
import { Star } from "lucide-react";
import { Button } from "@/components/ui/button";

type RatingStats = {
  star: number;
  percent: number;
};

interface ProductReviewSummaryProps {
  avgRating: number;
  totalRatings: number;
  ratingBreakdown: RatingStats[];
}

const colorBar = "bg-[#F5991B]"; // orange bar like Amazon

export const ProductReviewSummary: React.FC<ProductReviewSummaryProps> = ({
  avgRating,
  totalRatings,
  ratingBreakdown,
}) => {
  return (
    <aside className="bg-white rounded-lg border border-gray-200 p-6 w-full max-w-xs">
      <div className="mb-6">
        <div className="flex items-center space-x-2">
          <span className="text-2xl font-bold">{avgRating.toFixed(1)}</span>
          <div className="flex">
            {[1, 2, 3, 4, 5].map((n) => (
              <Star
                key={n}
                className={`w-5 h-5 ${avgRating >= n ? "text-[#F5991B] fill-[#F5991B]" : "text-gray-300"}`}
                fill={avgRating >= n ? "#F5991B" : "none"}
              />
            ))}
          </div>
        </div>
        <div className="text-gray-600 text-base mt-1 font-medium">{totalRatings} global ratings</div>
      </div>
      <div className="space-y-1.5 mb-6">
        {ratingBreakdown.map((r) => (
          <div key={r.star} className="flex items-center gap-2">
            <span className="w-10 text-[#10539E] underline cursor-pointer text-sm">{r.star} star</span>
            <div className="flex-1 h-2 bg-[#F1F1F1] rounded">
              <div className={`${colorBar} h-2 rounded`} style={{width: `${r.percent}%`}} />
            </div>
            <span className="text-gray-500 ml-2 text-xs">{r.percent ? Math.round(r.percent) : 0}%</span>
          </div>
        ))}
      </div>
      <a href="#" className="block text-[#10539E] text-xs mb-6 hover:underline">
        How are ratings calculated?
      </a>
      <div className="mb-3 font-semibold text-gray-800">Review this product</div>
      <div className="text-gray-500 text-sm mb-4">Share your thoughts with other customers</div>
      <Button className="w-full bg-white border border-gray-400 hover:bg-gray-50 text-gray-800 rounded-full font-medium">
        Write a customer review
      </Button>
    </aside>
  );
};

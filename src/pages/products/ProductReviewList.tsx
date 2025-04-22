
import React from "react";
import { Star, User } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Review {
  id: string;
  user: string;
  rating: number;
  title: string;
  comment: string;
  date: string;
  location?: string;
  verified?: boolean;
  language?: string;
}
interface ProductReviewListProps {
  reviewsByCountry: {
    country: string;
    reviews: Review[];
  }[];
}

const ReviewItem: React.FC<{ review: Review }> = ({ review }) => (
  <div className="border-b border-[#f3f3f3] py-4 first:pt-0 space-y-1 last:border-none">
    <div className="flex items-center gap-2">
      <span className="inline-flex items-center justify-center bg-gray-200 rounded-full w-8 h-8 mr-1">
        <User className="w-5 h-5 text-gray-500" />
      </span>
      <span className="font-semibold text-gray-900">{review.user}</span>
    </div>
    <div className="flex items-center mt-0.5">
      {[1,2,3,4,5].map(n => (
        <Star
          key={n}
          className={`w-4 h-4 ${review.rating >= n ? "text-[#F5991B] fill-[#F5991B]" : "text-gray-300"}`}
          fill={review.rating >= n ? "#F5991B" : "none"}
        />
      ))}
      <span className="font-bold ml-2 text-gray-900">{review.title}</span>
    </div>
    <div className="text-xs text-gray-600 mt-0.5">
      Reviewed in {review.location || "Unknown location"} on {review.date}
      {review.verified && (
        <span className="text-[#C45500] font-bold ml-3">Verified Purchase</span>
      )}
    </div>
    <div className="text-sm text-gray-800 mt-1">{review.comment}</div>
    <div className="flex items-center space-x-2 mt-2 text-xs">
      <a href="#" className="text-[#10539E] hover:underline">Report</a>
      {review.language && (
        <a href="#" className="text-[#10539E] hover:underline">Translate review to English</a>
      )}
    </div>
  </div>
);

export const ProductReviewList: React.FC<ProductReviewListProps> = ({
  reviewsByCountry,
}) => (
  <div className="bg-white rounded-lg border border-gray-200 px-6 py-5">
    <h3 className="text-lg font-bold mb-2">Top reviews from Egypt</h3>
    <div className="bg-[#f3f3f3] text-gray-500 text-sm rounded p-4 mb-4">
      There are 0 reviews and 0 ratings from Egypt
    </div>
    <h3 className="text-lg font-bold mb-2 mt-6">Top reviews from other countries</h3>
    <div className="mb-3">
      <Button size="sm" variant="outline" className="rounded-full border-gray-400 text-gray-700">
        Translate all reviews to English
      </Button>
    </div>
    {/* Render reviews from other countries */}
    {reviewsByCountry.map(group =>
      group.country !== 'Egypt' && group.reviews.length > 0 ? (
        group.reviews.map(review =>
          <ReviewItem key={review.id} review={review} />
        )
      ) : null
    )}
    <div className="mt-4">
      <a href="#" className="text-[#10539E] font-semibold hover:underline">See more reviews &gt;</a>
    </div>
  </div>
);

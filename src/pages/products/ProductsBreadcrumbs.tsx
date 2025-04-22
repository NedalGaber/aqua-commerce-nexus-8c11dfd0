
import React from "react";

interface ProductsBreadcrumbsProps {
  searchQuery?: string;
  categoryPath?: string[];
}

export const ProductsBreadcrumbs: React.FC<ProductsBreadcrumbsProps> = ({
  searchQuery,
  categoryPath,
}) => {
  if (searchQuery) {
    return (
      <div className="text-xs text-gray-700 mb-1 px-2">
        Results for <span className="font-semibold">&quot;{searchQuery}&quot;.</span>
      </div>
    );
  }

  if (categoryPath && categoryPath.length > 0) {
    return (
      <nav className="text-xs text-blue-700 mb-1 px-2 space-x-1 flex items-center">
        {categoryPath.map((cat, idx) => (
          <React.Fragment key={cat}>
            <span
              className={`hover:underline cursor-pointer ${
                idx === categoryPath.length - 1 ? "text-gray-700 font-semibold" : ""
              }`}
            >
              {cat}
            </span>
            {idx < categoryPath.length - 1 && (
              <span className="text-gray-400">&gt;</span>
            )}
          </React.Fragment>
        ))}
      </nav>
    );
  }
  return null;
};

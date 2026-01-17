"use client";

import { useState, ReactNode } from "react";

interface ExpandableCardProps {
  logo: ReactNode;
  title: string;
  subtitle: string;
  dateRange: string;
  bullets: ReactNode[];
  link?: string;
}

export function ExpandableCard({
  logo,
  title,
  subtitle,
  dateRange,
  bullets,
  link,
}: ExpandableCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="relative pl-8">
      {/* Timeline Logo */}
      <div className="absolute -left-[20px] top-1 bg-neutral-50 dark:bg-neutral-950 p-1 rounded-full border border-neutral-200 dark:border-neutral-800 shadow-sm overflow-hidden">
        {logo}
      </div>

      {/* Card Content */}
      <div className="flex flex-col gap-1">
        {/* Header Row - Clickable */}
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="flex items-start justify-between w-full text-left group cursor-pointer"
        >
          <div className="flex flex-col gap-1 flex-1">
            <div className="flex items-center gap-2">
              <h3 className="font-semibold text-neutral-900 dark:text-neutral-100">
                {title}
              </h3>
              {link && (
                <a
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors"
                  aria-label="View project"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                    <polyline points="15 3 21 3 21 9" />
                    <line x1="10" y1="14" x2="21" y2="3" />
                  </svg>
                </a>
              )}
            </div>
            <p className="text-sm text-neutral-600 dark:text-neutral-400">
              {subtitle}
            </p>
          </div>

          <div className="flex items-center gap-2 text-right shrink-0 ml-4">
            <span className="text-xs text-neutral-500 dark:text-neutral-500">
              {dateRange}
            </span>
            {/* Chevron */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className={`text-neutral-400 dark:text-neutral-500 transition-transform duration-200 ${
                isExpanded ? "rotate-180" : ""
              }`}
            >
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
          </div>
        </button>

        {/* Expandable Bullet Points */}
        <div
          className={`overflow-hidden transition-all duration-200 ease-in-out ${
            isExpanded ? "max-h-96 opacity-100 mt-3" : "max-h-0 opacity-0"
          }`}
        >
          <ul className="space-y-2 text-sm text-neutral-600 dark:text-neutral-400">
            {bullets.map((bullet, index) => (
              <li key={index} className="flex gap-2">
                <span className="text-neutral-400 dark:text-neutral-500 shrink-0">•</span>
                <span>{bullet}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

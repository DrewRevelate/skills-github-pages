"use client";

export default function PlaceholderImage() {
  return (
    <div>
      <svg width="300" height="300" viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg">
        <rect width="300" height="300" fill="#333" />
        <text x="50%" y="50%" textAnchor="middle" fill="#fff" fontFamily="Arial" fontSize="24px">
          Placeholder Image
        </text>
      </svg>
    </div>
  );
}

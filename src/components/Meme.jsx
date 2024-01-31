"use client";

import React, { useState } from "react";
import { Item } from "react-photoswipe-gallery";

export default function Meme({ meme, index }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="w-full sm:w-64 h-64"
    >
      <Item
        key={index}
        original={meme.data.url}
        thumbnail={meme.data.thumbnail}
        width={meme.data.preview.images[0].source.width}
        height={meme.data.preview.images[0].source.height}
      >
        {({ ref, open }) => (
          <img
            ref={ref}
            className="w-full h-full object-cover rounded-lg duration-300 hover:scale-95 hover:cursor-pointer shadow-lg"
            onClick={open}
            src={meme.data.url}
          />
        )}
      </Item>

      {isHovered && (
        <div className="absolute z-40 -my-16 -mx-10">
          <ul>
            <li>
              <span class="bg-gray-100 text-gray-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-gray-800 dark:text-gray-300">
                ⬆ {meme.data.ups}
              </span>
            </li>
            <li>
              <span class="bg-gray-100 text-gray-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-gray-800 dark:text-gray-300">
                💬 {meme.data.num_comments}
              </span>
            </li>
            <li>
              <span class="bg-gray-100 text-gray-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-gray-800 dark:text-gray-300">
                {meme.data.title}
              </span>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

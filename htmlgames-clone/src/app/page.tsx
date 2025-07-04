"use client";

import { useState } from "react";

export default function HomePage() {
  const games = [
    {
      id: 1,
      title: "Binairo",
      image: "https://ext.same-assets.com/2715499815/984693365.webp",
      tags: ["New", "No time limit"],
      rating: 5,
    },
    {
      id: 2,
      title: "Aquatic Slice",
      image: "https://ext.same-assets.com/2715499815/1376814600.webp",
      tags: ["New", "Fixed", "No time limit"],
      rating: 5,
    },
    {
      id: 3,
      title: "Mindful Mahjong",
      image: "https://ext.same-assets.com/2715499815/11729550.webp",
      tags: ["New"],
      rating: 5,
    },
    {
      id: 4,
      title: "Steps Solitaire",
      image: "https://ext.same-assets.com/2715499815/4125872796.webp",
      tags: ["New"],
      rating: 5,
    },
    {
      id: 5,
      title: "Wild West Klondike",
      image: "https://ext.same-assets.com/2715499815/2065724015.webp",
      tags: [],
      rating: 5,
    },
    {
      id: 6,
      title: "Montana Solitaire",
      image: "https://ext.same-assets.com/2715499815/1750342796.webp",
      tags: [],
      rating: 5,
    },
    {
      id: 7,
      title: "Flower World 2",
      image: "https://ext.same-assets.com/2715499815/333102146.webp",
      tags: [],
      rating: 5,
    },
    {
      id: 8,
      title: "Aladdin Solitaire",
      image: "https://ext.same-assets.com/2715499815/584323642.webp",
      tags: [],
      rating: 5,
    },
  ];

  const [searchTerm, setSearchTerm] = useState("");

  // 基础搜索功能 - 只按游戏名称搜索 - 强制更新
  const filteredGames = games.filter((game) =>
    game.title.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top Navigation Bar */}
      <nav className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center">
              <img
                src="https://ext.same-assets.com/2715499815/4206056127.png"
                alt="HTML Games"
                className="h-8 w-auto"
              />
            </div>

            {/* Navigation Links */}
            <div className="hidden md:flex items-center space-x-8">
              <button className="text-gray-700 hover:text-orange-600">
                Game categories
              </button>
              <button className="text-gray-700 hover:text-orange-600">
                Favorites
              </button>
              <button className="text-gray-700 hover:text-orange-600">
                Share
              </button>
              <button className="text-orange-600 font-medium">Donate</button>
            </div>

            {/* Search Box */}
            <div className="flex items-center">
              <div className="relative">
                <input
                  type="text"
                  placeholder="搜索游戏..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 pr-4 py-2 w-64 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                />
                <svg
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">HTML games</h1>
          <p className="text-lg text-gray-600">
            Play the best free online html and html5 games for mobile, tablet
            and desktop. Our games work on iOS (iPhone, iPad), Android and
            PC/Mac. Feel free to{"  "}
            <button className="text-orange-600 hover:underline">publish</button>
            {"  "}
            our html5 games on your site.
          </p>
        </div>

        {/* Search Results Info */}
        {searchTerm && (
          <div className="mb-6">
            <p className="text-gray-600">
              找到 {filteredGames.length} 个包含 "{searchTerm}" 的游戏
            </p>
          </div>
        )}

        {/* Game Categories */}
        <div className="mb-8">
          <div className="flex flex-wrap gap-4">
            <button className="px-4 py-2 bg-orange-100 text-orange-700 rounded-lg hover:bg-orange-200">
              Mahjong
            </button>
            <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200">
              Solitaire
            </button>
            <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200">
              Mind games
            </button>
            <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200">
              Hidden objects
            </button>
            <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200">
              Match 3
            </button>
            <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200">
              Action
            </button>
            <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200">
              Classic Games
            </button>
          </div>
        </div>

        {/* Sort Section */}
        <div className="mb-6">
          <div className="flex items-center">
            <span className="text-gray-700 mr-4">Sort by:</span>
            <select className="px-3 py-2 border border-gray-300 rounded-lg bg-white">
              <option>Best rated games</option>
              <option>Newest games</option>
              <option>Most played</option>
            </select>
          </div>
        </div>

        {/* Games Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredGames.length > 0 ? (
            filteredGames.map((game) => (
              <div
                key={game.id}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
              >
                <div className="relative">
                  <img
                    src={game.image}
                    alt={game.title}
                    className="w-full h-40 object-cover"
                  />
                  {/* Tags */}
                  {game.tags.length > 0 && (
                    <div className="absolute top-2 left-2 flex gap-1">
                      {game.tags.map((tag) => (
                        <span
                          key={tag}
                          className={`px-2 py-1 text-xs rounded ${
                            tag === "New"
                              ? "bg-red-500 text-white"
                              : tag === "Fixed"
                                ? "bg-green-500 text-white"
                                : tag === "No time limit"
                                  ? "bg-orange-500 text-white"
                                  : "bg-gray-500 text-white"
                          }`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">
                    {game.title}
                  </h3>
                  <div className="flex items-center">
                    <div className="flex text-orange-400">
                      {"★".repeat(game.rating)}
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full text-center py-12">
              <p className="text-gray-500 text-lg">没有找到匹配的游戏</p>
              <p className="text-gray-400">请尝试其他搜索关键词</p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}

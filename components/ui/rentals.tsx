"use client";
import Image from "next/image";
import { useState } from "react";

const rentals = [
  {
    id: 1,
    price: "M600/mo",
    rating: 4,
    distance: "1 mile from campus",
    image: "/a.jpg",
  },
  {
    id: 2,
    price: "M750/mo",
    rating: 5,
    distance: "0.5 miles from campus",
    image: "/building.jpg",
  },
  {
    id: 3,
    price: "M500/mo",
    rating: 3,
    distance: "2 miles from campus",
    image: "/b.jpg",
  },
  {
    id: 4,
    price: "M650/mo",
    rating: 4,
    distance: "0.8 miles from campus",
    image: "/c.jpeg",
  },
];

export default function Rentals() {
  const [filters, setFilters] = useState({
    price: { min: 0, max: 1000 },
    rating: 1,
    distance: "All",
  });

  const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      price: { ...prevFilters.price, [name]: Number(value) },
    }));
  };

  const handleRatingChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      rating: parseInt(e.target.value),
    }));
  };

  const handleDistanceChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      distance: e.target.value,
    }));
  };

  const filteredRentals = rentals.filter((rental) => {
    const price = parseInt(rental.price.replace("M", "").replace("/mo", ""));
    return (
      price >= filters.price.min &&
      price <= filters.price.max &&
      rental.rating >= filters.rating &&
      (filters.distance === "All" || rental.distance === filters.distance)
    );
  });

  return (
    <div className="bg-gray-100 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-6">
        {/* Sidebar */}
        <div className="w-full lg:w-1/4 bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Filters</h3>

          {/* Price Range */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Min Price (M)</label>
            <input
              type="range"
              name="min"
              min="0"
              max="1000"
              value={filters.price.min}
              onChange={handlePriceChange}
              className="w-full"
            />
            <span className="text-sm text-gray-600">M{filters.price.min}</span>
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Max Price (M)</label>
            <input
              type="range"
              name="max"
              min="0"
              max="1000"
              value={filters.price.max}
              onChange={handlePriceChange}
              className="w-full"
            />
            <span className="text-sm text-gray-600">M{filters.price.max}</span>
          </div>

          {/* Rating */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Rating</label>
            <select
              value={filters.rating}
              onChange={handleRatingChange}
              className="w-full mt-2 p-2 border rounded-md"
            >
              <option value={1}>1 Star and above</option>
              <option value={2}>2 Stars and above</option>
              <option value={3}>3 Stars and above</option>
              <option value={4}>4 Stars and above</option>
              <option value={5}>5 Stars</option>
            </select>
          </div>

          {/* Distance */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Distance</label>
            <select
              value={filters.distance}
              onChange={handleDistanceChange}
              className="w-full mt-2 p-2 border rounded-md"
            >
              <option value="All">All</option>
              <option value="0.5 miles from campus">0.5 miles from campus</option>
              <option value="1 mile from campus">1 mile from campus</option>
              <option value="2 miles from campus">2 miles from campus</option>
            </select>
          </div>
        </div>

        {/* Rentals Grid */}
        <div className="w-full lg:w-3/4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredRentals.map((rental) => (
            <div key={rental.id} className="bg-white rounded-lg shadow p-4">
              <Image
                src={rental.image}
                alt={`Rental ${rental.id}`}
                width={400}
                height={300}
                className="rounded-md w-full h-48 object-cover"
              />
              <div className="mt-4">
                <p className="text-lg font-semibold">{rental.price}</p>
                <div className="flex items-center text-yellow-500 mt-1">
                  {Array.from({ length: rental.rating }).map((_, index) => (
                    <span key={index}>★</span>
                  ))}
                  {Array.from({ length: 5 - rental.rating }).map((_, index) => (
                    <span key={index + rental.rating} className="text-gray-300">★</span>
                  ))}
                </div>
                <p className="text-sm text-gray-600 mt-1">{rental.distance}</p>
                <button className="mt-4 w-full bg-white border border-gray-300 rounded-md py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

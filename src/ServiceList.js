import React, { useState } from "react";

const services = [
  { id: 1, name: "Fitness Class", price: 50, category: "Health", image: "/fitness.jpg" },
  { id: 2, name: "Therapy Session", price: 100, category: "Wellness", image: "/therapy.jpg" },
  { id: 3, name: "Workshop", price: 75, category: "Education", image: "/workshop.jpg" },
  { id: 4, name: "Yoga Session", price: 60, category: "Health", image: "/yoga.jpg" },
  { id: 5, name: "Cooking Class", price: 90, category: "Education", image: "/cooking.jpg" },
];

const ServiceList = ({ addToCart }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value.toLowerCase());
  };

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  const filteredServices = services.filter((service) => {
    const matchesSearch = service.name.toLowerCase().includes(searchTerm);
    const matchesCategory =
      selectedCategory === "All" || service.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="service-list">
      <h2>Available Services</h2>

      <div className="filters">
        <input
          type="text"
          placeholder="Search services..."
          value={searchTerm}
          onChange={handleSearchChange}
        />
        <select value={selectedCategory} onChange={handleCategoryChange}>
          <option value="All">All Categories</option>
          <option value="Health">Health</option>
          <option value="Wellness">Wellness</option>
          <option value="Education">Education</option>
        </select>
      </div>

      <div className="service-cards">
        {filteredServices.map((service) => (
          <div className="service-card" key={service.id}>
            <img src={service.image} alt={service.name} className="service-image" />
            <div className="service-details">
              <h3>{service.name}</h3>
              <p>${service.price}</p>
              <button onClick={() => addToCart(service)}>Add to Cart</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceList;

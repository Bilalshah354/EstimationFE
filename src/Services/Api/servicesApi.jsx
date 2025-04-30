const API_BASE = 'http://localhost:5000/api/services'; 

// Get all services
export const getAllServices = async () => {
  const res = await fetch(API_BASE);
  if (!res.ok) throw new Error('Failed to fetch services');
  return await res.json();
};

// Create a new service
export const createService = async (formData, token) => {
  const res = await fetch(API_BASE, { method: 'POST', headers: { Authorization: `Bearer ${token}`},  body: formData });
  if (!res.ok) throw new Error('Failed to create service');
  return await res.json();
};

// Update a service
export const updateService = async (id, formData, token) => {
  const res = await fetch(`${API_BASE}/${id}`, {  method: 'PUT', headers: { Authorization: `Bearer ${token}`}, body: formData });
  if (!res.ok) throw new Error('Failed to update service');
  return await res.json();
};

// Delete a service
export const deleteService = async (id, token) => {
  const res = await fetch(`${API_BASE}/${id}`, { method: 'DELETE', headers: { Authorization: `Bearer ${token}`}});
  if (!res.ok) throw new Error('Failed to delete service');
  return await res.json();
};

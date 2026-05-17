import DoctorList from '@/components/doctor/DoctorList';
import React from 'react'
import { API_BASE_URL } from '@/lib/constants';

export const metadata = {
  title: "All Doctors | Bellevie",
  description: "Discover the experienced doctors at Bellevie, dedicated to providing exceptional healthcare services and personalized care for our patients.",
};

async function getDoctors(subcategory?: string, category?: string) {
  let url = `${API_BASE_URL}/popular-service/doctors/?page=1`;
  if (subcategory) url += `&subcategory=${subcategory}`;
  if (category) url += `&subcategory__category=${category}`;

  try {
    const response = await fetch(url, {
      headers: { 'accept': 'application/json' },
      next: { revalidate: 3600 }
    });

    if (!response.ok) return [];
    const data = await response.json();
    return data.results || [];
  } catch (error) {
    console.error('Error fetching doctors:', error);
    return [];
  }
}

export default async function DoctorPage({
  searchParams,
}: {
  searchParams: Promise<{ subcategory?: string, category?: string }>
}) {
  const { subcategory, category } = await searchParams;
  const doctors = await getDoctors(subcategory, category);

  return (
    <main className="min-h-screen bg-white dark:bg-zinc-950 pt-12">
      <DoctorList 
        doctors={doctors} 
        title={subcategory ? "Filtered Specialists" : "Our Expert Doctors"}
        subtitle={subcategory ? "Available specialists for your selected category" : "Explore our full list of verified medical professionals"}
      />
    </main>
  )
}

"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import { PostgrestError } from "@supabase/supabase-js";

export default function HomePage() {
  const [filijaleData, setFilijaleData] = useState<any[] | null>(null);
  const [error, setError] = useState<PostgrestError | null>(null);

  useEffect(() => {
    const fetchFilijale = async () => {
      try {
        const { data, error } = await supabase.from("Filijale").select("*");

        if (error) {
          console.error("Error fetching Filijale:", error);
          setError(error);
        } else {
          setFilijaleData(data);
        }
      } catch (error: any) {
        console.error("Unexpected error fetching Filijale:", error);
        setError(error);
      }
    };

    fetchFilijale();
  }, []);

  return (
    <div className="p-4">
      Home
      {error && <p>Error: {error.message}</p>}
      {filijaleData && (
        <ul>
          {filijaleData.map((item) => (
            <li key={item.id} className="flex flex-col gap-4">
              <p>
                Ime Filijale:{" "}
                <span className="p-2 bg-red-300">{item.name}</span>
              </p>
              <p>
                ID: <span className="p-2 bg-red-300">{item.id}</span>
              </p>
              <p>
                MESEC: <span className="p-2 bg-red-300">{item.month_id}</span>
              </p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

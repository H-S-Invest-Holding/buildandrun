"use client";

import { useEffect, useState } from "react";
import BlurFade from "@/app/magicui/ui/blur-fade";

interface Client {
  client: string;
  city: string;
  status: string;
}

const Libraries = () => {
  const [clients, setClients] = useState<Client[]>([]);

  useEffect(() => {
    const loadCSV = async () => {
      const res = await fetch("/assets/libraries.csv");
      const text = await res.text();

      const rows = text.trim().split("\n");
      const data: Client[] = rows.slice(1).map((row) => {
        const values = row.split(",").map((v) => v.trim());
        return {
          client: values[0],
          city: values[1],
          status: values[2],
        };
      });

      setClients(data);
    };

    loadCSV();
  }, []);

  return (
    <div id="clients" className="p-5 md:p-10 lg:p-20">
      <div className="">
        <span className="opacity-0">.</span>
        <BlurFade inView={true}>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
            <div className="md:col-span-12">
              <h5 className="text-3xl uppercase font-medium text-brickred-600 mb-8">
                Liste des librairies
              </h5>
              <div className="overflow-auto rounded-lg shadow">
                <table className="min-w-full border border-gray-300 bg-white">
                  <thead className="bg-brickred-400">
                    <tr>
                      <th className="text-left px-4 py-2 border font-medium text-sm text-white">Client</th>
                      <th className="text-left px-4 py-2 border font-medium text-sm text-white">Ville</th>
                      {/* <th className="text-left px-4 py-2 border font-medium text-sm text-white">Statut</th> */}
                    </tr>
                  </thead>
                  <tbody>
                    {clients.map((client, idx) => (
                      <tr key={idx} className="even:bg-brickred-50">
                        <td className="px-4 py-2 border text-sm text-black text-opacity-90">
                          {client.client}
                        </td>
                        <td className="px-4 py-2 border text-sm text-black text-opacity-90">
                          {client.city}
                        </td>
                        {/* <td className="px-4 py-2 border text-sm text-black text-opacity-90">
                          {client.status}
                        </td> */}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </BlurFade>
      </div>
    </div>
  );
};

export default Libraries;

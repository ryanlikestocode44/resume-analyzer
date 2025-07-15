// src/components/PersonalInfoSection.tsx
import React from "react";
import { capitalizeWords } from "@/lib/utils"; // atau wherever kamu taruh file-nya

interface PersonalInfoProps {
  name?: string;
  email?: string;
  phone?: string;
  linkedin?: string;
  github?: string;
  pages?: number;
}

const PersonalInfoSection: React.FC<PersonalInfoProps> = ({
  name,
  email,
  phone,
  linkedin,
  github,
  pages,
}) => {
  return (
    <div id="personal-info" className="mb-8">
      <h2 className="text-2xl font-bold mb-4">Data Personal Kandidat</h2>
      <ul className="space-y-2 text-sm">
        {name && (
          <li>
            <strong>Nama:</strong> {capitalizeWords(name)}
          </li>
        )}

        {email && (
          <li>
            <strong>Email:</strong> {email}
          </li>
        )}
        {phone && (
          <li>
            <strong>Nomor Telepon:</strong> {phone}
          </li>
        )}
        {linkedin && (
          <li>
            <strong>LinkedIn:</strong>{" "}
            <a
              href={linkedin}
              className="text-blue-600 underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              {linkedin}
            </a>
          </li>
        )}
        {github && (
          <li>
            <strong>GitHub:</strong>{" "}
            <a
              href={github}
              className="text-blue-600 underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              {github}
            </a>
          </li>
        )}
        {pages !== undefined && (
          <li>
            <strong>Jumlah Halaman Resume:</strong> {pages}
          </li>
        )}
      </ul>
    </div>
  );
};

export default PersonalInfoSection;

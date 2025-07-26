// src/components/PersonalInfoSection.tsx
import React from "react";
import { capitalizeWords } from "@/lib/utils"; // atau wherever kamu taruh file-nya
import { useLanguage } from "@/hooks/useLanguage";

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
  const { t } = useLanguage();

  return (
    <div id="personal-info" className="mb-8">
      <h2 className="text-2xl font-bold mb-4">{t.personal_info}</h2>
      <ul className="space-y-2 text-sm">
        {name && (
          <li>
            <strong>{t.personal_info_name}:</strong> {capitalizeWords(name)}
          </li>
        )}

        {email && (
          <li>
            <strong>{t.personal_info_email}:</strong> {email}
          </li>
        )}
        {phone && (
          <li>
            <strong>{t.personal_info_phone}:</strong> {phone}
          </li>
        )}
        {linkedin && (
          <li>
            <strong>LinkedIn:</strong>{" "}
            <a
              href={`https://${linkedin}`}
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
              href={`https://${github}`}
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
            <strong>{t.personal_info_pages}:</strong> {pages}
          </li>
        )}
      </ul>
    </div>
  );
};

export default PersonalInfoSection;

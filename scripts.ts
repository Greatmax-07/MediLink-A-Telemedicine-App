// scripts\scaffold.ts
import { mkdirSync, writeFileSync } from "fs";
import { join, dirname } from "path";

const base = "app";
const files = [
  "_layout.tsx",
  "index.tsx",
  "auth/login_patient.tsx",
  "auth/login_gp.tsx",
  "auth/login_doctor.tsx",
  "auth/login_pharmacist.tsx",
  "auth/signup_patient.tsx",
  "auth/signup_gp.tsx",
  "auth/signup_doctor.tsx",
  "auth/signup_pharmacist.tsx",
  "auth/kyc_u.tsx",
  "auth/kyc_gp.tsx",
  "auth/kyc_d.tsx",
  "auth/kyc_p.tsx",
  "(tabs)/_layout.tsx",
  "(tabs)/home.tsx",
  "(tabs)/search.tsx",
  "(tabs)/video.tsx",
  "(tabs)/upload.tsx",
  "(tabs)/docs.tsx",
  "patient/home_u.tsx",
  "patient/fill.tsx",
  "patient/slot.tsx",
  "patient/appointment/[id].tsx",
  "patient/prescriptions.tsx",
  "gp/home_gp.tsx",
  "gp/patient_detail/[id].tsx",
  "gp/refer_to_doc/[id].tsx",
  "doctor/home_doc.tsx",
  "doctor/patient_detail/[id].tsx",
  "pharmacist/home_pharm.tsx",
  "pharmacist/stock.tsx",
  "pharmacist/united_interface.tsx",
  "common/components/Calendar.tsx",
  "common/hooks/useAuth.tsx",
  "common/services/firebase.ts"
];

files.forEach(f => {
  const full = join(base, f);
  mkdirSync(dirname(full), { recursive: true });
  writeFileSync(full, `// ${f}\nexport default function Page(){return null;}\n`);
});

console.log("✅ Expo-router skeleton created.");

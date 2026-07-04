import admission from "@/knowledge/admission.json";
import attendance from "@/knowledge/attendance.json";
import campus from "@/knowledge/campus.json";
import departments from "@/knowledge/departments.json";
import faq from "@/knowledge/faq.json";
import fees from "@/knowledge/fees.json";
import hostel from "@/knowledge/hostel.json";
import library from "@/knowledge/library.json";
import scholarships from "@/knowledge/scholarships.json";
import transport from "@/knowledge/transport.json";

const knowledgeBase = {
  admission,
  fees,
  scholarships,
  attendance,
  departments,
  library,
  hostel,
  transport,
  campus,
  faq,
};

export function getKnowledgeContext() {
  return JSON.stringify(knowledgeBase, null, 2);
}

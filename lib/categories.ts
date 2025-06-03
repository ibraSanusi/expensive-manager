// categories.ts
import { PiForkKnifeFill } from "react-icons/pi";
import { IoMdBriefcase } from "react-icons/io";
import { FaHouse } from "react-icons/fa6";
import { MdSubscriptions, MdRestaurant, MdTrain } from "react-icons/md";
import { GiWeightLiftingUp, GiClothes } from "react-icons/gi";
import { FaNotesMedical, FaMoneyBillWave } from "react-icons/fa6";
import type { CategoryData } from "./models";

export const DEFAULT_ICON = PiForkKnifeFill;
export const DEFAULT_FILL = "var(--color-default)";

export const categoryMap = new Map<string, CategoryData>([
  ["Alimentación", { icon: PiForkKnifeFill, fill: "var(--color-food)" }],
  ["Compras Online", { icon: IoMdBriefcase, fill: "var(--color-shopping)" }],
  ["Hogar", { icon: FaHouse, fill: "var(--color-housing)" }],
  [
    "Transporte Público",
    { icon: MdTrain, fill: "var(--color-transportation)" },
  ],
  [
    "Suscripciones",
    { icon: MdSubscriptions, fill: "var(--color-subscription)" },
  ],
  [
    "Salud y Deporte",
    { icon: GiWeightLiftingUp, fill: "var(--color-fitness)" },
  ],
  ["Salud", { icon: FaNotesMedical, fill: "var(--color-health)" }],
  ["Ropa", { icon: GiClothes, fill: "var(--color-clothing)" }],
  ["Finanzas", { icon: FaMoneyBillWave, fill: "var(--color-finance)" }],
  ["Restauración", { icon: MdRestaurant, fill: "var(--color-dining)" }],
]);

export const keywordMap = [
  {
    keywords: [
      "amazon",
      "mercado libre",
      "shein",
      "aliexpress",
      "ebay",
      "temu",
      "ropa",
    ],
    category: "Compras Online",
  },
  {
    keywords: ["uber", "cabify", "taxi", "bolt", "blablacar", "moovit"],
    category: "Transporte Público",
  },
  {
    keywords: [
      "carrefour",
      "supermercado",
      "lidl",
      "dia",
      "ahorro",
      "hiper",
      "mercadona",
      "aldi",
    ],
    category: "Alimentación",
  },
  {
    keywords: [
      "iberdrola",
      "naturgy",
      "agua",
      "luz",
      "gas",
      "electricidad",
      "endesa",
    ],
    category: "Hogar",
  },
  {
    keywords: [
      "spotify",
      "netflix",
      "hbo",
      "disney",
      "prime video",
      "youtube premium",
    ],
    category: "Suscripciones",
  },
  {
    keywords: ["gym", "gimnasio", "fitness", "fit", "entrenamiento"],
    category: "Salud y Deporte",
  },
  {
    keywords: ["farmacia", "medicamento", "parafarmacia", "salud"],
    category: "Salud",
  },
  {
    keywords: ["zara", "bershka", "pull&bear", "h&m", "ropa", "moda"],
    category: "Ropa",
  },
  {
    keywords: ["paypal", "bizum", "transferencia", "reembolso", "revolut"],
    category: "Finanzas",
  },
  {
    keywords: [
      "bar",
      "restaurante",
      "café",
      "mcdonald",
      "kfc",
      "burger king",
      "tapas",
      "comida",
      "sabor",
    ],
    category: "Restauración",
  },
  {
    keywords: [
      "gasolinera",
      "renfe",
      "metro",
      "autobús",
      "tranvía",
      "abono transporte",
    ],
    category: "Transporte Público",
  },
];

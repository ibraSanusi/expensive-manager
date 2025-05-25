import { Transaction } from "../store/useTransactionStore";
import { PiForkKnifeFill } from "react-icons/pi";
import { IoMdBriefcase } from "react-icons/io";
import { FaHouse } from "react-icons/fa6";
import { MdSubscriptions, MdRestaurant, MdTrain } from "react-icons/md";
import { GiWeightLiftingUp, GiClothes } from "react-icons/gi";
import { FaNotesMedical, FaMoneyBillWave } from "react-icons/fa6";

/**
 * @description This function takes an array of transactions and returns the total expenses grouped by month.
 * It returns an array of objects with the month name and the total expenses for that month.
 * @param transactions Array of transactions to calculate expenses from.
 * @returns Array of objects with month and total expenses.
 */
export function getExpensesByMonth(transactions: Transaction[]) {
  const expensesByMonth: Record<string, number> = {};

  transactions.forEach((transaction) => {
    const month = new Date(transaction.fecha_operacion).toLocaleString(
      "default",
      {
        month: "long",
      },
    );

    if (!expensesByMonth[month]) {
      expensesByMonth[month] = 0;
    }

    // Solo sumar si el importe es negativo (gasto)
    if (transaction.importe < 0) {
      expensesByMonth[month] += Math.abs(transaction.importe);
    }
  });

  return Object.entries(expensesByMonth).map(([month, gastos]) => ({
    month,
    gastos,
  }));
}

type MonthlyExpensesType = {
  month: string;
  gastos: number;
};

export function getAverageExpenses(monthlyExpenses: MonthlyExpensesType[]) {
  const totalExpenses = monthlyExpenses.reduce(
    (acc, curr) => acc + curr.gastos,
    0,
  );
  return (totalExpenses / monthlyExpenses.length).toFixed(2);
}

/**
 *
 * @param transactions Array of transactions to categorize.
 * @description This function takes an array of transactions and categorizes each transaction based on its concept.
 * It adds a new property `categoria` to each transaction object.
 * @returns Transaction objects with an additional `categoria` property.
 */
export function getTransactionsWithCategories(transactions: Transaction[]) {
  return transactions.map((transaction) => {
    const categoria = guessCategory(transaction);
    return { ...transaction, categoria };
  });
}

/**
 *
 * @param transactions Array of transactions to calculate monthly expenses.
 * @description This function calculates the total expenses for the current month from a list of transactions.
 * @returns number - The total expenses for the current month.
 */
export function getMonthlyExpenses(transactions: Transaction[]) {
  return transactions.reduce((acc, transaction) => {
    // Comprobar si la transaccion es del mes actual
    const transactionDate = new Date(transaction.fecha_valor);
    const currentDate = new Date();

    if (
      transactionDate.getMonth() !== currentDate.getMonth() &&
      transactionDate.getFullYear() !== currentDate.getFullYear()
    )
      return acc;

    // Comprobar si la transaccion es un gasto
    if (transaction.importe < 0) return acc + Math.abs(transaction.importe);

    return acc;
  }, 0);
}

const DEFAULT_ICON = PiForkKnifeFill;
const DEFAULT_FILL = "var(--color-default)";

const categoryMap = new Map([
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

const keywordMap = [
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
    category: "Transporte",
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

function guessCategory(transaction: Transaction): string | undefined {
  const description = (transaction.concepto ?? "").toLowerCase();

  for (const { keywords, category } of keywordMap) {
    for (const keyword of keywords) {
      // Escapamos y buscamos como palabra completa
      const escapedKeyword = keyword.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      const regex = new RegExp(`\\b${escapedKeyword}\\b`, "i");
      if (regex.test(description)) {
        return category;
      }
    }
  }

  return transaction.categoria;
}

/**
 * @param transactions Array of transactions to format.
 * @description This function formats recent transactions by adding category-specific icons and colors.
 * @return Array of formatted transactions with category icons and colors.
 */
export function formatRecentTransactions(transactions: Transaction[]) {
  return transactions.map((transaction) => {
    const guessedCategory = guessCategory(transaction);
    const categoryData = categoryMap.get(guessedCategory ?? "");

    return {
      ...transaction,
      categoria: guessedCategory,
      fill: categoryData?.fill ?? DEFAULT_FILL,
      icon: categoryData?.icon ?? DEFAULT_ICON,
    };
  });
}

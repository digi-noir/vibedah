import Link from "next/link";
// import { allProducts } from "@/data/products";
import ProductCard from "@/components/ProductCard";
import { CATEGORY_LABELS, ProductCategory } from "@/types";
import { supabase } from "@/lib/supabase";

const CATEGORY_ICONS: Record<ProductCategory, string> = {
  CPUs: "🔲",
  GPUs: "🎮",
  Coolers: "❄️",
  Rigs: "🖥️",
  cases: "📦",
  Memory: "🧩",
  Monitors: "🖥️",
  Mice: "🖱️",
  Keyboards: "⌨️",
};

const CATEGORIES: ProductCategory[] = [
  "CPUs",
  "GPUs",
  "Memory",
  "Monitors",
  "Rigs",
  "cases",
  "Coolers",
  "Mice",
  "Keyboards",
];

const query = await supabase.from("products").select();

const { data: products } = query;

const itemList = products ?? [];

const featured = itemList.filter((p) =>
  [11, 7, 28, 32, 37, 42, 23, 18].includes(p.id),
);

export default function HomePage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-gray-100 via-white to-blue-50 dark:from-slate-950 dark:via-slate-900 dark:to-blue-950 py-24 px-4 text-center overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.08)_0%,transparent_70%)] dark:bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.15)_0%,transparent_70%)]" />
        <div className="relative max-w-3xl mx-auto">
          <p className="text-brand-600 dark:text-brand-400 text-sm font-semibold uppercase tracking-widest mb-4">
            Premium Components & Pre-built Rigs
          </p>
          <h1 className="text-5xl sm:text-6xl font-black text-gray-900 dark:text-white mb-6 leading-tight">
            Build Your Dream
            <span className="text-brand-500"> PC</span>
          </h1>
          <p className="text-gray-500 dark:text-slate-400 text-lg mb-8 max-w-xl mx-auto">
            Shop top-tier CPUs, GPUs, Memory, Monitors, Peripherals, and
            pre-built gaming rigs — all in one place.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link
              href="/products"
              className="bg-brand-600 hover:bg-brand-700 text-white font-semibold px-8 py-3 rounded-xl transition-colors"
            >
              Shop All Products
            </Link>
            <Link
              href="/products?category=Rigs"
              className="border border-gray-300 dark:border-slate-600 hover:border-brand-500 dark:hover:border-brand-500 text-gray-700 dark:text-slate-300 hover:text-brand-600 dark:hover:text-white font-semibold px-8 py-3 rounded-xl transition-colors"
            >
              Pre-built Rigs
            </Link>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
          Shop by Category
        </h2>
        <div className="grid grid-cols-3 sm:grid-cols-5 lg:grid-cols-9 gap-3">
          {CATEGORIES.map((cat) => (
            <Link
              key={cat}
              href={`/products?category=${cat}`}
              className="flex flex-col items-center gap-2 p-4 bg-white dark:bg-slate-900 hover:bg-gray-50 dark:hover:bg-slate-800 border border-gray-200 dark:border-slate-800 hover:border-brand-500 dark:hover:border-brand-500 rounded-xl transition-all group"
            >
              <span className="text-2xl">{CATEGORY_ICONS[cat]}</span>
              <span className="text-xs text-gray-500 dark:text-slate-400 group-hover:text-brand-600 dark:group-hover:text-white text-center transition-colors leading-tight">
                {CATEGORY_LABELS[cat]}
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* Featured Products */}
      <section className="max-w-7xl mx-auto px-4 pb-16">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            Featured Products
          </h2>
          <Link
            href="/products"
            className="text-brand-600 dark:text-brand-400 hover:text-brand-700 dark:hover:text-brand-300 text-sm transition-colors"
          >
            View all →
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featured.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Value props */}
      <section className="border-t border-gray-200 dark:border-slate-800 py-12 px-4">
        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
          {[
            { icon: "🚚", title: "Free Shipping", desc: "On orders over $75" },
            { icon: "🔒", title: "Secure Checkout", desc: "Powered by Stripe" },
            {
              icon: "↩️",
              title: "30-Day Returns",
              desc: "Hassle-free returns",
            },
          ].map(({ icon, title, desc }) => (
            <div key={title}>
              <div className="text-3xl mb-2">{icon}</div>
              <h3 className="text-gray-900 dark:text-white font-semibold mb-1">
                {title}
              </h3>
              <p className="text-gray-500 dark:text-slate-400 text-sm">
                {desc}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

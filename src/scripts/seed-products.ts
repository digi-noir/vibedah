import { createClient } from '@supabase/supabase-js'
import { allProducts } from '../data/products'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
)

const rows = allProducts.map(({ id, category, brand, model, description, price, stock, image, tags, ...specs }) => ({
  id, category, brand, model, description, price, stock, image, tags,
  specs,
}))

async function seed() {
  const { error } = await supabase.from('products').upsert(rows)
  if (error) console.error(error)
  else console.log(`Seeded ${rows.length} products`)
}

seed()
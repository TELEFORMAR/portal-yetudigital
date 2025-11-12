import { openDB } from "idb";
import { CartItem } from "@/context/CartContext";

const DB_NAME = "yetuDB";
const STORE_NAME = "cart";

async function getDB() {
  return openDB(DB_NAME, 1, {
    upgrade(db) {
      if (!db.objectStoreNames.contains(STORE_NAME)) {
        db.createObjectStore(STORE_NAME);
      }
    },
  });
}

export async function saveCart(cart: CartItem[]) {
  const db = await getDB();
  await db.put(STORE_NAME, cart, "data");
}

export async function loadCart(): Promise<CartItem[]> {
  const db = await getDB();
  return (await db.get(STORE_NAME, "data")) || [];
}

export async function clearCartDB() {
  const db = await getDB();
  await db.delete(STORE_NAME, "data");
}

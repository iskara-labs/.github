import { readFile } from "node:fs/promises";
import path from "node:path";

export const runtime = "nodejs";
export const alt = "Iskara Labs — Product Studio";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpenGraphImage() {
  const image = await readFile(path.join(process.cwd(), "public/brand/open-graph.png"));
  return new Response(new Uint8Array(image), { headers: { "Content-Type": contentType } });
}

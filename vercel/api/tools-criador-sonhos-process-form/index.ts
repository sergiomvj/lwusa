export default async (req: Request) => {
  console.log("EDGE LOG TESTE", new Date().toISOString());
  return new Response(JSON.stringify({ ok: true }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' }
  });
};
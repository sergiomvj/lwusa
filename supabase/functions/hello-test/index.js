export default async (req) => {
  console.log("HELLO EDGE FUNCTION", new Date().toISOString());
  return new Response(JSON.stringify({ msg: "Hello from Supabase Edge!", time: new Date().toISOString() }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' }
  });
};

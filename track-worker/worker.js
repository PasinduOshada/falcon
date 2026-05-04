export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    if (url.pathname === "/api") {
      const id = url.searchParams.get("tracking");
      const result = await env.DB.prepare("SELECT * FROM shipments WHERE tracking_id = ?").bind(id).first();
      return Response.json(result || { error: "Not found" });
    }
    return new Response("Track API Running");
  }
};
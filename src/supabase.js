import { createClient } from "@supabase/supabase-js";

// Create a single supabase client for interacting with your database
const supabase = createClient(
  "https://jichzvfrcarnwirvvpcs.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImppY2h6dmZyY2FybndpcnZ2cGNzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mjg3MTk4NDUsImV4cCI6MjA0NDI5NTg0NX0.wiSWr5AER3LVj2rnYIwCRT48C670eIYRdomPgEojcWk"
);

export default supabase;
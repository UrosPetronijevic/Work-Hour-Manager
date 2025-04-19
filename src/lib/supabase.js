import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://fkphxmygnjsyoipbcjdz.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZrcGh4bXlnbmpzeW9pcGJjamR6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDM1NzkxMzQsImV4cCI6MjA1OTE1NTEzNH0.C8wljcweZ6wbTKSIhDdrtjKvsXfhWu0WRFGH5LxgCJQ";

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;

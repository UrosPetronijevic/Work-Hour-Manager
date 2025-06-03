import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://kvmbjxmwbmtybjqcheva.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imt2bWJqeG13Ym10eWJqcWNoZXZhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDgzNDI5NTcsImV4cCI6MjA2MzkxODk1N30.qwJYhnYGSUDFHC2f0ndy1yiEVMXLkkspfogsfufsgwA";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;

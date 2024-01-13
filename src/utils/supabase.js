import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://pvubhaxuzesicexmqslx.supabase.co";
const serviceRoleKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InB2dWJoYXh1emVzaWNleG1xc2x4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDUwMDAxMzgsImV4cCI6MjAyMDU3NjEzOH0.ZlUB2Tt9xMH7zCNSwKfPj3SConBIH8heSpygBVb2HYs";

const supabase = createClient(supabaseUrl, serviceRoleKey);

export default supabase;

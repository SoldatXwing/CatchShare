import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://zmhajtiiyhiiyhwwldku.supabase.co' // Replace with your Supabase URL
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InptaGFqdGlpeWhpaXlod3dsZGt1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDAyMTg3MjIsImV4cCI6MjA1NTc5NDcyMn0.6-6fHioZFA8jwhVkZh2L6ZoStpSd2DLF1i-r7Sv6N5o' // Replace with your Supabase anon key

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

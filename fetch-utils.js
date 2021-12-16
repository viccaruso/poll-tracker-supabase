const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYzOTUwOTAyMSwiZXhwIjoxOTU1MDg1MDIxfQ.v4B-VNkc9Xc9bIM4ig0BrZcgdU2bqx3VGiJiMMYNcis'

const SUPABASE_URL = "https://iddyxpegdpnmmnebvghi.supabase.co"

const client = supabase.createClient(SUPABASE_URL, process.env.SUPABASE_KEY);
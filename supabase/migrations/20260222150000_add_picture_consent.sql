-- Add picture_consent column to orders table
ALTER TABLE public.orders ADD COLUMN picture_consent TEXT DEFAULT 'yes' CHECK (picture_consent IN ('yes', 'no'));

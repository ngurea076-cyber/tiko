-- Delete all ticket/orders records
DELETE FROM public.orders;

-- Verify deletion
SELECT COUNT(*) as remaining_records FROM public.orders;

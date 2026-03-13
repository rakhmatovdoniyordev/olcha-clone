import { useMutation, useQueryClient } from '@tanstack/react-query';
import { createBanner } from '../../api/bannerApi';

export const useCreateBanner = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: createBanner,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["banners"]})
        }
    })
}
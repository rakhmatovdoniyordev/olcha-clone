import { useMutation, useQueryClient } from '@tanstack/react-query';
import { deleteBanner } from '../../api/bannerApi';


export const useDeleteBanner = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: deleteBanner,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["banners"]})
        }
    })
}
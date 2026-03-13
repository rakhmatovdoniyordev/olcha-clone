import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateCategory } from "../../api/categoryApi";

export const useUpdateCategory = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: updateCategory,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["categories"] });
    },
  });
};

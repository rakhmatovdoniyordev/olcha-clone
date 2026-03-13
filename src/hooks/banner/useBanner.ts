import { useQuery } from "@tanstack/react-query";
import { getBanners } from "../../api/bannerApi";

export const useBanner = () => {
  return useQuery({
    queryKey: ["banners"],
    queryFn: getBanners,
  });
};
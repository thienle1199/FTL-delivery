import { create } from 'zustand'

type PackageDetailState = {
    height: number;
    width: number;
    weight: number;
    quantity: number;
    imageUrl: string;
}

export const usePackageDetailStore = create<PackageDetailState>(() => ({
    height: 0,
    imageUrl: "",
    quantity: 0,
    weight: 0,
    width: 0
}))
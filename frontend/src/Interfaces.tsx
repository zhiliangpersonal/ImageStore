export interface AlbumT {
    id: string;
    name: string;
    imagecount: number;
    cover: string | null;
}

export interface PhotoT {
    id: string;
    name: string;
    height: number;
    width: number;
    date: number;
    type: "photo" | "video";
}

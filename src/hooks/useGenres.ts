import UseData from "./useData";

export interface Genre {
    id: number;
    name: string;
}

const useGenres = () => {
    return UseData<Genre>('/genres');
};

export default useGenres;
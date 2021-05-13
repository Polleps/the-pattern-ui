export interface INode {
    id: string,
    name: string,
    rank: string
}

export interface ILink {
    source: string,
    target: string
}

export interface IEdge{
    Study: string,
    Excerpt: string
}

export interface ISearchResult{
    nodes: INode[],
    links: ILink[],
    years: any[]
}

export interface AppState {
    isLoading: boolean;
    isLoadingState: string;
    error: any;
    searchTerm: string,
    searchResults: { search_result: ISearchResult };
    searchYears: any;
    edgeResults: IEdge[];
    nodeResults: any;
    answerResults: IEdge[];
    toolBarStyle: string;
    mobile: boolean;
    sidebar: boolean;
    selected: any;
    selectedNode: any;
    audioEnabled: boolean;
}

export const initialState: AppState = {
    isLoading: false,
    isLoadingState: '',
    error: null,
    searchTerm:'',
    searchResults: null,
    searchYears: null,
    edgeResults: [],
    nodeResults: null,
    answerResults: [],
    toolBarStyle: 'dark',
    mobile: false,
    sidebar: null,
    selected: null,
    selectedNode: null,
    audioEnabled: false
};

export interface State {
    app: AppState;
}

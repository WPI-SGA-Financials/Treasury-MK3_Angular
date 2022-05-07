export interface INavigationItem {
    path: string;
    title: string;
    icon?: string;
    children?: INavigationItem[];
}

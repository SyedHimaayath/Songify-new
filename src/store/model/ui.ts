export interface UI {
    userName: String | null;
    page: String;
    tab: Tab;
    isLoggedIn: boolean;
    isBottomPlayerVisible: boolean;
}

export type Tab = 'Explore'| 'menu1' | 'menu2' | 'menu3' | 'menu4' | 'menu5';
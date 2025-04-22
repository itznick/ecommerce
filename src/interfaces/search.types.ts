export interface SearchListProps {
  searchQuery?: string;
  classname?: string;
  setSearchQuery?: (query: string) => void;
  setIsVisible?: (isVisible: boolean) => void;
}

export interface SearchBarProps {
  isVisible: boolean;
  setIsVisible: (isVisible: boolean) => void;
}

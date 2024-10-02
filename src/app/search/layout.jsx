import SearchHeader from '@/components/web/search/SerachHeader';
import './../globals.css';

export default function layout({ children }) {
  return (
    <div>
      <SearchHeader />
      {children}
    </div>
  );
}
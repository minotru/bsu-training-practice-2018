import Content from './Content';
import Footer from './Footer';
import Header from './Header';

export default function App({ user }) {
  return [Header({ user }), Content({ user }), Footer()];
}

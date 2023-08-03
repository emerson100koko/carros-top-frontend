import './styles.css';
import Header from "../../components/Header";
import SearchBar from '../../components/SearchBar';

export default function Catalog() {


    return (
        <>
        
        <Header />
        <main className="ct-cartalog-main">
            <section id="ct-catalog-section">
                <div className="ct-search-bar-container" > 
                    <SearchBar/>
                </div>

                <div className="ct-catalog-cards-container">
                    <div>teste</div>

                </div>
            </section>
        </main>
        </>
    );
}
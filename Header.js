import SearchBar from './SearchBar.js';
function Header()
{
    return(
        <div className={"header_body"}>
            <img src={"https://tse1.mm.bing.net/th?id=OIP.KTDfEdLrGrelL8iwrLr99QHaEo&pid=Api&P=0&h=180"} className={"logo_img"}/>
            <SearchBar/>
            <button className={"login"}>Login</button>
            <button className={"return"}>Return</button>
            <img src={"https://tse1.mm.bing.net/th?id=OIP.sno0CcEyldJOprPGhwrVZwHaHa&pid=Api&P=0&h=180"} className={"add_card_img"}/>
        </div>
    )
}
export default Header;
function SearchBar(){
 return(
    <div className={"search_bar"}>
            <select className={"search_bar_select_option"} >
                <option>All</option>
            </select>
             <input type={"text"} className={"search_bar_text"}/>
             <button type={"button"} className={"search_bar_button"}><img className={"search_bar_img "}  src={"https://tse2.mm.bing.net/th?id=OIP.FafQYSsWKt7hpCn6Tm0ivAHaHl&pid=Api&P=0&h=9000000"}/></button>
    </div>
 )
}
export default SearchBar;
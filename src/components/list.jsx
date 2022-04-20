
const List = ( props ) => {

    const modifySearchFromRecentList = (country) =>{

        props.modifySearchFromRecentList(country);
    }

    const RecentPlacesSearch = props.list.map(
        s => <PlaceRow key={s.id} {...s} onModify={modifySearchFromRecentList}/>
    ); 

    return (
            <table>
                {props.list.length >0 && (<LastSearchHead />)}
                <tbody>
                    {RecentPlacesSearch}
                </tbody>
            </table>
    )
};

const LastSearchHead = () => (
    <thead>
        <tr>
            <th>Liste des recherche récentes</th>
        </tr>
    </thead>
);

const PlaceRow = ({ name, onModify }) => (
    <tr>
        <td><a href="#" rel="noopener noreferrer" onClick={()=>onModify(name)}> {name}</a></td>
    </tr>
);
List.defaultProps = {
    list : []
}

export default List;

const List = ({ props }) => {

    const modifySearchFromRecentList = (e) =>{
        e.preventDefault();

        props.modifySearchFromRecentList(country);
    }

    const RecentPlacesSearch = props.list.map(
        s => <PlaceRow key={s.id} {...s} />
    ); 

    return (
            <table>
                <LastSearchHead />
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

const PlaceRow = ({ name }) => (
    <tr>
        <td><a href="#" rel="noopener noreferrer" onClick={modifySearchFromRecentList(name)}> {name}</a></td>
    </tr>
);

export default List;
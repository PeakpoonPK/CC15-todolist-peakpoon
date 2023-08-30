import ListItem from './ListItem';
import './List.scss';

function List(props) {
    return (
        <ul>
            {props.data.map((obj) => (<ListItem key={obj.id} text={obj.text} icon={obj.icon} active={obj.active} />))}
        </ul>
    )
}

export default List
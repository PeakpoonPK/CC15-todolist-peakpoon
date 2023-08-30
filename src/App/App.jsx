import './App.scss';
import { FaHome } from 'react-icons/fa';
import Header from '../Components/Header.jsx';
import { FaInbox, FaCalendar, FaCalendarAlt, FaChevronDown } from 'react-icons/fa';
import ListItem from '../Components/ListItem.jsx';
import List from '../Components/List.jsx';

function App() {

  const generalLists = [
    { id: 1, text: 'Inbox', active: true, icon: <FaInbox /> },
    { id: 2, text: 'Today', active: false, icon: <FaCalendar /> },
    { id: 3, text: 'Next 7 Days', active: false, icon: <FaCalendarAlt /> },
  ];

  const projectLists = [
    { id: 4, text: 'Project-A', icon: < FaInbox />, active: true },
    { id: 5, text: 'Project-B', icon: < FaInbox />, active: false },
  ]
  return (
    <div className='todo'>
      <div className="todo__header">
        <Header /></div>
      <div className="todo__sidebar">
        <aside className='sidebar'>
          <section className='sidebar__category'>
            <List data={generalLists} />
            {/* <ul className='list'>
              {generalLists.map((obj) => (
                <ListItem
                  key={obj.id}
                  text={obj.text}
                  icon={obj.icon}
                  active={obj.active}
                />
              ))}
            </ul> */}
          </section>
          <section className='sidebar__category'>
            <div className='accordion'>
              <div className='accordion__toggle'>
                <li className='accordion__item'>
                  <FaChevronDown className='accordion__item__icon accordion__item__active' />
                  <p className='list__item__text'>Project</p>
                </li>
              </div>
              <List data={projectLists} />
              {/* <ul className='list'>
                {projectLists.map((obj) => (
                  <ListItem
                    key={obj.id}
                    text={obj.text}
                    icon={obj.icon}
                    active={obj.active}
                  />
                ))}
              </ul> */}
            </div>
          </section>
        </aside>
      </div>
      <div className="todo__content">TodoContent</div>
    </div>
  );
}
export default App;

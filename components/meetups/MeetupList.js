import MeetupItem from './MeetupItem';
import classes from './MeetupList.module.css';

function MeetupList(props) {
  return (
    <ul className={classes.list}>
      {props.meetups.map((meetup) => (
        <MeetupItem
          address={meetup.address}
          id={meetup.id}
          image={meetup.image}
          key={meetup.id}
          title={meetup.title}
        />
      ))}
    </ul>
  );
}

export default MeetupList;

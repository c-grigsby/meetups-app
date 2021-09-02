import classes from './MainNavigation.module.css';
import Link from 'next/link';

function MainNavigation() {
    return (
        <header className={classes.header}>
            <div className={classes.logo}>MeetUps</div>
            <nav>
                <ul>
                    <li>
                        <Link href='/'>All MeetUps</Link>
                    </li>
                    <li>
                        <Link href='/new-meetup'>Add New MeetUp</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default MainNavigation;

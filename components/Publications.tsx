import styles from "../styles/Publications.module.css";
import Link from "next/link";
const posts = [
    {
        id: 1,
        name: "Rohan Patidar",
        title: "Full stack Developer",
        image: "https://picsum.photos/130/130?image=1027",
        description: "Hello everyone dwbefuw wcrwuer cweuircw er fecwue r cefwuer wefcwbe werwcer cweuiri ecwr"
    },
    {
        id: 2,
        name: "Kevin",
        title: "Full stack Developer",
        image: "https://picsum.photos/130/130?image=1027",
        description: "Hello everyone dwbefuw wcrwuer cweuircw er fecwue r cefwuer wefcwbe werwcer cweuiri ecwr"
    },
    {
        id: 3,
        name: "Gracy Patel",
        title: "Full stack Developer",
        image: "https://picsum.photos/130/130?image=1027",
        description: "Hello everyone dwbefuw wcrwuer cweuircw er fecwue r cefwuer wefcwbe werwcer cweuiri ecwr"
    },
    {
        id: 4,
        name: "Rohan Patidar",
        title: "Full stack Developer",
        image: "https://picsum.photos/130/130?image=1027",
        description: "Hello everyone dwbefuw wcrwuer cweuircw er fecwue r cefwuer wefcwbe werwcer cweuiri ecwr"
    },
    {
        id: 5,
        name: "Rohan Patidar",
        title: "Full stack Developer",
        image: "https://picsum.photos/130/130?image=1027",
        description: "Hello everyone dwbefuw wcrwuer cweuircw er fecwue r cefwuer wefcwbe werwcer cweuiri ecwr"
    },
    {
        id: 6,
        name: "Rohan Patidar",
        title: "Full stack Developer",
        image: "https://picsum.photos/130/130?image=1027",
        description: "Hello everyone dwbefuw wcrwuer cweuircw er fecwue r cefwuer wefcwbe werwcer cweuiri ecwr"
    }
]
export default function Publications() {
    posts.map(post => {
        if(post.description.length>=80){
            post.description=post.description.substring(0,80)+"...";
        }
    });
    return (
        <div className={styles.container}>
            {posts.map(post =>
                (
                <Link href="#">
                <div className={styles.row} key={post.id}>
                    <div className="{styles.col-12 col-sm-6 col-md-4 col-lg-3">
                        <div className={styles.ourteam}>
                            <div className={styles.picture}>
                                <img className={styles.imgfluid} src={post.image} />
                            </div>
                            <div className={styles.teamcontent}>
                                <h3 className={styles.name}>{post.name}</h3>
                                <h4 className={styles.title}>{post.title}</h4>
                                <p className={styles.description}>{post.description}<Link href="#"><a>read more</a></Link></p>
                            </div>
                            <ul className={styles.social}>
                                <li><a href="#profile" className={styles.follow} id={styles.first} aria-hidden="true">View</a></li>

                                <li><a href="#follow" className={styles.follow} id={styles.second} aria-hidden="true">Follow</a></li>

                            </ul>
                        </div>

                    </div>
                </div></Link>
            ))}
        </div>
    )
}

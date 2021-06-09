import styles from '../styles/Header.module.css';
export default function Header() {
    return (
        <div className={styles.container}>
            <div className={styles.pageheader}>
                <div className={styles.container}>
                    <div className={styles.row}>
                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                            <div className={styles.pagecaption}>
                                <h1 style={{color:"white"}} className={styles.pagetitle}>x<span>Blogger</span></h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className={styles.cardsection}>
                <div className={styles.container}>
                    <div className={styles.cardblock}>
                        <div className={styles.row}>
                            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">

                                <div className={styles.sectiontitle}>
                                    <h2>All about Hike. We share our knowledge on blog</h2>
                                    <p>Our approach is very simple: we define your problem and give the best solution. </p>
                                </div>

                            </div>
                            <hr></hr>
                        </div>
                    </div>

                </div>
            </div>
        </div >
    )
}
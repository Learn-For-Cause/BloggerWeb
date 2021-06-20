import React from 'react';
import Link from 'next/link';
import styles from '../styles/Header.module.css';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';
import IconButton from '@material-ui/core/IconButton';
function landing() {
    return (
        <div className={styles.app}>
            <div className={styles.app__container}>
                <div className={styles.app__heading}>
                    <h1>xBlogger</h1>
                </div>
                <div className={styles.app__content}>
                    <div className={styles.left}>
                        <img src="https://cdn.mos.cms.futurecdn.net/WqzWxn2pBqvPN9n4DBrjr5.jpg" alt="#" />
                        <h3>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt, debitis ipsa. Quae?</h3>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio itaque quasi eveniet, sunt molestiae saepe! Doloremque, voluptates, eius ut veritatis odio provident nulla, fuga illum non rem modi doloribus autem?</p>
                    </div>
                    <div className={styles.right}>
                        <h2>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab voluptatem pariatur nemo!
                        </h2>
                        <p>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio esse eius ipsam voluptatibus quod assumenda aliquid minima quaerat? Cupiditate repudiandae quibusdam quidem, temporibus quisquam sequi dolor repellat iste necessitatibus explicabo! Obcaecati nisi qui vitae eveniet.
                        </p>
                        <div className={styles.app__links}>


                            <Link href="/login"><button>LogIn</button></Link>


                            <Link href="/signup"><button>SignUp</button></Link>


                        </div>
                    </div>

                </div>
                <div className={styles.app__footer}>
                    <IconButton href="#"><InstagramIcon /></IconButton>
                    <IconButton href="#"><TwitterIcon /></IconButton>
                    <IconButton href="#"><FacebookIcon /></IconButton>
                </div>
            </div>
        </div>
    )
}

export default landing
